var cl = console.log;

const blogsContainer = document.getElementById("blogsContainer");

let blogs = [
    {title : "Angular 15 Update", content : "It supports Standalone Component"},
    {title : "ES-6 Promise", content : "ES6 gives us Promise to handle Async Operations"}
];

function createBlog(blog, callBackFun){
    setTimeout(() => {
        // API call
        let error = Math.random() >= .5 ? false : true;
        if(!error){
            blogs.push(blog);
            cl(blogs, "New Blog is created successfully");
            callBackFun();
        }else{
            cl("Something went wrong while creating Blog")
        }
    }, 3000);
};

function fetchData(){
    setTimeout(() => {
        // API call
        let error = Math.random() >= .5 ? false : true;
        if(!error){
            cl(blogs, "All Blogs fetched successfully!!!");
            templatingCard(blogs);
        }else{
            cl("Something went wrong while fetching data")
        }
    }, 1000);
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

createBlog({title : "ES-7 Async Await", content : "ES7 gives us Async Await to handle Async Operations"}, fetchData);

// templatingCard(blogs);
// fetchData();
// callback Hell