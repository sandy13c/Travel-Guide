window.onload = () => {
 const section = new Vue({
   el:"#section",
   data: {
    errors:[],
    comments:[],
    newComnum:null,
    newName:null,
    newComment:null,
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
       this.errors=[];
       if(!this.newComnum) {
         this.errors.push("Enter comment number");
       }
       if(!this.newName) {
         this.errors.push("Enter your name");
       }
       if(!this.newComment) {
         this.errors.push("Enter your comments please");
       }
       if(this.newComnum && this.newName && this.newComment) {
       axios.post('http://localhost:3100/comments/add',{
          com_id:this.newComnum,
          name:this.newName,
          details:this.newComment
       }).then((response) => {
            const data = response.data;
            this.comments.push(data);
            this.newComnum='';
            this.newName='';
            this.newComment='';
       });
     }
     },

     deleteComment(com_id) {
         axios.delete('http://localhost:3100/comments/'+ com_id).then(() => {
            this.showComments();
         });
     }

  }
 });
}
