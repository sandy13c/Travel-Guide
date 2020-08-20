window.onload = function() {
var resortadd = new Vue({
 el: '#resortadd',
 data: {
    list:[],
    errors:[],
    resortname:null,
    country:null,
    url:null

 },
 methods: {
   ShowResorts() {
     this.list=[];
     axios.get('http://localhost:3100/list', {
     }).then((response) => {
       const data = response.data;
       this.list=data;
     });

   },
   AdditionalR(a) {
    this.errors=[];
     if(!this.resortname) {
       this.errors.push('Please enter a resort name');
     }
     if(!this.country) {
       this.errors.push('Please enter the country');
     }
     if(!this.url) {
       this.errors.push('Please enter a url');
     }
  if(this.resortname && this.country && this.url) {
     axios.post('http://localhost:3100/addlist',{
        resortname: this.resortname,
        country: this.country,
        url: this.url
   }).then((response) => {
     const data = response.data;
     this.list.push(data);
     this.resortname ='';
     this.country = '';
     this.url ='';


 }).catch(error=> {
   console.log('error: ' + error);
 });
}
 a.preventDefault();
},
Deletemethod(resort_id) {
  axios.delete('http://localhost:3100/deleteresort/' + resort_id).then(() => {
     this.ShowResorts();
  });
}
}
});
}
