const url = "http://localhost:3000"
const detailImage = document.getElementsByClassName('detail-image')[0]
const detailName = document.getElementsByClassName('name')[0]
const detailRestaurant = document.getElementsByClassName('restaurant')[0]
const detailRating = document.getElementById("rating-display")
const detailComment = document.getElementById("comment-display")
const menu = document.getElementById('ramen-menu');
const newRamenForm = document.getElementById('new-ramen');
fetch(`${url}/ramens`)
  .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw 'error'
      }
    })
  .then(renderRamens);
function renderRamens(ramens) {
    ramens.forEach(ramenImage)
    console.log(ramens[0])
    
 }
    
function ramenImage(ramen) {
    const image = document.createElement('img')
    image.src = ramen.image;
    menu.append(image);
    
    image.addEventListener('click', () => addRamenFax(ramen))
  }
  
function addRamenFax(ramen) {
  
  detailImage.src = ramen.image
  detailName.textContent = ramen.name
  detailRestaurant.textContent = ramen.restaurant
  detailRating.textContent = ramen.rating
  detailComment.textContent = ramen.comment
  }
newRamenForm.addEventListener('submit', YourRamen)

function YourRamen(e) {
  e.preventDefault()

  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target['new-comment'].value,
  }
  ramenImage(newRamen)
}
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
// fetch(`${url}/ramens`)
// .then(response => response.json())
// .then(data =>  {
//   data.forEach((curRamen) => {
//    const ramenImg = document.createElement('img')
//    ramenImg.src = curRamen.image
//    ramenMenu.append(ramenImg)
   
//    })
//   }
// )

//const editForm = document.getElementById("edit-ramen")