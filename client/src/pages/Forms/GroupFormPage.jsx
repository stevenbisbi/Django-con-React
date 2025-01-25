import { useForm } from "react-hook-form";
import { createGroup, updateGroup, getGroup } from "../../api/Group.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export function GroupFormPage() {
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
      await updateGroup(params.id, data);
      toast.success("Autor actualizado");
    } else {
      await createGroup(data);
      toast.success("Autor creado");
    }
    navigate("/Groups");
  });

  useEffect(() => {
    async function loadGroup() {
      if (params.id) {
        const res = await getGroup(params.id);
        setValue("name", res.data.name);
        setValue("line", res.data.line);
        setValue("categoria", res.data.categoria);
      }
    }
    loadGroup();
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
          placeholder="Linea"
          {...register("line", { required: true })}
        />
        <select {...register("categoria", { required: true })}>
          Categorias
          {groups.map((group) => (
            <option>{group.categoria}</option>
          ))}
        </select>
        {errors.id_group && <span>Este campo es requerido</span>}
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
}
