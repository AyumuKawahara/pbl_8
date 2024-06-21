import { Form } from '@/components/form'
import { Univs } from '@/components/univs'
import { univs } from '@/db/universities'

export default function Home() {
  const data = univs
  return (
    <div>
      <Form />
      <Univs />
      <div>{data[0].id}</div> <div>{data[1].name}</div>
    </div>
  )
}
