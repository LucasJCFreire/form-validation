const btnSubmit = document.querySelector('#btn-submit')
const requiredField = document.querySelectorAll('.required-field')
const requiredAlert = document.querySelectorAll('.required-alert')
const btnReset = document.querySelector('#btn-reset')

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let formComplete = true

  requiredField.forEach((field, index) => {
    field.classList.remove('fail', 'success');

    if (field.value) {
      field.classList.add('success')
      requiredAlert[index].classList.remove('visible')
    } else {
      field.classList.add('fail')
      requiredAlert[index].classList.add('visible')
      formComplete = false
    }
  })

  if (formComplete) {
    confetti(
      {
        particleCount: 500,
        spread: 1500,
        scalar: 2
      }
    )
  }
})

btnReset.addEventListener('click', () => {
  requiredField.forEach((field) => {
    field.classList.remove('success', 'fail')
  })
  requiredAlert.forEach((alert) => {
    alert.classList.remove('visible')
  })
})
