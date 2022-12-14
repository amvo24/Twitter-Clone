from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import User, db
from app.forms import SignUpForm, UserForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

#Get a particular user
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

#edits info for a user
@user_routes.route('/edit/<int:id>', methods=["PUT"])
@login_required
def editUser2(id):
    # return user.to_dict()
    user = User.query.get(id)
    form = UserForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user.bio=form.data['bio']
        user.name=form.data['name']
        user.profile_pic=form.data['profile_pic']
        user.banner_pic=form.data['banner_pic']
        user.place=form.data['place']

        db.session.commit()
        return user.to_dict()
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#Get's a user's likes
@user_routes.route('/<int:id>/likes')
@login_required
def user_likes(id):
    likes_users = User.query.get(id).to_dict_get_likes()

    return likes_users
