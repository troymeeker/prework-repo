
const headerOne = document.querySelector('h5')

headerOne.style.color = 'black';
headerOne.innerText = "Follow us to see more fun routes in Oregon!";

const itemFive = document.getElementById('item-five');
 itemFive.innerText = "Mt Jefferson Wilderness - Sisters/Bend"

const itemTwo = document.getElementById('item-two');
itemTwo.innerText = "Forest Park/ Wildwood Trail - Portland"

 document.getElementById('color').onclick = function(){
 
    document.getElementById('contact').style.color = 'white';
    document.getElementById('header').style.backgroundColor = 'brown';
    document.getElementById('contact').style.backgroundColor = 'grey';
    document.getElementById('header').style.color = 'gold';
    document.querySelector('main').style.backgroundColor = 'orange';
 };



