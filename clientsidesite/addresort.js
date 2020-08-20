window.onload = function() {
var resortadd = new Vue({
 el: '#resortadd',
 data: {
    list:[],
    resortname:'',
    country:'',
    url:''

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


 });
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
