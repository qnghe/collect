import './App.css';
import AppMenu from './pages/AppMenu';
import FloatTool from './components/FloatTool';
import Logo from './components/Logo';

function App() {
  return (
    <div className="h-screen text-base">
      <div className="flex h-screen dark:bg-black dark:text-white">
        <nav className="flex flex-col flex-none px-4 py-2 w-[250px] h-full overflow-y-auto border-0 border-r border-r-common border-solid">
          <div className="flex-none text-center text-xl text-primary">
            <Logo size='100' />
          </div>
          <AppMenu />
        </nav>
        <main className="flex-auto p-4"></main>
      </div>
      <FloatTool />
    </div>
  )
}

export default App
