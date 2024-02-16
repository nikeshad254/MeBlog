import { Editor } from "@tinymce/tinymce-react";
import { Control, Controller } from "react-hook-form";

type RTEProps = {
  name?: string;
  control: Control;
  label?: string;
  defaultValue?: string;
};

export default function RTE({
  name,
  control,
  label,
  defaultValue = "",
}: RTEProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
