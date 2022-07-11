import React from 'react'
import './index.css'


const CodeHome = () => {
    const title = String.raw`
    // 從父元件傳遞參數到各個子元件
    const Home = () => {

        // 定義[isOpen, setIsOpen]預設狀態為false
        const [isOpen, setIsOpen] = useState(false)
        
        //定義toggle事件可以改變Sidebar開啟及關閉狀態
        const toggle = () =>{
            setIsOpen(!isOpen)
        }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} /> 
        <HeroSection />
        <InfoSection/>
        <TimeLine />
        <Works />
        <Footer />
        </>
    )}

    export default Home;
        `;
  return (
    <div className='post'>
    <pre className='codeblock'> {title} </pre>
    </div>
  )
}

export default CodeHome
