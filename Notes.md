

1. appendChild() allows you to add a node to the end of the list of child nodes of a specified parent node.

2. In setAttribute(name,value), if the attribute already exists on the element, the setAttribute() method updates the value; otherwise, it adds a new attribute with the specified name and value


3. An event is an action that occurs in the web browser, eg button click, scroll, mouse-enter

4. event handler is a block of code that will execute when the event occurs. It is also called event listener

5. Event flow explains the order in which events are received on the page from the element where the event occurs and propagated through the DOM tree.
There are two main event models (or type of event flow):
    a. Event bubbling => an event starts at the most specific element and then flows upward toward the least specific element. Capture:false
    b. Event capturing => starts at the least specific element and flows downward toward the most specific element. capture:true
