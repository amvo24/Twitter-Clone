from tkinter import CASCADE
from .db import db

"""
Consider how retweets and likes will function and perhaps add methods to
handle them
"""

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(280), nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    reposts = db.Column(db.Integer, nullable=True)
    images = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    userObject = db.relationship("User", back_populates="post")
    comments = db.relationship("Comment", back_populates="post", cascade='all, delete')


    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'likes': self.likes,
            'reposts': self.reposts,
            'images': self.images,
            'user_id': self.user_id,
            'user': self.userObject.to_dict(),
            # 'comments': self.comments.to_dict(),
        }
