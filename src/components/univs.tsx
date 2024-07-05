import { univs } from '@/db/universities'

// export const stfunivs = univs.filter((univer) => univer.rikei >= 100)

export const Univs = ({ answer }) => {
  const user = {
    bunri: 0,
  }

  if(answer.q1 == "yes"){
    user.bunri = 1
  }

  console.log(answer.q1)

  const stfunivs = univs.filter((univ) => univ.bunri === user.bunri)

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

