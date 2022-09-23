from email.policy import default
from tkinter import CASCADE
from .db import db



class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(280), nullable=False)
    likes = db.Column(db.Integer, default=0)
    reposts = db.Column(db.Integer, nullable=True)
    images = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    userObject = db.relationship("User", back_populates="post")
    comments = db.relationship("Comment", back_populates="post", cascade='all, delete')
    likes = db.relationship("Like", back_populates="post", cascade='all, delete')



    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'reposts': self.reposts,
            'images': self.images,
            'likes': self.likes,
            'user_id': self.user_id,
            'user': self.userObject.to_dict(),

        }
