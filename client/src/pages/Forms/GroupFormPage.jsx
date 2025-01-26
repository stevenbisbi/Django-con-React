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
      toast.success("Grupo de investigacion actualizado");
    } else {
      await createGroup(data);
      toast.success("Grupo de investigacion creado");
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
    console.log(groups);
    loadGroup();
  }, []);

  return (
    <div className="container">
      <div className="col-md-4 offset-md-4">
        <form className="card card-body mt-5" onSubmit={onSubmit}>
          <h2 className="text-center mb-4">Grupo de investigacion</h2>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name && <span>Este campo es requerido</span>}
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Linea"
            {...register("line", { required: true })}
          />
          <select
            className="form-control mb-3"
            defaultValue=""
            {...register("categoria", { required: true })}
          >
            <option value="">Selecione la categoria</option>
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
    </div>
  );
}
