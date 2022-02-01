const getMyContacts = 'https://apim.eu.workato.com/mkn-eu/getmycontracts-v1/api-getmycontracts'

Vue.createApp({
    data() {
      return {
        items: {name: '', id: 1}
      }
    },
    methods: {
        async fetchApi() {
            await axios.get(getMyContacts, {
              headers: {
                "API-TOKEN": "0a5aee82b9c67fbe0ccaae8dcf7d6ac195d71aace29b2082693aed7c9a53d81d"
              }
            })
            .then((response) => {
              this.items = response.data.products
            })
            .catch((error) => {
              console.log(error)
            })
        }
    },
    mounted() {
        this.fetchApi()
    }
  }).mount('#app') 
