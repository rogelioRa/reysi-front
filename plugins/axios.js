export default function ({ $axios, redirect }) {
  // $axios.setHeader('Authorization', `${localStorage.getItem(ENV.authStorageKey) ? 'bearer ' + localStorage.getItem(ENV.authStorageKey) : ''}`)

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      // localStorage.removeItem(ENV.authStorageKey)
      redirect('/login')
    }
  })
}
