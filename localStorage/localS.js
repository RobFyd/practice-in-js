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


const productsToStorage2 = sessionStorage.setItem("products2", JSON.stringify(products2));
console.log(productsToStorage2);

const productsFromStorage2 = sessionStorage.getItem("products2");
console.log(productsFromStorage2);

const productsParsed2 = JSON.parse(productsFromStorage2);
console.log(productsParsed2);


// cookies are used to store data in the browser and it will stay there until we clear it out

// header HTTP Set-Cookie
// Set-Cookie: sessionId=38afes7a8; Max-Age=2592000

document.cookie = "strawberry=cookie";
console.log(document.cookie);

document.cookie = "anotherCookie";
console.log(document.cookie); 