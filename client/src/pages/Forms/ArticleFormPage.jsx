import { useForm } from "react-hook-form";
import { createArticle, updateArticle } from "../../api/Article.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getArticle } from "../../api/Article.api";
import { getAllTipos } from "../../api/Article_Type.api";
import { getAllAuthors } from "../../api/Author.api";
import { CongressProceedingsForm } from "./CongressProceedingsForm";
import { ScientificJournalForm } from "./ScientificJournalForm";
import { TechnicalReportForm } from "./TechnicalReportForm";

export function ArticleFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const [authors, setAuthors] = useState([]); // Estado para autores
  const [tipos, setTipos] = useState([]); // Estado para tipos
  const [selectedTipo, setSelectedTipo] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateArticle(params.id, data);
      toast.success("Autor actualizado");
    } else {
      await createArticle(data);
      toast.success("Autor creado");
    }
    navigate("/articles");
  });

  useEffect(() => {
    async function loadArticle() {
      if (params.id) {
        const res = await getArticle(params.id);
        setValue("title", res.data.title);
        setValue("publication_date", res.data.publication_date);
        setValue("id_author", res.data.id_author);
        setValue("id_tipo", res.data.id_tipo);
        setSelectedTipo(res.data.id_tipo);
      }
    }
    async function loadAuthors() {
      const res = await getAllAuthors();
      setAuthors(res.data); // Establecer autores
    }

    async function loadTipos() {
      const res = await getAllTipos();
      setTipos(res.data); // Establecer tipos
    }

    loadArticle();
    loadAuthors();
    loadTipos();
  }, []);

  const handleTipoChange = (event) => {
    setSelectedTipo(event.target.value); // Actualizar el estado con el valor seleccionado
  };

  return (
    // Formulario para crear o editar un artículo
    <div className="d-flex justify-content-center">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Titulo"
            {...register("title", { required: true })}
            className="form-control"
          />
          {errors.title && <span>Este campo es requerido</span>}
        </div>
        <div className="mb-3">
          <input
            type="date"
            placeholder="Fecha de publicación"
            {...register("publication_date", { required: true })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <select
            {...register("id_author", { required: true })}
            className="form-control"
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione el autor
            </option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <select
            {...register("id_tipo", { required: true })}
            className="form-control"
            onChange={handleTipoChange}
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione el tipo de articulo
            </option>
            {tipos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.tipo}
              </option>
            ))}
          </select>
          {errors.id_tipo && <span>Este campo es requerido</span>}
        </div>

        {selectedTipo === "1" && (
          <TechnicalReportForm register={register} errors={errors} />
        )}
        {selectedTipo === "2" && (
          <CongressProceedingsForm register={register} errors={errors} />
        )}
        {selectedTipo === "3" && (
          <ScientificJournalForm register={register} errors={errors} />
        )}
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
}
