import { Form } from '@/components/form'
import { Univs } from '@/components/univs'
import { univs } from '@/db/universities'

export default function Home() {
  const data = univs
  return (
    <div className="flex flex-col items-center">
      <Form />
      <Univs />
    </div>
  )
}
