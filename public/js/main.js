_oldPage = 'page_home'

window.onload = ()=>{
  let setPage = 'page_home'
  if (window.location.hash) {
    setPage = 'page_'+window.location.hash.split('#')[1]
  }
  _page(setPage)
}

window.onhashchange = ()=>{
  let setPage = window.location.hash
  setPage = 'page_'+setPage.split('#')[1]
  _page(setPage)
}
