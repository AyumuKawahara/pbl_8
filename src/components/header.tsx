import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 w-full bg-blue-400">
      <div className="bg-sky-200 p-2 rounded-md px-6 py-4">
        <p className="text-9xl font-bold px-12">進路相談室</p>
        <p className="text-7xl font-bold">教えて！アリゲーター先生</p>
      </div>
      <div>
        <Image
          src="/wanigator.jpg"
          alt="アリゲーター先生"
          width={500}
          height={100}
        />
      </div>
    </header>
  )
}
