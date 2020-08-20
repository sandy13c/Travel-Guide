window.onload = () => {
 const section = new Vue({
   el:"#section",
   data: {
    comments:[],
    newName:'',
    newComment:'',
    //loading: false
    //submitting:false

  },
  methods: {

    showComments() {
      //this.loading=true;
      this.comments=[];
      axios.get('http://localhost:3100/comments').then((response) => {
          const data = response.data;
          this.comments=data;

      });
    },
     addComment() {
       axios.post('http://localhost:3100/comments/add',{
          name:this.newName,
          details:this.newComment
       }).then((response) => {
            const data = response.data;
            this.comments.push(data);
            this.newName='';
            this.newComment='';
            //this.submitting=true;

       });
     }

  }
 });
}
