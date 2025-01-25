export function CongressProceedingsForm({ register, errors }) {
  return (
    <div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Edición"
          {...register("edition", { required: true })}
          className="form-control"
        />
        {errors.edition && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Ciudad"
          {...register("city", { required: true })}
          className="form-control"
        />
        {errors.city && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Tipo"
          {...register("tipo", { required: true })}
          className="form-control"
        />
        {errors.tipo && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="País"
          {...register("country", { required: true })}
          className="form-control"
        />
        {errors.country && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="number"
          placeholder="Año de Primera Edición"
          {...register("year_firstedition", { required: true })}
          className="form-control"
        />
        {errors.year_firstedition && <span>Este campo es requerido</span>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Frecuencia"
          {...register("frecuency", { required: true })}
          className="form-control"
        />
        {errors.frecuency && <span>Este campo es requerido</span>}
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
