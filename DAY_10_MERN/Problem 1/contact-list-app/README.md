### Assignment 1: Implementing a List Component with the `Key` Prop

**Objective:**
Create a `ContactList` component that renders a list of contacts. Each contact will have a name and an email address.

**Requirements:**

1. **Data Structure:** Use an array of objects for the contacts, where each object has `id`, `name`, and `email` properties.
2. **Rendering List Items:**
   - Map over the contacts array to render each contact in an unordered list (`<ul>`).
   - Use the `id` property of each contact as the `key` prop for each list item (`<li>`).
3. **Addition Mechanism:**
   - Implement a simple form above the list to add a new contact. Use controlled components for the form inputs.
   - Ensure that each new contact added to the list has a unique `id`.

**Focus Points:**

- Demonstrate understanding of the importance of the `key` prop in lists for React's re-rendering optimization.
- Show ability to manage form state and list state in React.
