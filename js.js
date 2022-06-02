
/*function to call api */
async function get(){
    const res = await fetch("jsonfile.json")
    const myjosn = await res.json()
    document.querySelector('#ss').innerHTML = "";
    for(i in myjosn){
        document.querySelector('#ss').innerHTML+= `<div id="item" id="${myjosn[i].category}">
        <div class="img">
            <img src="`+ myjosn[i].img + `">
        </div>
        <div class="name">Fname : `+ myjosn[i].fname +`<br><br>Lname : `+myjosn[i].lname +
        `</div>
        <div class="cate">Categry : `+myjosn[i].category+`
        </div>
    </div>`
    }
}
get()
/* end function to call api  */


/*start function to search */
async function fun1(v){
    const res = await fetch("jsonfile.json")
    const myjosn = await res.json()
    document.querySelector('#ss').innerHTML = "";
    for(i in myjosn){
        if(myjosn[i].category == v){
        document.querySelector('#ss').innerHTML += `<div id="item" id="${myjosn[i].category}">
        <div class="img">
            <img src="`+ myjosn[i].img + `">
        </div>
        <div class="name">Fname : `+ myjosn[i].fname +`<br><br>Lname : `+myjosn[i].lname +
        `</div>
        <div class="cate">Categry : `+myjosn[i].category+`
        </div>
    </div>`}
    }
};
/*end function to search */
