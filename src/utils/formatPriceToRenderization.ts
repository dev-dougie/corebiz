export function formatPriceToRenderization(price: Number){

    if(price === null || price === undefined){
        return;
    }

    const stringfyValue = String(price.toString());

    const cent = stringfyValue.slice(-2);
    const real = stringfyValue.slice(0, stringfyValue.indexOf(cent))

    const finalFormatting =  `${real},${cent}`

    return finalFormatting
}   