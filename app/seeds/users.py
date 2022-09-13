from app.models import db, User
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        profile_pic='https://www.pngkit.com/png/full/202-2029263_circle.png',
        name='Demo',
        username='DemoMan',
        email='demo@aa.io',
        password='password',
        bio='Im am only good for testing',
        birthday=datetime(1996, 5, 10),
        banner_pic='https://www.publichealthpost.org/wp-content/uploads/2020/05/3.png',
        joined=datetime(2012, 5, 8)
        )

    drewski = User(
        profile_pic='https://i.pinimg.com/originals/17/65/cf/1765cfb33e8f1bc0ce2aa690178a7844.png',
        name='Andrew',
        username='drewski',
        email='drewski@aa.io',
        password='password',
        birthday=datetime(1995, 10, 24),
        bio='Finally getting the hang of twitter',
        banner_pic='https://cdn.wallpapersafari.com/5/3/l4ZCMe.jpg',
        joined=datetime(2018, 8, 28)
        )
    bobbie = User(
        profile_pic='https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2014/05/bobdylan1.jpg',
        name='Bob Dylan',
        username='bobbie',
        email='bobbie@aa.io',
        password='password',
        birthday=datetime(1998, 12, 20),
        bio='The times, theyre a changin',
        joined=datetime(2019, 7, 18),
        banner_pic='https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL1007936_rt_q2qwiw.jpg'
        )

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
