let todoele = document.getElementById("taskinfo")
let tasklist = document.getElementById("tasklist")
let addBtn =document.getElementById("add")
let value1=[]
addBtn.onclick =function(){
    if(todoele.value.length==0){
        alert("Enter details of task")
    }
    else{
	/*console.log(tasklist.innerHTML)*/
	/*if(tasklist.innerHTML==""){
		console.log("BhaVani")}*/
        tasklist.innerHTML = tasklist.innerHTML+`    
        <div class="task"> 
            <span id="work">${todoele.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div>`
	let alltasks = document.querySelectorAll('.del')
	value1.push(todoele.value)
	
         //localStorage.setItem("element",value1)
         for(i=0;i<alltasks.length;i++){
                alltasks[i].onclick = function(){
                    console.log(this)
                    console.log(this.parentNode)
                	  this.parentNode.remove()
	           //localStorage.removeItem(localStorage[i])
                }
          }
         todoele.value=""
        }
    console.log(tasklist.innerHTML)
	let clear=document.getElementById("clearlist")
	clear.onclick=function(){
        console.log("in to")
		if(tasklist.innerHTML==""){
			alert("List is already empty")}
		else{
			tasklist.innerHTML=''}
		}
}


