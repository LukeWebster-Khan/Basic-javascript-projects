const modalButton = document.getElementById('openModal');
const modal = document.querySelector('modal-div');

modalButton.addEventListener('click', function () {
    modal.classList.add('open-modal');
});