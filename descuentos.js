// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const  precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    
    const finalPrice = document.getElementById("finalPrice");
    finalPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}

function onClickButtonCoupon(){
    //Forma 1, con esta forma aplicamos descuento y cupones por separado...
    
    // const inputPrice = document.getElementById("InputPrice");
    // const priceValue = inputPrice.value;

    // const inputCoupon = document.getElementById("InputCoupon");
    // const couponValue = inputCoupon.value;
    
    // const coupons = [
    //             {
    //                 name: "luis1",
    //                 discount: 10,
    //             },
    //             {
    //                 name: "luis2",
    //                 discount: 20,
    //             },
    //             {
    //                 name: "luis3",
    //                 discount: 30,
    //             }
                
    // ]

    // const isCouponValueValid = function (coupon) {
    //     return coupon.name === couponValue;
    // };
    // //Another form
    // const isCouponValueValid2 = coupon => coupon.name === couponValue;
    
    // const userCoupon = coupons.find(isCouponValueValid2);

    // if (!userCoupon) {
    //     alert("El cupón " + couponValue + " no es válido");
    // }else {
    //     const descuento = userCoupon.discount;
    //     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    //     const finalPriceWithCoupon = document.getElementById("finalPriceWithCoupon");
    //     finalPriceWithCoupon.innerText = "El precio con descuento es: $" + precioConDescuento;
    // }


    //Forma 2, esta esla forma real con la que las tiendas aplican descuentos y cupones
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    let finalPriceWithCoupon = document.getElementById("finalPriceWithCoupon");

    const coupon = inputCoupon.value;

    if (coupon!="") {
        const coupons = [
            {
                cupon: "H123",
                discount: 10,
            },
            {
                cupon: "FOOD1",
                discount: 20,
            },
            {
                cupon: "SEEK",
                discount: 30,
            }
            
        ]

        const found = coupons.find(element => element.cupon === coupon)

        if (found != undefined) {
            const precioConDescuento = calcularPrecioConDescuento(price, discount);
            const precioConDescuentoYCupon = calcularPrecioConDescuento(precioConDescuento, found.discount);

            finalPriceWithCoupon.innerText = "El precio final del producto con descuento y cupon aplicado es: $" + precioConDescuentoYCupon;
        } else {
            finalPriceWithCoupon.innerText = "No existe el cupon, intentelo nuevamente";
        }

    } else {
        finalPriceWithCoupon.innerText = "Por favor, Ingrese un cupon valido";
    }

}