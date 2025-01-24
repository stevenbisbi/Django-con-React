import { useEffect, useState } from "react";
import { getAllGroups } from "../api/Group.api";
import { Aside } from "../components/Aside";
import { ArticleList } from "../components/ArticleList";

export function Home() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function loadGroups() {
      const res = await getAllGroups();
      setGroups(res.data);
      console.log(res.data);
    }
    loadGroups();
  }, []);

  return (
    <main className="container my-4">
      <div className="d-flex">
        {/* Barra lateral de grupos de investigación */}
        <div className="col-2">
          <Aside groups={groups} />
        </div>

        {/* Contenido principal */}
        <div className="col">
          <ArticleList />
        </div>
      </div>
    </main>
  );
}
