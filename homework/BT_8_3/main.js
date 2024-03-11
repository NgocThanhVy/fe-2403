const fetchPostList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
  console.log("response:", response);
};

const contentDiv = document.querySelector(".frame-right");
contentDiv.innerHTML = `
  <h1>Loading...</h1>
`;

const generatePostCard = (posts) => {
return `
  <div class="box">
      <p>userId: ${posts.userId}</p>
      <p>id: ${posts.id}</p>
      <p>title: ${posts.title}</p>
      <p>body: ${posts.body}</p>
      <button class="btn" onclick='showDetail(${JSON.stringify(
        posts
      )})'>Show Detail</button>
  </div>
`;
};


const showDetail = (post) => {
const postInfoDiv = document.getElementById("modal-box")
const postString = JSON.stringify(post)
modalContent = `
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()"></span>
    <div id="postInfo">
      <h1>Post Details Modal</h1>
      <p><strong>userId:</strong> ${post.userId}</p>
      <p><strong>id:</strong> ${post.id}</p>
      <p><strong>title:</strong> ${post.title}</p>
      <p><strong>body:</strong> ${post.body}</p>
      <div style="display:flex;gap:20px;">
        <button class="btn" onclick='closePostInfo()'>Close</button>
        
      </div>

    </div>
  </div>
</div>
`

postInfoDiv.innerHTML = modalContent
document.getElementById("myModal").style.display = "block";
}

const generatePostCardList = (postList) => {
const content = `
      <h1 class="title">Content</h1>
      <div class="box-content">
      ${postList.map((item) => generatePostCard(item))
        .join("")}
      </div>
  `;
return content;
};

function closePostInfo() {
  // document.getElementById("myModal").style.display = "none";
  const modal = document.getElementById("myModal")
  modal.parentNode.removeChild(modal)
  }


fetchPostList().then((data) => {
contentDiv.innerHTML = generatePostCardList(data);
});

function openContent() {
fetchPostList().then((data) => {
  contentDiv.innerHTML = generatePostCardList(data);
  console.log("data:", data);
})
}

// Comments
const fetchCommentList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return response.json();
};


const contentDiv1 = document.querySelector(".frame-right");
contentDiv1.innerHTML = `
  <h1>Loading...</h1>
`;

const generateCommentCard = (comments) => {
return `
  <div class="box">
      <p>postId: ${comments.postId}</p>
      <p>id: ${comments.id}</p>
      <p>name: ${comments.name}</p>
      <p>email: ${comments.email}</p>
      <p>body: ${comments.body}</p>
      <button class="btn" onclick='showDetail1(${JSON.stringify(
        comments
      )})'>Show Detail1</button>
  </div>
`;
};

// const showDetail1 = (comment) => {
//   const commentDiv = document.getElementById("commentInfo");
//   const commentString = JSON.stringify(comment);
//   commentDiv.innerHTML = `       
//     <h2>${comment.postId}</h2>
//     <p><strong>id:</strong> ${comment.id}</p>
//     <p><strong>name:</strong> ${comment.name}</p>
//     <p><strong>email:</strong> ${comment.email}</p>
//     <p><strong>Body:</strong> ${comment.body}</p>
//     <button class="btn" onclick='closecommentInfo(${commentString})'>Close Comment Info</button>
//   `;
//   document.getElementById("myModal").style.display = "block";
// };

const showDetail1 = (comment) => {
const commentInfoDiv = document.getElementById("modal-box")
const commentString = JSON.stringify(comment)

modalContent = `
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()"></span>
      <div id="commentInfo">
        <h1>Comment Details Modal</h1>
        <p><strong>postId:</strong> ${comment.postId}</p>
        <p><strong>id:</strong> ${comment.id}</p>
        <p><strong>name:</strong> ${comment.name}</p>
        <p><strong>email:</strong> ${comment.email}</p>
        <p><strong>body:</strong> ${comment.body}</p>
        <div style="display:flex;gap:20px;">

          <button class="btn" onclick='closeCommentInfo(${commentString})'>Close</button>
         
        </div>

      </div>
    </div>
  </div>
`
commentInfoDiv.innerHTML = modalContent
document.getElementById("myModal").style.display = "block";
}

const generateCommentCardList = (commentList) => {
const content = `
      <h1 class="title">Content</h1>
      <div class="box-content">
      ${commentList.map((item) => generateCommentCard(item))
        .join("")}
      </div>
  `;
return content;
};


// Function to close the modal
function closeCommentInfo() {
// document.getElementById("myModal").style.display = "none";
const modal = document.getElementById("myModal")
modal.parentNode.removeChild(modal)
}

// Function to close the modal
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

// Function to log user info
// function closecommentInfo(comments) {
//   console.log("Comment Info:", comments);
//   closeModal();
// }
// fetchPostList().then((data) => {
//   contentDiv.innerHTML = generatePostCardList(data);
// });

function openContent1() {
fetchCommentList().then((data) => {
  contentDiv1.innerHTML = generateCommentCardList(data);
})
}


// // Albums
const fetchAlbumList = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/albums");
return response.json();
};


const contentDiv2 = document.querySelector(".frame-right");
contentDiv2.innerHTML = `
<h1>Loading...</h1>
`;

const generateAlbumCard = (albums) => {
return `
<div class="box">
    <p>userId: ${albums.userId}</p>
    <p>id: ${albums.id}</p>
    <p>title: ${albums.title}</p>
    <button class="btn" onclick='showDetail2(${JSON.stringify(
      albums
    )})'>Show Detail2</button>
</div>
`;
};

// const showDetail2 = (album) => {
// const albumDiv = document.getElementById("albumInfo");
// const albumString = JSON.stringify(album);
// albumDiv.innerHTML = `       
//   <h2>${album.userId}</h2>
//   <p><strong>id:</strong> ${album.id}</p>
//   <p><strong>Title:</strong> ${album.title}</p>
//   <button class="btn" onclick='closealbumInfo(${albumString})'>Close Album Info</button>
// `;
// document.getElementById("myModal").style.display = "block";
// };

const showDetail2 = (album) => {
const albumInfoDiv = document.getElementById("modal-box")
const albumString = JSON.stringify(album)

modalContent = `
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()"></span>
        <div id="albumInfo">
        
        <h1>Album Details Modal</h1>
        <p><strong>userId:</strong> ${album.userId}</p>
        <p><strong>id:</strong> ${album.id}</p>
        <p><strong>title:</strong> ${album.title}</p>
        <div style="display:flex;gap:20px;">
        <button class="btn" onclick='closeAlbumInfo(${albumString})'>Close</button>
        </div>
      </div>
    </div>
  </div>
`
albumInfoDiv.innerHTML = modalContent
document.getElementById("myModal").style.display = "block";
}


const generateAlbumCardList = (albumList) => {
const content = `
    <h1 class="title">Content</h1>
    <div class="box-content">
    ${albumList.map((item) => generateAlbumCard(item))
      .join("")}
    </div>
`;
return content;
};

// Function to close the modal
function closeAlbumInfo() {
// document.getElementById("myModal").style.display = "none";
const modal = document.getElementById("myModal")
modal.parentNode.removeChild(modal)
}
// Function to close the modal
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

//Function to log user info
function closealbumInfo(albums) {
console.log("Comment Info:", albums);
closeModal();
}
// fetchPostList().then((data) => {
//   contentDiv.innerHTML = generatePostCardList(data);
// });

function openContent2() {
fetchAlbumList().then((data) => {
contentDiv2.innerHTML = generateAlbumCardList(data);
})
}


// // Photos
const fetchPhotoList = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/photos");
return response.json();
};

const contentDiv3 = document.querySelector(".frame-right");
contentDiv3.innerHTML = `
  <h1>Loading...</h1>
`;

const generatePhotoCard = (photos) => {
return `
  <div class="box">
      <p>userId: ${photos.albumId}</p>
      <p>id: ${photos.id}</p>
      <p>title: ${photos.title}</p>
      <p>title: ${photos.url}</p>
      <p>title: ${photos.thumbnailUrl}</p>
      <button class="btn" onclick='showDetail3(${JSON.stringify(
        photos
      )})'>Show Detail3</button>
  </div>
`;
};

// const showDetail3 = (photo) => {
// const photoDiv = document.getElementById("photoInfo");
// const photoString = JSON.stringify(photo);
// photoDiv.innerHTML = `       
//   <h2>${photo.albumId}</h2>
//   <p><strong>id:</strong> ${photo.id}</p>
//   <p><strong>Title:</strong> ${photo.title}</p>
//   <p><strong>url:</strong> ${photo.url}</p>
//   <p><strong>thumbnailUrl:</strong> ${photo.thumbnailUrl}</p>
//   <button class="btn" onclick='closephotoInfo(${photoString})'>Close Photo Info</button>
// `;
// document.getElementById("myModal").style.display = "block";
// };

const showDetail3 = (photo) => {
  const photoInfoDiv = document.getElementById("modal-box")
  const photoString = JSON.stringify(photo)

  modalContent = `
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()"></span>
        <h1>Photo Details Modal</h1>
        <div id="photoInfo">
          <div>
          <p><strong>url:</strong></p>
          <img src=" ${photo.url}" alt="url" height="100px"/>
          <p><strong>thumbnailUrl:</strong></p>
          <img src=" ${photo.thumbnailUrl}" alt="thumbnailUrl" height="100px"/>
          </div>
          
          <div>
          <p><strong>albumId:</strong> ${photo.albumId}</p>
          <p><strong>id:</strong> ${photo.id}</p>
          <p><strong>title:</strong> ${photo.title}</p>
         
          </div>

        </div>
        <div style="display:flex;gap:20px;">
          <button class="btn" onclick='closePhotoInfo(${photoString})'>Close</button>
          <button class="btn"onclick='savePhotoInfo(${photoString})'>Save</button>
        </div>
      </div>
    </div>
  `
  photoInfoDiv.innerHTML = modalContent
  document.getElementById("myModal").style.display = "block";
}



const generatePhotoCardList = (photoList) => {
const content = `
      <h1 class="title">Content</h1>
      <div class="box-content">
      ${photoList.map((item) => generatePhotoCard(item))
        .join("")}
      </div>
  `;
return content;
};

function closePhotoInfo(photo) {
  // document.getElementById("myModal").style.display = "none";
  const modal = document.getElementById("myModal")
  modal.parentNode.removeChild(modal)
}

function savePhotoInfo() {
  // document.getElementById("myModal").style.display = "none";
  const modal = document.getElementById("myModal")
  modal.parentNode.removeChild(modal)
}

// Function to close the modal
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

// Function to log user info
// function closephotoInfo(photos) {
// console.log("Comment Info:", photos);
// closeModal();
// }
// fetchPostList().then((data) => {
//   contentDiv.innerHTML = generatePostCardList(data);
// });

function openContent3() {
fetchPhotoList().then((data) => {
  contentDiv2.innerHTML = generatePhotoCardList(data);
})
}

// // Todos
const fetchTodosList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};


const contentDiv4 = document.querySelector(".frame-right");
contentDiv4.innerHTML = `
  <h1>Loading...</h1>
`;

const generateTodoCard = (todos) => {
return `
  <div class="box">
      <p>userId: ${todos.userId}</p>
      <p>id: ${todos.id}</p>
      <p>title: ${todos.title}</p>
      <p>completed: ${todos.completed}</p>
      <button class="btn" onclick='showDetail3(${JSON.stringify(
        todos
      )})'>Show Detail4</button>
  </div>
`;
};

// const showDetail4 = (todo) => {
// const todoDiv = document.getElementById("todoInfo");
// const todoString = JSON.stringify(todo);
// todoDiv.innerHTML = `       
//   <h2>${todo.albumId}</h2>
//   <p><strong>id:</strong> ${todo.id}</p>
//   <p><strong>Title:</strong> ${todo.title}</p>
//   <p><strong>completed:</strong> ${todo.url}</p>
//   <button class="btn" onclick='closetodoInfo(${todoString})'>Close todo Info</button>
// `;
// document.getElementById("myModal").style.display = "block";
// };

const showDetail4 = (todo) => {
  const todoInfoDiv = document.getElementById("modal-box")
  const todoString = JSON.stringify(todo)

  modalContent = `
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()"></span>
        <div id="todoInfo">
        <h1>Todo Details Modal</h1>
        <p><strong>userId:</strong> ${todo.userId}</p>
        <p><strong>id:</strong> ${todo.id}</p>
        <p><strong>title:</strong> ${todo.title}</p>
        <p><strong>completed:</strong> ${todo.completed}</p>
        <div style="display:flex;gap:20px;">

          <button class="btn" onclick='closeTodoInfo(${todoString})'>Close</button>
          <button class="btn" onclick='saveTodoInfo(${todoString})'>Save</button>
        </div>

        </div>
      </div>
    </div>
  `
  todoInfoDiv.innerHTML = modalContent
  document.getElementById("myModal").style.display = "block";
}

const generateTodoCardList = (todoList) => {
const content = `
      <h1 class="title">Content</h1>
      <div class="box-content">
      ${todoList.map((item) => generateTodoCard(item))
        .join("")}
      </div>
  `;
return content;
};

function closeTodoInfo() {
  // document.getElementById("myModal").style.display = "none";
  const modal = document.getElementById("myModal")
  modal.parentNode.removeChild(modal)
}

// Function to save the modal
function saveTodoInfo() {
  // document.getElementById("myModal").style.display = "none";
  const modal = document.getElementById("myModal")
  modal.parentNode.removeChild(modal)
}

// Function to close the modal
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

// Function to log user info
// function closetodoInfo(photos) {
// console.log("Comment Info:", todos);
// closeModal();
// }
// fetchPostList().then((data) => {
//   contentDiv.innerHTML = generatePostCardList(data);
// });

function openContent4() {
  fetchTodosList().then((data) => {
  contentDiv4.innerHTML = generateTodoCardList(data);
})
}



//User
const fetchUserList = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  return data.json();
};

const contentDiv5 = document.querySelector(".frame-right");
contentDiv5.innerHTML = `
    <h1>Loading...</h1>
`;

const generateUserCard = (userInfo) => {
  return `
    <div class="box">
        <p>name: ${userInfo.name}</p>
        <p>email: ${userInfo.email}</p>
        <p>username: ${userInfo.username}</p>
        <p>phone: ${userInfo.phone}</p>
        <button class="btn" onclick='showDetail5(${JSON.stringify(
          userInfo
        )})'>Show Detail5</button>
    </div>
`;
};

// const showDetail5 = (user) => {
//   const userInfoDiv = document.getElementById("userInfo");
//   const userString = JSON.stringify(user);
//   userInfoDiv.innerHTML = `
//     <h2>${user.name}</h2>
//     <p><strong>Email:</strong> ${user.email}</p>
//     <p><strong>Username:</strong> ${user.username}</p>
//     <p><strong>Phone:</strong> ${user.phone}</p>
//     <button onclick='closeUserInfo(${userString})'>Close User Info</button>
//   `;
//   document.getElementById("myModal").style.display = "block";
// };

const showDetail5 = (user) => {
  const userInfoDiv = document.getElementById("modal-box")
  const userString = JSON.stringify(user)

  modalContent = `
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()"></span>
        <div id="userInfo">
        <h1>User Details Modal</h1>
        <p><strong>id:</strong> ${user.id}</p>
        <p><strong>name:</strong> ${user.name}</p>
        <p><strong>username:</strong> ${user.username}</p>
        <p><strong>phone:</strong> ${user.phone}</p>
        <div style="display:flex;gap:20px;">

          <button class="btn" onclick='closeUserInfo(${userString})'>Close</button>
         
        </div>

        </div>
      </div>
    </div>
  `
  userInfoDiv.innerHTML = modalContent
  document.getElementById("myModal").style.display = "block";
}

const generateUserCardList = (userList) => {
  const content = `
        <h1 class="title">Content</h1>
        <div class="box-content">
        ${userList.map((item) => generateUserCard(item))
        .join("")}
        </div>   
    `;
  return content;
};


function closeUserInfo() {
  // document.getElementById("myModal").style.display = "none";
  const modal = document.getElementById("myModal")
  modal.parentNode.removeChild(modal)
}


// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Function to log user info
function closeUserInfo(users) {
  console.log("User Info:", users);
  closeModal();
}
// fetchUserList().then((data) => {
//   contentDiv5.innerHTML = generateUserCardList(data);
// });

function openContent5() {
  fetchUserList().then((data) => {
    contentDiv5.innerHTML = generateUserCardList(data);
  })
  }