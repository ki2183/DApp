import './category.css';
import { Menu } from './menu.js';
function ChoiceMenu(){
    const MC = new Menu();
    const li = [];
    MC.list.forEach(e => {
        li.push(
            <a href='#'key={e.menu}><div><p>{e.menu}</p></div></a>
        ); 
    });
    return <div className='choicemenu'>
        {li}
    </div>
}
function Shop_list(){
    const num=0;
    const MC = new Menu();
    const shop = [];
    
    for(let i=0; i<MC.list[num].shop.length; i++){
        let t = MC.list[num].shop[i];
        console.log(t);
        shop.push(<a href='#' key={i}><div className='shop_div'>
            <div id='shopImage'></div>
            <div id='shopIntro'><p>{t.title}</p><p>배달료:{t.delivery_price}</p></div>
        </div></a>);
    }

    return <div className='container_shop'>
        {shop}
    </div>
}
function Category() {
  return (
    <div className="container_category">
        <ChoiceMenu></ChoiceMenu>
        <Shop_list></Shop_list>
    </div>
  );
}

export default Category;
