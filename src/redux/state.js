import { rerenderEntireTree } from "../render";

let state = {
  dialogsPage: {
    userDialogs: [
      { id: 1, name: "Nikita Dvortsov" },
      { id: 2, name: "Sonya Gurina" },
      { id: 3, name: "Dasha Dvortsova" },
      { id: 4, name: "Roman Dvortsov" }
    ],
    userMessages: [
      { id: 1, message: "I am Nikita Dvortsov" },
      { id: 2, message: "I am Sonya Gurina" },
      { id: 3, message: "I am Dasha Dvortsova" }
    ]
  },
  profilePage: {
    posts: [
      { id: 1, postText: "It is the first post" },
      { id: 2, postText: "There is the second post" },
      { id: 3, postText: "The third post!" }
    ]
  }
};
export let addPost = message => {
  let newPost = {
    id: 4,
    postText: message
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};
export default state;
