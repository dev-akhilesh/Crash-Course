### Assignment 1: Enhancing the Theme Switcher with Context API

**Objective:** Refine the simple theme switcher application from Day-2 to use the Context API for dynamically changing themes across the entire application.

**Requirements:**

1. **Setup ThemeContext:**
    - Create `ThemeContext` with two possible themes: `light` and `dark`. Define these themes in a separate file (`themes.js`), specifying colors for background, text, etc.
    - Implement `ThemeProvider` component that wraps your app's root component and uses `useState` to manage the current theme.
2. **Implement ThemeSwitcher Component:**
    - Create a `ThemeSwitcher` component that renders a toggle button.
    - Clicking the button should switch between the `light` and `dark` themes by updating the context.
3. **Consuming ThemeContext:**
    - Modify existing components (e.g., `Header`, `Footer`, `Main`) to consume `ThemeContext` and apply the current theme's styles.

**Focus Points:**

- Utilize Context API effectively to manage and propagate the app’s theme state.
- Ensure that theme changes are dynamically applied across all components without reloading.
