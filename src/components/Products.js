import Mules from "../assets/img 1.jpeg"
import Cross from "../assets/img2.jpeg"
import Slides from "../assets/img 3.jpg"
import Boots from "../assets/img4.jpg"
import Loafers from "../assets/img5.jpg"
import Sandal from "../assets/img6.jpg"
import Sandal2 from "../assets/img7.jpg"

// snadal :price_1NAqaTDm6cL6tL0jQbECZMOz
//chelsea : price_1NAqSHDm6cL6tL0j2ZbPgWRR
// loafers : price_1NAqQGDm6cL6tL0jErfSkAx0
// slides : price_1NAqPJDm6cL6tL0jj1iv9ZuK
// cross :price_1NAqNkDm6cL6tL0jN0lvcRxL
// mules : price_1NAqLnDm6cL6tL0j6Gw10QUF

/*
  const checkout = async () => {
        await fetch("http://localhost:4000/checkout", {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ items: PRODUCTS.items })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url);
            }
        })
    }
    */

export const PRODUCTS = [
    {
        id: 1,
        productName: "SV Birkenstock Mules",
        price: 13000,
        priceId: "price_1NAqLnDm6cL6tL0j6Gw10QUF",
        productImage: Mules,
    },
    {
        id: 2,
        productName: "SV Birkenstock Cross",
        price: 11000,
        priceId: "price_1NAqNkDm6cL6tL0jN0lvcRxL",
        productImage: Cross,
    },
    {
        id: 3,
        productName: "SV Penny Loafers",
        price: 20000,
        priceId: "price_1NAqPJDm6cL6tL0jj1iv9ZuK",
        productImage: Slides,
    },
    {
        id: 4,
        productName: "SV Chelsea boots",
        price: 28000,
        priceId: "price_1NAqSHDm6cL6tL0j2ZbPgWRR",
        productImage: Boots,
    },
    {
        id: 5,
        productName: "SV Penny Loafers",
        price: 22000,
        priceId: "price_1NAqQGDm6cL6tL0jErfSkAx0",
        productImage: Loafers,
    },
    {
        id: 6,
        productName: "SV Birkenstock Sandal",
        price: 13000,
        priceId: "price_1NAqaTDm6cL6tL0jQbECZMOz",
        productImage: Sandal,
    },
    {
        id: 7,
        productName: "SV Birkenstock Slides",
        price: 11000,
        productImage: Sandal2,
    },

];