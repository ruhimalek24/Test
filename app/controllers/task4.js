

const fetch = require('node-fetch');

const ap =  async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        res.render('data_api', { posts: data });
    } catch (error) {
        console.error('Error fetching post data:', error);
        res.status(500).send('Error fetching post data');
    }
};

const dt = async (req, res) => {


    const postId = req.params.id;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postDetails = await response.json();

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await commentsResponse.json();

        res.render('details_api', { postDetails, comments });
    } catch (error) {
        console.error('Error fetching post details:', error);
        res.status(500).send('Error fetching post details');
    }
};

module.exports = {ap , dt};