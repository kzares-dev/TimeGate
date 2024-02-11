
interface ButtonType {
    text: String,
    onClick?: () => void,
    type?: String,
    className?: String,
    
}

function Button({ text, className, onClick, type } : ButtonType ) {
  return (
    <button className={`${className} `}>
    { text }
    </button>
  )
}

export default Button
