const products = [
    {
        id: '01',
        name: 'Random 1',
        price: 1500,
        description: 'lorem ipsums lore lorem',
        stock: 10,
        img: 'https://i.postimg.cc/bJH3FxnD/cajones-de-madera.jpg',
        category: 'muebles'
    },
    {
        id: '02',
        name: 'Random 2',
        price: 500,
        description: 'lorem ipsums lore lorem',
        stock: 15,
        img: 'https://i.postimg.cc/90L1ccJc/carpintero-femenino-con-sierra-electrica.jpg',
        category: 'puertas y ventanas'
    },
    {
        id: '03',
        name: 'Random 3',
        price: 8000,
        stock: 8,
        description: 'lorem ipsums lore lorem',
        img: 'https://i.postimg.cc/bJH3FxnD/cajones-de-madera.jpg',
        category: 'muebles'
    },
    {
        id: '04',
        name: 'Random 4',
        price: 9000,
        stock: 18,
        description: 'lorem lore lorem',
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