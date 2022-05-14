const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
    const New = document.querySelector('.New');
    const Done = document.querySelector('.Done');
    const Prio = document.querySelector('.Prio');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const bmarkBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    bmarkBtn.innerHTML = '<i class="fa fa-bookmark"></i>';


    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        New.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(bmarkBtn);
        
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Done.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

    bmarkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Prio.appendChild(parent);
        bmarkBtn.style.display = 'none';
    });
}