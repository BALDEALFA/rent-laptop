export { default as Hero } from '../../components/Hero.vue'
export { default as LargeCard } from '../../components/LargeCard.vue'
export { default as LargeCardDisplay } from '../../components/LargeCardDisplay.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as PageNotFound } from '../../components/PageNotFound.vue'
export { default as RentModal } from '../../components/RentModal.vue'
export { default as ReviewCard } from '../../components/ReviewCard.vue'
export { default as Reviews } from '../../components/Reviews.vue'
export { default as SmallCard } from '../../components/SmallCard.vue'
export { default as SmallCardDisplay } from '../../components/SmallCardDisplay.vue'

export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyLargeCard = import('../../components/LargeCard.vue' /* webpackChunkName: "components/large-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLargeCardDisplay = import('../../components/LargeCardDisplay.vue' /* webpackChunkName: "components/large-card-display" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyPageNotFound = import('../../components/PageNotFound.vue' /* webpackChunkName: "components/page-not-found" */).then(c => wrapFunctional(c.default || c))
export const LazyRentModal = import('../../components/RentModal.vue' /* webpackChunkName: "components/rent-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyReviewCard = import('../../components/ReviewCard.vue' /* webpackChunkName: "components/review-card" */).then(c => wrapFunctional(c.default || c))
export const LazyReviews = import('../../components/Reviews.vue' /* webpackChunkName: "components/reviews" */).then(c => wrapFunctional(c.default || c))
export const LazySmallCard = import('../../components/SmallCard.vue' /* webpackChunkName: "components/small-card" */).then(c => wrapFunctional(c.default || c))
export const LazySmallCardDisplay = import('../../components/SmallCardDisplay.vue' /* webpackChunkName: "components/small-card-display" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
