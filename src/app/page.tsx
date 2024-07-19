'use client'
import { answerAtom } from '@/atom/atom'
import { Form } from '@/components/form'
import { Header } from '@/components/header'
import { Univs } from '@/components/univs'
import { useAtomValue } from 'jotai'

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
