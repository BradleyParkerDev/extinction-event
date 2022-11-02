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
meteor.addEventListener('click',function(){

    for(let i = 0; i < rowImage.length; i++){
        rowImage[i].style.width ='0px';
    }
    console.log("Images disapeared!");
})
