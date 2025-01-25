export function ScientificJournalForm({ register, errors }) {
  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre de la Revista"
          {...register("name", { required: true })}
          className="form-control"
        />
        {errors.name && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Editor"
          {...register("editor", { required: true })}
          className="form-control"
        />
        {errors.editor && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="number"
          placeholder="Año de Inicio"
          {...register("start_year", { required: true })}
          className="form-control"
        />
        {errors.start_year && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Periodicidad"
          {...register("periodicity", { required: true })}
          className="form-control"
        />
        {errors.periodicity && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Tema"
          {...register("topic", { required: true })}
          className="form-control"
        />
        {errors.topic && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="number"
          placeholder="Número de Edición"
          {...register("edicion_number", { required: true })}
          className="form-control"
        />
        {errors.edicion_number && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="number"
          placeholder="Páginas"
          {...register("pages", { required: true })}
          className="form-control"
        />
        {errors.pages && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="number"
          placeholder="Año de Publicación"
          {...register("pusblication_year", { required: true })}
          className="form-control"
        />
        {errors.pusblication_year && <span>Este campo es requerido</span>}
      </div>
    </div>
  );
}
