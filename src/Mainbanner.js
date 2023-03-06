import './Mainbanner.css';
import { Menu } from './menu.js';
function Menulist(){
    const list = new Menu().list;
    const menu=[];
    for(let i=0; i<list.length; i++){
        menu.push(
            <a href={`menu-${i}`} key={`menu_${i}`}><div className='menu-div'><p>{list[i]}</p></div></a>
        );
    }
    return  <div className='banner'>
        {menu}
   </div>

}

function Mainbanner() {
  return (
    <div className="container_main">
        <Menulist></Menulist>
    </div>
  );
}

export default Mainbanner;
