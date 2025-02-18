import { ChangeEvent } from "react";

interface FormFieldProps {
  field: {
    label: string;
    type: "text" | "number" | "password" | "textarea" | "date" | "file";
    value: string;
  };
  index: number;
  onUpdate: (
    index: number,
    updatedField: {
      label: string;
      type: "text" | "number" | "password" | "textarea" | "date" | "file";
      value: string;
    }
  ) => void;
  onRemove: (index: number) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  index,
  field,
  onUpdate,
  onRemove,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onUpdate(index, { ...field, value: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdate(index, {
      ...field,
      value: e.target.files
        ? Array.from(e.target.files)
            .map((file) => file.name)
            .join()
        : "",
    });
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <label className="block mb-2 text-lg font-medium text-gray-700">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : field.type === "file" ? (
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg"
        />
      ) : (
        <input
          type={field.type}
          onChange={field.type === "file" ? handleFileChange : handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <button
        type="button"
        onClick={() => onRemove(index)}
        className="mt-2 py-1 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-200"
      >
        Remove
      </button>
    </div>
  );
};

export default FormField;
