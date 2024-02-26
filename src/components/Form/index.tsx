"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { map, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Select } from "../Select";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const budgetFormSchema = z.object({
  name: z
    .string()
    .min(3, "Nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((item) => {
          return item[0].toLocaleUpperCase().concat(item.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .min(3, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  contact: z
    .string()
    .min(3, "Numero de telefone é obrigatório")
    .regex(phoneRegex, "Numero Invalido!"),
  eventName: z.string().min(3),
  dateEvent: z.coerce.date().refine((data) => data > new Date(), {
    message: "Selecione uma data valida",
  }),
  eventPlace: z.string().min(3),
  standSize: z.string(),
  budget: z.string(),
  quantityCounter: z.coerce.number().nonnegative(),
  quantityChair: z.coerce.number().nonnegative(),
  tableQuantity: z.coerce.number().nonnegative(),
  quantityTV: z.coerce.number().nonnegative(),
  typeFloor: z.string().optional(),
  isNeededGraph: z.enum(["yes", "no"]).optional(),
  images: z.instanceof(FileList),
});

type BudgetFormSchema = z.infer<typeof budgetFormSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BudgetFormSchema>({
    resolver: zodResolver(budgetFormSchema),
  });

  // const [selectedValue, setSelectedValue] = useState("");

  const convertToBase64 = async (images: FileList) => {
    let imagesBase64: { name: string; base64: string | ArrayBuffer | null }[] =
      [];

    await Promise.all(
      Array.from(images).map((file) => {
        return new Promise<void>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            imagesBase64.push({
              name: file.name,
              base64: reader.result,
            });
            resolve();
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    );

    return imagesBase64;
  };

  console.log(errors);

  async function handleSendBudget(data: BudgetFormSchema) {
    try {
      console.log("Objeto", data);
      console.log("Valor ao vivo", watch("typeFloor"));
      const images = await convertToBase64(data.images);
    } catch (err) {
      console.log(err);
    }
  }

  const options = [
    { value: "", label: "Select..." },
    { value: "vinyl", label: "Vinyl" },
    { value: "carpet", label: "Carpet" },
  ];

  const isNeededOptions = [
    { value: "", label: "Select..." },
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  // const handleChange = (value: any) => {
  //   setSelectedValue(value);
  //   console.log(`Selected value is: ${value}`);
  // };

  return (
    <form
      className="w-full p-7 bg-white shadow-md border-y-4 border-solid border-[#47b2e4]"
      onSubmit={handleSubmit(handleSendBudget)}
      action=""
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <Input
            className="border border-zinc-200 shadow-sm rounded h-10"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <Input
            className="border border-zinc-200 shadow-sm rounded h-10"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="contact">Customer contact</label>
          <Input
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Customer Contact"
            {...register("contact")}
          />
          {errors.contact && (
            <span className="text-red-500 text-sm">
              {errors.contact.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="eventName">Event Name</label>
          <Input
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            {...register("eventName")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="quantityCounter">Quantity Counter</label>
          <Input
            type="number"
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            min={0}
            {...register("quantityCounter")}
          />
          {errors.quantityCounter && (
            <span>{errors.quantityCounter.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="dateEvent">Date Event</label>
          <Input
            type="date"
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            {...register("dateEvent")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="eventPlace">Event Place</label>
          <Input
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            {...register("eventPlace")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="standSize">Stand size</label>
          <Input
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            {...register("standSize")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="budget">Budget</label>
          <Input
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            {...register("budget")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="quantityChair">Quantity Chair</label>
          <Input
            type="number"
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            min={0}
            {...register("quantityChair")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="tableQuantity">Table Quantity</label>
          <Input
            type="number"
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            min={0}
            {...register("tableQuantity")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="typeFloor">Type Floor</label>
          <select
            {...register("typeFloor")}
            className="border border-zinc-200 shadow-sm rounded h-10 focus:outline-none pl-3"
          >
            <option value="">Select...</option>
            <option value="vinyl">vinyl</option>
            <option value="carpet">carpet</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="quantityTV">Quantity TV</label>
          <Input
            type="number"
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            min={0}
            {...register("quantityTV")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="isNeededGraph">Is Needed Graph</label>
          <select
            {...register("isNeededGraph")}
            className="border border-zinc-200 shadow-sm rounded h-10 focus:outline-none pl-3"
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="images">Images</label>
          <Input
            type="file"
            multiple
            accept="image/*"
            className="border border-zinc-200 shadow-sm rounded h-10"
            placeholder="Event Name"
            {...register("images")}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="mt-5 bg-sky-500 font-semibold text-white h-10 rounded hover:bg-sky-600"
      >
        Enviar
      </Button>
    </form>
  );
}
