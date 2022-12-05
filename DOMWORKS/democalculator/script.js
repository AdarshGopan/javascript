// function add()
// {
//     var n1=document.querySelector("#id_num1").value
//     var n2=document.querySelector("#id_num2").value
//     var res=Number(n1)+Number(n2)
//     console.log(res);
   
//     document.querySelector("#id_result").innerHTML=`<div class="alert alert-warning" role="alert">
//     RESULT=${res}
//   </div>`
// }

// function sub()
// {
//     var n1=document.querySelector("#id_num1").value
//     var n2=document.querySelector("#id_num2").value
//     var res=Number(n1)-Number(n2)
//     document.querySelector("#id_result").innerHTML=`<div class="alert alert-primary " role="alert">
//     RESULT=${res}
//   </div>`
// }
function calculate(event)
{
    let btn=event.target.name
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let res=0
    if(btn=="btn-add")
    {
        res=Number(n1)+Number(n2)
    }
    if(btn=="btn-sub")
    {
        res=Number(n1)-Number(n2)
    }
    if(btn=="btn-mul")
    {
        res=Number(n1)*Number(n2)
    }
    document.querySelector("#id_result").innerHTML=`<div class="alert alert-primary " role="alert">
    RESULT=${res}
  </div>`
}
