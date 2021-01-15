import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function Container() {
    return (
        <div className="site-content">
			 <Header></Header>
             <Body></Body>
             <Footer></Footer>
		</div>
    )
}

export default Container
