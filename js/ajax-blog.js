const blogPost = async  () => {
    try {
        let response = await fetch("js/data/blog.json")
        let loadedPost = await response.json()
        return loadedPost
    } catch (error) {
        console.log(error)
    }
}

(async()=>{

    let loadedBlog = await blogPost()
    console.log(loadedBlog)

    let bEntry = document.querySelector("#posts")
    let bHTML = ""

    loadedBlog.forEach(blog => {

        bHTML += `
      <div class="row">
        <h2> ${blog.title} </h2> 
      </div>
      <div class="row">
        <h4>${blog.categories.join(", ")}</h4>
      </div>
      <div class="row">
        <p>${blog.content}</p>
      </div>
      <div class="row">
        <h6>${blog.date}</h6>
      </div>
       `
    })
    bEntry.innerHTML = bHTML
} )()