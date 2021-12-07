const panel = document.querySelectorAll('.panel')

panel.forEach(panel => {
    panel.addEventListener('click', () => {
        removeEventListener()
        panel.classList.add('active')
    })
})

function removeEventListener() {
    panel.forEach(panel => {
        panel.classList.remove('active')
    })
}




