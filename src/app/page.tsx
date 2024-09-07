import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <>
      <section className="rounded-md border w-5/6 p-10 h-[35rem] m-auto mt-10">
        <h1 className="text-6xl font-principal">Lista de tarefas</h1>
        <ScrollArea className="h-[25rem] mt-5">
          <div className="h-full w-full m-auto mt-5 p-4 flex flex-col gap-4">
            <div className="border-2 py-3 px-5 rounded-xl shadow-black shadow-md hover:bg-gray-800">
              <h2 className="text-2xl">Tarefa 1</h2>
            </div>
            <div className="border-2 py-3 px-5 rounded-xl shadow-black shadow-md hover:bg-gray-800">
              <h2 className="text-2xl">Tarefa 2</h2>
            </div>
          </div>
        </ScrollArea>
      </section>
    </>
  );
}
