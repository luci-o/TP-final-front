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
  <input type="Usuario"  placeholder="Usuario" />
  <input type="Contraseña"  placeholder="Contraseña"/>
  <button onClick={() => setIrAEcomerce(true)}>Continuar</button>
 </div>
  );
}
export default inicio;