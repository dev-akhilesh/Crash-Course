### Assignment 2: Creating and Using a Custom Hook for Data Fetching

**Objective:**
Develop a custom hook named `useFetch` that abstracts the logic for fetching data from an API and incorporate it into a component to display the fetched data.

**Requirements:**

1. **Custom Hook - `useFetch`:**
    - The `useFetch` hook should accept a URL as an argument and return the data, loading status, and any error from the fetch operation.
    - Use `useState` and `useEffect` hooks within `useFetch` to manage the fetching state and perform the side effect of fetching.
2. **Data Display Component:**
    - Create a component (e.g., `PostsList`) that uses the `useFetch` hook to fetch data from a placeholder API like `https://jsonplaceholder.typicode.com/posts`.
    - Render the fetched posts or a loading indicator/error message based on the fetch status.

**Focus Points:**

- Show how to encapsulate data fetching logic in a reusable custom hook.
- Demonstrate handling of asynchronous operations and state management within a custom hook.
