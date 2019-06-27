
const questions = Array.from(document.getElementById('questions').children)
let openQuestion = null

questions.map(questions => {
  questions.classList.remove('show')
})

const handleChange = index => {
  if (openQuestion !== null) {
    questions[openQuestion].classList.remove('show')
  }
  if (index === openQuestion) {
    questions[index].classList.remove('show')
    openQuestion = null
  } else {
    questions[index].classList.add('show')
    openQuestion = index
  }
}

questions.map((question, index) => {
  question.children[0].addEventListener('click', () => {
    handleChange(index)
  })
})
