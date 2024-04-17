import './App.css'
import UserForm from './UserForm'
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <Header/>
        <UserForm />
      </div>
    </ThemeProvider>
  )
}

export default App
