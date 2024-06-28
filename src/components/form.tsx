export const Form = () => {
  return (
    <form>
      <p className="flex items-center justify-between text-lg px-10 w-full">
        質問
      </p>
      <p className="flex items-center justify-between text-lg px-10 w-full">
        あなたは理系ですか、文系ですか？
      </p>
      <div className="flex items-center justify-between px-10 w-full">
        <label
          htmlFor="q1-y"
          className="bg-sky-400 font-semibold text-lg px-3 py-1 m-5 rounded-md text-white"
        >
          Yes
        </label>
        <input type="radio" id="q1-y" value="yes" className="hidden" />
        <label
          htmlFor="q1-n"
          className="bg-rose-600 font-semibold text-lg px-3 py-1 m-5 rounded-md text-white"
        >
          No
        </label>
        <input type="radio" id="q1-n" value="no" className="hidden " />
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
