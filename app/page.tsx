import Menu from '@/components/menu';
import Content from '@/components/content';

export default function Home() {
  /* https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns */
  return (
    <div className="grid md:grid-cols-[60%_20%] md:justify-center h-screen">
      <Content />
      <Menu />
    </div >
  );
}