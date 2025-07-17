import { Play } from "phosphor-react";

export function Home() {
  return (
    <main className="flex-1 flex items-center justify-center flex-col">
      <form action="" className="flex flex-col items-center gap-14">
        <div className="flex items-center justify-center gap-2 w-full text-gray-100 text-lg font-bold flex-wrap">
          <label htmlFor="task">I will work on</label>
          <input
            id="task"
            list="task-suggestions"
            placeholder="Give a name to your project"
            className="flex-1 bg-transparent h-10 border-0 border-b-2 border-gray-500 font-bold text-lg text-gray-100 outline-none py-0 px-2 placeholder:text-gray-500 focus:shadow-none focus:border-blue-500"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <input
            id="minutesAmount"
            type="number"
            max={60}
            min={5}
            step={5}
            className="w-16 bg-transparent h-10 border-0 border-b-2 border-gray-500 font-bold text-lg text-gray-100 outline-none py-0 px-2 placeholder:text-gray-500 focus:shadow-none focus:border-blue-500"
          />

          <span>minutes.</span>
        </div>

        <div className="font-[Roboto_Mono] text-9xl/32 flex items-center gap-4 text-gray-200">
          <span className="bg-gray-700 py-4 px-4 rounded-lg">0</span>
          <span className="bg-gray-700 py-4 px-4 rounded-lg">0</span>

          <span className="py-8 px-0 text-blue-500 rounded-lg w-16 flex justify-center overflow-hidden font-bold">
            :
          </span>

          <span className="bg-gray-700 py-4 px-4 rounded-lg">0</span>
          <span className="bg-gray-700 py-4 px-4 rounded-lg">0</span>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center cursor-pointer border-none gap-2 w-full p-4 bg-blue-500 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed text-gray-100 font-bold hover:bg-blue-700 disabled:hover:bg-blue-500 transition-colors"
        >
          <Play />
          Start
        </button>
      </form>
    </main>
  );
}
