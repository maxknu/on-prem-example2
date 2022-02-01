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
                "API-TOKEN": ""
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
