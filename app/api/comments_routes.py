from flask import Blueprint, jsonify, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Comment, Post
from app.forms import CommentsForm
from flask_login import login_required, current_user

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/')
@login_required
def get_all_comments():
    comments = Comment.query.all()
    response = [comment.to_dict() for comment in comments]
    return {'comments': response}


@comments_routes.route('/create/<int:postId>', methods=["POST"])
@login_required
def create_comment(postId):
    post = Post.query.get(postId)
    form = CommentsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newComment = Comment(
            body=form.data['body'],
            images=form.data['images'],
            post_id=post.id,
            user_id=current_user.get_id()
        )
        db.session.add(newComment)
        db.session.commit()
        return newComment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@comments_routes.route('/update/<id>', methods=["PUT"])
@login_required
def update_comment_by_id(id):
    comment = Comment.query.get(id)
    form = CommentsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        comment.body=form.data['body']
        comment.images=form.data['images']


        db.session.commit()
        return comment.to_dict()


@comments_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_comment_by_id(id):
    comment = Comment.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
    return {"message": "Comment deleted"}
