type Guitar = {
    id: string
    name: string
    image: string
    description:  string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

export type CartItem = 

// export interface CartItem extends Guitar & {
//     quantity: number
// }
// cartitem puede ser una interfaz y heredar de un type  
// es similar a Java o PHP que utilizan la palabra reservada extends