import './Nav.css';

function Global_nav(){
  return <nav className='global_nav'>
    <a href='#'><span className="material-symbols-outlined">home</span></a>
    <a href='#'><span className="material-symbols-outlined">login</span></a>
  </nav>
}

function Nav() {
  return (
    <div className="App">
      <Global_nav></Global_nav>
    </div>
  );
}

export default Nav;
