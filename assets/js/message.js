const getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.hash) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

const messageFeedback = function() {

    let MESSAGE = getURLParameter('message'),
        OUTTER  = document.querySelector('.form__input--submit'),
        FEEDBACK = 'message envoyé';
            
    if(MESSAGE == 'message sent') {
        OUTTER.classList.add('form__input--submitted');
        OUTTER.value = FEEDBACK;
    }

}

messageFeedback();

