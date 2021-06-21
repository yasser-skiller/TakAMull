let sideMenuLi = document.querySelectorAll('#navbarSupportedContent ul li a');
let arr_sideMenuLi = Array.from(sideMenuLi);

function Action(){
//   document.querySelector('#sideMenuToggle').classList.toggle('sideMenuToggleActive')
//   document.querySelector('#sideMenu').classList.toggle('sideMenuActive')
}

function Remove() {
  arr_sideMenuLi.forEach(ele => {
    ele.classList.remove('active-item');
  });
}

// document.querySelector('#sideMenuToggle').addEventListener('click',()=>{Action()})



// arr_sideMenuLi.forEach(element => {
//   element.addEventListener('click',()=>{
//     Action();
//   })
// });


let sections = document.querySelectorAll(".MainSection");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 1.2 &&
      scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 1.2
    ) {
      let currnetId = section.attributes.id.value;
      Remove();
      Add(currnetId);
      console.log(currnetId)

    }
  });
};

function Add(id) {
 let selctor = document.querySelector(`#navbarSupportedContent a[href="#${id}"]`)
 selctor.classList.add('active-item')
 console.log(selctor)
}




// let ArrowTop = document.querySelector(`#ArrowTop`);


// window.addEventListener('scroll', ()=>{
//   if(document.documentElement.scrollTop > 300){
//     ArrowTop.classList.add('showArrowTop')
//   }
//   else{
//     ArrowTop.classList.remove('showArrowTop')
//   }
// })

// ArrowTop.addEventListener('click', ()=>{
//   window.scroll({
//     top : 0,
//     left : 0,
//     behavior : "smooth",
//   })
// })