import Menu from '@/components/menu';
import Content from '@/components/content';
export default function Home() {
  /* https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns */
  return (
    <div className="grid bg-contain lg:grid-cols-[75%_25%] md:grid-cols-[60%_40%] h-screen">
      <div className='flex md:items-center lg:px-16 justify-center'>
        <Content />
      </div>
       <div className='flex items-end pb-20 md:items-center justify-center'>
        <Menu />
      </div>
    </div >
  );
}