export function GroupCard({ group }) {
  return (
    <div className="card my-2 p-2">
      <h5>{group.name}</h5>
      <p>{group.categoria}</p>
    </div>
  );
}
