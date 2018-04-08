  const KEY='Client';
  const app = new Vue({
         el: '#app',
         data(){
           return {
             item:'',
             seen: false,
             hide:true,
             chooseType:'',
             day:'',
             time:'',
             name:'',
             number:'',
             info: [],
						 search:''
             
           }
         },
				 computed:{
					 filtered:function(){
					 return this.info.filter((item) => {
						 return item.chooseType.match(this.search) ||
							 			item.day.match(this.search) ||
							      item.time.match(this.search) ||
							 			item.name.match(this.search) ||
						 				item.number.match(this.search);
					 });
					 }
				 },
         created(){
           this.info = JSON.parse(localStorage.getItem(KEY) || '[]');
         },
         methods:{
           addClient(){
             this.info.push({
               chooseType:this.chooseType,
               day:this.day,
               time:this.time,
                name:this.name,
                 number:this.number});
             this.chooseType = '';
             this.day = '';
             this.time = '';
             this.name = '';
             this.number = '';
             localStorage.setItem(KEY, JSON.stringify(this.info));
           },
           remove(item){
             this.info.splice(this.info.indexOf(item), 1);
              localStorage.setItem(KEY, JSON.stringify(this.info));
           }
           // change(item){
           //   this.edited = item;
           // },
           // done(item){
           //   if(!this.edited){
           //     return
           //   }
           //   this.edited = null;
           //   item.chooseType = item.chooseType.trim();
           //   item.day = item.day.trim();
           //   item.time = item.time.trim();
           //   item.name = item.name.trim();
           //   item.number =item.number.trim();
           //   if(!item.chooseType || !item.day || !item.time || !item.name || !item.number){
           //     this.remove(item);
           //   }
           //   localStorage.setItem(KEY, JSON.stringify(this.info));
           // }
         }
     });
