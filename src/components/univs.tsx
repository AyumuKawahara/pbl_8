import { univs } from '@/db/universities'

// export const stfunivs = univs.filter((univer) => univer.rikei >= 100)
export const Univs = ({ answer }) => {
  const user = {
    bunri: 0,
    dep_id: [] as number[],
  }

  var rikei: number = 0
  var bunkei: number = 0

  // 医学部:1 理学部:2 工学部:3
  // 薬学部:4 農学部:5 情報学部:6 建築学部:7
  // 文学部:101 法学部:102 経済学部:103
  // 外国語学部:104 商学部:105 社会学部:106
  if (answer.q1 == 'yes') {
    rikei += 1
  }

  if (answer.q2 == 'yes') {
    bunkei += 1
  }

  if (answer.q3 == 'yes') {
    user.dep_id.push(3)
  }

  if (answer.q4 == 'yes') {
    user.dep_id.push(102)
  }

  if (answer.q5 == 'yes') {
    user.dep_id.push(101)
  }

  if (answer.q6 == 'yes') {
    user.dep_id.push(2)
  }

  if (answer.q7 == 'yes') {
    rikei += 1
  }

  if (answer.q8 == 'yes') {
    bunkei += 1
  }

  if (answer.q9 == 'yes') {
    user.dep_id.push(6)
  }

  if (answer.q10 == 'yes') {
    rikei += 1
  }

  if (answer.q11 == 'yes') {
    user.dep_id.push(1)
  }

  const orient = rikei - bunkei
  if (orient >= 0) user.bunri = 1
  else user.bunri = 0

  // (user.dep_id.some((id) => (filuniv.dep_id === id))
  // user.bunri === univ.bunri

  const filunivs = univs.filter((univ) => user.bunri === univ.bunri)

  let stfunivs

  if (user.bunri === 0) {
    user.dep_id = user.dep_id.filter((usrdep) => usrdep >= 100)

    if (user.dep_id.length === 0) {
      stfunivs = filunivs
    } else {
      stfunivs = filunivs.filter((stfuniv) =>
        user.dep_id.some((id) => stfuniv.dep_id === id),
      )
    }
  } else {
    user.dep_id = user.dep_id.filter((usrdep) => usrdep < 100)

    if (user.dep_id.length === 0) {
      stfunivs = filunivs
    } else {
      stfunivs = filunivs.filter((stfuniv) =>
        user.dep_id.some((id) => stfuniv.dep_id === id),
      )
    }
  }

  // const stfunivs = filunivs.filter((filuniv) => user.bunri === filuniv.bunri)
  return (
    <>
      <p className=" text-5xl text-left">あなたの診断結果は</p>
      <div className="my-10"></div>
      {stfunivs.map((univ) => (
        <div
          key={univ.univ_id}
          className="w-[1000px] h-[300px] relative border p-4 mb-10"
        >
          <div className="absolute h-[240px] w-[600px] z-10 top-0 left-0 bg-[#c3f2ff] p-2 rounded-md py-4">
            <p className="text-xl text-center text-7xl ">{univ.univ_name}</p>
            <div className="my-4"></div>
            <p className="text-xl text-center text-6xl">{univ.dep}</p>
          </div>
          <div className="flex-grow"></div> {/* 上下の間隔を確保 */}
          <div className="absolute bottom-0 right-0  h-[180px] w-[480px] bg-teal-500 p-2 rounded-md py-4">
            <div className="my-4"></div>
            <p className="text-xl text-center text-5xl px-20">{univ.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}
