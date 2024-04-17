### Assignment 2: Theme Switching Using Context API

**Objective:**
Implement a simple theme switcher using the Context API to dynamically change themes across the application.

**Requirements:**

1. **Theme Context Setup:**
    - Create a `ThemeContext` with two themes: 'light' and 'dark'. Each theme should define colors for background and text.
    - Use a `Context.Provider` to wrap the root component and manage the current theme state.

2. **Theme Switcher Component:**
    - Create a `ThemeSwitcher` component that renders a button to toggle between the 'light' and 'dark' themes.
    - The button click should update the context's current theme state.

3. **Consuming Context:**
    - Update the `UserForm` component from Assignment 1 to consume the `ThemeContext` and apply the current theme's styles to its elements.
    - Create at least one more component, such as `Header`, that also consumes the theme context to demonstrate theme consistency across different components.

4. **Styling:**
    - Apply the background and text colors from the theme context to styled components. Ensure the theme switch dynamically updates the styles.

**Focus Points:**
- Show how to use the Context API to manage global state (theme) and how it can be consumed by various components.
- Demonstrate the application of dynamic styling based on the current theme.

**Completion Criteria for Both Assignments:**
- The code should be clean, well-commented, and organized.
- Test the form and theme switching functionalities to ensure they work as expected.
- Be prepared to discuss your approach, particularly how you managed state in controlled vs. uncontrolled components and how you implemented the Context API for theme switching, during a review session.
