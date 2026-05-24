function MemoItem({ title, content, done }) {
  return (
    <div className={`memo-item ${done ? 'done' : ''}`}>
      <h2>
        {title}
        {done && <span className="badge">已完成</span>}
      </h2>
      <p>{content}</p>
    </div>
  )
}

export default MemoItem
