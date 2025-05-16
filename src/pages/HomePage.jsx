import HeaderComponent from "../components/HeaderComponent"

function Homepage() {
  const saySomething = ()=>{
    console.log("Di algo")
    alert("Ahora");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div id="homeC">
        Homepage
        <hr />
        <button onClick={saySomething}>Pulsa Click</button>
      </div>
    </>
    
  )
}

export default Homepage