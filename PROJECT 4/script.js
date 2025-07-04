const toggle = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggle.forEach(toggle => toggle.addEventListener('change', (e)=>    doTheTrick  (e.target)))

function doTheTrick(theClickedone) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedone) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            good.checked = false
        }

        if(fast === theClickedone) {
            cheap.checked = false
        }
    }
}