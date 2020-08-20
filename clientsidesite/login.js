window.onload = function() {
 var login = new Vue({
    el:'#login',
    data: {
      errors:[],
      username:'',
      password:''
    },
    methods: {
      Logon() {
        this.errors = [];
          if (this.username === '') {
              this.errors.push('Please enterusername');
          }
          if (this.password === '') {
              this.errors.push('Please password');
          }
             axios.post('http://localhost:3100/login/add',
              { username: this.username,
                password: this.password
            }).then((response) => {
              this.username = '';
              this.password = '';
              confirm('You have succesfuly login in');
            }).catch( error => {
              console.log('error: ' + error);
            });
        }

      }
});
}
