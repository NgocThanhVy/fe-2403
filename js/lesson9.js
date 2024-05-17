// const getUserList = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const userList = response.json()
//     return userList
//   }
  
//   getUserList().then((data) => console.log('users: ', data.length))
  
//   const getPostsList = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const postsList = response.json()
//     return postsList
//   }
  
//   getPostsList().then((data) => console.log('posts: ', data.length))
//   const getCommentsList = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/comments')
//     const commentsList = response.json()
//     return commentsList
//   }
  
//   getCommentsList().then((data) => console.log('comments: ', data.length))
//   const getAlbumsList = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/albums')
//     const albumsList = response.json()
//     return albumsList
//   }
  
//   getAlbumsList().then((data) => console.log('albums: ', data.length))
//   const getPhotosList = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/photos')
//     const photosList = response.json()
//     return photosList
//   }
  
//   getPhotosList().then((data) => console.log('photos: ', data.length))
  
//   const getTodosList = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const todosList = response.json()
//     return todosList
//   }
  
//   getTodosList().then((data) => console.log('todos: ', data.length))


// const getUserList = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const userList = await response.json();
//   return userList;
// };

// const getPostsList = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const postsList = await response.json();
//   return postsList;
// };

// const getCommentsList = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//   const commentsList = await response.json();
//   return commentsList;
// };

// const getAlbumsList = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/albums');
//   const albumsList = await response.json();
//   return albumsList;
// };

// const getPhotosList = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//   const photosList = await response.json();
//   return photosList;
// };

// const getTodosList = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const todosList = await response.json();
//   return todosList;
// };

// (async () => {
//   const users = await getUserList();
//   console.log('users: ', users.length);

//   const posts = await getPostsList();
//   console.log('posts: ', posts.length);

//   const comments = await getCommentsList();
//   console.log('comments: ', comments.length);

//   const albums = await getAlbumsList();
//   console.log('albums: ', albums.length);

//   const photos = await getPhotosList();
//   console.log('photos: ', photos.length);

//   const todos = await getTodosList();
//   console.log('todos: ', todos.length);
// })();


const mockAPI1 = new Promise((resolve, reject) => {

  // xu li cac hanh dong bat dong bo

  // setTimeout(resolve, 2000, {id: 1})

  setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 2000);

});

const mockAPI2 = new Promise((resolve, reject) => {

    // xu li cac hanh dong bat dong bo

    // setTimeout(resolve, 2000, {id: 1})

    setTimeout(() => resolve([{ id: 11 }, { id: 21 }]), 100);

  });

  const myNumber = 123

  // mat 2s

Promise.all([mockAPI1, myNumber, mockAPI2])

  .then((data) => console.log(data))

  .catch((err) => console.log(err));




