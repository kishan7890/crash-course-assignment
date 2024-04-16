// fill in javascript code here

let dataArr = [];
let form = document.querySelector("form").addEventListener("submit",submitform)

function submitform(e){
  e.preventDefault();

  let target = e.target;
  let name = target.querySelector("#name").value;
  let employeeID = target.querySelector("#employeeID").value;
  let department = target.querySelector("#department").value;
  let experience = target.querySelector("#exp").value;
  let email = target.querySelector("#email").value;
  let mobile = target.querySelector("#mbl").value;

  let obj = {
    name,
    employeeID,
    department,
    experience,
    email,
    mobile,
  };
  console.log(obj)

  dataArr.push(obj);

  let tr = document.createElement("tr");
  for(let key in obj){
    let td = document.createElement("td");
    td.innerText = obj[key]
    tr.append(td);
  }
  let td =document.createElement("td");
  if(experience>5){
    td.innerText = "Senior";
  }else if(experience>=2 && experience<=5){
    td.innerText = "Junior";
  }else{
    td.innerText = "Trainee";
  }
  tr.append(td);

  let deletebutton = document.createElement("input");
  deletebutton.type = "submit";
  deletebutton.value = "Delete";
  deletebutton.addEventListener("click",function(){
    tr.remove()
  });
  let deletecell = document.createElement("td");
  deletecell.append(deletebutton);
  tr.append(deletecell);

  let tbody = document.querySelector("tbody");
  tbody.append(tr);
}

