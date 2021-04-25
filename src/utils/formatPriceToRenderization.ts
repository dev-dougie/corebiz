export function formatPriceToRenderization(price: String){

    if(price === null || price === undefined){
        return;
    }

    //const stringfyValue = String(price.toString());

    const cent = price.slice(-2);
    const real = price.slice(0, price.indexOf(cent))

    const finalFormatting =  `${real},${cent}`

    return finalFormatting
}   