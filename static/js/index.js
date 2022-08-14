let show = true;

function editSave(param){
    let i = param.getElementsByTagName('i')[0];
    i.setAttribute('class', 'fa fa-save');
    param.setAttribute('onclick', 'mySave(this)')
    let index = param.parentElement.parentElement.getElementsByTagName('td')[0].innerHTML;
    let form = param.parentElement.parentElement.getElementsByTagName('form')[0];
    for(i of form.elements){
        if(i.tagName == 'INPUT'){
            i.removeAttribute('disabled')
            i.style.border = '1px solid rgb(200, 200, 200)';
        }
    }
}

function mySave(param){
    let form = param.parentElement.parentElement.getElementsByTagName('form')[0];
    let i = param.getElementsByTagName('i')[0];
    i.setAttribute('class', 'fa fa-edit');
    param.setAttribute('onclick', 'editSave(this)')
    for(i of form.elements){
        if(i.tagName == 'INPUT'){
            i.setAttribute('disabled', '')
            i.style.border = 'none';
        }
    }
}


function add(){
    let addTr = document.querySelector('tr.add');
    if(show){
        addTr.style.display = 'table-row'
        show = false;
    }
    else{
        addTr.style.display = 'none'
        show = true;
        
    }

}