import { Univ, univs } from '@/db/universities'

export const stfunivs = univs.filter((univer) => univer.rikei >= 100)

export const Univs = ({ stfunivs }: { stfunivs: Univ[] }) => {
  return (
    <>
      {stfunivs.map((univ) => (
        <div key = {univ.univ_id} className="border p-4">
          <p className="text-xl">{univ.univ_name} {univ.dep}</p>
        </div>
      ))}
    </>
  )
}

