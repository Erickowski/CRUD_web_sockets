interface IInput {
  placeholder?: string;
}

export function Input({ placeholder }: IInput) {
  return (
    <input
      type="text"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
    />
  );
}
