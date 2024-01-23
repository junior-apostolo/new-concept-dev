"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {z} from 'zod';

const budgetFormSchema = z.object({
  name: z.string(),
  email: z.string()
})

type BudgetFormSchema = z.infer<typeof budgetFormSchema>


export function Form() {
  const { register, handleSubmit } = useForm<BudgetFormSchema>();

  function handleSendBudget(data: BudgetFormSchema){
    console.log(data)
  }
  return (
    <form className="" onSubmit={handleSubmit(handleSendBudget)} action="">
      <Input placeholder="Email do Cliente" {...register("email")} />
      <Input placeholder="Nome do Cliente" {...register("name")} />

      <Button type="submit" variant={"link"}>
        Enviar
      </Button>
    </form>
  );
}
