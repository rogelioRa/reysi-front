export default ({ app }, inject) => {
  function doPayment (id, amount, description) {
    return new Promise((resolve, reject) => {
      var btn = window.paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: amount,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: amount
                  }
                }
              },
              items: [
                {
                  name: description,
                  quantity: '1',
                  unit_amount: {
                    currency_code: 'USD',
                    value: amount
                  }
                }]
            }]
          })
        },
        onError: function (err) {
          return reject(err)
        },
        onApprove: function (data, actions) {
          actions.order.capture().then(function (details) {
            btn.hide()
            return resolve(details)
          })
        }
      })
      btn.render(id)
    })
  }

  const paypalScript = document.getElementById('paypalscript')

  if (paypalScript) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.id = 'paypalscript'
  script.src = 'https://www.paypal.com/sdk/js?intent=capture&client-id=' + (process.env.PAYPAL_MODE === 'sandbox' ? process.env.PAYPAL_CLIENT_ID : process.env.PAYPAL_CLIENT_ID_PRODUCTION)
  document.head.appendChild(script)
  inject('paypal', (id, amount, description) =>
    new Promise((resolve, reject) => {
      doPayment(id, amount, description)
        .then(res => { resolve(res) })
        .catch(error => { reject(error) })
    })

  )
}
