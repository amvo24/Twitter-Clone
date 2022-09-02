from flask import Blueprint, jsonify, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Posts
from app.forms import PostForm
from flask_login import login_required

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/')
@login_required
def get_all_posts():
    posts = Posts.query.all()
    return jsonify(posts)


@posts_routes.route('/create', methods=["POST"])
@login_required
def create_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newPost = Posts(
            body=form.data['body'],
            images=form.data['images']
        )
        db.session.add(newPost)
        db.session.commit()
        return newPost.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@posts_routes.route('/<id>')
@login_required
def get_post_by_id(id):
    post = Posts.query.get_or_404(id)
    return post.to_dict()


@posts_routes.route('/update/<id>', methods=["PUT"])
@login_required
def update_post_by_id(id):
    post = Posts.query.get(id)
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit(post):
        post = Posts(
            body=form.data['body'],
            images=form.data['images']
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()


@posts_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_post_by_id(id):
    post = Posts.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
