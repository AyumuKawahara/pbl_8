import { answerAtom } from '@/atom/atom'
import { useAtom } from 'jotai'
import { useForm } from 'react-hook-form'

export const Form = () => {
  const questions = [
    '私は数学が好きだ',
    '私は歴史に興味がある',
    '私はモノづくりに興味がある',
    '私は物事を批判的に捉えることができる',
    '私は本を読むのが好きだ',
    '私は日常生活から小さな現象に疑問を持つことがある',
    '私は一人で物事を進めるのがすきだ',
    '私は将来、人と関わることを主軸とした職に就きたい',
    '私は昨今のAIの進歩に興味がある',
    '私は一つの物事に集中するとなかなか抜け出せなくなる',
    '私は人体の構造に興味がある',
  ]
  const { register, handleSubmit } = useForm()
  const [answer, setAnswer] = useAtom(answerAtom)
  const onSubmit = (data) => {
    console.log(data)
    setAnswer(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="my-12"></div>
      {questions.map((question, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <p className="text-lg text-center w-full text-3xl font-extralight">
            {question}
          </p>
          <div className="flex items-center justify-center w-full px-10">
            <div className="flex flex-col">
              <label
                htmlFor={`q${index + 1}-y`}
                className="bg-sky-400 hover:cursor-pointer font-semibold text-lg px-9 py-3 m-5 rounded-md text-white"
              >
                Yes
              </label>
              <input
                type="radio"
                id={`q${index + 1}-y`}
                value="yes"
                {...register(`q${index + 1}`)}
              />
            </div>
            <div className="w-80"></div>
            <div className="flex flex-col">
              <label
                htmlFor={`q${index + 1}-n`}
                className="bg-rose-600 hover:cursor-pointer font-semibold text-lg px-9 py-3 m-5 rounded-md text-white"
              >
                No
              </label>
              <input
                type="radio"
                id={`q${index + 1}-n`}
                value="no"
                {...register(`q${index + 1}`)}
              />
            </div>
          </div>
          {index < questions.length - 1 && (
            <hr className="my-12 w-1/2 mx-auto border-t-2 border-gray-400" />
          )}
        </div>
      ))}
      <hr className="my-12 w-1/2 mx-auto border-t-2 border-gray-400" />
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-600 font-semibold text-lg px-9 py-3 rounded-md text-white"
        >
          診断
        </button>
      </div>
      <div className="my-12"></div>
    </form>
  )
}
