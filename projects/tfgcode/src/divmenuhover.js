divActualMenu = document.getElementById('root-button')
buttons = document.querySelectorAll('jscript-button')
 
buttons.forEach(button,index)

divActualMenu.addEventListener('mouseover', function(){
    setTimeout(function(){
        buttons.classList.add('visible')
    })
})

divActualMenu.addEventListener('mouseout', function(){
    setTimeout(function(){
        buttons.classList.remove('visible')
    })
})
