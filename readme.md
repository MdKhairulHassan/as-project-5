==========================================   QUESTION & ANSWER:   ==================================================

<!-- =====================================     QUESTION NO 1      ================================================ -->
Question No 1: What is the difference between getElementById, 
getElementsByClassName, and querySelector / querySelectorAll?
------------------------------------------     Answer of No 1:    ---------------------------------------------------

1.Selection Criteria:
getElementById(id): Selects a single element based on its unique id attribute.

getElementsByClassName(className): Selects multiple elements based on their class name. 

querySelector(selector): Selects the first element that matches a
specified CSS selector (e.g., #id, .class, tag, [attribute]).

querySelectorAll(selector): Selects all elements that match a specified CSS
selector.


2.Return Type: 
getElementById: Returns a single Element object or null if no
element with the given ID is found. 

getElementsByClassName: Returns a live
HTMLCollection of Element objects. "Live" means it automatically updates if
elements are added or removed from the DOM that match the class.

querySelector:Returns a single Element object or null if no element matches the selector.

querySelectorAll: Returns a static NodeList of Element objects. "Static" means
it does not update automatically with DOM changes after it's created.


3.Flexibility:
getElementById and getElementsByClassName:
Are specific to ID and class names, respectively, offering less flexibility in complex selections.

querySelector and querySelectorAll:
Offer significantly more flexibility as they can utilize any valid CSS selector, allowing for complex and precise element targeting, including combinations of IDs, classes, tag names, attributes, and pseudo-classes.

<!-- =====================================     QUESTION NO 2    ================================================-->
Question No 2: How do you create and insert a new element into the DOM?
-------------------------------------------   Answer of No 2:   -----------------------------------------------------

Create the Element: Use document.createElement() to create a new HTML element. The method takes a string representing the tag name of the element you want to create (e.g., "div", "p", "span").

Add Content: If the element needs content, we can add it using textContent or innerHTML. textContent is for plain text, while innerHTML allows us to insert HTML markup.

Set Attributes: We can set attributes like id, class, or other custom attributes using setAttribute().

Find a Parent Element: Identify an existing element in the DOM where you want to insert the new element. You can select it by its ID, class, or other selectors.

Insert the Element: Use methods like appendChild(), insertBefore(), or append() to insert the newly created element into the DOM relative to the parent element.
appendChild(newElement): Appends newElement as the last child of parentElement.

<!-- =====================================      QUESTION NO 3     ================================================= -->
Question No 3: What is Event Bubbling and how does it work?
-------------------------------------------    Answer of No 3:    -----------------------------------------------------
Event bubbling is the default JavaScript mechanism where an event that occurs on a specific DOM element propagates upward through its ancestors in the Document Object Model (DOM) tree, like a ripple in water, until it reaches the root element. When a user interacts with an element (the target element), its event handler executes first, followed by the handlers of its parent, then the parent's parent, and so on. This allows parent elements to "catch" and respond to events originating from their child elements, enabling powerful patterns like event delegation for efficient event management. 

work:
1.Event Trigger:
An event, such as a click or keypress, occurs on a target element within the DOM. 
2.Target Element:
The event handler attached directly to the target element executes first. 
3.Ancestors:
The event then "bubbles" up to the element's parent, then to its parent's parent, and so on, all the way up the DOM hierarchy. 
4.Handler Execution:
At each step of the bubbling process, if an event handler is attached to an ancestor element, that handler is also executed. 
5.Reaching the Root:
The bubbling continues until it reaches the document's outermost element, such as the <html> or <body> element.

<!-- =====================================      QUESTION NO 4     ================================================= -->
Question No 4: What is Event Delegation in JavaScript? Why is it useful?
-------------------------------------------    Answer of No 4:   -----------------------------------------------------
Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of your code, especially when dealing with dynamic content or a large number of elements. By leveraging event bubbling, you can reduce the number of event listeners and streamline your code.

<!-- =====================================      QUESTION NO 5     ================================================= -->
Question No 5: What is the difference between preventDefault() and stopPropagation() methods?
-------------------------------------------    Answer of No 5:    -----------------------------------------------------
event.preventDefault()
Purpose:
This method prevents the default action associated with an event from occurring.
Mechanism:
When called, it tells the browser not to execute the standard behavior that typically accompanies a specific event.
Examples:
Preventing a link (<a>) from navigating to its href URL when clicked.
Stopping a form (<form>) from submitting when a submit button is clicked.
Preventing the default scroll behavior when handling touch events on a mobile device.


event.stopPropagation()
Purpose:
This method prevents the event from propagating further through the DOM hierarchy during the event flow (bubbling or capturing phase).
Mechanism:
It stops the event from reaching parent or child elements that might also have event listeners for the same event type.
Examples:
If you have a button inside a div, and both have click handlers, calling stopPropagation() on the button's click event will prevent the div's click handler from being triggered.
In nested interactive elements, it can prevent unintended interactions with parent elements when a child element is clicked.

=================================================== END  ==========================================================