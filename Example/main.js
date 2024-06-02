const getAllUser = async () => {
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    return respone.json();
};

const contentDiv = document.querySelector(".content");
contentDiv.innerHTML = `
    <h1>Loading .......</h1>
`;


const generateUserCard = (userInfo) => {
    return `
      <div style='border: 1px solid red'>
          <p>name: ${userInfo.name}</p>
          <p>email: ${userInfo.email}</p>
          <p>username: ${userInfo.username}</p>
          <p>phone: ${userInfo.phone}</p>
          <button onclick='showDetail(${JSON.stringify(
        userInfo
    )})'>Show Detail</button>
      </div>
  `;
};

const showDetail = (user) => {
    console.log("User 1:", user);
    const userInfoDiv = document.getElementById("userInfo");
    const userString = JSON.stringify(user);
    userInfoDiv.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <button onclick='closeUser(${userString})'>Log User Info</button>
    `;
    document.getElementById("my_modal").style.display = "block";
};

const generateUserCardList = (userList) => {
    const content = `
          <div style='display: flex; gap: 10px; flex-wrap: wrap'>
          ${userList.map((item) => generateUserCard(item))
            .join(' ')}
          </div>
      `;
    return content;
};

function closeModal() {
    document.getElementById("my_modal").style.display = "none";
}

// Function to log user info
function closeUser(user) {
    console.log("User Info:", user);
    closeModal();
    console.log(closeUser)
}

getAllUser().then((data) => {
    contentDiv.innerHTML = generateUserCardList(data);
});

