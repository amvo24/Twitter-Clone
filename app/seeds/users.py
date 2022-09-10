from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
         profile_pic='https://www.pngkit.com/png/full/202-2029263_circle.png', name='Demo',username='DemoMan', email='demo@aa.io', password='password')
    drewski = User(
         profile_pic='https://i.pinimg.com/originals/17/65/cf/1765cfb33e8f1bc0ce2aa690178a7844.png', name='Andrew',username='drewski', email='drewski@aa.io', password='password')
    bobbie = User(
         profile_pic='https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2014/05/bobdylan1.jpg', name='Bob Dylan',username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(drewski)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
