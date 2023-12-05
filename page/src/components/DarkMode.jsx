import { useEffect, useLayoutEffect, useState } from "react";

function storeDarkMode(darkMode) {
  if (darkMode) {
    window.localStorage.setItem('darkMode', darkMode);
  } else {
    window.localStorage.removeItem('darkMode');
  }
}
function getDarkMode() {
  return window.localStorage.getItem('darkMode');
}

function changeHTMLClass(darkMode) {
  const rootEl = document.querySelector('html');
  if (darkMode) {
    rootEl.classList.add('dark');
  } else {
    rootEl.classList.remove('dark');
  }
}

function DarkMode() {
  const [darkMode, setDarkMode] = useState(getDarkMode);

  useLayoutEffect(() => {
    storeDarkMode(darkMode);
    changeHTMLClass(darkMode);
  }, [darkMode]);

  return (
    <div className="fixed right-10 bottom-20">
      <div className="cursor-pointer hover:text-primary" onClick={() => setDarkMode(true)}>dark</div>
      <div className="cursor-pointer hover:text-primary" onClick={() => setDarkMode(false)}>light</div>
      <div></div>
    </div>
  );
}
export default DarkMode;