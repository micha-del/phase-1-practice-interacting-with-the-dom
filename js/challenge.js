const counterElement = document.querySelector( '#counter' )

const minusButton = document.querySelector( '#minus' )
const plusButton = document.querySelector( '#plus' )
const heartButton = document.querySelector( '#heart' )
const likesContainer = document.querySelector( '.likes' )

const formElement = document.getElementById( 'comment-form' )
const commentsContainer = document.querySelector( '#list' )

const submitButton = document.getElementById( 'submit' )

const pauseButton = document.querySelector( '#pause' )

const buttonElements = [ minusButton, plusButton, heartButton, submitButton ] 


let pauseStatus = false

let intervalID = setInterval( increment, 1000 )


pauseButton.addEventListener( 'click', e => {

    pauseStatus = ! pauseStatus
    if ( pauseStatus ) {
        clearInterval( intervalID )
        e.target.textContent = 'resume'
        buttonElements.forEach( button => button.disabled = true )
    } else {
        intervalID = setInterval( increment, 1000 )
        e.target.textContent = 'pause'
        buttonElements.forEach( button => button.disabled = false )
    }
} )


formElement.addEventListener( 'submit', e => {
    e.preventDefault()
    const p = document.createElement( 'p' )
    p.textContent = e.target.comment.value
    commentsContainer.append( p )
} )


heartButton.addEventListener( 'click', () => { 
    const currentNum = counterElement.innerText
    const foundLi = document.getElementById( `likes-${currentNum}` )
    if( !foundLi ) {
        const li = document.createElement( 'li' )
        li.id = `likes-${currentNum}`
        const str = `${currentNum} has been liked <span>1</span> time`
        li.innerHTML = str
        likesContainer.append( li )
    } else {
        const newLikes = ++foundLi.querySelector( 'span' ).textContent
        const str = `${currentNum} has been liked <span>${newLikes}</span> times`
        foundLi.innerHTML = str
    }
} )

function increment() {
    counterElement.textContent++
}

plusButton.addEventListener( 'click', increment )

minusButton.addEventListener( 'click', () => {
    const newNumber = counterElement.textContent - 1
    counterElement.textContent = newNumber
} )