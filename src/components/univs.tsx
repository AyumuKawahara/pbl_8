import { univs } from '@/db/universities'

// export const stfunivs = univs.filter((univer) => univer.rikei >= 100)
export const Univs = ({ answer }) => {
  const user = {
    bunri: 0,
    dep_id: [] as number[],
  }
 
  var rikei: number = 0;
  var bunkei: number = 0;

  // 医学部:1 理学部:2 工学部:3
  // 薬学部:4 農学部:5 情報学部:6 建築学部:7
  // 文学部:101 法学部:102 経済学部:103
  // 外国語学部:104 商学部:105 社会学部:106
  if(answer.q1 == "yes"){
    rikei += 1
  }

  if(answer.q2 == "yes"){
    bunkei += 1
  }

  if(answer.q3 == "yes"){
    user.dep_id.push(3)
  }

  if(answer.q4 == "yes"){
    user.dep_id.push(102)
  }

  if(answer.q5 == "yes"){
    user.dep_id.push(101)
  }

  if(answer.q6 == "yes"){
    user.dep_id.push(2)
  }

  if(answer.q7 == "yes"){
    rikei += 1
  }

  if(answer.q8 == "yes"){
    bunkei += 1
  }

  if(answer.q9 == "yes"){
    user.dep_id.push(6)
  }

  if(answer.q10 == "yes"){
    rikei += 1
  }

  if(answer.q11 == "yes"){
    user.dep_id.push(1)
  }

  const orient = rikei - bunkei
  if(orient >= 0) user.bunri = 1
  else user.bunri = 0

  // (user.dep_id.some((id) => (filuniv.dep_id === id))
  // user.bunri === univ.bunri

  const stfunivs = univs.filter( (univ) => 
    (user.dep_id.some((id) => (univ.dep_id === id))
  &&
    user.bunri === univ.bunri)
  )

  // const stfunivs = filunivs.filter((filuniv) => user.bunri === filuniv.bunri)
  return (
    <>
      {stfunivs.map((univ) => (
        <div key = {univ.univ_id} className="border p-4">
          <p className="text-xl text-center" >{univ.univ_name} {univ.dep}</p>
          <p className="text-xl text-center">{univ.desc[0]}</p>
          <p className="text-xl text-center">{univ.desc[1]}</p>
        </div>
      ))}
    </>
  )
}

