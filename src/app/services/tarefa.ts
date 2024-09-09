"use server"

import { sql } from "drizzle-orm";
import db from "./db";
import { redirect } from 'next/navigation'


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

export async function saveTarefa(formData: FormData) {
    const id = +(formData.get('id') as string) as number
    const titulo = formData.get('titulo') as string

    const tarefa: Tarefa = {
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

export async function removeTarefa(tarefa: Tarefa) {

    await db.execute(sql`DELETE FROM tarefa WHERE id=${tarefa.id}`)

    redirect('/')
}