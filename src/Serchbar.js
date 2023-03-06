import './Serchbar.css';
 
function Serchbar() {
  return (
    <div className="container">
        <div className="text_container">
            <p>어디로 배달해드릴까요?</p>
            <form>
                <input type="text" id='text_bar'></input>
                <input type="submit" value='설정' id='button' onClick={()=>{
                    alert();
                }}></input>
            </form>
        </div>
    </div>
  );
}

export default Serchbar;