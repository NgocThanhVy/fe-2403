const BASE_API = "https://65f46b14f54db27bc021a6a4.mockapi.io/api";

const getAllProducts = async () => {
    const res = await fetch(`${BASE_API}/product`);
    return res.json();
}

const getProduct = async (id) => { };
const deleteProduct = async (id) => { };
const createProduct = async (data) => { };
const editProduct = async (data) => { };

const getProductDetail = async (id) => {
    const res = await fetch(`${BASE_API}/product/${id}`);
    return res.json();
}

    ;

const handleViewDetals = async (productId) => {
    console.log({ productId })
    const productDetail = await getProductDetail(productId);
    console.log({ getProductDetail })
    // hien thi modal voi product detail

}


const generateCardProduct = (product, index) => {
    return `
    <div class="card-product">
        <h2>${index + 1}</h2>
        <p>Id: ${product.id}</p>
        <p>productName: ${product.productName}</p>
        <img src='${product.productImage}'>
        <p>productType: ${product.productType}</p>
        ${product.isUsed ? "<h4>Is Used</h4>" : ""}
        <p>price: ${product.price}</p>
        <p>countInStock: ${product.countInStock}</p>
        <p>discount: ${product.discount}</p>
        <button onClick='handleViewDetals(${JSON.stringify(product.id)})'>View Details</button>
        </div >
    `
}

const generateProductList = (productList) => {
    return `
    <div class="product-card-list">
        ${productList
            .map((product, index) => generateCardProduct(product, index))
            .join('')
        }
        </div >
    `;
};
const contentDiv = document.querySelector('.product-list-container');
contentDiv.innerHTML = `
    < h1 > Loading .............</h1 >
        `
getAllProducts()
    .then((data) => {
        console.log({ data });
        contentDiv.innerHTML = generateProductList(data)
    })

    .catch((err) => (contentDiv.innerHTML = `error: ${err} `));