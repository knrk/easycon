document.addEventListener('DOMContentLoaded', () => {

    particlesJS.load('particles-js', './particles.json', function() {
        console.log('callback - particles.js config loaded');
    });



    const sections = document.querySelectorAll('main .boxes a');
    const contents = document.querySelectorAll('main .content');
    const clearActive = (list, contentboxes) => {
        list.forEach(item => {
            item.classList.remove('active');
        });
        contentboxes.forEach(content => {
            content.classList.add('hidden');
        })
    }
    sections.forEach((link) => {
        link.addEventListener('click', (event) => {
            clearActive(sections, contents);
            event.target.classList.add('active');
            const activate = Array.from(event.target.classList).filter(cn => cn !== 'box');
            document.querySelector(`#${activate[0]}-content`).classList.remove('hidden');
        });
    });

    new Glide('#webapps .slider').mount();
    new Glide('#controlling .slider', {
        autoplay: 10000,
        hoverpause: true
    }).mount();
});