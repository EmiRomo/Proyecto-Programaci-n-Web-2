import 'bootstrap/dist/css/bootstrap.css';



function Ejemplo() {
      const usuario = {
            nombre: "Marina",
            edad: 25,
            login: true,
            foto:"https://i.ytimg.com/vi/8O_4DaPgZKE/maxresdefault.jpg"
        };
    return ( 
      <div class="card" style={{width: "18rem"}}>
        <img src= {usuario.foto} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">bienvenido {usuario.nombre} </h5>
            <p class="card-text">{usuario.nombre} tu tienes {usuario.edad} y  
            {usuario.login ? " eres usuario" : "no eres usuario"}</p>
           
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
       </div>
     );
}

export default Ejemplo;