    const scriptURL = 'https://script.google.com/macros/s/AKfycbwBN9O9bDGMuNMyPjQ8-0ASEAhsSy6-5to8oPk-rGiQNv-7YHJ5vXasZlcBrdF3ci7-ZA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message Sent Successfully"
            setTimeout(function(){
               msg.innerHTML="" 
            },5000)
            form.reset()
        } )
        .catch(error => console.error('Error!', error.message))
    })
