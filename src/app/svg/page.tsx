import './index.css'
import ChristmasBauble from '../_components/svg/christmas-bauble';
import Tree from '../_components/svg/tree';
import GingerBreadFigure from '../_components/svg/gingerbread-figure';
import House from '../_components/svg/house';
import BaubleClipPath from '../_components/svg/bauble-clip-path';
import Star from '../_components/svg/star';
import SnowFlake from '../_components/svg/snow-flake';
import Forest from '../_components/svg/forest';
import BaubleGradient from '../_components/svg/bauble-gradient';
import SnowMan from '../_components/svg/snowman';
import Quadratic from '../_components/svg/quadratic';
import Cubic from '../_components/svg/cubic';
import Bell from '../_components/svg/bell';
import Arc from '../_components/svg/arc';
import Ribbon from '../_components/svg/ribbon';
import Bear from '../_components/svg/bear';
import TextPath from '../_components/svg/text-path';
import PathAnimation from '../_components/svg/path-animation';
import Ringing from '../_components/svg/ringing';
import Snowing from '../_components/svg/snowing';
import BackGround from '../_components/svg/background';
import Diagram from '../_components/svg/diagram';
import SnowGlobe from '../_components/svg/snow-globe';

const elements = [<ChristmasBauble />,<Tree />,
<GingerBreadFigure />,<House />,<BaubleClipPath />,<Star />,<SnowFlake />,<Forest />,
<BaubleGradient />,<SnowMan />,<Quadratic />,<Cubic />,<Bell />,<Arc />,<Ribbon />,
<Bear />,<TextPath />,<PathAnimation />,<Ringing />,<Snowing />,<BackGround />,<Diagram />,
<SnowGlobe />]

const SVGS = () => {
    return ( <div className="cards">
        {
            elements.map((ele) => (<div className="card">{ele}</div>))
        }
    </div> );
};

export default SVGS;
// import './index.css'
// const elements = ["html","base","head","link","meta","script","style","title","body","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","blockquote","cite","dd","dt","dl","div","figcaption","figure","hr","li","ol","ul","menu","p","pre","a","abbr","b","bdi","bdo","br","code","data","dfn","em","i","kbd","mark","q","rp","ruby","rt","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","embed","iframe","object","picture","source","portal","svg","canvas","noscript","del","ins","caption","col","colgroup","table","tbody","tr","td","tfoot","th","thead","button","datalist","option","fieldset","label","form","input","legend","meter","optgroup","select","output","progress","textarea","details","summary","dialog","slot","template","acronym","applet","bgsound","big","blink","center","dir","font","frame","frameset","image","keygen","marquee","menuitem","nobr","noembed","noframes","param","plaintext","rb","rtc","spacer","strike","tt","xmp"]

// const SVGS = props => {
//     return ( <div className="cards">
//         {
//             elements.map((ele) => (<div className="card">{ele}</div>))
//         }
//     </div> );
// };

// export default SVGS;