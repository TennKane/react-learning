function MemoItem({ title, content, done, onToggle, onDelete }) {
  return (
    <div className={`memo-item ${done ? 'done' : ''}`}>
      <h2>
        {title}
        {done && <span className="badge">已完成</span>}
      </h2>
      <p>{content}</p>
      <div className="memo-actions">
        <button className="btn-toggle" onClick={onToggle}>
          {done ? '撤销' : '完成'}
        </button>
        <button className="btn-delete" onClick={onDelete}>
          删除
        </button>
      </div>
    </div>
  )
}

export default MemoItem
