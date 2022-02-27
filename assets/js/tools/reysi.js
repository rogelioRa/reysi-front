class Memorick {
  getImageProfile (image, rol) {
    return ''
  }

  async isUrlImage (image) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if (regexp.test(image)) {
      return true
    } else {
      return false
    }
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  accentFold (s) {
    const accentmap = { á: 'a', é: 'e', è: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'a', É: 'e', Í: 'i', Ó: 'o', Ú: 'u' }
    if (!s) { return '' }
    let ret = ''
    for (let i = 0; i < s.length; i++) {
      ret += accentmap[s.charAt(i)] || s.charAt(i)
    }
    return ret
  }

  getStatus (_statusId) {
    switch (_statusId) {
      case 0:
        return { color: '', label: 'Todo' }
      case 1:
        return { color: '#33ccff', label: (localStorage.lang === 'es') ? 'Pendiente de asignar fotógrafo' : 'Pending to assign photographer' }
      case 2:
        return { color: '#28a7a1', label: (localStorage.lang === 'es') ? 'Aprobado' : 'Approved' }
      case 3:
        return { color: '#28a745', label: (localStorage.lang === 'es') ? 'En photoshoot' : 'In photoshoot' }
      case 4:
        return { color: '#ff9800', label: (localStorage.lang === 'es') ? 'Pendiente de subir fotos' : 'Pending uploading photos' }
      case 5:
        return { color: '#ffbb33', label: (localStorage.lang === 'es') ? 'En aprobación' : 'Under approval' }
      case 6:
        return { color: '#00C851', label: (localStorage.lang === 'es') ? 'Fotos aprobadas' : 'Approved photos' }
      case 7:
        return { color: '#007E33', label: (localStorage.lang === 'es') ? 'Fotos descargadas' : 'Downloaded photos' }
      case 10:
        return { color: '#ff9800', label: (localStorage.lang === 'es') ? 'Pendiente de pago' : 'Pending payment' }
      case 11:
        return { color: '#CC0000', label: (localStorage.lang === 'es') ? 'Solicitud de cancelación' : 'Cancellation request' }
      case 12:
        return { color: '#ff4444', label: (localStorage.lang === 'es') ? 'Solicitud de modificación' : 'Modification request' }
      case 13:
        return { color: '#CC0000', label: (localStorage.lang === 'es') ? 'Cancelada' : 'Cancelled' }
      default:
        return { color: '#6c757d', label: (localStorage.lang === 'es') ? 'No especificado' : 'Not specified' }
    }
  }
}
export default new Memorick()
