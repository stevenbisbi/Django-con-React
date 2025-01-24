import { GroupCard } from "./GroupCard";

export function Aside({ groups }) {
  return (
    <div className="d-flex">
      <aside className="sidebar" id="sidebar">
        <h4>Grupos de Investigación</h4>
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </aside>
    </div>
  );
}
