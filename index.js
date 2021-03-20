const card = (selector = 'card') => {
    const padZero = (v) => {
        let newValue = `0000${v}`;
        if (newValue.length > 3) {
            newValue = newValue.substr(newValue.length - 4, 4);
        }
        return newValue;
    };
    const cards = document.querySelector(selector);
    const cardInputs = cards.querySelectorAll('input');
    cardInputs.forEach((card) => {
        card.value = padZero(card.value);
        card.addEventListener('input', (e)=> {
            if (!e.target) {
                return;
            }
            const caretPos = e.target.selectionStart;
            const {value} = e.target;
            let newValue = value.replace(/\D/g,'');
            if (newValue.length > 3) {
                newValue = newValue.substr(0, 4);
            }
            e.target.value = newValue;
            e.target.selectionStart = e.target.selectionEnd = caretPos;
            if (caretPos > 3) {

                if (e.target.parentElement && e.target.parentElement.nextElementSibling) {
                    const next = e.target.nextElementSibling;
                    if (next) {
                        next.focus();
                        next.selectionStart = next.selectionEnd = 0;
                    }
                }}
        });
        card.addEventListener('blur', (e) => {
            if (!e.target) {
                return;
            }
            const {value} = e.target;
            e.target.value = padZero(value);
        });
    })
};

const initName = (selector = 'card') => {
    const cards = document.querySelector(selector);
    const cardInputs = cards.querySelectorAll('input');
    cardInputs.forEach(card => {
        // if (card.dataset.type === 'card-name') {

        card.addEventListener('input', (e) => {
            if (!e.target) {
                return;
            }

            e.target.value = e.target.value.toUpperCase().replace(/[^A-Z\s]+/, '');
        });
        card.addEventListener('blur', (e) => {
            if (!e.target) {
                return;
            }
            if (e.target.value.search(/^[A-Z\s]{2,30}$/) === 0) {
                e.target.classList.add('valid');
                e.target.classList.remove('error');
            } else {
                e.target.classList.remove('valid');
                e.target.classList.add('error');
            }
        });
    });
};

card('.card__number')
initName('.card__name')
