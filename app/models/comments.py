from .db import db


class Comments(db.model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140), nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    reposts = db.Column(db.Integer, nullable=True)
    images = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"))

    users = db.relationships("User", backpopulates="comments")
    posts = db.relationships("Posts", backpopulates="comments")
    replies = db.relationships("Replies", backpopulates="comments")


    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'likes': self.likes,
            'reposts': self.reposts,
            'images': self.images
        }
