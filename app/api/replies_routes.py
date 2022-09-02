from flask import Blueprint, jsonify, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Replies
from app.forms import RepliesForm
from flask_login import login_required

replies_routes = Blueprint('replies', __name__)

@replies_routes.route('/')
@login_required
def get_all_replies():
    replies = Replies.query.all()
    return jsonify(replies)


@replies_routes.route('/create', methods=["POST"])
@login_required
def create_replies():
    form = RepliesForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newReplies = Replies(
            body=form.data['body'],
            images=form.data['images']
        )
        db.session.add(newReplies)
        db.session.commit()
        return newReplies.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@replies_routes.route('/update/<id>', methods=["PUT"])
@login_required
def update_replies_by_id(id):
    replies = Replies.query.get(id)
    form = RepliesForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit(replies):
        replies = Replies(
            body=form.data['body'],
            images=form.data['images']
        )
        db.session.add(replies)
        db.session.commit()
        return replies.to_dict()


@replies_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_replies_by_id(id):
    replies = Replies.query.get_or_404(id)
    db.session.delete(replies)
    db.session.commit()
