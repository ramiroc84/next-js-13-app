// para utilizar un layout compartido por varias rutas, creo una carpeta (xxx), ubico las carpetas delas rutas ahi y
// creo un layout.jsx
const Layout = ({ children }) => {
  return (
    <>
      <marquee style={{ background: '#bbb', color: 'red' }}> Layout</marquee>
      {children}
    </>
  )
}

export default Layout
