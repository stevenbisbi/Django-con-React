import { set, useForm } from "react-hook-form";
import {
  createAuthor,
  deleteAuthor,
  updateAuthor,
  getAuthor,
} from "../../api/Author.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getAllGroups } from "../../api/Group.api";
export function AuthorFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const [groups, setGroups] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateAuthor(params.id, data);
      toast.success("Autor actualizado");
    } else {
      await createAuthor(data);
      toast.success("Autor creado");
    }
    navigate("/authors");
  });

  useEffect(() => {
    async function loadAuthor() {
      if (params.id) {
        const res = await getAuthor(params.id);
        setValue("name", res.data.name);
        setValue("last_name", res.data.last_name);
        setValue("email", res.data.email);
        setValue("nationality", res.data.nationality);
        setValue("group_name", res.data.group_name);
      }
    }
    loadAuthor();
  }, []);

  useEffect(() => {
    async function loadGroups() {
      const res = await getAllGroups();
      setGroups(res.data);
    }
    loadGroups();
  }, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Este campo es requerido</span>}
        <input
          type="text"
          placeholder="Apellido"
          {...register("last_name", { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="Nacionalidad"
          {...register("nationality", { required: true })}
        />
        <select {...register("id_group", { required: true })}>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
        {errors.id_group && <span>Este campo es requerido</span>}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
