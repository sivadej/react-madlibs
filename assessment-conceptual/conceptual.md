### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - react is a front end js library. its focus on small, reusable components makes it scalable. it is one of, if not the most, popular js framework/library being used today.

- What is Babel?
  - babel is a js transpiler that converts ES6 javascript into plain javascript, which allows the javascript to run on older browsers

- What is JSX?
  - JSX is an HTML-like syntax that can be used in javascript, especially useful in react. HTML elements can be written in javascript to be rendered in the DOM

- How is a Component created in React?
  - Components are classes or functions that renders to the DOM

- What are some difference between state and props?
  - props are variables passed to a component from its parent component. state is initialized and managed by the component.

- What does "downward data flow" refer to in React?
  - in react, data only flows one way, mainly as props passed through components. 

- What is a controlled component?
  - form data is handled by react in a controlled component. inputs are managed as state

- What is an uncontrolled component?
  - form data is handled by the DOM in an uncontrolled component

- What is the purpose of the `key` prop when rendering a list of components?
  - key props in list are a unique identifier when repeat components are used on the DOM. this is especially important for testing, and in situations when the components are being added and removed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - if an array changes, react will re-render it and reassign index values accordingly. This can cause the key to mismatch the array index if array elements are removed and/or reassigned.

- Describe useEffect.  What use cases is it used for in React components?
  - useEffect is a hook to perform actions when something renders. It can be used for API calls and setting timers.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - useRef is a hook that returns a mutable ref object that can be changed without affecting the component state. Since it doesn't affect state, it will not cause a rerender of a component.

- When would you use a ref? When wouldn't you use one?
  - useRef should be used for managing form focus, text selection, triggering animations or integrating third-party libraries. Dont use it in cases where you could change state instead.

- What is a custom hook in React? When would you want to write one?
  - Custom hooks allow reuse of stateful logic. State and effects inside each hook are isolated. This could only be done previously using higher order functions or libraries like Redux. 