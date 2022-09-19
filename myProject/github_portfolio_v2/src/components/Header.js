import './Header.css';

import Link from './Link.js'
import P from './Paragraph.js'


function Header ( {logo} ) {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <P code='src/App.js' />
        

        <Link url='https://reactjs.org' title='Learn more about React'/>
        <Link url='https://reactjs.org/tutorial/tutorial.html' title='React Tutorial'/>
      </header>
    )
}

export default Header;