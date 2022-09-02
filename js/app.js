
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
                   <li class="nav-link ms-4" style="cursor:pointer"> ${content.category_name}, ${content.category_id} </li>
            `;
            addList.appendChild(li)
      })    
}
addCodeLink()















