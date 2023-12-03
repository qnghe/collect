import { useEffect, useState } from "react";

function DarkMode() {
  const [mode, setMode] = useState('');

  useEffect(() => {
    window.localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div className="fixed right-8 bottom-12">
      <div className="cursor-pointer hover:text-cyan-400" onClick={() => setMode('dark')}>dark</div>
      <div className="cursor-pointer hover:text-cyan-400" onClick={() => setMode('')}>light</div>
      <div></div>
    </div>
  );
}
export default DarkMode;