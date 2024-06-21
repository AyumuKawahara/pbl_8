export const Form = () => {
  return <form>
    <form>
      <p>質問</p>
      <div>
        <label htmlFor="q1-y">Yes</label>
        <input type="radio" id="q1-y" value="yes" className="hidden"/>
        <label htmlFor="q1-n">No</label>
        <input type="radio" id="q1-n" value="no" className="hidden"/>
      </div>
      <button type="submit" className="bg-blue-600 font-semibold text-lg px-3 py-1 rounded-md text-white">診断</button>
    </form>
  </form>
}
