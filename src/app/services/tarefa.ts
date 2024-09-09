"use server"

import { sql } from "drizzle-orm";
import db from "./db";
import { redirect } from 'next/navigation'


type TarefaType = {
    id: number | null
    titulo: string
}

export default TarefaType

export async function getEmptyTarefa(): Promise<TarefaType> {
    return { id: null, titulo: "" }
}
export async function getTarefas(): Promise<TarefaType[]> {
    return await db.execute(sql`SELECT * FROM tarefa ORDER BY id`) as TarefaType[]
}

export async function saveTarefa(formData: FormData) {
    const id = +(formData.get('id') as string) as number
    const titulo = formData.get('titulo') as string

    const tarefa: TarefaType = {
        id,
        titulo
    }

    if(!id){
        await db.execute(sql`INSERT INTO tarefa (titulo) VALUES (${tarefa.titulo})`)
    }else{
        await db.execute(sql`UPDATE tarefa SET titulo=${tarefa.titulo} WHERE id=${tarefa.id}`)
    }

    redirect('/')
}

export async function removeTarefa(tarefa: TarefaType) {

    await db.execute(sql`DELETE FROM tarefa WHERE id=${tarefa.id}`)

    redirect('/')
}