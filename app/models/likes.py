from tkinter import CASCADE
from .db import db



class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    post_id  = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey('comments.id'), nullable=False)

    userObject = db.relationship("User", back_populates="likes")
    comments = db.relationship("Comment", back_populates="likes")
    post = db.relationship("Post", back_populates="likes")




    def to_dict(self):
        return {
            'id': self.id,
            'post_id': self.post_id,
            'comment_id': self.comment_id,
            'user_id': self.user_id,
        }
