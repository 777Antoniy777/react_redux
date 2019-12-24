const apiDataPosts = [
    {
        id: 1,
        body: 'Я проснулся',
    },
    {
        id: 2,
        body: 'Я покушал',
    },
    {
        id: 3,
        body: 'Я покекал',
    }
];

export const getPosts = () => dispatch => {
    setTimeout(() => {
        console.log('Got posts');

        dispatch({
            type: 'GET_POSTS',
            posts: apiDataPosts,
        });
    }, 2000);
};