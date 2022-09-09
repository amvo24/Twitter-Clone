from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140), nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    reposts = db.Column(db.Integer, nullable=True)
    images = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))

    user = db.relationship("User", back_populates="comments")
    post = db.relationship("Post", back_populates="comments")
    replies = db.relationship("Replies", back_populates="comments")


    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'likes': self.likes,
            'reposts': self.reposts,
            'images': self.images,
            'post': self.post.to_dict(),
            'user': self.user.to_dict(),
        }
