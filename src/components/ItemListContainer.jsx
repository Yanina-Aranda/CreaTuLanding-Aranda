import { useEffect, useState } from "react";
import { getProducts, products } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "../css/ItemListContainer.css";
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(false)

    //firebase
    useEffect(() => {
        setLoading(true)
        //conectarnos con nuestra coleccion
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        //pedir los documentos
        getDocs(productsCollection)
            .then((res) => {
                //limpiar los datos para poder utilizar
                const list = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setData(list)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    //PROMESA
    {/* 
        useEffect(() => {
        setLoading(true)
        getProducts()
            .then((respuesta) => {
                if (categoryId) {
                    //filtrar
                    setData(respuesta.filter((prod) => prod.category === categoryId))
                } else {
                    //no filtro
                    setData(respuesta)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [categoryId])
    */}
    //SOLO SE HACE UNA SOLA VEZ
    {/*const subirData = () => {
        console.log("Subiendo prods...")
        const productsCollectionToAdd = collection(db, "productos")
        products.map((item) => addDoc(productsCollectionToAdd, item))
    } */}


    return (
        <>
            {loading
                ?
                <LoaderComponent />
                : <div>
                    {/*<button onClick={subirData}>Subir data</button> */}
                    <h1>{greeting}{categoryId && <span style={{ textTransform: 'capitalize' }}>{categoryId}</span>}</h1>
                    <ItemList data={data} />
                </div>}
        </>
    );
};

export default ItemListContainer;