from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    demoPost = Post(
        body='My name is demo and this is my first post',
        likes=3, reposts=2, images='sampleimg',
        user_id=1)
    marniePost = Post(
        body='Hello World, I am Marnie',
        likes=5, reposts=4,
        user_id=2)
    bobbiePost = Post(
        body='My name bobbie bushay',
        likes=6, reposts=5, images='insertImgHere',
        user_id=3)

    db.session.add(demoPost)
    db.session.add(marniePost)
    db.session.add(bobbiePost)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
