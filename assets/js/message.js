const getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

const messageFeedback = function() {

    let MESSAGE = getURLParameter('message'),
        OUTTER  = document.querySelector('.form__input--submit'),
        FEEDBACK = 'message envoyé';

        console.log(MESSAGE);
            
    if(MESSAGE == 'message sent') {
        OUTTER.classList.add('form__input--submitted');
        OUTTER.value = FEEDBACK;
    }

}

messageFeedback();

