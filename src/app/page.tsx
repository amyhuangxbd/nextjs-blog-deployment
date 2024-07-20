import HeroHeader from '@/app/_components/hero-header';
import Coder from "./_components/coder";
// import Technology from '@/app/_components/technology'
import Posts from './posts/posts';
import Gsap from './gsap/Gsap'
import Svg from './svg/Svg'

export default function Index() {
  return (
    <main style={{ width: '100%', height: '100%' }}>
      <HeroHeader />
      <Coder />
      <Posts />
      <Gsap />
      <Svg />
      {/* <Technology /> */}
    </main>
  );
}
