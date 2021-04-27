export const getValue = product => 
          product.installments.map(val => val.value);

export default getValue;