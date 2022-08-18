let thead = document.getElementsByTagName('thead')[0];
let tbody = document.getElementsByTagName('tbody')[0];

let tr = document.getElementsByClassName('days')[0];
let tr2 = tbody.getElementsByTagName('tr');

let num1 = 0;

function change(param){
    param.parentElement.style.backgroundColor = param.checked == true ? 'green' : 'transparent';
}

function deleteUser(param){
    param.parentElement.parentElement.remove();
}

for(let x = 1; x <= 32; x++){
    if(x == 32){
        let th = document.createElement('th');
        th.innerHTML = 'Icons'
        th.setAttribute('colspan', '2')
        tr.appendChild(th);
        continue        
    }
    let th = document.createElement('th');
    th.innerHTML = x < 10 ? '0'+x : x;
    tr.appendChild(th);
}

for(i of tr2){
    for(let x = 1; x <= 33; x++){
        let th = document.createElement('td');
        th.innerHTML = ''


        if(x > 31){
            let input = document.createElement('input');
            input.setAttribute('type', 'button');
            input.style.color = 'rgb(230, 230, 230)';
            if (x == 32){
                input.value = 'Edit';
                input.style.background = 'green';
            }
            else{
                input.value = 'Delete'
                input.setAttribute('onclick', 'deleteUser(this)')
                input.style.background = 'red'
            }
            th.appendChild(input)
        }
        else{
            let input = document.createElement('input');
            let label = document.createElement('label');
            label.setAttribute('for', `day${num1}`)

            input.setAttribute("type", 'checkbox');
            input.setAttribute("id", `day${num1}`);
            input.setAttribute("onchange", 'change(this)');
            input.style.visibility = 'hidden';

            label.appendChild(input)
            th.appendChild(label);
        }
        
        i.appendChild(th);
        num1+=1;
    }
}


function addNewUser(){
    console.log('isledi');
    let userName = document.getElementById('newUser').value;
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = userName;
    tr.appendChild(th);


    for(let x = 1; x <= 33; x++){
        let th = document.createElement('td');
        th.innerHTML = ''


        if(x > 31){
            let input = document.createElement('input');
            input.setAttribute('type', 'button');
            input.style.color = 'rgb(230, 230, 230)';
            if (x == 32){
                input.value = 'Edit';
                input.style.background = 'green';
            }
            else{
                input.value = 'Delete'
                input.setAttribute('onclick', 'deleteUser(this)')
                input.style.background = 'red'
            }
            th.appendChild(input)
        }
        else{
            let input = document.createElement('input');
            let label = document.createElement('label');
            label.setAttribute('for', `day${num1}`)

            input.setAttribute("type", 'checkbox');
            input.setAttribute("id", `day${num1}`);
            input.setAttribute("onchange", 'change(this)');
            input.style.visibility = 'hidden';

            label.appendChild(input)
            th.appendChild(label);
        }
        
        tr.appendChild(th);
        num1+=1;
    }
    tbody.appendChild(tr);
}
