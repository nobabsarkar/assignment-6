
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
                   <li onclick = "clickHere(${content.category_id})" class="nav-link ms-4" style="cursor:pointer"> ${content.category_name}, ${content.category_id} </li>
            `;
            addList.appendChild(li)
      })    
}


const clickHere = (data) => {
      console.log(data)
      const totalResult = document.getElementById("result");
      totalResult.value = data + ` News Here`

}

addCodeLink()

function cardCode() {
      fetch('https://openapi.programming-hero.com/api/news/category/01')
            .then(res => res.json())
            .then(data => displayBodyCode(data.data))
      
}

const displayBodyCode = (data) => {
      console.log(data)
      const codeBody = document.getElementById('card_container')
      data.forEach(code => {
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
                                                      <button onclick="showModal('${code.title}')" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning"> <i class="fa-solid fa-arrow-right"></i> </button>
                                                </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            `
            codeBody.appendChild(codeDiv)

            

      })
}

cardCode()

const showModal = (showingModal,modal) => {
      const modalHeader = document.getElementById('modal_header')
      modalHeader.innerHTML = `${showingModal}`;

}







