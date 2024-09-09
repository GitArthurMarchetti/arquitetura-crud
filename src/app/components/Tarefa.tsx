"use client"

import { ScrollArea } from "@/componentsUi/ui/scroll-area"

import Tarefa from "../services/tarefa";
import { useState } from "react";
import { saveTarefa, removeTarefa } from "../services/tarefa";

type Props = {
    tarefas: Tarefa[];
    tarefa: Tarefa;
};

export default function Tarefa({ tarefas, tarefa: novaTarefa }: Props) {
    const [tarefa, setTarefa] = useState<Tarefa>(novaTarefa)

    return (
        <>
            <section className="rounded-md border w-5/6 p-10 h-max m-auto mt-5">
                <h1 className="text-6xl font-principal">Lista de tarefas</h1>
                <ScrollArea className="h-[25rem] mt-5">
                    <div className="h-full w-full m-auto mt-5 p-4 flex flex-col gap-4 cursor-pointer">
                        {tarefas.map((t) => (
                            <div
                                key={t.id}
                                className="border-2 py-3 px-5 rounded-xl shadow-black shadow-md hover:bg-gray-800 flex justify-between"
                            >
                                <h2 onClick={() => setTarefa(t)}>{t.titulo}</h2>
                                <div onClick={() => removeTarefa(t)}>remove</div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <form action={saveTarefa} className="flex gap-2">
                    <input type="hidden" name="id" value={`${tarefa?.id}`} />
                    <input type="text"
                        name="titulo"
                        className="w-11/12 p-2 text-black"
                        placeholder="Nova Tarefa..."
                        value={tarefa.titulo}
                        onChange={(e) => setTarefa({ ...tarefa, titulo: e.target.value })}
                    />
                    {tarefa.id && (
                        <button
                            onClick={() => setTarefa({ ...novaTarefa })}
                            className="bg-slate-300 p-3 py-2 rounded-md hover:bg-slate-200 transition-all"
                        >
                            Cancelar
                        </button>
                    )}
                    <button className="w-1/12 bg-blue-600">
                        {tarefa.id ? "Salvar" : "Adicionar"}
                    </button>
                </form>
            </section>
        </>
    );
}
