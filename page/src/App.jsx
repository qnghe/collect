import { useState } from 'react';
import './App.css';
import AppMenu from './pages/AppMenu';

function App() {
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col flex-none p-4 w-[250px] h-full overflow-y-auto">
        <div className="flex-none text-center text-xl">logo</div>
        <AppMenu />
      </nav>
      <main className="flex-auto p-4">
        content
      </main>
    </div>
  )
}

export default App
