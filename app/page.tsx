import Menu from '@/components/menu';
import Content from '@/components/content';

export default function Home() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-5 lg:grid-cols-8 w-full min-h-screen md:h-auto items-center justify-center">
      <div className="flex-1 md:col-span-5 lg:col-span-7">
        <Content />
      </div>

      {/* This line can be made conditional or adjusted so it doesn't enforce a large height on mobile */}
      <span className="hidden md:block md:w-px bg-gray-500 self-center h-auto md:h-96 mb-4 lg:mb-0"></span>

      <div className="flex w-full justify-center space-x-4 px-4 mb-4 md:space-x-0 md:px-0 md:justify-between md:col-span-2 lg:mb-0 lg:col-span-1">
        <Menu />
      </div>
    </div>
  );
}
