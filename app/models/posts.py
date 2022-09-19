from tkinter import CASCADE
from .db import db

"""
Consider how retweets and likes will function and perhaps add methods to
handle them
"""

likes = db.Table(
    "likes",
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('post_id', db.Integer, db.ForeignKey('posts.id'))
)

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(280), nullable=False)
    # likes = db.Column(db.Integer, nullable=True)
    reposts = db.Column(db.Integer, nullable=True)
    images = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    userObject = db.relationship("User", back_populates="post")
    comments = db.relationship("Comment", back_populates="post", cascade='all, delete')

    post_likes = db.relationship(
        "User",
        secondary='likes',
        back_populates='user_likes'
    )


    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'reposts': self.reposts,
            'images': self.images,
            'user_id': self.user_id,
            'user': self.userObject.to_dict(),
            "liked_by":[likedUser.to_dict()['id'] for likedUser in self.post_likes],
            # 'comments': self.comments.to_dict(),
        }
