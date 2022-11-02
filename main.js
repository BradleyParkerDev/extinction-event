let orderedListItem = document.querySelectorAll('#ordered li')

for(let i = 0; i < orderedListItem.length; i++){
    orderedListItem[i].addEventListener('click',function(){
        
        orderedListItem[i].style.textDecoration = "line-through"
        console.log('Ordered list item crossed out!')
    })
}