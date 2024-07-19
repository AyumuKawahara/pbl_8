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
        <div key={index} className="flex w-full flex-col items-center">
          <p className="w-full text-center text-lg font-extralight">
            {question}
          </p>
          <div className="flex w-full items-center justify-center px-10">
            <div className="flex flex-col">
              <label
                htmlFor={`q${index + 1}-y`}
                className="m-5 rounded-md bg-sky-400 px-9 py-3 text-lg font-semibold text-white hover:cursor-pointer"
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
                className="m-5 rounded-md bg-rose-600 px-9 py-3 text-lg font-semibold text-white hover:cursor-pointer"
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
            <hr className="mx-auto my-12 w-1/2 border-t-2 border-gray-400" />
          )}
        </div>
      ))}
      <hr className="mx-auto my-12 w-1/2 border-t-2 border-gray-400" />
      <div className="mt-4 flex justify-center">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-9 py-3 text-lg font-semibold text-white"
        >
          診断
        </button>
      </div>
      <div className="my-12"></div>
    </form>
  )
}
