from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class CommentsForm(FlaskForm):
    body = StringField('body', validators=[DataRequired(), Length(min=1, max=140)])
    images = StringField('images')
