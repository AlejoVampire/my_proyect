import HeaderComponent from "../components/HeaderComponent"
function BlogPage() {
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("El formulario se ha enviado");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div id="contenido">BlogPage
        <form action="">
          <fieldset>
            <label htmlFor="username">Nombre</label>
            <input type="text" id="username" />
          </fieldset>
          <fieldset>
            <label htmlFor="comentario">Comentario</label>
            <input type="text" id="comentario" />
          </fieldset>
          <button onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default BlogPage