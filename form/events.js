//events

const resetCategories = () => {
    total = null
    selected = null
    eventAssignmetnAll()
    totalTag.innerText = totalText
}

const setCategory = (e) => {
    const option = e.target.value
    if (option === 'none'){
        resetCategories()
        return
    }
    
    category = option
    const index = categories[category].value
    const container = cardsContainer[index]
    
    selected = index
    changeColors(container, index)
    eventAssignmetnAll()
    
    totalPrice()
}


const setTicket = (e) => {
    const {value} = e.target
    
    
    if (value< 0 || isNaN(value)) {e.target.value = 0
        total = null
    return
}

tickets = value
}

const reset = (e) => {
    e.preventDefault()
    for(let input of inputs){
        input.value = ''
    }
    select.value = 'none'
    
    resetCategories()
}

const submit = (e) => {
    e.preventDefault()

    const {inputName, inputSurname, inputEmail, inputNumber, category} = form
    
    const verified = {
        inputName:inputName.value !== '' , 
        inputSurname: inputSurname.value !== '', 
        inputEmail: inputEmail.value.includes('@'), 
        inputNumber:inputNumber.value > 0 , 
        category: category.value !== 'none'
    }
    
    const values = Object.values(verified)

    const submitAccepted = values.every(value => value)

    submitAccepted 
    ? location.href = '/exito.html'
    : alert ('Debes completar todos los campos')

    console.log(submitAccepted)
}

form.addEventListener('submit', submit)
form.category.addEventListener('change', setCategory)
form.inputNumber.addEventListener('change', setTicket)
form.inputNumber.addEventListener('keyup', setTicket)
deleteBtn.addEventListener('click', reset)

