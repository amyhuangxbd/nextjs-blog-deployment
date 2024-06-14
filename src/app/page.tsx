import HeroHeader from '@/app/_components/hero-header';
import Coder from "./_components/coder";
import Technology from '@/app/_components/technology'

export default function Index() {
  return (
    <main style={{ width: '100%', height: '100%' }}>
      <HeroHeader />
      <Coder />
      <Technology />
    </main>
  );
}
