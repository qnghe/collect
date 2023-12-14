import DarkMode from './DarkMode';

function FloatTool() {
  return (
    <aside className="fixed right-10 bottom-20">
      <div
        className="hover:text-primary cursor-pointer"
        onClick={() => showCategory()}
      >添加分类</div>
      <div
        className="hover:text-primary cursor-pointer"
      >添加内容</div>
      <DarkMode />
    </aside>
  )
}

export default FloatTool;