import { Form } from '@/components/form'
import { stfunivs } from '@/components/univs'
import { Univs } from '@/components/univs'

export default function Home() {
  const data = stfunivs
  return (
    <div className="flex flex-col items-center">
      <Form />
      <Univs stfunivs={data} />
    </div>
  )
}
