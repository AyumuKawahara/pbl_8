'use client'
import { Form } from '@/components/form'
import { stfunivs } from '@/components/univs'
import { Header } from '@/components/header'
import { Univs } from '@/components/univs'
import { useAtomValue } from 'jotai'
import { answerAtom } from '@/atom/atom'

export default function Home() {
  const result = useAtomValue(answerAtom)


  return (
    <div className="flex flex-col items-center">
      <Header />
      <Form />
      {result && <Univs answer={result} />}
    </div>
  )
}
