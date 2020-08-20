window.onload = function() {
var res = new Vue({
  el:'#res',
  message:"Featured Resorts",
  data: {
     resorts: [
       {name:"Excaret", location:"Rivera Maya Mexico",image:'https://d3hfxk7rwdcpol.cloudfront.net/CSN/9096195a-be58-48ee-82f3-eee286313e48/images/28196f813fc84d4492d8b667acd26c22_LARGE.jpg'},
         {name:"Antalia Resort",location:"Turkey",image:'https://i.pinimg.com/originals/0d/d5/77/0dd577e9c78b2a901a7df12a18e53967.jpg'},
         {name:"St. Croix",location:"Carribean Islands",image:'https://www.chenaybay.com/images/2018/aerial/01-chenay-bay-beach-resort-saint-croix-usvi.jpg'},
         {name:"Bahia Princepe Grand", location:"Jamaica",image:'https://r-cf.bstatic.com/images/hotel/max1024x768/432/43241975.jpg'},
         {name:"Punta Canna", location:"Puerterico",image:'https://aeroplan.aircanadavacations.com/media/images/common/csstorage/resort/Dominican_Republic/01_Grand-Bahia-Principe-Punta-Cana.jpg'}
     ],

  }


});
}
