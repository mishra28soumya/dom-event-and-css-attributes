// Getting attributes of an element
const myImage= document.getElementById('sampleImg');
const src = myImage.getAttribute('src') //image.png


//setting attribute (change the image)
myImage.setAttribute('src','image2.jpg')


//checking if attribute is present
myImage.hasAttribute('name') //false
myImage.hasAttribute('src') //true


//remove attribute
myImage.removeAttribute('src')

