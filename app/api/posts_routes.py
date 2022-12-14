from urllib import response
from flask import Blueprint, jsonify, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Post, User, Comment
from app.forms import PostForm
from flask_login import login_required, current_user

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/')
@login_required
def get_all_posts():
    """
    Gets all posts
    """
    posts = Post.query.all()
    response = [post.to_dict() for post in posts]
    return {'posts': response}


@posts_routes.route('/create', methods=["POST"])
@login_required
def create_post():
    """
    Creates a post
    """
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newPost = Post(
            body=form.data['body'],
            images=form.data['images'],
            user_id=current_user.id
        )
        db.session.add(newPost)
        db.session.commit()
        return newPost.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@posts_routes.route('/<id>')
@login_required
def get_post_by_id(id):
    """
    Gets a particular post by it's id
    """
    post = Post.query.get_or_404(id)
    return post.to_dict()


@posts_routes.route('/update/<int:id>', methods=["PUT"])
@login_required
def update_post_by_id(id):
    """
    Edits a post
    """
    post = Post.query.get(id)
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post.body=form.data['body']
        post.images=form.data['images']

        db.session.commit()
        return post.to_dict()


@posts_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_post_by_id(id):
    """
    Deltes a post
    """
    post = Post.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()

    posts = Post.query.all()
    response = [post.to_dict() for post in posts]
    return {'posts': response}


