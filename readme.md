#AGENDA

1. Adding elements

    a. createElement()
    
    b. appendChild()

2. Removing Elements

    a. removing elements one by one
    
    b. removing elements repeatedly
    

3. Modifying Elements

    a. getAttribute() 
    
        => gets the value of the attribute
        
        => returns the value of the attribute if the attribute exits otherwise returns null
        

    b. setAttribute()
    
        => sets the value of the attribute
        
        => returns undefined
        
    
    c. hasAttribute()
    
        => checks if the attribute is present
        
        => returns true or false
        

    d. removeAttribute()
    
        => removes the mentioned attribute
        
        => returns undefined
        

4. Event listeners

    a. what are events
    
    => actions that happen on a webpage (click, scroll, mouse-enter, mouse-exit, double click, etc)

    b. what are event handlers/event listeners 
    
    => listen to an event and perform some action/operation. Event listeners are also called event handlers.

    c. event flow 
    
    => explains the order in which events are recieved on the page
    

        => event bubbling : starts from the most specific element and then flows upwards towards the least specific element [by default]

        => event capturing : starts from the least specific element and goes to the most specific element


    d. adding event listeners
    
        => html => using attributes

        => addEventListener(event,function, capture) : [preferred]

    e. remove event listeners
    

5. Modifying CSS of the elements


    a. setting style => `element.style.<property>=<value>`
    
    
    b. appending style => `element.style.cssText = element.style.cssText +<value>`
    
    
    c. viewing class names => `element.className`
    
    d. adding class names => `element.classList.add('name')`
    
    e. removing classnames => `element.classList.remove('name')`
