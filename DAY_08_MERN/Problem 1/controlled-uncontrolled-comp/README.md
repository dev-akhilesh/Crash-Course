### Assignment 1: Controlled vs. Uncontrolled Components

**Objective:**
Create a form that uses both controlled and uncontrolled components, illustrating the differences in handling form data in React.

**Requirements:**

1. **Form Setup:**
    - Implement a form in a new React component called `UserForm`.
    - The form should include:
        - A controlled text input for the user's name.
        - An uncontrolled text input for the user's email using `ref`.
2. **Controlled Input:**
    - For the controlled input, maintain the input's state using the `useState` hook.
    - Implement an `onChange` handler to update the state as the user types.
3. **Uncontrolled Input:**
    - Use the `useRef` hook to create a ref for the uncontrolled input.
    - Provide a "Submit" button. On clicking the button, log the values of both inputs to the console.
4. **Validation Display:**
    - Add simple validation that checks if the name is at least 3 characters long.
    - Display a message under the name input if the validation fails.

**Focus Points:**

- Demonstrate the difference in handling user input between controlled and uncontrolled components.
- Show how to use refs with uncontrolled components.
