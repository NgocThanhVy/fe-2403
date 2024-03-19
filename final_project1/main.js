const BASE_URL = 'https://65f46b14f54db27bc021a6a4.mockapi.io/api';
const addProduct = document.querySelector(".box-product");
const contentDiv = document.querySelector(".content");
const createFormDiv = document.querySelector(".create-form");
const addContent = document.querySelector(".content");
const editFormDiv = document.querySelector(".edit-form")
const detailModalDiv = document.querySelector(".detail-modal");
const contentProductDiv = document.querySelector(".content-functional-product")
const contentFuncProductDiv = document.querySelector(".content-functional-product")




const fetchProductList = async () => {
  const res = await fetch(`${BASE_URL}/product`);
  return res.json();
};



const getProductById = async (productId) => {
  const res = await fetch(`${BASE_URL}/product/${productId}`);
  return res.json();
};

const createProduct = async (newProduct) => {
  const res = await fetch(`${BASE_URL}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  return res.ok;
};


const editProduct = async (updatedProduct) => {
  const res = await fetch(`${BASE_URL}/product/${updatedProduct.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });

  return res.ok;
};

const deleteProduct = async (productId) => {
  const res = await fetch(`${BASE_URL}/product/${productId}`, {
    method: "DELETE",
  });
  return res.ok;
};
// function product
const generateProductCard = (product, index) => {
  return `
          <div class='product-card'>
              <h2 class='product-index'>${index}</h2>
              <hr />
              <p>Name: ${product.productName}</p>
              <p>Type: ${product.productType}</p>
              <img class='product-image' src='${product.productImage}'/>
              <p>Price: ${product.price}</p>
              <p>isUsed: ${product.isUsed}</p>
              <p>countInStock: ${product.countInStock}</p>
              <p>discount: ${product.discount}</p>
              <div class='actions'>
              <button onclick='openProductDetailModal(${JSON.stringify(
    product.id
  )})'>View Detail</button>
              <button onclick='openEditProductForm(${JSON.stringify(
    product
  )})'>Edit</button>
              <button onclick='handleDeleteProduct(${JSON.stringify(
    product.id
  )})'>Delete</button>
          </div>
          </div>      
      `;
};


function openContentProduct() {
  addProduct.style.display = "block";
  addUser.style.display = "none";
}



const displayProductList = async (productList) => {

  if (productList.length > 0) {
    let productCards = productList.map((product, index) =>
      generateProductCard(product, index)
    );

    addContent.innerHTML = `
            <div class='product-list'>
              ${productCards.join("")}  
            </div>
          `
  } else {
    addContent.innerHTML = "<h1>No Product</h1>";
  }
}


const showCreateProductForm = () => {
  contentDiv.innerHTML = "";
  createFormDiv.style.display = "block";
};

const handleCancelAdd = () => {
  // clear current form values
  createFormDiv.style.display = "none";
};

const handleAddProduct = async () => {
  // get form data
  const productName = document.getElementById("product-name").value;
  const productType = document.getElementById("product-type").value;
  const productPrice = document.getElementById("product-price").value;
  const productImage = document.getElementById("product-image").value;
  const isUsed = document.getElementById("is-used").checked;
  const countInStock = document.getElementById("count-in-stock").value;
  const discount = document.getElementById("discount").value;

  const newProduct = {
    productName,
    productType,
    productPrice,
    productImage,
    isUsed,
    countInStock,
    discount,
  };

  console.log({ newProduct });

  // call create-product api
  const isCreated = await createProduct(newProduct);

  if (!isCreated) {
    const errorStatus = document.createElement("h2");
    errorStatus.innerText = "Create Failed";
    errorStatus.style.color = "red";
    createFormDiv.appendChild(errorStatus);
  } else {
    // reload the page when creating succefully
    location.reload();
  }
};

const closeDetailModal = () => {
  detailModalDiv.style.display = "none";
};

const openProductDetailModal = async (selectedProductId) => {
  detailModalDiv.style.display = "block";
  detailModalDiv.innerHTML = "<h2>Loading Detail...</h2>";

  const productDetail = await getProductById(selectedProductId);

  console.log({ productDetail });

  detailModalDiv.innerHTML = `
  <div class='form-content'>
    <div class='detail-modal-detail'>
    <img class='product-image' src='${productDetail.productImage}' />
    <p>Product Name: ${productDetail.productName}</p>
    <p>Product Type: ${productDetail.productType}</p>
    <p>Product Price: ${productDetail.productPrice}</p>
    <p>Is Used: <input type='checkbox' ${productDetail.isUsed && "checked"
    } /></p>
    <p>Count In Stock: ${productDetail.countInStock}</p>
    <p>Discount: ${productDetail.discount}%</p>
    <button onclick='closeDetailModal()'>close</button>
    </div>
  </div>
  `;
};

const handleDeleteProduct = async (productId) => {
  const isDeleted = await deleteProduct(productId);

  if (!isDeleted) {
    const productListDiv = document.querySelector(".product-list");
    const errorStatus = document.createElement("h2");
    errorStatus.innerText = "Create Failed";
    errorStatus.style.color = "red";
    productListDiv.appendChild(errorStatus);
  } else {
    // reload the page when creating succefully
    location.reload();
  }
};

const openEditProductForm = (selectedProduct) => {
  const editFormDiv = document.querySelector(".edit-form");

  // set product value into the edit-form
  document.getElementById("edit-product-name").value =
    selectedProduct.productName;
  document.getElementById("edit-product-type").value =
    selectedProduct.productType;
  document.getElementById("edit-product-price").value =
    selectedProduct.price;
  document.getElementById("edit-product-image").value =
    selectedProduct.productImage;
  document.getElementById("edit-is-used").checked = selectedProduct.isUsed;
  document.getElementById("edit-count-in-stock").value =
    selectedProduct.countInStock;
  document.getElementById("edit-discount").value = selectedProduct.discount;

  // store the selected product id
  localStorage.setItem("selected-product-id", selectedProduct.id);

  // sessionStorage
  // sessionStorage.setItem('selected-product-id', selectedProduct.id)

  editFormDiv.style.display = "block";
};

const handleCancelEdit = (event) => {
  console.log(event);
  event.preventDefault();
  editFormDiv.style.display = "none";
};

const handleEditProduct = async () => {
  // get edit-form data
  const productName = document.getElementById("edit-product-name").value;
  const productType = document.getElementById("edit-product-type").value;
  const productPrice = document.getElementById("edit-product-price").value;
  const productImage = document.getElementById("edit-product-image").value;
  const isUsed = document.getElementById("edit-is-used").checked;
  const countInStock = document.getElementById("edit-count-in-stock").value;
  const discount = document.getElementById("edit-discount").value;

  const updatedProduct = {
    id: localStorage.getItem("selected-product-id"),
    productName,
    productType,
    productPrice,
    productImage,
    isUsed,
    countInStock,
    discount,
  };

  // call edit api
  const isEdited = await editProduct(updatedProduct);

  if (isEdited) {
    location.reload();
  } else {
    const editFormDiv = document.querySelector(".edit-form");
    const errorStatus = document.createElement("h2");
    errorStatus.innerText = "Create Failed";
    errorStatus.style.color = "red";
    editFormDiv.appendChild(errorStatus);
  }
};

// const renderProductList = (productList) => {
//     if (productList.length) {
//         addContent.innerHTML = `
//         <div class="product-list">
//           ${productList.map((product) => generateProductCard(product)).join('')}
//         </div>
//       `
//     } else {
//         addContent.innerHTML = '<h1>No products</h1>'
//     }
// }
const handleOpenProduct = async () => {


  // console.log(productList)
  addProduct.style.display = "block";
  addUser.style.display = "none";

  // addUser.style.display = "none";
  // check is Used & sort
  const productIsUsedCheckbox = document.getElementById('filter-product-is-used')
  const productSortUp = document.querySelector('.sort-up')
  const productSortDown = document.querySelector('.sort-down')


  const productList = await fetchProductList()
  displayProductList(productList)
  // sort price products
  const handleSortUp = async () => {
    console.log('first', productSortUp.addEventListener('click', handleSortUp)
    )
    const sortedProductList = productList.sort((a, b) => a.price - b.price)
    displayProductList(sortedProductList)
  }

  const handleSortDown = async () => {
    console.log('productSortDown', productIsUsedCheckbox.addEventListener('change', handleProductFilter)
    )
    const sortedProductList = productList.sort((a, b) => b.price - a.price)
    displayProductList(sortedProductList)
  }
  // fillter products
  const handleProductFilter = async () => {
    const isUsed = productIsUsedCheckbox.checked
    const filteredProductList = isUsed ? productList.filter(product => product.isUsed) : productList

    displayProductList(filteredProductList)
  }
  productSortUp.addEventListener('click', handleSortUp)
  productSortDown.addEventListener('click', handleSortDown)
  productIsUsedCheckbox.addEventListener('change', handleProductFilter)

}
//=================================================
// search products
const searchProducts = async (nameSearch) => {
  const listAllProducts = await fetchProductList()
  const searchProduct = listAllProducts.filter((product) => {
    const productName = product.productName.toLowerCase()
    const searchKeyword = nameSearch.toLowerCase()
    return productName.includes(searchKeyword)
  })
  if (searchProduct.length > 0) {
    // Có kết quả tìm kiếm
    console.log({ searchProduct })
    console.log('tìm thấy sản phẩm.')
    addContent.style.display = 'none'
    contentProductDiv.innerHTML = `
      <h2>Search Products</h2><hr />
      <div class="product-list">
        ${searchProduct.map((product, index) =>
      generateProductCard(product, index)).join('')
      }
      </div>
      `
  } else {
    // Không có kết quả tìm kiếm
    console.log('Không tìm thấy sản phẩm.')
    contentFuncProductDiv.innerHTML = `
      <h2>Search Products</h2><hr />
      <h1>Không tìm thấy sản phẩm cần tìm!</h1>`
  }
  contentProductDiv.style.display = 'block'
}
const openSearchProducts = (value) => {
  addContent.style.display = 'none'
  contentProductDiv.innerHTML = `
    <h2>Search Products</h2>
    ${value}
    `

  contentFuncProductDiv.style.display = 'block'
}
const getValueSearch = () => {
  const inputElement = document.getElementById('search-product-name')
  const searchButton = document.querySelector('.input-search-product i')

  const performSearch = () => {
    const searchValue = inputElement.value
    // Thực hiện hành động tìm kiếm với giá trị searchValue ở đây
    console.log(searchValue)
    searchProducts(searchValue)
    // openSearchProducts(item)
  }

  searchButton.addEventListener('click', performSearch)

  inputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      performSearch()
    }
  })
}
//============================================================================

// user
const addUser = document.querySelector(".box-user");
const createFormUserDiv = document.querySelector(".form-create-user");
const addContentUser = document.querySelector(".contentUser");
const editUserFormDiv = document.querySelector(".form-edit-user")
// const detailModalDiv = document.querySelector(".detail-modal");
const contentUserDiv = document.querySelector(".content-functional-user")



const fetchUserList = async () => {
  const res = await fetch(`${BASE_URL}/user`);
  return res.json();
};



const getUserById = async (userId) => {
  const res = await fetch(`${BASE_URL}/user/${userId}`);
  return res.json();
};

const createUser = async (newUser) => {
  const res = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return res.ok;
};


const editUser = async (updatedUser) => {
  const res = await fetch(`${BASE_URL}/user/${updatedUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });

  return res.ok;
};

const deleteUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/user/${userId}`, {
    method: "DELETE",
  });
  return res.ok;
};
// function user


const generateUserCard = (user, index) => {
  return `
          <div class='user-card'>
              <h2 class='user-index'>${index}</h2>
              <hr />
              <p>Name: ${user.name}</p>
              <p>Email: ${user.email}</p>
              <p>Password: ${user.password}</p>
              <p>isAdmin: ${user.isAdmin}</p>
              <p>Phone: ${user.phone}</p>
              <p>Address: ${user.address}</p>
              <img class='user-image' src='${user.avatar}'/>
              <p>City: ${user.city}</p>
              <div class='actions-user'>
              <button onclick='openUserDetailModal(${JSON.stringify(user.id)})'>
              View Detail
              </button>
        
              <button onclick='handleDeleteUser(${JSON.stringify(user.id)})'>
              Delete user
              </button>
        
              <button onclick='openEditUserForm(${JSON.stringify(user)})'>
              Edit
              </button>
            </div>
          </div>      
      `;
};



function openContentUser() {
  addUser.style.display = "block";
  addProduct.style.display = "none";
}

const displayUserList = async (userList) => {

  if (userList.length > 0) {
    let userCards = userList.map((user, index) =>
      generateUserCard(user, index)
    );

    addContentUser.innerHTML = `
            <div class='user-list'>
              ${userCards.join("")}  
            </div>
          `
  } else {
    addContentUser.innerHTML = "<h1>No User</h1>";
  }
}


const displayUsertList = async () => {
  const userList = await fetchUserList();

  if (userList.length > 0) {
    let userCards = userList.map((user, index) =>
      generateUserCard(user, index)
    );

    addContentUser.innerHTML = `
            <div class='user-list'>
              ${userCards.join("")}  
            </div>
          `
  } else {
    addContentUser.innerHTML = "<h1>No User</h1>";
  }
}
// displayUsertList()

const showCreateUserForm = () => {
  // addContentUser.innerHTML = "";
  createFormUserDiv.style.display = "block";
};

const handleCancelAddUser = () => {
  // clear current form values
  createFormUserDiv.style.display = "none";
};

const handleAddUser = async () => {
  // get form data
  const name = document.getElementById("user-name").value
  const email = document.getElementById("user-email").value
  const password = document.getElementById("user-password").value
  const isAdmin = document.getElementById("user-is-admin").check
  const phone = document.getElementById("user-phone").value
  const address = document.getElementById("user-address").value
  const avatar = document.getElementById("user-avatar").value
  const city = document.getElementById("user-city").value
  const newUser = {
    name,
    email,
    password,
    isAdmin,
    phone,
    address,
    avatar,
    city,
  }

  // gọi API create
  const isCreated = await createUser(newUser)
  console.log({ isCreated })
  if (!isCreated) {
    const errorStatus = document.createElement("h2")
    errorStatus.innerText = "Create Failed"
    errorStatus.style.color = "red"
    createFormUserDiv.appendChild(errorStatus)
  } else {
    // reload the page when creating succefully
    location.reload()
  }
}

const closeDetailModalUser = () => {
  detailModalDiv.style.display = "none";
};

const openUserDetailModal = async (selectedUserId) => {
  detailModalDiv.style.display = "block";
  detailModalDiv.innerHTML = "<h2>Loading Detail...</h2>";

  const userDetail = await getUserById(selectedUserId);

  console.log({ userDetail });

  detailModalDiv.innerHTML = `
  <div class='form-content'>
    <div class='detail-modal-detail'>
    <h2>User Details</h2>
          <img class='user-image' src='${userDetail.userImage}' />
          <p>User Name: ${userDetail.name}</p>
          <p>Email: ${userDetail.email}</p>
          <pPassword: ${userDetail.password}</p>
          <p>Is Admin: ${userDetail.isAdmin}</p>
          <p>Phone: ${userDetail.phone}</p>
          <p>Address: ${userDetail.address}</p>
          <p>Avatar: ${userDetail.avatar}</p>
          <button onclick='closeDetailModalUser()'>close</button>
    </div>
  </div>
  `;
};

const handleDeleteUser = async (userId) => {
  const isDeletedOk = await deleteUser(userId)
  if (!isDeletedOk) {
    const userListDiv = document.querySelector(".user-list")
    const errorStatus = document.createElement("h2")
    errorStatus.innerText = "Delete Failed"
    errorStatus.style.color = "red"
    userListDiv.appendChild(errorStatus)
  } else {
    // reload the page when creating succefully
    location.reload()
  }
};

const openEditUserForm = (selectedUser) => {
  const formEditUserDivq = document.querySelector('.form-edit-user')
  // set User value into the edit-form
  document.getElementById("edit-user-name").value = selectedUser.name
  document.getElementById("edit-user-email").value = selectedUser.email
  document.getElementById("edit-user-password").value = selectedUser.password
  document.getElementById("edit-user-is-admin").check = selectedUser.isAdmin
  document.getElementById("edit-user-phone").value = selectedUser.phone
  document.getElementById("edit-user-address").value = selectedUser.address
  document.getElementById("edit-user-avatar").value = selectedUser.avatar

  // store the selected user
  localStorage.setItem("selected-user-id", selectedUser.id)

  //session store
  // sessionStorage.setItem('selected-user-id', selecteduser.id)

  formEditUserDivq.style.display = 'block'
};

const handleCancelEditUser = (event) => {
  console.log(event);
  event.preventDefault();
  editUserFormDiv.style.display = "none";
};

const handleEditUser = async () => {
  // get edit-form data
  const name = document.getElementById("edit-user-name").value
  const email = document.getElementById("edit-user-email").value
  const password = document.getElementById("edit-user-password").value
  const isAdmin = document.getElementById("edit-user-is-admin").check
  const phone = document.getElementById("edit-user-phone").value
  const address = document.getElementById("edit-user-address").value
  const avatar = document.getElementById("edit-user-avatar").value
  const editedUser = {
    id: localStorage.getItem("selected-user-id"),
    name,
    email,
    password,
    isAdmin,
    phone,
    address,
    avatar,
  }

  const isEdited = await editUser(editedUser)
  if (isEdited) {
    location.reload()
  } else {
    const formEditUserDiv = document.querySelector('.form-edit-user')

    const errorStatus = document.createElement("h2")
    errorStatus.innerText = "Create Failed"
    errorStatus.style.color = "red"
    formEditUserDiv.appendChild(errorStatus)
  }
};


const handleOpenUser = async () => {
  addUser.style.display = "block";
  addProduct.style.display = "none";
  // check is Used & sort
  const userIsAdminCheckbox = document.getElementById('filter-user-is-admin')

  console.log(userIsAdminCheckbox)
  const userList = await fetchUserList()
  displayUserList(userList)

  // fillter users
  const handleUserFilter = async () => {
    const issAdmin = userIsAdminCheckbox.checked
    const filteredUserList = issAdmin ? userList.filter(user => user.isAdmin) : userList

    displayUserList(filteredUserList)
  }

  userIsAdminCheckbox.addEventListener('change', handleUserFilter)

}
//=================================================
// search Users
const searchUsers = async (nameSearch) => {
  const listAllUsers = await fetchUserList()
  const searchUser = listAllUsers.filter((user) => {
    const userName = user.name.toLowerCase()
    const searchKeyword = nameSearch.toLowerCase()
    return userName.includes(searchKeyword)
  })
  if (searchUser.length > 0) {
    // Có kết quả tìm kiếm
    console.log({ searchUser })
    console.log('tìm thấy sản phẩm.')
    addContentUser.style.display = 'none'
    contentUserDiv.innerHTML = `
      <h2>Search Users</h2><hr />
      <div class="user-list">
        ${searchUser.map((user, index) =>
      generateUserCard(user, index)).join('')
      }
      </div>
      `
  } else {
    // Không có kết quả tìm kiếm
    console.log('Không tìm thấy sản phẩm.')
    addContentUser.style.display = 'none'

    contentUserDiv.innerHTML = `
      <h2>Search Users</h2><hr />
      <h1>Không tìm thấy sản phẩm cần tìm!</h1>`
  }
  contentUserDiv.style.display = 'block'
}
const getValueSearchUsers = () => {
  const inputElement = document.getElementById('search-user-name')
  const searchButton = document.querySelector('.input-search-user i')
  console.log('searchValue')

  const performSearch = () => {
    const searchValue = inputElement.value
    // Thực hiện hành động tìm kiếm với giá trị searchValue ở đây
    console.log(searchValue)
    searchUsers(searchValue)
  }

  searchButton.addEventListener('click', performSearch)

  inputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      performSearch()
    }
  })
}
