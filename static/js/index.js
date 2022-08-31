let thead = document.getElementsByTagName('thead')[0];
let tbody = document.getElementsByTagName('tbody')[0];

let tr = document.getElementsByClassName('days')[0];
let tr2 = tbody.getElementsByTagName('tr');

let num1 = 1;
let listDays = []; //
// fetch()

let users = [
        {
            id: 1,
            fname: 'babek',
            lname: 'murselov',
            rutbe: 'kapitan',
            ataAdi: 'rustem',
            days: []
        },
        {
            id: 2,
            fname: 'qurban',
            lname: 'omerov',
            rutbe: 'leytenant',
            ataAdi: 'novruz',
            days: []
        },
    ]

for(i of users){
    for(x of i.days){
        listDays.push(x)
    }
}

function change(param, userId){
    let today = param.parentElement.getAttribute('data-index');
    console.log(users)
    if(listDays.includes(Number(today)) == false){
        param.parentElement.style.backgroundColor = param.checked == true ? 'green' : 'transparent';

        for(i of users){
            if(i.id == userId){
                i.days.push(parseInt(today));
                console.log(i.days)
                listDays.push(parseInt(today))
            }
        }
    }
    else{
        green = param.parentElement.getAttribute('style')
        if(green != 'background-color: green;'){
            // alert("Bu gunde novbe var")
            param.parentElement.style.backgroundColor = param.checked == true ? 'red' : 'transparent';
        }
        else{
            // console.log('if isledi', userId)
            param.parentElement.style.backgroundColor = 'transparent';   
            for(i of users){
                i.days.splice(i.days.indexOf(parseInt(today)), 1)
                listDays.splice(listDays.indexOf(parseInt(today)), 1)
            }
        }
    }
}

function deleteUser(param){
    param.parentElement.parentElement.remove();
}

for(let x = 1; x <= 31; x++){
    let th = document.createElement('th');
    th.innerHTML = x < 10 ? '0'+x : x;
    tr.appendChild(th);
}



function listAppend(){
    for(i of users){
        let tr = document.createElement('tr');
        tr.insertAdjacentHTML('beforeend', `
                <tr>    
                        <th><input type='checkbox'></th>
                        <th>${i['id']}</th>
                        <th>${i['rutbe']}</th>
                        <th colspan=''>${i['fname']}</th>                        
                        <th>${i['lname']}</th>
                        <th>${i['ataAdi']}</th>
                </tr>`)

        for(let x = 1; x <= 31; x++){
            let td = document.createElement('td');
            let input = document.createElement('input');
            let label = document.createElement('label');

            label.setAttribute('for', `day${num1}`)
            label.setAttribute('data-index', `${x}`)
            input.setAttribute("type", 'checkbox');
            input.setAttribute("id", `day${num1}`);
            input.setAttribute("onchange", `change(this, ${i.id})`);
            input.style.visibility = 'hidden';

            if(i.days.includes(x)){
                input.setAttribute("checked", ``);
                label.style.background = 'green'
            }

            label.appendChild(input)
            td.appendChild(label);
            
            tr.appendChild(td);
            num1+=1;
        }
        tbody.appendChild(tr);

    }
}

listAppend()

function addNewUser(){
    let userName = document.getElementById('newUser').value;
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = userName;
    tr.appendChild(th);


    for(let x = 1; x <= 31; x++){
        let th = document.createElement('td');
        th.innerHTML = ''

        if(x > 31){
            let input = document.createElement('input');
            input.setAttribute('type', 'button');
            input.style.color = 'rgb(230, 230, 230)';
         
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
