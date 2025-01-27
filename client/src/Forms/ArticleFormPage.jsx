import { useForm } from "react-hook-form";
import { createArticle, updateArticle } from "../api/Article.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getAllArticles, getArticle } from "../api/Article.api";
import { getAllTipos } from "../api/Article_Type.api";
import { getAllAuthors } from "../api/Author.api";
import { CongressProceedingsForm } from "./CongressProceedingsForm";
import { ScientificJournalForm } from "./ScientificJournalForm";
import { TechnicalReportForm } from "./TechnicalReportForm";
import { createTechnical_report } from "../api/TechnicalReport.api";
import { createScientificJournal } from "../api/ScientificJournal.api";
import { createCongress_proceeding } from "../api/Congressprocedings.api";

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
      toast.success("Articulo actualizado");
    } else {
      await createArticle(data);

      // Obtener todos los artículos y el último artículo creado
      const res = await getAllArticles();
      const lastArticle = res.data[res.data.length - 1];

      // Agregar el `id_article` al dato que se va a enviar
      data.id_article = lastArticle.id;
      console.log(data); // Asegúrate de usar el `id`

      if (selectedTipo === "1") {
        try {
          const response = await createTechnical_report(data);
          console.log(response);
        } catch (error) {
          console.log(error.response.data);
        }
      } else if (selectedTipo === "2") {
        try {
          const response = await createCongress_proceeding(data);
          console.log("acta creada");
        } catch (error) {}
      } else if (selectedTipo === "3") {
        try {
          const response = await createScientificJournal(data);
          console.log(response);
        } catch (error) {
          console.log(error.response.data);
        }
      }
    }
    /* navigate("/"); */
  });

  useEffect(() => {
    async function loadArticle() {
      if (params.id) {
        const res = await getArticle(params.id);

        // Transformar la fecha de dd/mm/yyyy a yyyy-mm-dd
        const dateParts = res.data.publication_date.split("/"); // Divide "dd/mm/yyyy"
        const transformedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; // Reorganiza a "yyyy-mm-dd"

        setValue("title", res.data.title);
        setValue("publication_date", transformedDate);
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
    <div className="container">
      <div className="cold-mb-4 offset-md-4">
        <form onSubmit={onSubmit} className="card card-body mt-5">
          <h2 className="text-center mb-4">Articulo</h2>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Titulo"
              {...register("title", { required: true })}
              className="form-control mb-3"
            />
            {errors.title && <span>Este campo es requerido</span>}
          </div>
          <div className="mb-3">
            <input
              type="date"
              placeholder="Fecha de publicación"
              {...register("publication_date", { required: true })}
              className="form-control mb-3"
            />
          </div>
          <div className="mb-3">
            <select
              {...register("id_author", { required: true })}
              className="form-control mb-3"
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

          <select
            {...register("id_tipo", { required: true })}
            className="form-control mb-3"
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
    </div>
  );
}
