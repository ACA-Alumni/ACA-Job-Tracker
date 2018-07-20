_page_cohort = (cohort)=>{
  let page = document.getElementById('page_cohort')
  console.log('ok ')
  page.innerHTML = /*html*/`
    <h2>${cohort.class_name}</h2>
    <div id='cohort-alumni'></div>
  `
  let alumni = document.getElementById('cohort-alumni')
  for (const a in cohort.alumni) {
    console.log(a)
    alumni.innerHTML += /*html*/`
      <div>${cohort.alumni[a]}</div>
    `
  }
}
// _page_cohort()

