import { useState } from 'react'

export interface Producto {
  id: number
  nombre: string
  precio: string
  tipo: string
  imagen: string
}

export function useEcomerce() {
  const [carrito, setCarrito] = useState<Producto[]>([])

  const estaEnCarrito = (id: number) => {
    return carrito.some((item) => item.id === id)
  }

  const agregarAlCarrito = (producto: Producto) => {
    if (!estaEnCarrito(producto.id)) {
      setCarrito((prev) => [...prev, producto])
    }
  }

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  return { carrito, agregarAlCarrito, eliminarDelCarrito, estaEnCarrito }
}