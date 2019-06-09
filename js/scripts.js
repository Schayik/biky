
const questions = Array.from(document.getElementById('questions').children)

questions.map(question => {
  question.children[0].addEventListener('click', () => {
    question.classList.toggle('show')
  })
})
