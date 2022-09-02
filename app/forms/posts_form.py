from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class PostForm(FlaskForm):
    body = StringField('body', validators=[DataRequired(), Length(min=1, max=280)])
    images = StringField('images')
