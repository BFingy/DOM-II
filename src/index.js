import './less/index.less'

// Your code goes here!

//1.) onload

//old way
window.onload = function (event) {
    const heading = document.querySelector('h1');
    heading.textContent = 'READY TO GO!'

    //2.) copy
    //new way
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    //3.) click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    //4.) dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })

    //5.) keydown
    window.addEventListener('keydown', event => {
        if (event.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })

    //6.) mousemove
    //use throttle to restrict amount firing
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt
        //console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    //7.) mouseenter
    //8.) mouseleave
    const destinations = document.querySelectorAll('.destination');
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }

    //9.) wheel
    document.body.addEventListener('wheel', evt => {
        document.body.innerHTML = '<h1>BOO!!</h1>'
    })

    //.10) mouseover
    window.addEventListener('mouseover', (evt) => {
        evt.target.style.backgroundColor = 'yellow'
    })

    const links = document.querySelectorAll('a')

    Array.from(links).forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
        })
    })

    
}
