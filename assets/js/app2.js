var cl = console.log;

let blogs = [
    {title : "Angular 15 Update", content : "It supports Standalone Component"},
    {title : "ES-6 Promise", content : "ES6 gives us Promise to handle Async Operations"}
];

function createBlog(blog){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .2 ? false : true;
            if(!error){
                blogs.push(blog);
                resolve("Post is created successfully");
            }else{
                reject("Something went wrong while creating Blog")
            }
        }, 3000);
    })
};

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .2 ? false : true;
            if(!error){
                resolve("Posts are fetched successfully");
            }else{
                reject("Something went wrong while fetching posts")
            }
        }, 1000);
    })
}

function templatingCard(arr){
    let result = '';
    arr.forEach(blog => {
        result += `
                <div class="card mb-4">
                    <div class="card-header">${blog.title}</div>
                    <div class="card-body">${blog.content}</div>
                </div>`
    });
    blogsContainer.innerHTML = result;
}

async function init(){
    try{
        await createBlog({title : "ES-7 Async Await", content : "ES7 gives us Async Await to handle Async Operations"});
        let result = await fetchData();
        Swal.fire({
            icon: 'success',
            title: result,
            showConfirmButton: true,
            timer: 15000
        })
        templatingCard(blogs);
    } catch(err){
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 15000
        })
    }
}
init();