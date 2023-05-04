const Button = ({classname,children}) => {
  return (
    <button className={`btn ${classname}`}>{children}</button>
  )
}

export default Button