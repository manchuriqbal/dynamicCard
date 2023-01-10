const fatchData = async (confing) => {
   try {
    const res = await axios(confing);
    return await res.data;
   } catch (error) {
    console.log('This farch is erro');
   }
    
}



const container = document.querySelector('.postWapper');

const loadAllData = async () =>{
    const posts = await fatchData('https://jsonplaceholder.typicode.com/posts');
    posts.map((post)=>{
        const singlePost = document.createElement('div');
        singlePost.classList.add('singlePost');
        singlePost.innerHTML = `<h3 class="title">${post.title}</h3>
        <p class="body">${post.body}</p>`;
    
        container.appendChild(singlePost);
    })

   
}
loadAllData();





