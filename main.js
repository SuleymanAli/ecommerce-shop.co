// main.js
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

document.addEventListener('DOMContentLoaded', () => {
  // Testimonial slider
  new Glide('.glide', {
    perView: 3,
    type: 'carousel',
    gap: 20,
    breakpoints: {
      640: {
        perView: 1,
      },
    },
  }).mount()

  // Product slider
  new Glide('.glide-product', {
    perView: 4,
    type: 'carousel',
    gap: 20,
    breakpoints: {
      640: {
        perView: 1,
        peek: { before: 0, after: 200 },
      },
      768: {
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
      640: {
        perView: 1,
        peek: { before: 0, after: 200 },
      },
      768: {
        perView: 2,
      },
    },
  }).mount()
})
