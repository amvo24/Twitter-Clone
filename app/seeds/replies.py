from app.models import db, Replies


# Adds a demo user, you can add other users here if you want
def seed_replies():
    demoReplies = Replies(
        body='The plan is we all get ice-cream!',
        likes=3, reposts=5,
        user_id=1, comment_id=2)
    marnieReplies = Replies(
        body='I think Demo is a beautiful name',
        likes=7, reposts=4,
        user_id=2, comment_id=3)
    bobbieReplies = Replies(
        body='Who says greetings anymore?',
        likes=15, reposts=3,
        user_id=3, comment_id=1)

    db.session.add(demoReplies)
    db.session.add(marnieReplies)
    db.session.add(bobbieReplies)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_replies():
    db.session.execute('TRUNCATE replies RESTART IDENTITY CASCADE;')
    db.session.commit()
