
const headerOne = document.querySelector('h5')

headerOne.style.color = 'black';
headerOne.innerText = "Follow us to see more fun routes in Oregon!";

const itemFive = document.getElementById('item-five');
 itemFive.innerText = "Mt Jefferson Wilderness - Sisters/Bend"

const itemTwo = document.getElementById('item-two');
itemTwo.innerText = "Forest Park/ Wildwood Trail - Portland"

const background = document.getElementById('header');
document.getElementsById('menu-item').onclick = () => {

    background.style.color = 'brown';
  
};

