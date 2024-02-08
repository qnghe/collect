
const Mask = () => {
  let zIndex = window.popperZIndex++;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50" style={{zIndex: zIndex}}></div>
  );
};

export default Mask;