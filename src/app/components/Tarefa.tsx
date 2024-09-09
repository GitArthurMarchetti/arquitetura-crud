"use client"

import { ScrollArea } from "@/componentsUi/ui/scroll-area"

import TarefaType from "../services/tarefa";
import { useState } from "react";
import { saveTarefa, removeTarefa } from "../services/tarefa";
import { FaTrash } from "react-icons/fa6";

type Props = {
    tarefas: TarefaType[];
    tarefa: TarefaType;
};

export default function Tarefa({ tarefas, tarefa: novaTarefa }: Props) {
    const [tarefa, setTarefa] = useState<TarefaType>(novaTarefa)

    return (
        <>
            <section className="rounded-md border w-5/6 p-10 h-max m-auto mt-5">
                <h1 className="text-6xl font-principal">Lista de tarefas</h1>
                <ScrollArea className="h-[25rem] mt-5">
                    <div className="h-full w-full m-auto mt-5 p-4 flex flex-col gap-4 cursor-pointer">
                        {tarefas.map((t) => (
                            <div
                                key={t.id}
                                onClick={() => setTarefa(t)}
                                className={` border-2 py-3 px-5 rounded-xl shadow-black shadow-md hover:border-violet-600 transition-all flex justify-between text-center items-center`}
                            >
                                <h2 >{t.titulo}</h2>
                                <div onClick={() => removeTarefa(t)} className="hover:text-red-600 transition-all"><FaTrash /></div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <form action={saveTarefa} className="flex gap-2">
                    <input type="hidden" name="id" value={`${tarefa?.id}`} className={`${tarefa.id ? 'border-2 border-yellow-500' : 'border-2 border-blue-500'}`} />
                    <input type="text"
                        name="titulo"
                        className="w-11/12 p-2 text-black rounded-md"
                        placeholder="Nova Tarefa..."
                        value={tarefa.titulo}
                        onChange={(e) => setTarefa({ ...tarefa, titulo: e.target.value })}
                    />
                    <button className={`w-1/12 bg-blue-500 rounded-md `}>
                        {tarefa.id ? 'Salvar' : 'Adicionar'}
                    </button>
                    {tarefa.id && (
                        <button
                            onClick={() => setTarefa({ ...novaTarefa })}
                            className="bg-red-500 p-3 py-2 rounded-md hover:bg-red-800 transition-all"
                        >
                            Cancelar
                        </button>
                    )}

                </form>
            </section>
        </>
    );
}
