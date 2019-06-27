
const modal = document.getElementById('modal')

const openModal = () => {
  document.body.style.overflow = 'hidden'
  modal.classList.add('show')
}

const closeModal = () => {
  document.body.style.overflow = ''
  modal.classList.remove('show')
}
