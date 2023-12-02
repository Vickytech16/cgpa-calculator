// 26/11/2023

$("#submit").click(function(){

$("#warning").empty() // to empty the previous warning message
let sub_no=Number($("#Subjects").val()) // Number of subjects

if ((typeof(sub_no))=="number" && sub_no>0 && Number.isInteger(sub_no))
 getinputs(sub_no) // Main function call
else 
 $("#submit").after(`<p style="color: red" id="warning">Enter a valid number</p>`) // Display warning

})


function getinputs(box_no){

 $("#calcdiv").empty() // to empty the previous screen
 

 for (i=1;i<=box_no;i++)
 {

 let gradeid= "grade"+String(i)
 let creditid="credit"+String(i)

  // creating the ui for getting grade/marks
 $("#calcdiv").append(`
 <div>
 <select name="${gradeid}">
  <option value="null">Grade</option>
  <option value=10>O</option>
  <option value=9>A+</option>
  <option value=8>A</option>
  <option value=7>B+</option>
  <option value=6>B</option>
  <option value=5>C</option>
  <option value=0>Fail</option>
  <option value=0>S</option>
 </select>
 <select name="${creditid}">
  <option value="null">Credit</option>
  <option value=5>5</option>
  <option value=4>4</option>
  <option value=3>3</option>
  <option value=2>2</option>
  <option value=1>1</option>
  <option value=0>0</option>
 </select>
 </div>`)

 $(`select[name=${gradeid}]`).attr("id",gradeid) // setting id for each grade

 $(`select[name=${creditid}]`).attr("id",creditid) // setting id for each credit

 }

 $("#calcdiv").append(`<button id="check" class="button">check</button>`) // creating another button 

 $("#check").click(function(){
  calculate(box_no) }) // call this function to calculate grade and marks

}

function calculate(box_no)
{
 $("#cgpa").empty()

 let sumtotal=credittotal=0
 let gradeid,creditid,currgrade,currcredit

 for (i=1;i<=box_no;i++)
 {
  gradeid="grade"+String(i)   
  currgrade=(Number($(`#${gradeid}`).val())) // store grade value
  
  creditid="credit"+String(i)
  currcredit=(Number($(`#${creditid}`).val())) // store credit value

  sumtotal=sumtotal+(currgrade*currcredit) // grade*credit
  credittotal=credittotal+currcredit // total credits
 }

 let cgpa=sumtotal/credittotal
 console.log(cgpa)

 if (cgpa=="NaN")
  $("#check").after(`<p id="cgpa" style="color: red">Select all values</p>`)
 else
  $("#check").after(`<p id="cgpa">Your SGPA is ${cgpa}</p>`)
}






