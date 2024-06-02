const BASE_URL = "https://65e8652e4bb72f0a9c4f2f97.mockapi.io/api";

const getAllProducts = async () => {
  const data = await fetch(`${BASE_URL}/products`);
  return data.json();
};

const getProduct = async (id) => {
  const data = await fetch(`${BASE_URL}/products/${id}`);
  return data.json();
};
const getProductDetail = async (id) => {
  const data = await fetch(`${BASE_URL}/products/${id}`)
  return data.json()
}
const createProduct = async (data) => {
  const response = await fetch(`${BASE_URL}/products/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return response.ok
};
const updateProduct = async (data) => { };
const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  })
  return response.ok
};

const handleViewDetail = async (productId) => {
  console.log({ productId });

  const productDetail = await getProductDetail(productId);
  console.log({ productDetail });
};
const handleCancel = () => {
  console.log('add product')
  const productFormDiv = document.querySelector('.product-form')
  productFormDiv.style.display = 'none'
  const productListContainerDiv = document.querySelector('.product-list-container')
  productListContainerDiv.style.display = 'block'
}
const openProductForm = () => {
  console.log('add product')
  const productFormDiv = document.querySelector('.product-form')
  productFormDiv.style.display = 'block'
  const productListContainerDiv = document.querySelector('.product-list-container')
  productListContainerDiv.style.display = 'none'
}
const handleAdd = async (event) => {

  event.preventDefault() // Prevent the default form submission behavior
  const productName = document.getElementById("product-name").value
  const productType = document.getElementById("product-type").value
  const price = document.getElementById("product-price").value
  const productImage = document.getElementById("product-image").value
  const data = {
    productName,
    productType,
    price,
    productImage,
  }
  console.log({ data });
  // gọi API create
  const isOK = await createProduct(data)
  console.log({ isOK })

};

const handleDelete = async (productId) => {
  const isDeleteOk = await deleteProduct(productId)
  console.log({ isDeleteOk })
}

const generateProductCard = (product, index) => {
  return `
  <div class="product-card">
    <h2>${index + 1}</h2>
    <img src="${product.productImage}"/>
    <p>${product.productName}</p>
    <p>${product.productType}</p>
    <p>${product.price}</p>
    ${product.used ? '<h4> Is used </h4>' : ""}
    <button onclick="handleViewDetail(${JSON.stringify(product.id)})">
    View Detail1</button>
    <button onclick='handleViewDetail(${JSON.stringify(product.id)})'>
    View Detail
    </button>
    <button onclick='handleDelete(${JSON.stringify(
    product.id
  )})'>Delete product</button>
      <button >edit</button>
    </div>
  </div>
  `
}
const generateProductCardList = (productList) => {
  return `
  <div class="product-list-container">
    ${productList.map((product, index) =>
    generateProductCard(product, index)
  )
    }
    </div>
  `
}
//show loading screen
const productListContainerDiv = document.querySelector(
  '.product-list-container'
)
productListContainerDiv.innerHTML = '<h1>Loading...</h1>'
getAllProducts()
  .then((data) => {
    console.log({ data })
    productListContainerDiv.innerHTML = generateProductCardList(data)
  })
  .catch((error) => (productListContainerDiv.innerHTML = `Error: ${error}`))

