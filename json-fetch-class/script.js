let slc = document.querySelector("#slc");





class API {
    constructor(Users, posts) {
        this.user = Users,
            this.post = posts

    }

}


function Goster(){

    fetch("https://jsonplaceholder.typicode.com/todos").then(response=>{
    // console.log(response);
    response.json().then(value=>{
        console.log(value);
        let cvb = `<tr>
    <th scope="col">iD </th>
    <th scope="col">uSERiD </th>
    <th scope="col"> TITLE</th>
    <th scope="col">COMPLOTED</th>
    </tr>`;
    value.forEach(element => {
        cvb += `
        <tr>
        <td scope="col">${element.id} </td>
        <td scope="col">${element.userId} </td>
        <td scope="col">${element.title} </td>
        <td scope="col">${element.completed} </td>
        </tr>`
    });
    tbl.innerHTML = cvb;
    })
});
}

function Gosteriki(){

    fetch("https://jsonplaceholder.typicode.com/comments").then(response=>{
    // console.log(response);
    response.json().then(value=>{
        console.log(value);
        let cvb = `<tr>
    <th scope="col">iD </th>
    <th scope="col">PostID </th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">body</th>
    </tr>`;
    value.forEach(element => {
        cvb += `
        <tr>
        <td scope="col">${element.id} </td>
        <td scope="col">${element.postId} </td>
        <td scope="col">${element.name} </td>
        <td scope="col">${element.email} </td>
        <td scope="col">${element.body} </td>
        </tr>`
    });
    tbl.innerHTML = cvb;
    })
});
}


function Albums (){

    fetch("https://jsonplaceholder.typicode.com/photos").then(response=>{
    // console.log(response);
    response.json().then(value=>{
        console.log(value);
        let cvb = `<tr>
    <th scope="col">iD </th>
    <th scope="col">albumId </th>
    <th scope="col">title</th>
    <th scope="col">url</th>
    <th scope="col">thumbnailUrl</th>
    </tr>`;
    value.forEach(element => {
        cvb += `
        <tr>
        <td scope="col">${element.id} </td>
        <td scope="col">${element.albumId} </td>
        <td scope="col">${element.title} </td>
        <td scope="col">${element.url} </td>
        <td scope="col"> <img src="${element.thumbnailUrl} " alt=""> </td>
        </tr>`

        
    });
    tbl.innerHTML = cvb;
    })
});
}







const a = new API("A P I", "POSTS");

const b = new API("A P I", "COMMENTS");

const c = new API("A P I", "ALBUMS");

let arr = [

];

arr.push(a.post, b.post, c.post)

document.getElementById("name").innerHTML = a.user

onload = function () {

    let opt = `<option value="" selected> Secim edin </option>`

    for (let i = 0; i < arr.length; i++) {
        opt += ` <option value="${i}"> ${arr[i]} </option>`
    }
    slc.innerHTML = opt;
};


slc.onchange = function () {
    let x = slc.value
    if (x == 0) {
        document.getElementById("ps").innerHTML = a.post
        Goster()
    } else if (x == 1) {
        document.getElementById("ps").innerHTML = b.post
        Gosteriki()
    } else {
        document.getElementById("ps").innerHTML = c.post
        Albums()
    }
}