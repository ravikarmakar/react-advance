import { ChangeEvent, useState } from "react";
import useFormBuilderStore from "./store";
import FormField from "./FormField";

interface NewField {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}

const FormBuilder = () => {
  const { formFields, addField, removeField, resetForm, updateField } =
    useFormBuilderStore();

  const [newFiled, setNewFiled] = useState<NewField>({
    label: "",
    type: "text",
    value: "",
  });

  const handleAddFiled = () => {
    addField(newFiled);
    setNewFiled({ label: "", type: "text", value: "" });
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setNewFiled((prev) => ({ ...prev, [name]: value }));
  };

  const handleFieldUpdate = (index: number, updatedField: NewField) =>
    updateField(index, updatedField);

  const handleFieldRemove = (index: number) => removeField(index);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Form Builder</h1>

      <div className="flex flex-col mb-6">
        <input
          type="text"
          name="label"
          placeholder="Field Label"
          value={newFiled.label}
          onChange={handleFieldChange}
          className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="type"
          value={newFiled.type}
          onChange={handleFieldChange}
          className="p-2 mb-2 border cursor-pointer border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="textarea">Textarea</option>
          <option value="date">Date</option>
          <option value="file">File</option>
        </select>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleAddFiled}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-200"
          >
            Add Field
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="bg-red-500 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-red-700 transition duration-200"
          >
            Reset Form
          </button>
        </div>
      </div>

      <form>
        {formFields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            index={index}
            onUpdate={handleFieldUpdate}
            onRemove={handleFieldRemove}
          />
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
