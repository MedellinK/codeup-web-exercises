const setPost = async (postData)=>{

    let url = ``;
    let options = {
        method:"POST",
        header: {
            "Authorization": `token 675849586758bv4`
        },
        body:JSON.stringify(postData)

    }

    let response = await fetch(url,options)
    let data = await response.json()
    return data
}



(async ()=>{
    let blogPost = {
        "title":"I love lamp!",
        "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque eius, ipsum obcaecati quidem ratione!'
    }
    let result = await  setPost(postData)


})();