window.onload = function() {
 var registeration = new Vue({
    el:'#registeration',
    data: {
      errors:[],
      first_name:null,
      last_name:null,
      user_name:null,
      password:null,
      confirmpassword:null
    },
    methods: {
      Register(a) {
           this.errors = [];
           if (!this.first_name) {
             this.errors.push("Please enter firstname");
          }
           if (!this.last_name) {
             this.errors.push("Please enter lastname");
           }
          if (!this.user_name) {
            this.errors.push("Please enter username");
          }
          if(!this.password) {
            this.errors.push("Please enter password");
          }
          if (!this.confirmpassword) {
            this.errors.push("Please re-enter password");
          }
          if(this.firstname && this.lastname &&
          this.user_name && this.password && this.confirmpassword) {
               confirm("Thank you for registering");
               axios.post('http://localhost:3100/register/addUser',
              {
                     first_name: this.first_name,
                     last_name: this.last_name,
                     user_name: this.user_name,
                     password: this.password,
                     confirmpassword: this.confirmpassword
            }).then((response) =>{
               this.first_name='';
               this.last_name='';
               this.user_name='';
               this.password='';
               this.confirmpassword='';
            }).catch(error=> {
            });
          }
            a.preventDefault();
      }

    }
 });


}

