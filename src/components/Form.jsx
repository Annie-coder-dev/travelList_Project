export default function Form() {
  return (
    <form>
      <div className="select_amount">
        <p>What do you need for your 😍 trip?</p>
        <select name="Amount">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>

      <div className="add_trip">
        <input type="text" />
        <button>Add</button>
      </div>
    </form>
  );
}
