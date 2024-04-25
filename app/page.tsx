import Menu from '@/components/menu/menu';
import Content from '@/components/content';
export default function Home() {
  /* https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns */
  return (
    <div className="grid bg-contain lg:grid-cols-[75%_25%] md:grid-cols-[60%_40%] h-screen">
      <div className='flex md:items-center lg:px-16 pb-8 justify-center overflow-y-auto '>
        <Content />
      </div>
      <div className='flex md:items-center fixed items-end justify-center md:static bottom-0 w-full md:w-auto'> 
        <Menu />
      </div>
    </div >
  );
}