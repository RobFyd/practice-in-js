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

const products2 = [
    {
        name: "kia parts",
        price: 100,
    },
    {
        name: "fork",
        price: 5,
    },
];


const productsToStorage2 = sessionStorage.setItem("products", JSON.stringify(products2));
console.log(productsToStorage2);

const productsFromStorage2 = sessionStorage.getItem("products");
console.log(productsFromStorage2);

const productsParsed2 = JSON.parse(productsFromStorage2);
console.log(productsParsed2);