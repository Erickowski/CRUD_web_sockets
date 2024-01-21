import { ChangeEvent, Dispatch, SetStateAction, useMemo } from "react";

import { BandsType } from "@/types";

import { Input } from "..";

interface BandListI {
  data: BandsType;
  setData: Dispatch<SetStateAction<BandsType>>;
}

export function BandList({ data, setData }: BandListI) {
  const handleChangeName = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setData(
      data.map((band) => {
        if (band.id === id) {
          band.name = event.target.value;
        }
        return band;
      })
    );
  };

  const handleBlur = (id: string, name: string) => {
    console.log(id, name);
  };

  const getRows = useMemo(() => {
    return data.map((band) => {
      return (
        <tr className="odd:bg-white even:bg-gray-50 border-b" key={band.id}>
          <th scope="row" className="p-3">
            <button
              type="button"
              className="font-medium bg-blue-600 text-white border-2 border-blue-600 px-3 py-2 rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              +1
            </button>
          </th>
          <td className="px-6 py-4">
            <Input
              value={band.name}
              onChange={(event) => handleChangeName(event, band.id)}
              onBlur={() => handleBlur(band.id, band.name)}
            />
          </td>
          <td className="px-6 py-4">{band.votes}</td>
          <td className="px-6 py-4">
            <button
              type="button"
              className="font-medium text-red-600 hover:underline"
            >
              Borrar
            </button>
          </td>
        </tr>
      );
    });
  }, [data]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="p-3" />
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Votos
            </th>
            <th scope="col" className="px-6 py-3">
              Borrar
            </th>
          </tr>
        </thead>
        <tbody>{getRows}</tbody>
      </table>
    </div>
  );
}
