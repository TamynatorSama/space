const crewImages = document.querySelectorAll('.personal--pics img')
const navigators = document.querySelectorAll('.nav--circle')

let clickedIndex = 0;


window.addEventListener('load', () => {
    navigators[clickedIndex].classList.add('clicked')
    crewImages[clickedIndex].classList.add('show--img')

    navigators.forEach((nav, navIndex) => {
        console.log(navIndex)
        nav.addEventListener('click', () => {
            clickedIndex = navIndex
            navigators.forEach((newNav,newIndex)=>{
                if(newIndex == clickedIndex){
                    newNav.classList.add('clicked')
                }
                else{
                    newNav.classList.remove('clicked')
                }
            })
            // console.log(navigators)
            crewImages.forEach((img,imgIndex)=>{
                if(imgIndex == clickedIndex){
                    img.classList.add('show--img')
                }
                else{

                    img.classList.remove('show--img')
                }
    
            })
        })

    })
})