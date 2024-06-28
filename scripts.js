document.addEventListener('DOMContentLoaded', () => {
    const bookingButton = document.getElementById('booking-button');
    const modal = document.getElementById('booking-modal');
    const closeButton = document.querySelector('.close-button');
    
    bookingButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});