from urllib import response
from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Post, User, Comment, Like
from app.forms import PostForm, LikeForm
from flask_login import login_required, current_user

like_routes = Blueprint('likes', __name__)

#All likes by the current user
@like_routes.route('/<id>')
@login_required
def get_all_likes():
    likes = Like.query.all(current_user.id)
    response = [like.to_dict() for like in likes]
    return {'likes': response}


#All likes by the post id
@like_routes.route('/<postId>')
@login_required
def get_all_likes_for_post(postId):
    likes = Like.query.get(postId)
    response = [like.to_dict() for like in likes]
    return {'likes': response}


#Create a like
@like_routes.route('/create', methods=["POST"])
@login_required
def like(postId):
    form = LikeForm()

    post_id = form.data['post_id']
    user_id = form.data['user_id']
    comment_id = form.data['comment_id']

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if post_id and not comment_id:
            postLikes = Like.query.filter(Like.post_id == post_id)
            for like in postLikes:
                if like.user_id == user_id:
                    return "Already liked"

            post = Post.query.get(post_id)
            post.likes += 1

            created_like = Like(
                user_id = user_id,
                post_id = post_id
            )

            db.session.add(created_like)
            db.session.commit()
            return created_like.to_dict()

        elif comment_id and not post_id:
            commentLike = Like.query.filter(Like.comment_id == comment_id)
            for like in commentLike:
                if like.user_id == user_id:
                    return "Already liked"

            comment = Comment.query.get(comment_id)
            comment.likes += 1

            created_like = Like(
                user_id = user_id,
                post_id = post_id
            )

            db.session.add(created_like)
            db.session.commit()
            return created_like.to_dict()

#Delete a Like
@like_routes.route('/<likeId>',methods=["DELETE"])
@login_required
def unlike(likeId):
    like = Like.query.get(likeId)

    post = Post.query.get(like.post_id)

    post.like -= 1

    db.session.delete()
    db.session.commit()
    return 'deleted'
