import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { db } from "../service/firebase"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio'),
    address: yup.string().required('La dirección es obligatoria'),
    email: yup.string().email('Email inválido').required('El email es obligatorio'),
    email2: yup.string()
        .oneOf([yup.ref('email'), null], 'Los correos no coinciden')
        .required('Debes confirmar el email')
})

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, cartTotal, clear } = useContext(CartContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const finalizarCompra = async (data) => {
        const orden = {
            comprador: {
                name: data.name,
                address: data.address,
                email: data.email
            },
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        try {
            const ventas = collection(db, "orders")
            const res = await addDoc(ventas, orden)
            setOrderId(res.id)
            clear()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {
                orderId
                    ? <div>
                        <h2>Generaste correctamente tu compra!</h2>
                        <h2>El id es: {orderId} </h2>
                        <Link to='/' className='btn btn-dark'>Volver a home</Link>
                    </div>
                    : <div>
                        <h1>Completa con tus datos</h1>
                        <form onSubmit={handleSubmit(finalizarCompra)}>
                            <input
                                className='form-control my-2'
                                type='text'
                                placeholder='Nombre completo'
                                {...register('name')}
                            />
                            {errors.name && <p className="text-danger">{errors.name.message}</p>}

                            <input
                                className='form-control my-2'
                                type='text'
                                placeholder='Dirección de envío'
                                {...register('address')}
                            />
                            {errors.address && <p className="text-danger">{errors.address.message}</p>}

                            <input
                                className='form-control my-2'
                                type='email'
                                placeholder='Correo electrónico'
                                {...register('email')}
                            />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}

                            <input
                                className='form-control my-2'
                                type='email'
                                placeholder='Repetir correo electrónico'
                                {...register('email2')}
                            />
                            {errors.email2 && <p className="text-danger">{errors.email2.message}</p>}

                            <button className='btn btn-success' type='submit'>Finalizar compra</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Checkout
