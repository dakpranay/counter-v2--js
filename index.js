(function(){
    let button=document.querySelectorAll('.button');
    let counter=document.querySelector('#counter')
    let count=0;

    button.forEach((button)=>{
        button.addEventListener('click',function(){
            if(button.classList.contains('increment')){
                count++;
            }
            else if(button.classList.contains('decrement')){
                count--
            }
            else {
                count=0;
            }

            if(count<0){
                counter.style.color='red';
            }
            else if(count==0){
                counter.style.color='black'
            }
            else if(count>0){
                counter.style.color='green'
            }
            counter.innerHTML=count;
    
        })
    })
})()