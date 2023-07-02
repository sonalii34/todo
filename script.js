const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
function addTask()
    {
      if(inputBox.value ==='')
      {
        alert("you must write something");
      }
      else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);   /*li must be displayed in listcontainer*/
        let span=document.createElement("span");   /*for creating cross we created span tag*/
        span.innerHTML="\u00d7"; 
        li.appendChild(span);
      }
      inputBox.value=" ";
      saveData();
    }
    listContainer.addEventListener("click",function(e){
       if(e.target.tagName==="LI")
       {
        e.target.classList.toggle("checked");
        saveData();
       }
       else if(e.target.tagName ==="SPAN"){
          e.target.parentElement.remove();
          saveData();
       }
    },false);
    
  /* you have to store our task in browser */
  function saveData()
  {
    localStorage.setItem("data",listContainer.innerHTML);
  }

/*for displaying the stored browser data whenever we open it*/
function showTask()
  {
    listContainer.innerHTML=localStorage.getItem("data");
  }
  showTask();
