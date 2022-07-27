h = document.getElementById("myHeading")
h.style.color="red" 

//appending to the existing style
h.style.cssText += 'color:red;background-color:yellow';

// h.setAttribute('style','color:red;background-color:yellow');



//class name

para = document.querySelector("p")
console.log(para.className) 

//class list
d = document.querySelector('div')
d.classList
d.classList.add("class3")

//removing elements class
d.classList.remove('class3');