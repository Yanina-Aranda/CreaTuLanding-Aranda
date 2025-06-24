export const products = [
    {
        name: 'Placar',
        price: 150000,
        description: 'Optimizá tu espacio con placares funcionales y elegantes. Diseñados a medida para adaptarse a tus necesidades y estilo.',
        stock: 10,
        img: 'https://i.postimg.cc/bJH3FxnD/cajones-de-madera.jpg',
        category: 'muebles'
    },
    {
        name: 'Puerta',
        price: 100000,
        description: 'Aportá calidez y distinción a tus ambientes con puertas de madera maciza. Resistentes, duraderas y con terminaciones de calidad.',
        stock: 15,
        img: 'https://i.postimg.cc/90L1ccJc/carpintero-femenino-con-sierra-electrica.jpg',
        category: 'puertas y ventanas'
    },
    {
        name: 'Bajo mesada',
        price: 180000,
        stock: 8,
        description: 'Renová tu cocina con bajo mesadas prácticos y modernos. Diseño personalizado, materiales resistentes y máxima funcionalidad.',
        img: 'https://i.postimg.cc/bJH3FxnD/cajones-de-madera.jpg',
        category: 'muebles'
    },
    {
        name: 'Marcos y molduras',
        price: 95000,
        stock: 18,
        description: 'Dale un toque único a tus espacios con marcos y molduras de madera. Detalles que transforman cualquier ambiente.',
        img: 'https://i.postimg.cc/sgQKRdSR/cierra.jpg',
        category: 'terminacion y acabados'
    }
]
let error = false

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(products)
            } else {
                reject('Hubo un error, intente más tarde')
            }
        }, 3000)
    })
}

//LOS ID COMO STRING
export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                let oneProduct = products.find((item) => item.id === id)
                resolve(oneProduct)
            } else {
                reject('Hubo un error, intente más tarde')
            }
        }, 3000)
    })
}

//SI TENGO LOS IDS COMO NUMBER, PARSEO EL ID QUE VIENE POR PARAMETRO
// export const getOneProduct = (id)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(!error){
//                 let oneProduct= products.find((item)=> item.id === Number(id))
//                 let oneProduct= products.find((item)=> item.id === parseInt(id))
//                 resolve(oneProduct)
//             }else{
//                 reject('Hubo un error, intente más tarde')
//             }
//         },3000)
//     })
// }