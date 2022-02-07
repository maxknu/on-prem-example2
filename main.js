const getMyContacts = 'https://apim.eu.workato.com/mkn-eu/github-pages-getproducts-v1/guthub-public-api-getproducts-onpremagent'

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
                "API-TOKEN": "86c6fad2196d56057429f0e21d937c5b537f000bc77689469c25461587fbff17"
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
