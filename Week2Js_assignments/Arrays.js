
const AnalyzeData = (users) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const activeUsers = users.filter(user => {
        return user.posts.some(post => new Date(post.timestamp) > oneWeekAgo);
    });
    const popularPosts = activeUsers.flatMap(user => {
        return user.posts.filter(post => post.likes >= 10);
    });
    const totalLikes = popularPosts.reduce((prev, next) => {
        return prev + next.likes;
    }, 0);
    const averageLikesPerUser = totalLikes / activeUsers.length;
    return {
        activeUsers: activeUsers.length,
        totalPopularPosts: popularPosts.length,
        averageLikesPerUser: averageLikesPerUser
    };
}

const users = [
    {
        id: 1,
        name: "John",
        location: "New York",
        friends: [2, 3, 4],
        posts: [
            { content: "Great day at Central Park!", timestamp: "2024-09-10T12:00:00", likes: 15 },
            { content: "Loving the vibes in NYC!", timestamp: "2024-09-13T08:30:00", likes: 8 },
            { content: "Visited the Statue of Liberty today!", timestamp: "2024-09-14T17:45:00", likes: 20 }
        ]
    },
    {
        id: 2,
        name: "Alice",
        location: "San Francisco",
        friends: [1, 3],
        posts: [
            { content: "Hiking in the Bay Area!", timestamp: "2024-09-11T14:20:00", likes: 12 },
            { content: "Enjoying the sunny weather!", timestamp: "2024-09-12T11:10:00", likes: 6 }
        ]
    },
    {
        id: 3,
        name: "Emily",
        location: "Los Angeles",
        friends: [1, 2, 4],
        posts: [
            { content: "Beach day in LA!", timestamp: "2024-09-13T09:45:00", likes: 25 },
            { content: "Exploring Hollywood!", timestamp: "2024-09-14T16:55:00", likes: 5 }
        ]
    },
    {
        id: 4,
        name: "David",
        location: "Chicago",
        friends: [2],
        posts: [
            { content: "Deep dish pizza is the best!", timestamp: "2024-09-10T10:30:00", likes: 18 },
            { content: "Trying out a new jazz club tonight!", timestamp: "2024-09-15T20:00:00", likes: 3 }
        ]
    },
    {
        id: 5,
        name: "Sarah",
        location: "Seattle",
        friends: [3, 1],
        posts: [
            { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-09-11T15:15:00", likes: 9 },
            { content: "Exploring the Olympic National Park!", timestamp: "2024-09-13T07:00:00", likes: 11 }
        ]
    }
];


const dashData = AnalyzeData(users);
console.log(dashData);


//using the data structure below , print a message  my total bill for items above 450 is 1700

const availableFoods = [
    { id: "qwe234dfh", name: "Burger", image: "", price: 234 },

    { id: "qwe2356dxh", name: "pizza", image: "", price: 400 },

    { id: "qwe2456yh", name: "meat", image: "", price: 500 },

    { id: "qwe2785yh", name: "chicken", image: "", price: 1200 },
]
const filtered = availableFoods.filter((filter1) => {
    return filter1.price > 450
})

const PriceOnly = filtered.map((Price) => {
    return Price.price
})

const Totals = PriceOnly.reduce((prev, next) => {
    return prev + next
})
console.log(`The total amount of good with a price of 450 and above is ${Totals}`)
