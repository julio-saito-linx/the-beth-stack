import * as elements from "typed-html";

export function TodoForm() {
  return (
    <form
      class="flex flex-row space-x-3"
      hx-post="/todos"
      hx-swap="beforebegin"
      _="on submit target.reset()"
    >
      <input
        type="text"
        name="content"
        class="border border-black bg-gray-400 mt-4"
      />
      <button type="submit">Add</button>
    </form>
  );
}
