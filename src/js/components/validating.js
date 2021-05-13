window.addEventListener('DOMContentLoaded', function() {
    let contactsLeftBtn = document.querySelector('.contacts__left-btn');
    let err = 0;
    
    contactsLeftBtn.addEventListener('click', function(event) {
        event.preventDefault();
        checkInputs('.contacts__left-name');
        checkInputs('.contacts__left-tel');

    })
    function checkInputs(element) {
        if (document.querySelector(element).value == '') {
            document.querySelector(element).classList.add('contacts__left-err');
            err = 1;
        } else {
            document.querySelector(element).classList.remove('contacts__left-err');
            document.querySelector(element).classList.add('contacts__left-success');
            err = 1;
        }
    }
})