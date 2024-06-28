'use client'
import { Form } from '@/components/form'
import { stfunivs } from '@/components/univs'
import { Header } from '@/components/header'
import { Univs } from '@/components/univs'

export default function Home() {
  const data = stfunivs
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Form />
      <Univs stfunivs={data} />
    </div>
  )
}
