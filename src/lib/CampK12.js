import axios from 'axios'

const apiKey = 'trnsl.1.1.20190114T032834Z.2e3293257d808dbf.d5b2acd8e27b94e44ec30a4e8a29406ef124a034'

const translate = (lan, text) => {
  return getLanguages()
  .then(refLang => {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${text}&lang=en-${refLang[lan]}`
    return axios.get(url)
  })
  .then(response => {
    const { data } = response
    if (data.code === 200) {
      return data.text[0]
    } else {
      return '$$error'
    }
  })
  .catch(console.error)
}

const getLanguages = () => {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${apiKey}&ui=en`
  return axios.get(url)
    .then(response => {
      const { langs } = response.data
      const refLang = {}

      for (let key in langs) {
        refLang[langs[key].toLowerCase()] = key
      }
      return refLang
    })
}

export default {
  translate,
}