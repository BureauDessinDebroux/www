const getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

const messageFeedback = function() {

    let MESSAGE = getURLParameter('message'),
        OUTTER  = document.querySelector('.form__input--submit'),
        OUTTER_VALUE = 'message envoyé',
        LEGAL_ERROR = 'Veuillez lire et acceptez les mentions légales avant d\'envoyer votre message',
        FEEDBACK = document.querySelector('.contact__feedback');
            
    if(MESSAGE == 'message sent') {
        OUTTER.classList.add('form__input--submitted');
        OUTTER.value = OUTTER_VALUE;
        FEEDBACK.classList.add('contact__feedback--is-visible');
    }
    if(MESSAGE == 'legal error') {
        FEEDBACK.innerHTML = LEGAL_ERROR;
        FEEDBACK.classList.add('contact__feedback--is-visible');
    }

}

messageFeedback();

