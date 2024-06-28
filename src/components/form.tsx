import { answerAtom } from '@/atom/atom'
import { useAtom } from 'jotai'
import { useForm } from 'react-hook-form'

export const Form = () => {
  const { register, handleSubmit } = useForm()
  const [answer, setAnswer] = useAtom(answerAtom)
  const onSubmit = (data) => {
    console.log(data)
    setAnswer(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="flex items-center justify-between text-lg px-10 w-full">
        質問
      </p>
      <p className="flex items-center justify-between text-lg px-10 w-full">
        あなたは理系ですか、文系ですか？
      </p>
      <div className="flex items-center justify-between px-10 w-full">
        <label
          htmlFor="q1-y"
          className="bg-sky-400 hover:cursor-pointer font-semibold text-lg px-3 py-1 m-5 rounded-md text-white"
        >
          Yes
        </label>
        <input
          type="radio"
          id="q1-y"
          value="yes"
          className="hidden"
          {...register('q1')}
        />
        <label
          htmlFor="q1-n"
          className="bg-rose-600 hover:cursor-pointer font-semibold text-lg px-3 py-1 m-5 rounded-md text-white"
        >
          No
        </label>
        <input
          type="radio"
          id="q1-n"
          value="no"
          className="hidden "
          {...register('q1')}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 font-semibold text-lg px-3 py-1 rounded-md text-white"
      >
        診断
      </button>
    </form>
  )
}
