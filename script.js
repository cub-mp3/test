function greet(name, lastName) {
    console.log('hello' + ' ' + name  + ' ' + lastName);
}

greet('cub', 'nft')


function square(number){
    return number / number;
}

console.log(square(2))

// navbaa // navbaar// navbaa // navbaar



    const navbar = document.getElementById('navbar');
    const listItems = navbar.querySelectorAll('li');

    listItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            if (!item.querySelector('a').classList.contains('active')) 
            
            {
                listItems.forEach((otherItem) => {
                    if (otherItem !== item && !otherItem.querySelector('a').classList.contains('active')) {
                        otherItem.classList.add('hovered');
                    }
                });
            }
        });

        item.addEventListener('mouseleave', () => {
            if (!item.querySelector('a').classList.contains('active')) {
                listItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('hovered');
                    }
                });
            }
        });
    });



// responsive navbarresponsive navbarresponsive navbar responsive navbar

 const nav = document.getElementById('navbar')
 const close = document.getElementById('close')
 const menu = document.getElementById('menu')

 menu.addEventListener('click', () => {
    nav.classList.add('data-visible');
 })

 close.addEventListener('click', () => {
    nav.classList.remove('data-visible')
 })



// img lazy // img lazy // img lazy // img lazy // img lazy

 // Use Intersection Observer to detect when an element enters the viewport
 const images = document.querySelectorAll('img');

 const options = {
     root: null,
     rootMargin: '0px',
     threshold: 0.5
 };

 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('appear');
             observer.unobserve(entry.target); // Stop observing once the element appears
         }
     });
 }, options);

 images.forEach(image => {
     observer.observe(image);
 });

