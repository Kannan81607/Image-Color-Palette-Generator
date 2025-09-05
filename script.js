document.addEventListener('DOMContentLoaded', function() {

    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const colorCode = this.getAttribute('data-color');
            copyToClipboard(colorCode, this);
        });
    });

    function copyToClipboard(text, button) {
    
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
    
        tempInput.select();
        document.execCommand('copy');
   
        document.body.removeChild(tempInput);

        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#66bb6a';

        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.style.color = '';
        }, 1500);
    }
});