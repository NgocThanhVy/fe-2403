const fetchAllUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?limit=5');
    return res.json(); // trả về ds photo
};

const contentDiv = document.querySelector('.content');
contentDiv.innerHTML = `
    <h1>Loading...</h1>
`

const generatePhotoCard = (photoInfo) => {
    return `
        <div class='photo-card'>
            <p>albumId: ${photoInfo.albumId}</p>
            <p>id: ${photoInfo.id}</p>
            <p>title: ${photoInfo.title}</p>
            <img src="${photoInfo.url}
            alt="${photoInfo.url}"  height="100px">
            <img src="${photoInfo.thumbnailUrl}  
            alt="${photoInfo.thumbnailUrl}" height="50px">
            <button onclick='viewDetail(${JSON.stringify(
        photoInfo)})'>View Detail</button>
        </div>
    `;
};

function viewDetail(photo) {
    const photoInfoDiv = document.getElementById('photoInfo');
    const photoString = JSON.stringify(photo);
    photoInfoDiv.innerHTML = `
        <h2>Photo</h2>
        <p><strong>albumId:</strong>${photo.albumId}</p>
        <p><strong>id:</strong>${photo.id}</p>
        <p><strong>title:</strong>${photo.title}</p>
        <img src="${photo.url}
        alt="${photo.url}"  height="100px">
        <img src="${photo.thumbnailUrl}  
        alt="${photo.thumbnailUrl}" height="50px">
    <button onclick='closePhoto(${photoString})'>Close</button>
    `;
    document.getElementById('modal').style.display = 'block';
};

function closePhoto() {
    document.getElementById('modal').style.display = 'none';
}


function close(photo) {
    console.log("photoInfo", photo);
    closePhoto();
}





const generatePhotoCardList = (photoList) => {
    const content = `
        <div style='display: flex; gap: 20px; flex-wrap: wrap; padding-left: 55px'>
        ${photoList.map((item) => generatePhotoCard(item)).join('')} // trả về 1 arr
        </div>
   `;
    return content;

};



fetchAllUser()
    .then((data) => {
        contentDiv.innerHTML = generatePhotoCardList(data);
    })
    .catch((error) => contentDiv.innerHTML = " <h1>err</h1>");