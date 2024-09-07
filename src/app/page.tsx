import Tarefa from "./components/Tarefa";
import { getTarefas, getEmptyTarefa } from "@/app/services/tarefa";
export const dynamic = "force-dynamic";

export default async function Home() {
  const tarefas = await getTarefas();
  const tarefa = await getEmptyTarefa();

  return <Tarefa tarefas={tarefas} tarefa={tarefa} />;
}
