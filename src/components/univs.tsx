import { Univ, univs } from '@/db/universities'

// export const stfunivs = univs.filter((univer) => univer.rikei >= 100)

export const Univs = ({ answer }) => {
  const user = {
    rikei: 50,
    bunkei: 50,
  }

  if(answer.q1 == "yes"){
    user.rikei += 50
  }else{
    user.bunkei += 50
  }

  const stfunivs = univs.filter((univ) => univ.rikei <= user.rikei || univ.bunkei <= user.bunkei)
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

