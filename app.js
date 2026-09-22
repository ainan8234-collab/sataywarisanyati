let nasiLemakOrders=[];

function addNasiLemak(){

let telurMata =
confirm("Add Telur Mata?");

let ayamRendang =
confirm("Add Ayam Rendang?");

let total = 4;

let addons=[];

if(telurMata){
total += 1;
addons.push("Telur Mata");
}

if(ayamRendang){
total += 4.5;
addons.push("Ayam Rendang");
}

nasiLemakOrders.push({
addons:addons,
price:total
});

updateSummary();

}

function updateSummary(){

let total=0;

let summary='';

const items=[

["ayam","Sate Ayam",1.2],
["daging","Sate Daging",1.5],
["kambing","Sate Kambing",2],
["perut","Sate Perut",1.7],
["kulit","Sate Kulit",1.7],
["tulang","Sate Tulang",1.8],
["impit","Nasi Impit",1]

];

items.forEach(item=>{

let qty=
Number(
document.getElementById(item[0]).value
)||0;

if(qty>0){

let amount=
qty*item[2];

total+=amount;

summary +=
item[1]+
" x "+qty+
" = RM"+
amount.toFixed(2)+
"<br>";

}

});

nasiLemakOrders.forEach((n,index)=>{

total += n.price;

summary +=
"🍛 Nasi Lemak #"+
(index+1)+
" RM"+
n.price.toFixed(2)+
"<br>";

if(n.addons.length){

summary +=
"&nbsp;&nbsp;+"+
n.addons.join(", ")+
"<br>";

}

});

if(summary===""){
summary="No item selected";
}

document.getElementById("summary")
.innerHTML=summary;

document.getElementById("total")
.innerHTML=
"RM"+
total.toFixed(2);

}

function saveOrder(){

alert("Order Saved");

}

document.addEventListener(
"input",
updateSummary
);
