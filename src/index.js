import "./styles.css";
import { loadHome, loadAbout, loadMenu } from "./pageload";


console.log("Hello there");
loadHome();


// add event listeners to the buttons to act like navigation tabs
const homeButton = document.querySelector('button:first-child')
const menuButton = document.querySelector('button:nth-child(2)')
const aboutButton = document.querySelector('button:last-child')

homeButton.addEventListener('click', loadHome)
menuButton.addEventListener('click', loadMenu)
aboutButton.addEventListener('click', loadAbout)