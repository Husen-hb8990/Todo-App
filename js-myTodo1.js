var count1=0;
var check_count=0;
var uncheck_count=0;

/*function myBtn(){
var x= count>0?(100*check_count)/count1:0;
document.getElementById("myBar").style.width=x+"%";
document.getElementById("myBar").innerHTML=x+"%";
}*/

function get_todos() {
    var todos = new Array;
	var todos_str = localStorage.getItem('todo');
	var c
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 <!--display the element by enter key press--->
function add() {
	document.getElementById("task").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add").click();
		document.getElementById("alert").innerHTML="";
    }
	});
	<!--check input validation-->
    var task = document.getElementById('task').value;
	if(task==""){
	document.getElementById("alert").innerHTML="Please Enter Key words...!";
	return;
	}else{
	document.getElementById("alert").innerHTML="";
	}
	
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
	uncheck_count = uncheck_count+1;
    show();
	return clear();
    return false;
	
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
	
	// Need to write a program specific to Checkbox but getting Button
	/*if(this.checked){
	check_count= check_count+1;
	uncheck_count = uncheck_count>0?uncheck_count-1:0;
	}else{
	uncheck_count= uncheck_count+1;
	check_count = check_count>0?check_count-1:0;
	}*/ 
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
	var d = new Date();
	
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
	
        html += '<li>'+'<input type="checkbox" id="check" class="checkbox" value="yes">'+ todos[i] +" "+'<i class="fa fa-calendar" style="font-size:20px;text-align:center;"></i>'+" Date: "+'<span id="date"></span>'+d+'<span class="remove" title="Delete" id="' + i  + '">&times</span></li>';
		document.getElementById("task").value="";
    };
   // html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
		
        buttons[i].addEventListener('click', remove);

    };
	
	var check=document.getElementsByClassName('checkbox');
	count1=check.length;
	
	for(var i=0;i<check.length;i++){
	
		check[i].addEventListener('click',count);
	
	}
	//	alert("count1="+count1+"\n check_count="+check_count+"\n uncheck_count="+uncheck_count);
	var x= count1>0?(100*check_count)/count1:0;
	
	document.getElementById("myBar").style.width=x+"%";
	document.getElementById("myBar").innerHTML=x+"%";
}

 
document.getElementById('add').addEventListener('click', add);
show();
   
<!--checkbox count--->
function count(){
    if(this.checked){
	check_count= check_count+1;
	uncheck_count = uncheck_count>0?uncheck_count-1:0;
	}else{
	uncheck_count= uncheck_count+1;
	check_count = check_count>0?check_count-1:0;
	 
	 }
    
}

<!--done text box empty--->
function clear(){
task.value="";
}

<!--scroll top button-->
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(function(){
    var test = localStorage.input === 'true'? true: false;
    $('input').prop('checked', test);
});

$('input').on('change', function() {
    localStorage.input = $(this).is(':checked');
    console.log($(this).is(':checked'));
});
