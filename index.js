
const card = (card_id = 'card') => {
    const padZero = (v) => {
        let newValue = `0000${v}`;
        if (newValue.length > 3) {
            newValue = newValue.substr(newValue.length - 4, 4);
        }
        return newValue;
    }
    const cards = document.getElementById(card_id);
    const cardInputs = cards.querySelectorAll('input');
    cardInputs.forEach((card) => {

        if(card.dataset.type==='card-number') {
            card.value = padZero(card.value);
            card.addEventListener('input', (e) => {
                if (!e.target) {
                    return;
                }
                const {value} = e.target;
                let newValue = value.replace(/\D/g, '');
                if (newValue.length > 3) {
                    newValue = newValue.substr(0, 4);
                }
                e.target.value = newValue;
            });
            card.addEventListener('blur', (e) => {
                if (!e.target) {
                    return;
                }
                const {value} = e.target;
                e.target.value = padZero(value);
            });
        }
        else if(card.dataset.type==='card-name') {

            card.addEventListener('input', (e) => {
                if (!e.target) {
                    return;
                }

                e.target.value.replace(/[А-Яа-я\W]+/,'')
                e.target.value = e.target.value.toUpperCase()
            });
            card.addEventListener('blur', (e) => {
                if (!e.target) {
                    return;
                }
                if(nameOnblur.search(/^[A-Z\s]{2,30}$/) !== 0) {
                    e.target.classList.add('valid')
                    e.target.classList.remove('error')
                } else {
                    e.target.classList.remove('valid')
                    e.target.classList.add('error')
                }
            });
        }
    })
}
