const ramPriceBtn = document.getElementById('ram-price');
const storagePriceBtn = document.getElementById('storage-price');
const delChargeBtn = document.getElementById('delivery-charge');
const totalPriceBtn = document.getElementById('total-price');
const pomoInputBtn = document.getElementById('pomo-input');
const finalPriceBtn = document.getElementById('final-price');

// Update Memory Price



// Update Total Price
function updateTotalPrice() {
    let total = 1299 + parseFloat(ramPriceBtn.innerText) + parseFloat(storagePriceBtn.innerText) + parseFloat(delChargeBtn.innerText);
    totalPriceBtn.innerText = total;
}

// Apply Coupon
function applyCoupon() {
    if (pomoInputBtn.value == 'stevekaku') {
        let totalPrice = parseFloat(totalPriceBtn.innerText);
        let discount = totalPrice * 0.2;
        let finalPrice = totalPrice - discount;
        finalPriceBtn.innerText = finalPrice.toFixed(2);
    }
    else {
        finalPriceBtn.innerText = totalPriceBtn.innerText;
    }
}