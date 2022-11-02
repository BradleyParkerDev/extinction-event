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

let meteor = document.querySelector('#destroy-all');

let rowImage = document.querySelectorAll('#row img')
meteor.addEventListener('click',function(){

    for(let i = 0; i < rowImage.length; i++){
        rowImage[i].style.width ='0px';
    }
    console.log("Images disapeared!");
})
