_page_cohorts = (page = document.getElementById('page_cohorts'))=>{

  page.innerHTML = /*html*/`
    <div class='cohorts-title'> Cohorts </div>
    <div id='cohorts-container'></div>
  `

  let cohorts_container = document.getElementById('cohorts-container')
  for (const cohort of _alumni) {
    let pretty_name = cohort.class_name.split('_').join(" ")
    pretty_name = _upper1(pretty_name);
    cohorts_container.innerHTML += /*html*/`
      <div class='cohorts-cohorts' id='${cohort.class_name}'
        onclick='select_cohort(${cohort.class_name})'> 
        <table class='cohorts-table'>
          <tr class='cohorts-columns'>
            <th class='cohorts-class-column'>Graduate Class</th>
            <th>Class#</th>
            <th>Alumni</th>
          </tr>
          <tr>
            <td>${pretty_name}</td>
            <td class='cohorts-column-center'>${cohort.class_number} </td>
            <td class='cohorts-column-center'>${cohort.alumni.length}</td>
          </tr>
        </table>
      </div>
    `
  }

  select_cohort = (cohort)=>{
    const alumni = _alumni.filter( x => x.class_name === cohort.id)[0]
    console.log('Class', alumni)
    for (const alum of alumni.alumni) {
      console.log(_upperAll(alum))
    }
  }

}
_page_cohorts()


