var app = new Vue(
    {
        el: '#root',

        data: {
            emailList: [

            ]
        },

        methods: {
            
		},

        mounted() {

            for( let i = 0; i < 10; i++ ) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    let currentEmail = response.data.response;
                    this.emailList.push(currentEmail);
                });
                
            }

            console.log(this.emailList)
        }

    });
