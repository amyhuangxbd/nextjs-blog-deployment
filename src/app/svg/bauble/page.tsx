import { generateBaubles } from '@/lib/svg';
import Bauble from './bauble';

const BaubleWrap = props => {
    const baubles = generateBaubles();
    return ( <div className=' m-auto p-8 w-3/4 grid grid-cols-3 gap-1'>
        {
            baubles.map(({color, shading, shape, number, selected}, index) => (
                <Bauble key={`${index}-${color}-${shading}-${shape}-${number}-${selected}`}
                    color={color}
                    shading={shading}
                    shape={shape}
                    number={number}
                    selected={selected} 
                />
            ))
        }
    </div> );
};

export default BaubleWrap;