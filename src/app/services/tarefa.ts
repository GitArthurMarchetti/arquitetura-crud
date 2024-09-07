import { sql } from "drizzle-orm";
import db from "./db";

type Tarefa = {
    id: number | null
    titulo: string
}
export default Tarefa

export async function getEmptyTarefa(): Promise<Tarefa> {
    return { id: null, titulo: "" }
}
export async function getTarefas(): Promise<Tarefa[]> {
    return await db.execute(sql`SELECT * FROM tarefa ORDER BY id`) as Tarefa[]
}