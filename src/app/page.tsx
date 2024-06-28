'use client'
import { Form } from '@/components/form'
import { Header } from '@/components/header'
import { Univs } from '@/components/univs'
import { univs } from '@/db/universities'

export default function Home() {
  const data = univs
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Form />
      <Univs />
    </div>
  )
}
