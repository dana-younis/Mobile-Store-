'use strict';
//git random price 
function randomNumber(min, max) { return Math.floor(Math.random() * (max - min)) + min; }




 let allMobile=[];

function MobileStore(User,Type) {
    this.User=User;
    this.Type=Type;
    this.price=randomNumber(100, 500);
    allMobile.push(this);
    this.render();
}


let form=document.getElementById('form')
form.addEventListener('submit',submiter)
function submiter(event) {
    event.preventDefault();
    let userFromEvent=event.target.User.value;
    console.log(userFromEvent);

     let TypeFromEvent=event.target.Type.value;
    console.log(TypeFromEvent);
     
  new MobileStore(userFromEvent,TypeFromEvent)
console.log(MobileStore);
setting();
}




let headerArray=['User','Type','Price','condition']
let table=document.getElementById('table')
function makingHeader() {
    let headerTr=document.createElement('tr')
    table.appendChild(headerTr)

    for (let index = 0; index < headerArray.length; index++) {
       let headerCell=document.createElement('th')
       headerTr.appendChild(headerCell);
       headerCell.textContent=headerArray[index]
        
    }
}
makingHeader();







MobileStore.prototype.render=function () {
    let MobileStoreRow=document.createElement('tr')
    table.appendChild(MobileStoreRow)

    let MobileStoreRowUser=document.createElement('td')
    MobileStoreRow.appendChild(MobileStoreRowUser);
    MobileStoreRowUser.textContent=this.User;


    let MobileStoreRowType=document.createElement('td')
    MobileStoreRow.appendChild(MobileStoreRowType);
    MobileStoreRowType.textContent=this.Type;

    
    let MobileStoreRowprice=document.createElement('td')
    MobileStoreRow.appendChild(MobileStoreRowprice);
    MobileStoreRowprice.textContent=this.price;

    let MobileStoreRowCondition=document.createElement('td')
    MobileStoreRow.appendChild(MobileStoreRowCondition);
    
    if (this.price<200) {
    MobileStoreRowCondition.textContent='Used';
    
     }
    else{
        MobileStoreRowCondition.textContent='New';
    }

}


function  setting() {
    let MobileStorString=JSON.stringify(allMobile);
    localStorage.setItem('allMobile',MobileStorString)
    
}

function data() {
    let mobileData=localStorage.getItem('allMobile');
    let allMobileParce=JSON.parse(mobileData)
    if (allMobileParce!==null) {
        for (let index = 0; index < allMobileParce.length; index++) {
        new MobileStore(allMobileParce[index].User,allMobileParce[index].Type)
        
    }
    }
    
}



data();


