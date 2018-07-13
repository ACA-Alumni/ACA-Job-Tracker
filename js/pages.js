_page = (page)=>{
  const newPage = document.getElementById(page)
  try {
    document.getElementById(_oldPage).style.display = 'none'
    newPage.style.display = 'block'
    window.location.hash = '#'+page.split('_')[1]
    _oldPage = page
  }
  catch(error) {
    alert(`
      So... this "${page.split('_')[1]}" page doesn't exist. It may have,
      it may will, or it's may never exist.
      What we're gonna do is send you back to the last page you
      were on. If this was it, we'll send you to the home page.
    `)
    page(_oldPage)
  }
  // Handle NavBar button highlight
  var buttons = document.getElementsByClassName('top-navbar-btn')
  for (const btn of buttons) {
    if (page !== btn.getAttribute('name')) {
      btn.classList.remove('active')
    } else {
      btn.classList.add('active')
    }
  }
  // reset page scroll bar to the top of the page.
  window.scrollTo(0,0)
}
