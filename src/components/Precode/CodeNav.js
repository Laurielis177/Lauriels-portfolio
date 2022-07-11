import React from 'react'
import './index.css'

const CodeNav = () => {
    const nav = String.raw`
    // 父元件傳入的toggle參數，控制SideBar各元件開關（出現與否）。
    const Navbar = ({ toggle }) => {
        
    // 定義scrollNav, setScrollNav 預設狀態為 false(即不顯示)
    const [scrollNav, setScrollNav] = useState(false)

    // 給予Navbar一個if事件，如果卷軸下拉超過80，則setScrollNav為true（即顯示)，反之則不顯示。
    const changeNav = () => {
        if (window.scrollY >= 80) {
        setScrollNav(true)
        } else {
        setScrollNav(false)
        }
    }

    // 在此增加addEventListener，監聽滾軸滑動狀況。
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" scrollNav={scrollNav}>
                YC
                </NavLogo>
                <MobileIcon onClick={toggle}>
                <FaBars scrollNav={scrollNav} />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                    <NavLinks to="about">
                    <FaRegUserCircle />
                    About
                    </NavLinks>
                </NavItem>
                </NavMenu>
            </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )}

    export default Navbar
        `;
  return (
    <div className='post'>
    <pre className='codeblock'> {nav} </pre>
    </div>
  )
}

export default CodeNav;