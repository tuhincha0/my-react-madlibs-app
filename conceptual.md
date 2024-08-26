# Conceptual Questions

## 1. What is React? When and why would you use it?
React is a JavaScript library for building user interfaces, particularly single-page applications where data dynamically changes over time. It allows developers to create reusable UI components that manage their own state, which makes the code more predictable and easier to debug. Use React when you need to build a complex, interactive web application with a focus on user experience.

## 2. What is Babel?
Babel is a JavaScript compiler that transforms ES6+ code into backwards-compatible JavaScript for older browsers. It allows developers to use the latest JavaScript features without worrying about browser compatibility.

## 3. What is JSX?
JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript files. It makes it easier to create React components by blending HTML and JavaScript seamlessly.

## 4. How is a Component created in React?
A React component can be created as a function or a class. A functional component is a JavaScript function that returns JSX. A class component is a JavaScript class that extends `React.Component` and has a `render` method that returns JSX.

## 5. What are some differences between state and props?
- **State** is a local data storage that is private to the component and can be modified within the component.
- **Props** are inputs to a component that are passed down from a parent component and cannot be modified by the component receiving them.

## 6. What does "downward data flow" refer to in React?
"Downward data flow" in React means that data flows from parent components to child components via props. This ensures that the UI is consistently rendered based on the current state of the data.

## 7. What is a controlled component?
A controlled component in React is a form element (like an input, textarea, or select) whose value is controlled by the React state. The value of the input is set by the state, and any changes to the input are handled by event handlers that update the state.

## 8. What is an uncontrolled component?
An uncontrolled component is a form element that maintains its own internal state. Instead of using React to control its value, you retrieve the value directly from the DOM using a ref.

## 9. What is the purpose of the `key` prop when rendering a list of components?
The `key` prop is used to help React identify which items in a list have changed, been added, or removed. It helps optimize the rendering process by allowing React to maintain the correct state of the elements.

## 10. Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using an array index as a `key` can lead to issues with component state when items are reordered, added, or removed. This can cause React to misidentify components and lead to unexpected behavior or poor performance.

## 11. Describe useEffect. What use cases is it used for in React components?
`useEffect` is a React hook that performs side effects in function components. It can be used for operations like data fetching, setting up subscriptions, or manually changing the DOM. It runs after every render by default but can be configured to run only when certain state or props change.

## 12. What does useRef do? Does a change to a ref value cause a rerender of a component?
`useRef` is a React hook that creates a mutable object that persists across renders. Changes to the ref's `current` value do not cause a component to rerender.

## 13. When would you use a ref? When wouldn't you use one?
Use refs for accessing DOM elements directly, keeping track of previous state values, or storing mutable values that don't need to trigger a rerender. Avoid using refs to store values that should trigger a rerender when changed; use state instead.

## 14. What is a custom hook in React? When would you want to write one?
A custom hook is a reusable function that contains logic for React components. It allows you to extract and share logic between components. You would write a custom hook when you have stateful logic that needs to be reused across multiple components.
