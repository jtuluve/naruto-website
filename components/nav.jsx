export default function Nav(){
return(
<nav className="menu-wrapper">
        <h1 className='logo'><a href="./">Narutoverse</a></h1>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="/characters">Characters</a></li>
            <li><a>Clans</a></li>
            <li className='other'>
              {/* <div className='other'>
                <p>Other</p>
                <div className='other-list'>
                  <p>Tailed Beasts</p>
                  <p>Teams</p>
                  <p>Villages</p>
                  <p>Kekkeigenkai</p>
                </div>
              </div> */}
              <p>Other</p>
              <ul className="other-list">
                <li>Tailed Beasts</li>
                <li>Teams</li>
                <li>Villages</li>
                <li>Kekkeigenkai</li> 
              </ul>
            </li>
          </ul>
        </nav>
)
}