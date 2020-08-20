window.onload = function() {
 var login = new Vue({
    el:'#login',
    data: {
      errors:[],
      username:null,
      password:null
    },
    methods: {
      Logon() {
        this.errors = [];
          if (!this.username) {
              this.errors.push('Please enter username');
          }
          if (!this.password) {
              this.errors.push('Please enter password');
          }
            if (this.username && this.password) {
              confirm('You have succesfuly login in');
             axios.post('http://localhost:3100/login/add',
              { username: this.username,
                password: this.password
            }).then((response) => {
              this.username = '';
              this.password = '';
            }).catch( error => {
              console.log('error: ' + error);
            });
          }
        }

      }
});
}

