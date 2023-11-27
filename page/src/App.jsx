import { useState } from 'react';
import './App.css';
import AppMenu from './pages/AppMenu';

function App() {
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col flex-none p-16 w-[250px] h-full overflow-y-auto">
        <div className="flex-none text-center text-24">logo</div>
        <AppMenu />
      </nav>
      <main className="flex-auto p-16">
        content
      </main>
    </div>
  )
}

export default App
