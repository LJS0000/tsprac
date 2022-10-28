const App = () => {

  type Test = string | number

  let myName :Test = "jisu"

  const typeFunc = (x :number) :number => {
    return x=10;
  }
  typeFunc(10)

  return (
    <div>
      {myName}
    </div>
  )
}

export default App;
