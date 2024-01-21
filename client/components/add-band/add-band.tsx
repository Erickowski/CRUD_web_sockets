import { Input } from "..";

export function AddBand() {
  return (
    <div>
      <h3 className="mb-2">Añadir banda</h3>
      <form>
        <Input placeholder="Nuevo nombre de la banda" />
      </form>
    </div>
  );
}
