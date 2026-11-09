import { useContext } from 'react'
import { EcomerceContext } from '../context/EcomerceContext'

export function useEcomerce() {
  const context = useContext(EcomerceContext)
  if (context === undefined) {
    throw new Error('useEcomerce debe usarse dentro de un EcomerceProvider')
  }
  return context
}