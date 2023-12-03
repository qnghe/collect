import './App.css';
import AppMenu from './pages/AppMenu';
import DarkMode from './components/DarkMode';

function App() {
  const theme = window.localStorage.getItem("theme");
  return (
    <div className={`${theme} h-screen`}>
      <div className="flex h-screen dark:bg-black dark:text-white">
        <nav className="flex flex-col flex-none p-4 w-[250px] h-full overflow-y-auto">
          <div className="flex-none text-center text-xl">logo</div>
          <AppMenu />
        </nav>
        <main className="flex-auto p-4">
          content
        </main>
      </div>
      <DarkMode />
    </div>
  )
}

export default App
