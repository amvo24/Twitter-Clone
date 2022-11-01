from flask_wtf import FlaskForm
from wtforms import StringField, DateField

class UserForm(FlaskForm):
    name = StringField('name')
    profile_pic = StringField('profile_pic')
    banner_pic = StringField('banner_pic')
    bio = StringField('bio')
    # birthday = DateField('birthday')
    username = StringField('username')
    email = StringField('email')
    password = StringField('password')
    place = StringField('place')
