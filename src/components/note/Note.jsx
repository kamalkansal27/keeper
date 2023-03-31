import './Note.css'

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className='note'>
      <h1 className='notetitle'>{props.title}</h1>
      <p className='notecontent'>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  )
}
