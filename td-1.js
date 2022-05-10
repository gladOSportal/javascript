const text = document.getElementById("txt_to_add")
const plist=document.querySelector('#mylist p')
const parray=document.querySelector('#myarray p')
const myarray=['tab1','tab2','tab3']


function addtxt(){
    if (text.value!=='') {
        plist.innerText += text.value+'\n'
        text.value=''
    }

    else{
        alert ("write text")
    }
    textToAdd.focus();
}


function updatearray(){
    parray.innerText=''
    for (let i=0; i<myarray.length; i++){
        parray.innerText +=myarray[i]+'\n'
    }
}

function pushtoarray(){
   myarray.push(text.value)
   updatearray()
   text.value=''
   text.focus()
}

function shiftfromarray(){
    pop(text.value)
}