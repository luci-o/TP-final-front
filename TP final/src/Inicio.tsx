import { useState } from 'react'
import Ecomerce from './Ecomerce'
function inicio(){
  const [irAEcomerce, setIrAEcomerce] = useState(false)

  if (irAEcomerce) {
    return <Ecomerce />
  }
  return(
    <div>
   <header>
   <h1>Bienvenido</h1>
   <h3>Inicia sesión para continuar</h3>
 </header>
  <input id="usuario" type="Text"  placeholder="Usuario" />
  <input id="contraseña" type="Password"  placeholder="Contraseña"/>
  <button onClick={() => {
    const valUsuario = document.getElementById("usuario").value;
    const valContraseña = document.getElementById("contraseña").value;
    
  if (valUsuario === '' || valContraseña === '') {
    setIrAEcomerce(false);
} else {
    setIrAEcomerce(true);
  }
}}>
  Continuar
</button>
 </div>
  );
}
export default inicio;