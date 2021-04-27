export const getQuantity = product => 
          product.installments.map(qtt => qtt.quantity)

export default getQuantity;