const ramPriceField = document.getElementById('ram-price');
const storagePriceField = document.getElementById('storage-price');
const delChargeField = document.getElementById('delivery-charge');
const totalPriceField = document.getElementById('total-price');
const pomoInputField = document.getElementById('pomo-input');
const finalPriceField = document.getElementById('final-price');

// Update Total Price
function updateTotalPrice() {
    let total = 1299 + parseFloat(ramPriceField.innerText) + parseFloat(storagePriceField.innerText) + parseFloat(delChargeField.innerText);
    totalPriceField.innerText = total;
    finalPriceField.innerText = totalPriceField.innerText;
}

// Update Memory Price
function updateMemoryPrice(memory) {
    if (memory == 'ram-selection-8gb') {
        ramPriceField.innerText = 0;
    }
    else {
        ramPriceField.innerText = 180;
    }
    updateTotalPrice();
}

// Update Storage Price
function updateStoragePrice(storage) {
    if (storage == 'storage-selection-256gb') {
        storagePriceField.innerText = 0;
    }
    else if (storage == 'storage-selection-512gb') {
        storagePriceField.innerText = 100;
    }
    else {
        storagePriceField.innerText = 180;
    }
    updateTotalPrice();
}

// Update Delivery Price
function updateDeliveryPrice(delivery) {
    if (delivery == 'free') {
        delChargeField.innerText = 0;
    }
    else {
        delChargeField.innerText = 20;
    }
    updateTotalPrice();
}

// Apply Coupon
function applyCoupon() {
    if (pomoInputField.value == 'stevekaku') {
        let totalPrice = parseFloat(totalPriceField.innerText);
        let discount = totalPrice * 0.2;
        let finalPrice = totalPrice - discount;
        finalPriceField.innerText = finalPrice.toFixed(2);
    }
    else {
        finalPriceField.innerText = totalPriceField.innerText;
    }
    pomoInputField.value = '';
}