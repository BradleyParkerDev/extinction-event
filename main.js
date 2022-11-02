let orderedListItem = document.querySelectorAll('#ordered li');

for(let i = 0; i < orderedListItem.length; i++){
    orderedListItem[i].addEventListener('click',function(){
        
        orderedListItem[i].style.textDecoration = "line-through";
        console.log('Ordered list item crossed out!');
    })
}

let unorderedListItem = document.querySelector('#unordered');

unorderedListItem.addEventListener('click', function(event){
    let listItem = event.target;
    console.log(listItem.innerText);
    listItem.style.opacity ='0';

})




let rowImage = document.querySelectorAll('#row img');
for(let i = 0; i < rowImage.length; i++){
    rowImage[i].addEventListener('click',function(){
        
        rowImage[i].style.width = "0px";
        console.log('Image disappeared!');
    })
}

let meteor = document.querySelector('#destroy-all');
let unorderedListItemMeteor = document.querySelectorAll('#unordered li');

meteor.addEventListener('click',function(){

    for(let i = 0; i<orderedListItem.length; i++){
        orderedListItem[i].style.textDecoration = "line-through";
    }

    for(let i = 0; i<unorderedListItemMeteor.length; i++){
        unorderedListItemMeteor[i].style.opacity = "0";
    }
  
    for(let i = 0; i < rowImage.length; i++){
        rowImage[i].style.width ='0px';
    }

    console.log('Ordered list items are crossed out!');
    console.log('Unordered list items have an opacity of 0!');  
    console.log("Images have disappeared!");
})
