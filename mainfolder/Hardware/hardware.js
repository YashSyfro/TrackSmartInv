document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.check-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const inventoryItem = button.closest('.inventory-item');
            const itemDetails = inventoryItem.querySelector('.item-details');

            // Toggle active class on inventory item
            inventoryItem.classList.toggle('active');

            // Toggle active class on button for animation
            button.classList.toggle('active');
        });
    });
});
