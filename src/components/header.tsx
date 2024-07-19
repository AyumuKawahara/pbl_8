import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-teal-500 px-12">
      <div className="rounded-md bg-[#c3f2ff] p-2 px-6 py-4">
        <p className="px-12 text-8xl font-bold">進路相談室</p>
        <p className="text-5xl font-bold">教えて！アリゲーター先生</p>
      </div>
      <div>
        <Image
          src="/wanigator2.png"
          alt="アリゲーター先生"
          width={414}
          height={100}
        />
      </div>
    </header>
  )
}
