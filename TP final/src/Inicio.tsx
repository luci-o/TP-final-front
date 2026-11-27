import { useState } from 'react'
import Ecomerce from './Ecomerce'

function inicio(){
  const [irAEcomerce, setIrAEcomerce] = useState(false)
  const [usuario, setUsuario] = useState(false)

  if (irAEcomerce) {
    return <Ecomerce nombreUsuario={usuario} />
  }

  const estilos = {
    contenedor: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f4f6f8',
      padding: '20px'
    },
    tarjeta: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '350px',
      backgroundColor: '#ffffff',
      padding: '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '25px'
    },
    titulo: {
      margin: '0 0 8px 0',
      fontSize: '28px',
      color: '#1a1a1a'
    },
    subtitulo: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 'normal',
      color: '#666666'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      marginBottom: '15px',
      borderRadius: '25px',
      border: '1px solid #cccccc',
      fontSize: '15px',
      boxSizing: 'border-box',
      outline: 'none'
    },
    boton: {
      width: '100%',
      padding: '12px',
      marginTop: '5px',
      borderRadius: '25px', 
      border: 'none',
      backgroundColor: '#2ecc71', 
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer'
  
    }
  };

  return(
    <div style={estilos.contenedor}>
      <div style={estilos.tarjeta}>
        <header style={estilos.header}>
          <h1 style={estilos.titulo}>Bienvenido</h1>
          <h3 style={estilos.subtitulo}>Inicia sesión para continuar</h3>
        </header>

        <input 
          id="usuario" 
          type="Text" 
          placeholder="Usuario" 
          style={estilos.input} 
        />
        
        <input 
          id="contraseña" 
          type="Password" 
          placeholder="Contraseña" 
          style={estilos.input} 
        />

        <button 
          style={estilos.boton}
          onClick={() => {
            const valUsuario = document.getElementById("usuario").value;
            const valContraseña = document.getElementById("contraseña").value;
            
            if (valUsuario === '' || valContraseña === '') {
              setIrAEcomerce(false);
            } else {
              setUsuario(valUsuario);
              setIrAEcomerce(true);
            }
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default inicio;