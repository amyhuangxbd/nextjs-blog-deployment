import Container from '../_components/container';
import Example from './page'
import Bauble from './bauble/page'

const Gsap = () => {
    return ( 
        <Container>
            <h2>SVG</h2>
            <div>
               <Example />
               <Bauble />
            </div>
        </Container>
     );
};

export default Gsap;