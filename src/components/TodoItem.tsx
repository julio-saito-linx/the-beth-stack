import * as elements from "typed-html";
import { Todo } from "../db/schema";

export function TodoItem({ content, completed, id }: Todo) {
  return (
    <div class="flex flex-row space-x-3">
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-swap="outerHTML"
        hx-target="closest div"
      />
      <button
        class="text-red-500"
        hx-delete={`/todos/${id}`}
        hx-swap="outerHTML"
        hx-target="closest div"
      >
        <div class="flex flex-row">
          <div class="mx-1">X</div>
          <div class="w-5 h-5">
            <img class="htmx-indicator" src="/spinner.gif" />
          </div>
        </div>
      </button>
    </div>
  );
}
