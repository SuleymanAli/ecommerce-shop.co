// main.js
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

document.addEventListener('DOMContentLoaded', () => {
  // Testimonial slider
  if (document.querySelector('.glide')) {
    new Glide('.glide', {
      perView: 3,
      type: 'carousel',
      gap: 20,
      breakpoints: {
        640: {
          perView: 1,
        },
        1024: {
          perView: 2,
        },
      },
    }).mount()
  }

  // Product slider
  new Glide('.glide-product', {
    perView: 4,
    type: 'carousel',
    gap: 20,
    breakpoints: {
      400: {
        perView: 1,
      },
      640: {
        perView: 1,
        peek: { before: 0, after: 240 },
      },
      1024: {
        perView: 2,
      },
    },
  }).mount()

  // Top selling product slider
  new Glide('.glide-product--top-selling', {
    perView: 4,
    type: 'carousel',
    gap: 20,
    breakpoints: {
      400: {
        perView: 1,
      },
      640: {
        perView: 1,
        peek: { before: 0, after: 240 },
      },
      1024: {
        perView: 2,
      },
    },
  }).mount()
})

const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
  // Toggle max-height to animate open/close
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0')
    mobileMenu.classList.add('max-h-60') // Open animation
  } else {
    mobileMenu.classList.add('max-h-0') // Close animation
    mobileMenu.classList.remove('max-h-60')
  }
})
