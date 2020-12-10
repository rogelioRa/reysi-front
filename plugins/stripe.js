export default ({ app }, inject) => {
  const stripeScript = document.getElementById('stripe')
  if (stripeScript) {
    return
  }
  const script = document.createElement('script')
  script.async = true
  script.id = 'stripe'
  script.src = 'https://js.stripe.com/v2/'
  document.head.appendChild(script)
  inject('tokenizerStripe', function (key, stripe, card) {
    stripe.setPublishableKey(key)
    return new Promise((resolve, reject) => {
      stripe.source.create({
        type: 'card',
        amount: card.amount,
        card: {
          number: card.cardNumber,
          cvc: card.cvc,
          exp_month: card.expMonth,
          exp_year: card.expYear
        }
      },
      function (result, data) {
        console.log(result, data)
        resolve(data.id)
      },
      function (err) {
        reject(err)
      })
    })
  })
}
