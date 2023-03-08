export class Menu_object{
    constructor(){
        this.list=[];

        
    }
    category_push(category){
         this.list.push({
            menu:{category},
            shop:[],
         });
    }
    shop_push(i,title){
        this.list.shop[i].push({
            title:title,
            menu:[]
        });
    }
    menu_push(i,j,name,price,intro){
        this.list.shop[i].menu[j].push({
            name:name,
            price:price,
            intro:intro,
        });
    }
}