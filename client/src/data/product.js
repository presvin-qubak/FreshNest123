// src/data/products.js

import apple from "../assets/apple.avif";
import banana from "../assets/banana.avif";
import orange from "../assets/orange.avif";
import mango from "../assets/mango.avif";
import grapes from "../assets/grapes.avif";
import milk from "../assets/milk.avif";
import bread from "../assets/bread.avif";
import eggs from "../assets/eggs.avif";

import cake from "../assets/Chocolate Cake.avif";
import croissant from "../assets/croissant.jpg";
import cookies from "../assets/Cookies.avif";
import donut from "../assets/Chocolate Donut.avif";
import bun from "../assets/bun.avif";

import eggPack from "../assets/Eggs Pack.jpg";
import brownEgg from "../assets/brownEgg.jpg";
import boiledEgg from "../assets/boiledEgg.webp";
import quailEgg from "../assets/quailEgg.webp";
import organicEgg from "../assets/organicEgg.webp";

import cheese from "../assets/cheese.avif";
import butter from "../assets/butter.avif";
import yogurt from "../assets/yogurt.webp";
import paneer from "../assets/paneer.webp";
import curd from "../assets/curd.avif";

import carrot from "../assets/carrot.avif";
import tomato from "../assets/tomato.avif";
import potato from "../assets/potato.avif";
import broccoli from "../assets/broccoli.avif";
import capsicum from "../assets/capsicum.avif";
import cabbage from "../assets/cabbage.avif";
import cauliflower from "../assets/cauliflower.avif";
import onion from "../assets/onion.avif";


import watermelon from "../assets/watermelon.webp";
import avocado from "../assets/avocado.avif";
import papaya from "../assets/papaya.avif";
import plums from "../assets/plums.avif";
import strawberry from "../assets/strawberry.avif";

const products = [
  {
    id: 1,
    name: "Fresh Apple",
    price: 120,
    category: "Fruits",
    image: apple,
    description: "Fresh and juicy apples rich in vitamins."
  },
  {
    id: 2,
    name: "Banana",
    price: 60,
    category: "Fruits",
    image: banana,
    description: "Sweet bananas packed with energy."
  },
  {
    id: 3,
    name: "Orange",
    price: 90,
    category: "Fruits",
    image: orange,
    description: "Vitamin C rich fresh oranges."
  },
  {
    id: 4,
    name: "Mango",
    price: 150,
    category: "Fruits",
    image: mango,
    description: "Delicious ripe mangoes."
  },
  {
    id: 5,
    name: "Grapes",
    price: 110,
    category: "Fruits",
    image: grapes,
    description: "Fresh seedless grapes."
  },
  {
    id: 6,
    name: "Organic Milk",
    price: 80,
    category: "Dairy",
    image: milk,
    description: "Pure organic cow milk."
  },
  {
    id: 7,
    name: "Bread",
    price: 45,
    category: "Bakery",
    image: bread,
    description: "Soft whole wheat bread."
  },
  {
  id: 8,
  name: "Chocolate Cake",
  price: 350,
  category: "Bakery",
  image: cake,
  description: "Soft chocolate cake made with fresh ingredients."
},

{
  id: 9,
  name: "Butter Croissant",
  price: 80,
  category: "Bakery",
  image: croissant,
  description: "Flaky and crispy French style croissant."
},

{
  id: 10,
  name: "Cookies",
  price: 120,
  category: "Bakery",
  image: cookies,
  description: "Crunchy cookies perfect with tea or coffee."
},

{
  id: 11,
  name: "Chocolate Donut",
  price: 90,
  category: "Bakery",
  image: donut,
  description: "Fresh donuts topped with delicious chocolate."
},

{
  id: 12,
  name: "Sweet Bun",
  price: 50,
  category: "Bakery",
  image: bun,
  description: "Soft and sweet bakery buns."
},
  {
    id: 13,
    name: "Eggs",
    price: 90,
    category: "Dairy",
    image: eggs,
    description: "Farm fresh eggs."
  },

{
  id: 14,
  name: "Brown Eggs",
  price: 140,
  category: "Eggs",
  image: brownEgg,
  description: "Healthy brown eggs from naturally raised hens."
},

{
  id: 15,
  name: "Boiled Eggs",
  price: 60,
  category: "Eggs",
  image: boiledEgg,
  description: "Ready-to-eat boiled eggs with rich nutrients."
},

{
  id: 16,
  name: "Quail Eggs",
  price: 100,
  category: "Eggs",
  image: quailEgg,
  description: "Small nutritious quail eggs with great taste."
},

{
  id: 17,
  name: "Organic Eggs",
  price: 160,
  category: "Eggs",
  image: organicEgg,
  description: "Premium organic eggs for a healthy lifestyle."
},
  {
  id: 18,
  name: "Farm Fresh Eggs Pack",
  price: 120,
  category: "Eggs",
  image: eggPack,
  description: "Fresh farm eggs packed with high quality protein."
},

{
  id: 19,
  name: "Butter",
  price: 120,
  category: "Dairy",
  image: butter,
  description: "Smooth and delicious fresh butter."
},

{
  id: 20,
  name: "Yogurt",
  price: 80,
  category: "Dairy",
  image: yogurt,
  description: "Healthy probiotic yogurt made from fresh milk."
},

{
  id: 21,
  name: "Paneer",
  price: 280,
  category: "Dairy",
  image: paneer,
  description: "Soft fresh paneer perfect for cooking."
},

{
  id: 22,
  name: "Fresh Curd",
  price: 60,
  category: "Dairy",
  image: curd,
  description: "Natural homemade style fresh curd."
},
{
  id: 23,
  name: "Cheese",
  price: 220,
  category: "Dairy",
  image: cheese,
  description: "Fresh creamy cheese rich in calcium."
},
{
  id: 33,
  name: "Carrot",
  price: 40,
  category: "Vegetables",
  image: carrot,
  description: "Fresh carrots rich in vitamins and perfect for salads."
},
{
  id: 34,
  name: "Tomato",
  price: 35,
  category: "Vegetables",
  image: tomato,
  description: "Juicy red tomatoes, ideal for cooking and salads."
},
{
  id: 35,
  name: "Potato",
  price: 30,
  category: "Vegetables",
  image: potato,
  description: "Fresh potatoes perfect for fries, curries, and mashed dishes."
},
{
  id: 36,
  name: "Broccoli",
  price: 80,
  category: "Vegetables",
  image: broccoli,
  description: "Nutritious broccoli rich in fiber and vitamins."
},
{
  id: 37,
  name: "Capsicum",
  price: 70,
  category: "Vegetables",
  image: capsicum,
  description: "Crisp green capsicum ideal for stir-fries, pizzas, and salads."
},
{
  id: 38,
  name: "Watermelon",
  price: 70,
  category: "Fruits",
  image: watermelon,
  description: "Sweet and refreshing watermelon, perfect for staying hydrated."
},
{
  id: 39,
  name: "Avocado",
  price: 180,
  category: "Fruits",
  image: avocado,
  description: "Creamy avocados rich in healthy fats and nutrients."
},
{
  id: 40,
  name: "Papaya",
  price: 80,
  category: "Fruits",
  image: papaya,
  description: "Fresh papayas packed with vitamins and digestive enzymes."
},
{
  id: 41,
  name: "Plums",
  price: 140,
  category: "Fruits",
  image: plums,
  description: "Juicy plums with a perfect balance of sweetness and tartness."
},
{
  id: 42,
  name: "Strawberry",
  price: 220,
  category: "Fruits",
  image: strawberry,
  description: "Fresh strawberries bursting with sweet flavor and antioxidants."
},
{
  id: 43,
  name: "Cabbage",
  price: 45,
  category: "Vegetables",
  image: cabbage,
  description: "Fresh green cabbage, perfect for salads, stir-fries, and curries."
},
{
  id: 44,
  name: "Cauliflower",
  price: 55,
  category: "Vegetables",
  image: cauliflower,
  description: "Farm-fresh cauliflower, ideal for curries, roasting, and soups."
},
{
  id: 45,
  name: "Onion",
  price: 40,
  category: "Vegetables",
  image: onion,
  description: "Fresh onions with a rich flavor, essential for everyday cooking."
},
];

export default products;