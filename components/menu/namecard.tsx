import Image from 'next/image'

export default function NameCard() {
    return (
        <div className='flex mx-3 justify-center items-end'>
            <Image
                src="/img/linkedin.jpg"
                width={60}
                height={60}
                alt=""
                className='rounded-full border border-black'
            />
            <p className="text-black font-bold text-opacity-100 text-xl text-left self-center ml-3 max-sm:text-lg tracking-widest">Eric Tatchell</p>
        </div>
    )
}