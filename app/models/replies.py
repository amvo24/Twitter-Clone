from .db import db


class Replies(db.model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140), nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    reposts = db.Column(db.Integer, nullable=True)
    images = db.Column(db.String, nullable=True)
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.id"))

    comments = db.relationships("Comments", backpopulates="replies")


    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'likes': self.likes,
            'reposts': self.reposts,
            'images': self.images
        }
