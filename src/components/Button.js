function Button( {label, handleButtonClick} ) {
  return (
    <button onClick={(e) => handleButtonClick(e)}>{label}</button>
  )
}

export default Button;