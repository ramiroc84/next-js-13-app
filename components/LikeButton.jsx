'use client'
import { useState } from 'react'

// siempre hay que intentar que el componente de cliente sea el mas peque asi el bundle es mas peque
// para especificar que es un componente cliente se agrega la linea 'use client' al comienzo del archivo
// https://github.com/midudev/preguntas-entrevista-react

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false)
  return (
    <button onClick={() => setLiked(prev => !prev)}>

      {liked ? 'full heart' : 'empty heart'}
    </button>

  )
}

export default LikeButton
