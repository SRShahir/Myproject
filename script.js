let vDom = document.createElement('div');
let x = "";

dbdata.forEach(scheme => {
    x = x + schemeTemplate(scheme);

});

vDom.innerHTML = x;


document.body.appendChild(vDom)
vDom.style.border = "1px solid black";

vDom.style.padding = "20px";

vDom.style.fontsize = "40px";


function schemeTemplate(params) {

    // console.log(params.title);

    return `<div>
           <p class="title"> <b>${params.title} 
            </b></p><br><hr>
              
                <p class="disc"> ${params.Description} </p>
                   
                    <p class="date"><b> ${params.Date}</b></p><br>
                    
                    </div>`;

    vDom.innerHTML = x;
}