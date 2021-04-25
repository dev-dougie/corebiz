import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import Cookie from 'js-cookie'


type CartContextData = {
    incrementCart: () => void;
    item: number;
}

type CartContextProviderProps = {
    children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const quantityItens = Cookie.get('itens')
    const [item, setItem] = useState(Number(quantityItens) || 0)

    useEffect(() => {
        Cookie.set('itens', Number(item))
    }, [item])

    const incrementCart = () => {
        setItem(item + 1);
    }

    return (
        <CartContext.Provider value={{ incrementCart, item }}>
            { children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}