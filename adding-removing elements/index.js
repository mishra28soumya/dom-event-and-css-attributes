/** Adding Elements */

// creating and adding direct text node
const newText = document.createTextNode("Hello")
document.body.appendChild(newText) 

//creating html tags
// creating h1 and adding text to it
h = document.createElement('h1')
t = document.createTextNode('I am h1')
h.appendChild(t)

//creating nested tags and adding text
d = document.createElement('div')
p = document.createElement('p')
t = document.createTextNode('I am p')
p.appendChild(t)
d.appendChild(p)
document.body.appendChild(d) 

//alternative way
d = document.createElement('div');
d.innerHTML = '<p>I am p</p>';
document.body.appendChild(d);

// creating and adding list of elements
list = document.getElementById("shoppingList")
l1 = document.createElement('li')
l1.textContent="Bread"
l2 = document.createElement('li')
l2.textContent="Milk"
l3 = document.createElement('li')
l3.textContent="Apple"
list.appendChild(l1)
list.appendChild(l2) 


/** Removing Elements */

// Removing one by one
list.removeChild(list.lastElementChild)
list.removeChild(l1);

// Repeatedly removing elements
while (list.firstChild) {
    list.removeChild(list.firstChild);
}