let db = {
    users: [
        {
            userId: 'dh12121huh35454kj54266',
            email: 'use@gmail.com',
            handle: 'user',
            createdAt: '2019-10-03T15:03:21.912Z',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, Uk'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-10-03T15:03:21.912Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'kfdfkkdfjgjgrggr',
            body: 'nice one mate!',
            createdAt: '2019-10-03T15:03:21.912Z',
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'dfdfdfderefererefrewr',
            type: 'like | comment',
            createdAt: '2019-10-03T15:03:21.912Z'
        }
    ]
};

const userDetails = {
    //Redux
    credentials: {
        userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
        email: 'user@gmail.bg',
        handle: 'user',
        createdAt: '2019-10-03T15:03:21.912Z',
        imageUrl: 'image/dfdfdfdfdf/dfdfd',
        bio: 'Hello my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'London, UK'
    },
    likes: [
        {
            userHandle: 'user',
            screemId: 'hh454derer5771f4df'
        },
        {
            userHandle: 'user',
            screemId: '255fdfdfd8898fdfds'
        }
    ]
}