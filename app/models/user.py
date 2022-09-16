from contextlib import nullcontext
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_pic = db.Column(db.String, nullable=True)
    banner_pic = db.Column(db.String, nullable=True)
    bio = db.Column(db.String(140), nullable=True)
    birthday = db.Column(db.DateTime, nullable=False)
    joined = db.Column(db.DateTime, nullable=False)
    place = db.Column(db.String, nullable=False)


    post = db.relationship("Post", back_populates="userObject", cascade='all, delete')
    comments = db.relationship("Comment", back_populates="user", cascade='all, delete')
    replies = db.relationship("Replies", back_populates="user", cascade='all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    #returns in JSON format
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'username': self.username,
            'email': self.email,
            'profile_pic': self.profile_pic,
            'banner_pic': self.banner_pic,
            'bio': self.bio,
            'birthday': str(self.birthday),
            'joined': self.joined,
            'place': self.place,
        }
