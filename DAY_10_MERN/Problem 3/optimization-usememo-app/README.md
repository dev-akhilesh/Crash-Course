### Assignment 3: Optimizing Component Performance with `useMemo`

**Objective:**
Optimize a component that performs an expensive calculation (e.g., filtering a large dataset) using the `useMemo` hook.

**Requirements:**

1. **Component Setup:**
    - Create a `HeavyComputationComponent` that accepts a large list of items (e.g., numbers or strings) and a filter term as props.
    - Implement an expensive computation, such as filtering through the list based on the filter term.
2. **Optimization with `useMemo`:**
    - Use the `useMemo` hook to memoize the result of the expensive computation, ensuring that the computation is only re-executed when the list of items or the filter term changes.
3. **UI Elements:**
    - Include input fields for users to enter a filter term and see the filtered results.
    - Optionally, display the time taken to perform the computation to illustrate the performance improvement.

**Focus Points:**

- Illustrate the use of `useMemo` to avoid unnecessary computations on every render.
- Highlight the performance benefits of memoization in React components.
