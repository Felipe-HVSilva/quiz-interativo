const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.result')

const correctAnswers = ['B','D','C','B']

let score = 0

const getUserAnswers = () => {
    const userAnswers =[
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,

    ]
    return userAnswers    
}

const calculateUserScore = (userAnswers) =>{
    userAnswers.forEach((userAnswer,index) =>{
        if(userAnswer === correctAnswers[index]){
            score += 25
        }    
    })
}

const showFinalScore = () => {
    scrollTo(0,0)
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if(counter === score){
            clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter}%`
        counter++
    },10)
}
const cleanScore = () => {
    score = 0
}

form.addEventListener('submit', event =>{
    event.preventDefault()


    const userAnswers = getUserAnswers()
    
    cleanScore()
    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
    

    
})
