const Dialog = ({ children }) => {
  let zIndex = window.popperZIndex++;
  return (
    <div className="fixed top-0 left-0 w-full h-full" style={{zIndex: zIndex}}>
      <header>Title</header>
      <span className="">X</span>
      <main>{ children }</main>
    </div>
  );
}

export default Dialog;