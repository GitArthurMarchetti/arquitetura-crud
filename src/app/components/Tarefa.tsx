"use client"

import { ScrollArea } from "@/componentsUi/ui/scroll-area"

import Tarefa from "../services/tarefa";
import { useState } from "react";

type Props = {
    tarefas: Tarefa[];
    tarefa: Tarefa;
};

export default function Tarefa({ tarefas, tarefa: novaTarefa }: Props) {
    const [tarefa, setTarefa] = useState<Tarefa>(novaTarefa);

    return (
        <>
            <section className="rounded-md border w-5/6 p-10 h-max m-auto mt-5">
                <h1 className="text-6xl font-principal">Lista de tarefas</h1>
                <ScrollArea className="h-[25rem] mt-5">
                    <div className="h-full w-full m-auto mt-5 p-4 flex flex-col gap-4">
                        {tarefas.map((t) => (
                            <div
                                key={t.id}
                                className="border-2 py-3 px-5 rounded-xl shadow-black shadow-md hover:bg-gray-800"
                            >
                                <h2 className="text-2xl">{t.titulo}</h2>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <form action={''} className="flex gap-2">
                    <input type="text"
                        className="w-11/12 p-2"
                        placeholder="Nova Tarefa..." />
                        <button className="w-1/12 bg-blue-600">Salvar</button>
                </form>
            </section>
        </>
    );
}
