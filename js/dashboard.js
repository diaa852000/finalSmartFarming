const pathesName = document.querySelectorAll('[data-path]');
pathesName.forEach((path)=>{
    if(path.nextElementSibling){
        var iconSpan = document.createElement('span');
        iconSpan.innerHTML = '&gt;'
       path.insertAdjacentElement('afterend', iconSpan)
    }
});

