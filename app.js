let nasiLemakList = [];

function addNasiLemak(){

  let addons = [];

  if(confirm("Tambah Telur Mata?")){
    addons.push({
      name:"Telur Mata",
      price:1
    });
  }

  if(confirm("Tambah Ayam Rendang?")){
    addons.push({
      name:"Ayam Rendang",
      price:4.5
    });
  }

  let total = 4;

  addons.forEach(x=>{
    total += x.price;
  });

  nasiLemakList.push({
    addons:addons,
    total:total
  });

  updateSummary();
}

function updateSummary(){

  let total = 0;
  let text = "";

  const menu = [

    ["ayam","Sate Ayam",1.2],
    ["daging","Sate Daging",1.5],
    ["kambing","Sate Kambing",2],
    ["perut","Sate Perut",1.7],
    ["kulit","Sate Kulit",1.7],
    ["tulang","Sate Tulang",1.8],
    ["impit","Nasi Impit",1]

  ];

  menu.forEach(item=>{

    let qty =
    Number(document.getElementById(item[0]).value);

    if(qty>0){

      let amount = qty * item[2];

      text +=
      item[1] +
      " x " +
      qty +
      " = RM" +
      amount.toFixed(2) +
      "<br>";

      total += amount;
    }
  });

  nasiLemakList.forEach((item,index)=>{

    text +=
    "<br>🍛 Nasi Lemak #" +
    (index+1) +
    " RM" +
    item.total.toFixed(2) +
    "<br>";

    item.addons.forEach(addon=>{

      text +=
      "&nbsp;&nbsp;+ " +
      addon.name +
      "<br>";

    });

    total += item.total;

  });

  if(text===""){
    text="Tiada item dipilih";
  }

  document.getElementById("summary").innerHTML =
  text;

  document.getElementById("total").innerHTML =
  "RM" + total.toFixed(2);
}

document.addEventListener(
  "input",
  updateSummary
);
