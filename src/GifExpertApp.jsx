// Apuntes acordarse de que siempre que iniciemos una app con vite hay que hacer npm install

// Creamos el useState y vamos renderizando las listas
// Creamos la funcion onAddCataregory la cual vamos a usar para agregar una categoria. 
// usamos el seter, ponemos el spread operator para crear una copia y despues le pasamos el valor que quiero agregar.
// si la categoria la queremos insertar al inicio primero le pasamos el valor y luego el spread (lo vamos a dejar asi)

// Pasamos como prop setCategories

// const GifExpertApp = () => {

//     const [categories, setCategories] = useState(["One Punch", "Demon Slayer"])
//     const onAddCategory = () => {
//         setCategories(["Naruto", ...categories])
//     }

//     return (
//         <div>
//             <h2>Hola</h2>
//             <AddCategory setCategories={setCategories}/>
//             <button onClick={onAddCategory} >Agregar</button>
//             <ol>
//                 {categories.map(x => <li key={x}>{x}</li> )} 
//             </ol>
//         </div>
//     )
// }

// export default GifExpertApp;



// Aca modificamos el metodo para pasar la nueva categoria, asi queda mucho mas prolijo y se entiende mas
// Le pasamos onNewCategory event pasa como argumento y se lo mandamos a la funcion de onNewCategory 
// Se podria remover event de los dos lados y que quede solo onNewCategory. Asi: onNewCategory={onAddCategory}


// Asi como esta el codigo, funciona bien pero nos arroja error cada vez que ponemos una categoria reopetida
// Por el tema de que cada key debe ser unica
// const GifExpertApp = () => {

//     const [categories, setCategories] = useState(["One Punch", "Demon Slayer"])
//     const onAddCategory = (onNewCategory) => {
//         console.log(onNewCategory)
//         setCategories([onNewCategory, ...categories])
//     }

//     return (
//         <div>
//             <h2>Hola</h2>
//             <AddCategory onNewCategory={event => onAddCategory(event)}/>
//             <button onClick={onAddCategory} >Agregar</button>
//             <ol>
//                 {categories.map(x => <li key={x}>{x}</li> )} 
//             </ol>
//         </div>
//     )
// }


// Si en categories existe, ejecuta el return
// const onAddCategory = (newCategory) => {
//     if(categories.includes(newCategory)) return
//     setCategories([newCategory, ...categories])
// }



// Importamos nuestro componente de GidGrid 

import "./styles.css"
import { useState } from "react"
import AddCategory from "./Components/AddCategory"
import GifGrid from "./Components/GifGrid"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch", "Demon Slayer"])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <div>
            <h2>Hola</h2>
            <AddCategory onNewCategory={event => onAddCategory(event)} />
            <button onClick={onAddCategory} >Agregar</button>
            <ul>
                {categories.map(category => (
                    <GifGrid category={category} key={category} />)
                )}
            </ul>

        </div>
    )
}

export default GifExpertApp;


