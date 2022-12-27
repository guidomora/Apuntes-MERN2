// Creamos el useState
// Creamos la funcion para manejar el cambio del input
// const inputOnChange = ( event ) => {
//     setInputValue(event.target.value)
// }

// seleccionamos el evento y para acceder al valor tenemos que ir a target y ahi se encuentra el valor
// Por eso se escribe event.target.value
// Lo que hicimos fue desestructurar el evento y por eso ahora solo queda 

//    const inputOnChange = ({ target }) => {
//     setInputValue(target.value)
// }

// Creamos la fuincion para el submit del form
// const onSubmitForm = (event) => {
//     event.preventDefault()
//     console.log(inputValue)
// }

// Tambien le pasamos el evento y le hacemos un preventDefault para que cada vez que le demos enter no se borre lo que cargamos

// Para pasarle el value del input a GifExpertApp recibimos como prop desestructurada setCategories
// Todo esto va dentro de un array y luego hacemos un callback a las categorias existentes con el inputValue y la desestructuracion de las categorias
// a la funcion del form la dejamos asi

//     const onSubmitForm = (event) => {
//     event.preventDefault()
//     setCategories( (categories) => [inputValue, ...categories])
//     console.log(inputValue)
// }

// Le agregamos un if para que si inserta 1 o menos letras no agregue categorias a la lista y el setInputValue("")
// asi por cada enter que da el input se vuelve a un string vacio
//     const onSubmitForm = (event) => {
//     event.preventDefault()
//     if (inputValue.trim().length <= 1) return
//     setCategories( (categories) => [inputValue, ...categories])
//     setInputValue("")
// }


// const AddCategory = ({setCategories}) => {
//     const [inputValue, setInputValue] = useState("")

//     const inputOnChange = ({ target }) => {
//         setInputValue(target.value)
//     }

//     const onSubmitForm = (event) => {
//         event.preventDefault()
//         if (inputValue.trim().length <= 1) return
//         setCategories( (categories) => [inputValue, ...categories])
//         setInputValue("")
//     }

//     return (
//         <form onSubmit={onSubmitForm}>
//             <input
//                 type="text"
//                 placeholder="Buscar gifs"
//                 value={inputValue}
//                 onChange={inputOnChange}
//             />
//         </form>


//     )
// }



// Aca borramos el setCategories de las props y le pasamos onNewCategory
// Borramos la funcion setCategories( (categories) => [inputValue, ...categories]) y lo cambiamos por
// onNewCategory(inputValue)

import React, { useState } from 'react'

const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("")

    const inputOnChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCategory(inputValue)
        setInputValue("")
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={inputOnChange}
            />
        </form>


    )
}

export default AddCategory