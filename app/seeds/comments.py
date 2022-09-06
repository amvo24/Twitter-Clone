from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_Comment():
    demoComment = Comment(
        body='Greetings Marnie, I am demo',
        likes=3, reposts=2,
        user_id=1, post_id=2)
    marnieComment = Comment(
        body='Hey Bobbie, any plans today?',
        likes=5, reposts=4, images='insertImgHere',
        user_id=2, post_id=3)
    bobbieComment = Comment(
        body='Demo is a funny name',
        likes=6, reposts=5,
        user_id=3, post_id=1)

    db.session.add(demoComment)
    db.session.add(marnieComment)
    db.session.add(bobbieComment)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_Comment():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
