
const nameOnchange = (input) => {
    input.value.replace(/[А-Яа-я\W]+/,'')
    input.value = input.value.toUpperCase()
}

const nameOnblur = (input) => {
    if(nameOnblur.search(/^[A-Z\s]{2,30}$/) !== 0) {
        input.classList.add('valid')
        input.classList.remove('error')
    } else {
        input.classList.remove('valid')
        input.classList.add('error')
    }
}
