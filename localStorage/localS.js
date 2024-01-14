// local storage is a way to store data in the browser and it will stay there until we clear it out

const products = [
    {
        name: "leon parts",
        price: 200,
    },
    {
        name: "noodles",
        price: 1,
    },
];


const productsToStorage = localStorage.setItem("products", JSON.stringify(products));
console.log(productsToStorage);

const productsFromStorage = localStorage.getItem("products");
console.log(productsFromStorage);

const productsParsed = JSON.parse(productsFromStorage);
console.log(productsParsed);


// sessionStorage is the same as localStorage but it will be cleared out when we close the browser