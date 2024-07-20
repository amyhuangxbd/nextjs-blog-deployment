import Container from '../_components/container';
import Circle from './circle/page'
import Circles from './circles/page'
const Gsap = () => {
    return ( 
        <Container>
            <h2>Gsap</h2>
            <div>
                <Circle />
                <Circles />
            </div>
        </Container>
     );
};

export default Gsap;