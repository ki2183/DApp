import './order.css';
import { Menu } from './menu.js';
import { useState } from 'react';

function OrderFrame({shop,OnPlus}){

    const S = shop;
    const menu_li=[];
    const menu_num = [];
    for(let i=0; i<S.menu.length; i++){
        menu_num.push(0);
        menu_li.push(<div key={i} className="menu_frame">
            <div className='menu_img'></div>
            <div className="menu_info" >
                <p>{S.menu[i].name}</p>
                <p>{S.menu[i].price}원</p>
                <div>
                <button type ="button" onClick={()=>{
             
                }}>-</button>
                <input type="text" className='order_num' name="order_num" value={menu_num[i]}/>
                <button type="button" onClick={()=>{
                    OnPlus();
                }}>+</button>
                <button type='button'>담기</button>
                </div>
            </div>
        </div>);
    }
    return (
        <div id='order_basic'>
            <div id='order_info'>
                <div id='order_info_img'></div>
                <div id='order_info_div'>
                    <p>{S.title}</p>
                    <p>배달비 : {S.delivery_price}</p>
                </div>
            </div>

            <div id='order_menu'>
                <div id='order_menu_list'>
                    {menu_li}
                </div>
                <div id='order_basket'></div>
            </div>
     
        </div>
    );
}

function Order() {

    const menu = new Menu().list;
    const shop = menu[0].shop[0];
    
  return (
    <div className="container_order">
        <OrderFrame shop={shop} OnPlus={()=>{
            alert();
        }}/>
    </div>
  );
}

export default Order;
