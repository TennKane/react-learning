function MemoItem(props) {
  return (
    <div className="memo-item">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default MemoItem
