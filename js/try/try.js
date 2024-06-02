const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json();
  }

  const getComment = async () => {
    const resonse = await fetch("https://jsonplaceholder.typicode.com/comments")
    return resonse.json();
  }

const getAlbum = async () => {
  const resonse = await fetch("https://jsonplaceholder.typicode.com/albums")
  return resonse.json();
}

const getPhoto = async () => {
  const resonse = await fetch("https://jsonplaceholder.typicode.com/photos")
  return resonse.json();
}

const getToto = async () => {
  const resonse = await fetch("https://jsonplaceholder.typicode.com/totos")
  return resonse.json();
}

const getUser = async () => {
  const resonse = await fetch("https://jsonplaceholder.typicode.com/users")
  return resonse.json();
}

getPost()
.then((data) => {
   console.log('albums: ', data.length)
})
  
  getComment().then((data) => {
    console.log("comment", data.length)
 })


 getAlbum().then((data) => {
  console.log("Albums: ", data.length)
 })

 getPhoto().then((data) => {
  console.log("Photo: ", data.length)
 })

 getToto().then((data) => {
  console.log("Toto:", data.length)
 })

 getUser().then((data) => {
  console.log("User:", data.length)
 })