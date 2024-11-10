


const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const h1_element = document.createElement("h1");
h1_element.innerHTML = "DOM Manipulation";
mainEl.appendChild(h1_element);


mainEl.classList.add("flex-ctr");


const topMenuEl = document.getElementById("top-menu");


topMenuEl.style.height = "100%";

let myOtherVar = "--top-menu-bg";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
:
for (let i = 0; i < menuLinks.length; i++) {
 
  let a_element = document.createElement("a");
  
  a_element.attributes.href = menuLinks[i].href;
  
  a_element.innerHTML = menuLinks[i].text;
  
  topMenuEl.appendChild(a_element);
