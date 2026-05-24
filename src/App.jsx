import './App.css'
import MemoItem from './components/MemoItem'

function App() {
  const appName = '我的备忘录'
  const today = new Date().toLocaleDateString()

  return (
    <div>
      <h1>{appName}</h1>
      <p className="date">今天：{today}</p>

      <MemoItem title="学习 React" content="Props 是从父组件传给子组件的数据" />
      <MemoItem title="准备晚餐" content="买菜、洗菜、做饭" />
    </div>
  )
}

export default App
