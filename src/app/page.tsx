import { univs } from '@/db/universities'

export default function Home() {
  const data = univs
  return (
    <div>
      <div>{data[0].id}</div> <div>{data[1].name}</div>
    </div>
  )
}
