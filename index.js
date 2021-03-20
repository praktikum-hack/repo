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
        const next = e.target.nextElementSibling;
        if (next) {
          next.focus();
          next.selectionStart = next.selectionEnd = 0;
        }
      }
    });
    card.addEventListener('blur', (e) => {
      if (!e.target) {
        return;
      }
      const {value} = e.target;
      e.target.value = padZero(value);
    });
  })
}

card();
