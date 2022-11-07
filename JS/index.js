let navHolder = document.querySelector('.links')
let newUnderline = document.querySelector('.links .underline')
let links = document.querySelectorAll('.links li')
let bg = document.querySelectorAll(".bg")
let content = document.querySelectorAll("section main")
let section = document.querySelector("section")
let planeline = document.querySelector("section .planet--line")
let link_pressed = 0

let underline = document.querySelector("section .underline")
window.addEventListener("load", () => {
    initialization()
    planeline.style.display = "none"
    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            link_pressed = index
            if (link_pressed == 1) {
                planeline.style.display = "block"
                section.classList.add('resize')
            }
            else if(link_pressed == 2){
                section.classList.add('resize-crew')
            }
            else {
                planeline.style.display = "none"
                section.classList.remove('resize-crew')
                section.classList.remove('resize')
            }
            bg.forEach((bgIndi, indexBg) => {
                if (indexBg == link_pressed) {
                    bgIndi.classList.add('show')
                }
                else {
                    bgIndi.classList.remove('show')
                }
            })
            content.forEach((contentInt, indexBg) => {
                if (indexBg == link_pressed) {
                    contentInt.classList.add('show')
                }
                else {
                    contentInt.classList.remove('show')
                }
            })
            underline.style.marginTop = `${navHolder.getBoundingClientRect().y + navHolder.getBoundingClientRect().height}px`
            underline.style.marginLeft = `${link.getBoundingClientRect().x}px`
            underline.style.width = `${link.getBoundingClientRect().width}px`
            newUnderline.style.marginTop = `${link.getBoundingClientRect().y}px`
            newUnderline.style.marginLeft = `${navHolder.getBoundingClientRect().width - 3}px`
            newUnderline.style.height = `${link.getBoundingClientRect().height}px`
        })
    })
})

function initialization() {
    underline.style.marginTop = `${navHolder.getBoundingClientRect().y + navHolder.getBoundingClientRect().height}px`
    underline.style.marginLeft = `${links[link_pressed].getBoundingClientRect().x}px`
    underline.style.width = `${links[link_pressed].getBoundingClientRect().width}px`
    newUnderline.style.marginTop = `${links[link_pressed].getBoundingClientRect().y}px`
    newUnderline.style.marginLeft = `${navHolder.getBoundingClientRect().width - 3}px`
    newUnderline.style.height = `${links[link_pressed].getBoundingClientRect().height}px`
    bg[0].classList.add('show')
    content[0].classList.add("show")
}

window.addEventListener("resize", () => {
    underline.style.marginTop = `${navHolder.getBoundingClientRect().y + navHolder.getBoundingClientRect().height}px`
    underline.style.marginLeft = `${links[link_pressed].getBoundingClientRect().x}px`
    underline.style.width = `${links[link_pressed].getBoundingClientRect().width}px`
})