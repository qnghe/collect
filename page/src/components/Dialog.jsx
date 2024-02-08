
import Mask from './Mask';
const Dialog = ({ children, showMask }) => {
  let zIndex = window.popperZIndex++;
  return (
    <>
      {
        showMask ? <Mask /> : null
      }
      <div className="fixed top-0 left-0 w-full h-full" style={{zIndex: zIndex}}>
        <header>Title</header>
        <span className="">X</span>
        <main>{ children }</main>
      </div>
    </>
  );
}

export default Dialog;