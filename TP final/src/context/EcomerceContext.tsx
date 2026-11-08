import { createContext } from 'react'

export interface Producto {
  id: number
  nombre: string
  precio: string
  tipo: string
}

export interface EcomerceContextType {
  carrito: Producto[]
  agregarAlCarrito: (producto: Producto) => void
  eliminarDelCarrito: (id: number) => void
  estaEnCarrito: (id: number) => boolean
}

export const EcomerceContext = createContext<EcomerceContextType | undefined>(undefined)