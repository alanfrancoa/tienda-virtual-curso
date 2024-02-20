import { stock } from '../data/stock'

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        //Establecemos una demora de carga de 1s
        setTimeout(() => {
            resolve(stock)
            reject("Rechazado")

        }, 500)
    })
}
