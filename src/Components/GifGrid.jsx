// Se va a encargar de renderizar las cards que vamos a traer de la API
// Como primer paso le pasamos la prop de category

// En el mapeo de images para renderizarlas, se puede desestructurar y no hace falta tener que estar
// llamando con notacion de puntos

// const GifGrid = ({category}) => {

//     const [images, setImages] = useState([])
//     const getImages = async() => {
//         const newImages = await getGifs(category)
//         setImages(newImages)
//         console.log(newImages)
//     }
//     useEffect(() => {
//         getImages()
//     }, [])
    

//   return (
//     <div>
//         <h3>{category}</h3>
//         {images.map(({id, title})=><p key={id}>{title}</p> )}
//     </div>
//   )
// }

// Importamos el GifItem que va a renderizar la imagen titulo, etc
// IMPORTANTE---------------
// Para las enviar las propiedades de la imagen se puede hacer asi:
// const GifGrid = ({category}) => {

//     const [images, setImages] = useState([])
//     const getImages = async() => {
//         const newImages = await getGifs(category)
//         setImages(newImages)
//         console.log(newImages)
//     }
//     useEffect(() => {
//         getImages()
//     }, [])
    

//   return (
//     <div className = "card-grid">
//         <h3>{category}</h3>
//         {images.map((image)=> <GifItem key={image.id}
//         title = {image.title}
//         url = {image.url}
//         /> )}
//     </div>
//   )
// }


// Sino de la siguiente forma, muy util
// ----------------------------------------------------

// Con el spread operator esparcimos todas las promiedades que tiene image, entonces en
// GifItem podemos tener acceso a la que queramos sin necesidad de llamar a cada una por separado

// const GifGrid = ({category}) => {

//     const [images, setImages] = useState([])
//     const getImages = async() => {
//         const newImages = await getGifs(category)
//         setImages(newImages)
//     }
//     useEffect(() => {
//         getImages()
//     }, [])
    

//   return (
//     <div className = "card-grid">
//         <h3>{category}</h3>
//         {images.map((image)=> <GifItem key={image.id}
//         {...image}
//         /> )}
//     </div>
//   )
// }

// export default GifGrid

import React from "react"
import { useFetchGifs } from "../hook/useFetchGifs"
import GifItem from "./GifItem"

const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category)
    

  return (
    <div className = "card-grid">
        <h3>{category}</h3>
        {isLoading ? (<h2>Cargando...</h2>) : images.map((image)=> <GifItem key={image.id}
        {...image}
        /> )}
        
    </div>
  )
}

export default GifGrid