from flask import Blueprint, jsonify, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Replies, Comment
from app.forms import RepliesForm
from flask_login import login_required, current_user

replies_routes = Blueprint('replies', __name__)

@replies_routes.route('/')
@login_required
def get_all_replies():
    replies = Replies.query.all()
    response = [reply.to_dict() for reply in replies]
    return {'replies': response}


@replies_routes.route('/create/<int:commentId>', methods=["POST"])
@login_required
def create_replies(commentId):
    form = RepliesForm()
    comment = Comment.query.get(commentId)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newReplies = Replies(
            body=form.data['body'],
            images=form.data['images'],
            comment_id=comment.id,
            user_id=current_user.id

        )
        db.session.add(newReplies)
        db.session.commit()
        return newReplies.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#experiment
# @replies_routes.route('/creater2r/<int:id>', methods=["POST"])
# @login_required
# def create_replies(id):
#     form = RepliesForm()
#     reply = Replies.query.get(id)
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         newReplies = Replies(
#             body=form.data['body'],
#             images=form.data['images'],

#             user_id=current_user.id

#         )
#         db.session.add(newReplies)
#         db.session.commit()
#         return newReplies.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@replies_routes.route('/update/<id>', methods=["PUT"])
@login_required
def update_replies_by_id(id):
    replies = Replies.query.get(id)
    form = RepliesForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        replies.body=form.data['body']
        replies.images=form.data['images']


        db.session.commit()
        return replies.to_dict()


@replies_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_replies_by_id(id):
    replies = Replies.query.get_or_404(id)
    db.session.delete(replies)
    db.session.commit()
    return {"message": "Reply deleted"}
