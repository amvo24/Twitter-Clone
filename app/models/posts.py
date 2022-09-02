from .db import db

"""
Consider how retweets and likes will function and perhaps add methods to
handle them
"""

class Posts(db.model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(280), nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    reposts = db.Column(db.Integer, nullable=True)
    images = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    users = db.relationship("User", backpopulates="posts")
    comments = db.relationship("Comments", backpopulates="posts")


    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'likes': self.likes,
            'reposts': self.reposts,
            'images': self.images,
            'user': self.user.to_dict()
        }
