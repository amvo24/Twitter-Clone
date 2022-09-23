from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField

class LikeForm(FlaskForm):
    user_id = IntegerField('user_id')
    post_id = IntegerField('post_id')
    comment_id = IntegerField('comment_id')
