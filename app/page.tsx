import Menu from '@/components/menu';
import Content from '@/components/content';

export default function Home() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-5 lg:grid-cols-8  w-full h-screen items-center justify-center">
      <div className="flex-1 md:col-span-5">
        <Content />
      </div>

      <span className="md:block md:w-px bg-gray-500 self-center h-96 mb-4 lg:mb-0"></span>

      <div className="flex w-full justify-center space-x-4 px-4 mb-48 md:space-x-0 md:px-0 md:justify-between md:col-span-2 lg:mb-0">
        <Menu />
      </div>
    </div>
  );
}