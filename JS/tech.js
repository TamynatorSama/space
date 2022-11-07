let portImage  = document.querySelectorAll(".portrait")
let landImage  = document.querySelectorAll(".landscape")
let techNavs = document.querySelectorAll(".tech-nav p")
let precentNav = 0;



const techContent = [
    [
        "The terminology...",
  "Launch vehicle",

  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    ],
    [
        "The terminology...",
  "Spaceport",

  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    ],
    [
        "The terminology...",
  "Space capsule",

  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema,and plenty of other activities to keep you entertained."
    ]
]

window.addEventListener('load',()=>{

    techNavs[precentNav].classList.add('back')
    landImage[precentNav].classList.add('show-land')
    portImage[precentNav].classList.add('portrait-show')

    techNavs.forEach((tech,indexfirst)=>{
        tech.addEventListener("click",()=>{
            precentNav = indexfirst
            techNavs.forEach((e,index)=>{                
                if(index == precentNav){
                    e.classList.add('back')
                }
                else{
                    e.classList.remove('back')
                }
            })
            landImage.forEach((eImg,index)=>{
                if(index == precentNav){
                    eImg.classList.add('show-land')
                }
                else{
                    eImg.classList.remove('show-land')
                }
            })
            portImage.forEach((pimg,index)=>{
                if(index == precentNav){
                    pimg.classList.add('portrait-show') 
                }
                else{
                    pimg.classList.remove('portrait-show')
                }
                console.log(portImage);
            })

        })
    })
})
