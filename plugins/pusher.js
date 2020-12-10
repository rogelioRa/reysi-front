import Vue from 'vue'
import pusher from 'vue-pusher'
Vue.use(pusher, {
  api_key: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/13a2e325-b4b2-424d-bdb9-b9d4e2ebb69c/token',
  options: {
    cluster: 'v1:us1:13a2e325-b4b2-424d-bdb9-b9d4e2ebb69c',
    encrypted: true
  }
})
