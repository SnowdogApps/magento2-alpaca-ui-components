module.exports = {
  context: {
    heading: {
      tag: 'h1',
      text: 'Compare Products'
    },
    products: [
      {
        name: 'Affirm Water Bottle',
        img: {
          class: 'compare__image',
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/banner/banner-480_480.png',
          alt: 'Affirm Water Bottle'
        },
        rating: {
          class: 'compare__rating'
        },
        price: '$49.00',
        cart: {
          tag: 'button',
          text: '<span class="compare__cart-text">Add to Cart</span>',
          class: 'button--secondary compare__cart',
          iconId: 'shopping-cart',
          iconTitle: 'Shopping Cart',
          iconClass: 'icon compare__cart-icon',
          attributes: 'type="submit" aria-label="Add to Cart" title="Add to Cart"'
        },
        wishlist: {
          tag: 'button',
          class: 'button--icon compare__wishlist',
          iconId: 'heart',
          iconTitle: 'Heart',
          iconClass: 'button__icon compare__wishlist-icon',
          attributes: 'type="button" aria-label="Add to Wish List" title="Add to Wish List"'
        },
        remove: {
          tag: 'button',
          class: 'button--icon compare__remove',
          iconId: 'remove',
          iconTitle: 'Trash bin',
          iconClass: 'button__icon compare__remove-icon',
          attributes: 'type="button" aria-label="Remove from Compare" title="Remove from Compare"'
        }
      },
      {
        name: 'Aim Analog Watch',
        img: {
          class: 'compare__image',
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/banner/banner-480_480.png',
          alt: 'Aim Analog Watch'
        },
        rating: {
          class: 'compare__rating'
        },
        price: '$49.00',
        cart: {
          tag: 'button',
          text: '<span class="compare__cart-text">Add to Cart</span>',
          class: 'button--secondary compare__cart',
          iconId: 'shopping-cart',
          iconTitle: 'Shopping cart',
          iconClass: 'icon compare__cart-icon',
          attributes: 'type="submit" aria-label="Add to Cart" title="Add to Cart"'
        },
        wishlist: {
          tag: 'button',
          class: 'button--icon compare__wishlist',
          iconId: 'heart',
          iconTitle: 'Heart',
          iconClass: 'button__icon compare__wishlist-icon',
          attributes: 'type="button" aria-label="Add to Wish List" title="Add to Wish List"'
        },
        remove: {
          tag: 'button',
          class: 'button--icon compare__remove',
          iconId: 'remove',
          iconTitle: 'Trash bin',
          iconClass: 'button__icon compare__remove-icon',
          attributes: 'type="button" aria-label="Remove from Compare" title="Remove from Compare"'
        }
      }
    ],
    attributes: [
      {
        label: 'SKU',
        products: [
          '24-UG06',
          '24-MG04'
        ]
      },
      {
        label: 'Description',
        products: [
          'You\'ll stay hydrated with ease with the Affirm Water Bottle by your side or in hand. Measurements on the outside help you keep track of how much you\'re drinking, while the screw-top lid prevents spills. A metal carabiner clip allows you to attach it to the outside of a backpack or bag for easy access.',
          'Stay light-years ahead of the competition with our Aim Analog Watch. The flexible, rubberized strap is contoured to conform to the shape of your wrist for a comfortable all-day fit. The face features three illuminated hands, a digital read-out of the current time, and stopwatch functions.'
        ]
      },
      {
        label: 'Short Description',
        products: [
          'N/A',
          'N/A'
        ]
      },
      {
        label: 'Activity',
        products: [
          'Yoga, Recreation, Gym, Sports',
          'Outdoor, Recreation, Gym, Sports'
        ]
      }
    ]
  }
}
