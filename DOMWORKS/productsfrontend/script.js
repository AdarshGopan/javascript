  // var allcategories=new Set(data.map(c=>c.category))
  fetch("https://fakestoreapi.com/products/categories").then(res=>res.json()).then(data=>populateCategory(data))
    function populateCategory(categories)
  {
    let htmldata=``
    categories.forEach(c=>{
      htmldata+=`
      <div class="p-2"><button class="btn btn-outline-primary"name="${c}" onclick="fetchProductByCategoryName(event)">${c}</button></div>

      `
    })
    document.querySelector("#id_nav").innerHTML=htmldata
  }
  function fetchProductByCategoryName(event)
  {
     let categoryname=event.target.name
    //  let products=data.filter(p=>p.category==categoryname)
    fetch(`https://fakestoreapi.com/products/category/${categoryname}`).then(res=>res.json()).then(data=>displayAll(data))
  }

  fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>displayAll(data))
  function displayAll(products) 
  {
    let htmldata=``  
    products.forEach(p=>{
        htmldata+=`
        <div class="col-4">
        <div class="card" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description}</p>
          <button class="btn btn-info" onclick="displayProductDetails(${p.id})">viewmore</button>
        </div>
      </div>
        </div>
        `
    })
    document.querySelector("#id_result").innerHTML=htmldata
  }
 
  function displayProductDetails(id)
  {
    fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json()).then(data=>displayProduct(data))
  }
  function displayProduct(product)
  {
    console.log(product);
        let htmldata=`
                  <div class="col-3"></div>
          <div class="col-6">
          <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${product.price}</li>
            <li class="list-group-item">${product.category}</li>
            <li class="list-group-item">${product.rating.rate}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
          </div>
          </div>
          <div class="col-3"></div>
       
        `
    document.querySelector("#id_result").innerHTML=htmldata
  }
