module.exports = {
  context: {
    heading: {
      text: 'Buy with us',
      tag: 'h3',
      class: ''
    },
    items: [
      {
        iconLabel: 'Delivery truck',
        iconWrapperClass: 'brief-info__icon-wrapper--delivery-truck',
        icon: {
          class: 'brief-info__icon brief-info__icon--delivery-truck',
          iconId: 'shipping-time-truck',
        },
        link: {
          class: '',
          href: '#',
          text: 'see details'
        },
        title: {
          class: '',
          tag: 'h3',
          text: 'Shipping in 24h'
        }
      },
      {
        iconLabel: 'Curved arrows',
        icon: {
          class: 'brief-info__icon',
          iconId: 'curved-arrows'
        },
        link: {
          class: '',
          href: '#',
          text: 'see details'
        },
        title: {
          class: '',
          tag: 'h3',
          text: 'Free returns'
        }
      },
      {
        class: 'brief-info__icon brief-info__icon--shield',
        iconLabel: 'Shield',
        icon: {
          class: 'brief-info__icon',
          iconId: 'shield'
        },
        link: {
          class: '',
          href: '#',
          text: 'see details'
        },
        title: {
          class: '',
          tag: 'h3',
          text: 'Secure payment'
        },

      }
    ]

  }
};
