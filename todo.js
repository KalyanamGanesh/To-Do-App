var list=document.getElementById('list');
var input=document.getElementById('input');
var button=document.querySelector('#button');

var clear=document.getElementById('clear');
clear.addEventListener('click',function(){
    input.value='';
})


input.addEventListener('keypress',addItem);
button.addEventListener('click',addItem);

function addItem(e){
    if((e.key=='Enter' || e.type=='click')){
        if(input.value==''){
            alert("enter some value")
        }else{
            var li=document.createElement('li');
            li.innerText=input.value;
            var dltBtn=document.createElement('button');
            dltBtn.innerText='Delete';
            dltBtn.id='dltBtn';
            li.id='listele';
            li.appendChild(dltBtn);

            dltBtn.addEventListener('click',function(){
                li.remove();
            })

            var upDateBtn=document.createElement('button');
            upDateBtn.innerText='Up Date';
            upDateBtn.id='upDateBtn';

            var upInput=document.createElement('input');
            upInput.id='upInput';
            
            //upInput.setAttribute('required', '');
            upDateBtn.addEventListener('click',function(){
                li.insertBefore(upInput,upDateBtn);
                upDateBtn.addEventListener('click',upDateData);
            });
            li.appendChild(upDateBtn);

            upInput.addEventListener('keypress',upDateData);
            

            list.appendChild(li);
            input.value='';

            function upDateData(e){
                if((e.key=='Enter' || e.type=='click')&&(upInput.value!='')){
                        li.innerText=upInput.value;
                        li.appendChild(dltBtn);
                        li.appendChild(upDateBtn);
                        upInput.value='';
                    
                }
            }
        }
        
    }
}

var textD=document.createElement('h1')
textD.id='textD';
textD.innerText='List of tasks you have to do :';
list.appendChild(textD);


