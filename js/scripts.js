
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
  document.body.style.overflow = ''
  modal.classList.remove('show')
}

(function ($) {
  'use strict';
  var form = $('.contact__form'),
    message = $('.contact__msg'),
    form_data;
  // Success function
  function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
  }
  // fail function
  function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }



  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form_data
    })
    .done(done_func)
    .fail(error => {
      console.log(error)
      fail_func
    });
  });

})(jQuery);
