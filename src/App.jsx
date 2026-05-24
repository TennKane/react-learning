import './App.css'
import MemoItem from './components/MemoItem'

function App() {
  const today = new Date().toLocaleDateString()

  const memos = [
    { id: 1, title: '学习 React', content: '学完 Props 和列表渲染', done: true },
    { id: 2, title: '准备晚餐', content: '买菜、洗菜、做饭', done: false },
    { id: 3, title: '锻炼身体', content: '跑步 30 分钟', done: false },
  ]

  return (
    <div>
      <h1>我的备忘录</h1>
      <p className="date">今天：{today}</p>
      <p className="summary">
        共 {memos.length} 条备忘录，
        {memos.filter(m => m.done).length} 条已完成
      </p>

      {memos.length === 0 ? (
        <p className="empty">暂无备忘录，添加一条吧</p>
      ) : (
        memos.map(memo => (
          <MemoItem
            key={memo.id}
            title={memo.title}
            content={memo.content}
            done={memo.done}
          />
        ))
      )}
    </div>
  )
}

export default App
