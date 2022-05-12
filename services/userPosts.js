// User Posts Controller Functions

exports.userPosts = (req, res) => {
    res.json({
        posts: {
            title: 'My Second JWT Post',
            description: 'Random data that you should not access.'
        }
    })
    res.json(req.user);
}