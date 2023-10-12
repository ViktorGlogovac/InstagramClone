import { USERS } from "./data";

export const POSTS = [
    {
        image: 
        'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
        user: USERS[0].user,
        likes: 100,
        caption: 'Sunset Vibez',
        profilePic: USERS[0].image,
        comments: [
            {
                user: 'Lebron James',
                comment: 'Amazing',
            },
            {
                user: 'Luka Doncic',
                comment: 'So nice',
            },
        ],
    },
    {
        image: 
        'https://cdn.nba.com/manage/2023/08/USATSI_20681730.jpg',
        user: USERS[1].user,
        likes: 9999,
        caption: 'My Element',
        profilePic: USERS[1].image,
        comments: [
            {
                user: 'Lebron James',
                comment: 'Damn',
            },
            {
                user: 'Luka Doncic',
                comment: 'Get dunked on @KingJames',
            },
        ],
    },
    {
        image: 
        'https://i2-prod.mirror.co.uk/incoming/article30703431.ece/ALTERNATES/s1200b/0_MIRROR-UK-Lionel-Messi-inadvertently-proving-Cristiano-Ronaldo-right-at-Inter-Miami.jpg',
        user: USERS[2].user,
        likes: 9000000,
        caption: 'Whos your goat?',
        profilePic: USERS[2].image,
        comments: [
            {
                user: 'Lebron James',
                comment: 'Me',
            },
            {
                user: 'Luka Doncic',
                comment: 'Good Question',
            },
        ],
    }

]