document.querySelector('.yes-button').addEventListener('click', function() {
    var whatsappURL = 'https://api.whatsapp.com/send?phone=628xxxxxxxxxx&text=Saya%20menerima%20tawaran%20Anda%20untuk%20menjadi%20pacar%20saya.%20%F0%9F%98%8D';
    window.location.href = whatsappURL;
});

document.querySelector('.no-button').addEventListener('click', function() {
    var whatsappURL = 'https://api.whatsapp.com/send?phone=628xxxxxxxxxx&text=Saya%20menghargai%20tetapi%20tidak%20menerima%20tawaran%20Anda.%20Terima%20kasih.';
    window.location.href = whatsappURL;
});
