from flask import Blueprint, jsonify, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Posts, Comments
from app.forms import CommentsForm
from flask_login import login_required

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/')
@login_required
def get_all_comments():
    comments = Comments.query.all()
    return jsonify(comments)


@comments_routes.route('/create', methods=["POST"])
@login_required
def create_comment():
    form = CommentsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newComment = Comments(
            body=form.data['body'],
            images=form.data['images']
        )
        db.session.add(newComment)
        db.session.commit()
        return newComment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@comments_routes.route('/update/<id>', methods=["PUT"])
@login_required
def update_comment_by_id(id):
    comment = Comments.query.get(id)
    form = CommentsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit(comment):
        comment = Comments(
            body=form.data['body'],
            images=form.data['images']
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()


@comments_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_comment_by_id(id):
    comment = Comments.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
