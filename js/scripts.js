
const questions = Array.from(document.getElementById('questions').children)

questions.map(question => {
  question.children[0].addEventListener('click', () => {
    question.classList.toggle('show')
  })
})

const modal = document.getElementById('modal')

const openModal = () => {
  document.body.style.overflow = 'hidden'
  modal.classList.add('show')
}

const closeModal = () => {
  document.body.style.overflow = 'auto'
  modal.classList.remove('show')
}
