/*
https://codepen.io/o-sewell/pen/mOBjvQ
https://www.youtube.com/watch?v=VdDMHr56bcw&ab_channel=Bal-Dez-One
*/

//Change Color of text input
document.getElementById("item").style.color = "grey";


//Numbers the list items
//querySelector returns the 1st element that matches a CSS selector
const list = document.querySelector('ol');     
const input = document.querySelector('input');     
const button = document.querySelector('button');     

// will respond when the button is being clicked
button.onclick = function() {
   let addItem = input.value; 
   input.value = ' ';

// Creates the element (node) => createELement    
let shopList = document.createElement('li');
let shopText = document.createElement('span'); 
let shopBtn = document.createElement('button'); 


// Add item to list
shopList.appendChild(shopText); 
shopText.textContent = addItem; 



// Add nodes & button to delete item from list 
shopList.appendChild(shopBtn);
shopBtn.textContent = 'Delete';
   list.appendChild(shopList);

shopBtn.onclick = function() {
   // Removes the shopping list item
   list.removeChild(shopList); 
 }
}

//Save Shopping List alert
function myList() {
   alert("You Have Saved Your Shopping List").document.getElementById("saveList").style.color = "blue";
 }



// Have user select Store and How much money to spend
function capitalizeStore(str) {
   capitalized = str.charAt(0).toUpperCase() + str.slice(1);
   return capitalized; }

//Takes user Input
const store = prompt('Select a Store: ');
const spend = prompt('How much are you planning to Spend?: ')


//Capitalize Store (first letter only)
const firstLetter = capitalizeStore(store);
const result = alert('Your Store is ' + firstLetter + ' and planning on spending $' + spend);
console.log(result);
//Display User's Input
let displayInput = `Store: ${firstLetter}  $${spend}`;
document.getElementById("displayInput").innerHTML = displayInput;



//Display Date of the Shopping List
const day = new Date();
const day1 = day.getMonth();
const day2 = day.getDate();
const day3 = day.getFullYear();
document.writeln('Current Date: ', day1 + 1 + "/", day2 + "/", day3);



//Add Link to more recepies. Open in the same window
let text = "Recepies";
let site123 = text.link("https://www.pinterest.com/search/pins/?q=meal%20recipes&utm_source=google&utm_medium=paid_search&utm_term=meal%20recipes&utm_pai=18447608779_147095406937_658967590773&creative_id=658967590773_kwd-298199626548&gclid=CjwKCAjw1MajBhAcEiwAagW9MbBRS_NmKLcwO0NKAL-tjtyPYsv2qAvh6TLjbMOZmfzZnuKZggn4WxoCp7oQAvD_BwE");

let recepies = "Check out more " + site123 + " for Grocery Shopping Ideas";
document.getElementById("site123").innerHTML = recepies;



//Interactive Shopping cart
var imgObj = null;           
function init() {
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function moveRight() {
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload = init;