export function TechnicalReportForm({ register, errors }) {
  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Número"
          {...register("number", { required: true })}
          className="form-control"
        />
        {errors.number && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Centro de Publicación"
          {...register("publishing_center", { required: true })}
          className="form-control"
        />
        {errors.publishing_center && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="date"
          placeholder="Fecha"
          {...register("date", { required: true })}
          className="form-control"
        />
        {errors.date && <span>Este campo es requerido</span>}
      </div>
    </div>
  );
}
