const posts = [
    {
      id: "_1",
      author: "Avijit Saha",
      content: "JavaScript 100 Basic Problems!",
      reactions: {
        like: 50,
        love: 20,
        haha: 5,
        wow: 2,
        sad: 1,
        angry: 0,
      },
    },
    {
      id: "_2",
      author: "Anonymous",
      content: "Just finished my first Hack!",
      reactions: {
        like: 100,
        love: 75,
        haha: 10,
        wow: 3,
        sad: 0,
        angry: 1,
    },
  },
];

// increment the count of a reaction for a post
function incrementReactionCount(postId, reactionType) {
  const post = posts.find((p) => p.id === postId);
  post.reactions[reactionType] += 1;
  console.log(`Incremented ${reactionType} reaction count for post ${postId}`);
}

// test the incrementReactionCount function
incrementReactionCount("_1", "like"); // Incremented like reaction count for post p123
incrementReactionCount("_2", "haha"); // Incremented haha reaction count for post p456

console.log(posts);
  