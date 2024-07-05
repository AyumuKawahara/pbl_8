import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 w-full bg-teal-500">
      <div className="bg-[#c3f2ff] p-2 rounded-md px-6 py-4">
        <p className="text-8xl font-bold px-12">進路相談室</p>
        <p className="text-5xl font-bold">教えて！アリゲーター先生</p>
      </div>
      <div>
        <Image
          src="/アリゲーター1.png"
          alt="アリゲーター先生"
          width={414}
          height={100}
        />
      </div>
    </header>
  )
}
