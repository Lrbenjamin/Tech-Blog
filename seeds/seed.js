const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'john_doe',
        password: 'password123'
    },
    {
        username: 'jane_doe',
        password: 'password123'
    }
];

const postData = [
    {
        title: 'Post 1',
        content: 'This is the content of post 1',
        user_id: 1
    },
    {
        title: 'Post 2',
        content: 'This is the content of post 2',
        user_id: 2
    }
];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Post.bulkCreate(postData);

    process.exit(0);
};

seedDatabase();

