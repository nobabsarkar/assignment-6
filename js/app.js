
function addCodeLink() {
      fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => displayCode(data.data.news_category))

}



const displayCode = (data) => {
      data.forEach(content => {
            const addList = document.getElementById("add_list");
            const li = document.createElement('li');
            li.innerHTML = `
                   <li onclick="cardCode('${content.category_id}')" class="nav-link ms-4" style="cursor:pointer"> ${content.category_name}</li>
            `;
            addList.appendChild(li)
      })
 
}

const spinner = (mySpinner) => {
      const spinner = document.getElementById('spinner')
      if (mySpinner) {
            spinner.classList.remove('d-none')
      } else {
            spinner.classList.add('d-none')
      }
}





addCodeLink()

function cardCode(id) {
      spinner(true)
      fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
            .then(res => res.json())
            .then(data => displayBodyCode(data.data))
      
}

const displayBodyCode = (data) => {
      const noInformation = document.getElementById('no_information')
      if (data.length === 0) {
            noInformation.classList.remove('d-none')
      } else {
            noInformation.classList.add('d-none')
      }
      const codeBody = document.getElementById('card_container')
      document.getElementById('result').value = `${data.length} Result Here`
      codeBody.innerHTML = ''
      data.forEach(code => {
            console.log(code)
            const codeDiv = document.createElement("div")
            codeDiv.innerHTML = `
                        <div class="card mb-3 p-2">
                              <div class="row g-0">
                                    <div class="col-md-5">
                                         <div>
                                                <img src="${code.thumbnail_url}" class="img-fluid rounded-start " alt="...">
                                         </div>
                                    </div>
                                          <div class="col-md-7">
                                                <div class="card-body">
                                                      <h5 class="card-title mt-5">${code.title}</h5>
                                                      <p class="card-text mt-4">${code.details.slice(0,200)}...</p>
                                                            <div class="d-flex align-items-center justify-content-between ">
                                                                  <div class="body_section d-flex align-items-center">
                                                                        <div>
                                                                              <img src="${code.author.img}">
                                                                        </div>
                                                                  <div class="align-items-center">
                                                                        <h6> ${code.author.name}</h6>
                                                                        <p class="mb-0"> ${code.author.published_date}</p>
                                                                  </div>
                                                            </div>
                                                      <div>
                                                      <h5><i class="fa-solid fa-eye"></i> ${code.total_view}</h5>
                                                </div>
                                                      <button onclick="showModal('${code.title}','${code.thumbnail_url}')" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning"> <i class="fa-solid fa-arrow-right"></i> </button>
                                                </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            `
            codeBody.appendChild(codeDiv)
      })
spinner(false)
}

cardCode()

const showModal = (showingModal,hello) => {
      const modalHeader = document.getElementById('modal_header')
      modalHeader.innerHTML = `${showingModal}`;
}





