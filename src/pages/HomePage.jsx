import HeaderComponent from "../components/HeaderComponent"

function Homepage() {
  const saySomething = ()=>{
    console.log("Di algo")
    alert("Ahora");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>Homepage</div>
      <hr />
      <button onClick={saySomething}>Pulsa Click</button>
    </>
    
  )
}

export default Homepage