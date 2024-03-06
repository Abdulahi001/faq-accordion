const questionBtn = document.querySelectorAll('.question-img');


questionBtn.forEach((btn) => {
    btn.addEventListener('click', function(){
        
        const pragraph = this.nextElementSibling;
        const plus = this.querySelector('.plus');
        const minus = this.querySelector('.minus');

        if(pragraph.style.display !== 'block'){
            pragraph.style.display = 'block';
            plus.style.display = 'none';
            minus.style.display = 'block' 
        } else{
            // pragraph.style.maxHeight = pragraph.scrollHeight + 'px';
            pragraph.style.display = 'none';
            plus.style.display = 'block';
            minus.style.display = 'none'
        }
        
      
       
    })
})