//EVENTS


const cardEnter = (e) => {
    const {index} = e.target.dataset
    
    changeColors(e.target, index, false)

}

const cardLeave = (e) => {
    const {index} = e.target.dataset
        changeColors(e.target, index, true)

}


const cardClick = (e) => {
    selected = e.currentTarget.dataset.index
    matchCategory(selected) 
    eventAssignmetnAll()
    
}


eventCleaner = (container) => {
    container.removeEventListener('mouseenter', cardEnter)
    container.removeEventListener('mouseleave', cardLeave)
    container.removeEventListener('click', cardClick)

}
const eventAssignmetn = (container) => {
    container.addEventListener('mouseenter', cardEnter)
    container.addEventListener('mouseleave', cardLeave)
    container.addEventListener('click', cardClick)

}



const eventAssignmetnAll = () => {
    
    for(let container of cardsContainer) {

        eventCleaner(container)

        const {index} = container.dataset
    
        if (index !== selected) {
            eventAssignmetn(container)
            changeColors(container, index, true)
        }
    }

}


//eventos asignacion
eventAssignmetnAll()