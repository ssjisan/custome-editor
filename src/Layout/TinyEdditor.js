import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";
import "./editor.css";
export default function TinyEdditor() {
  const editorRef = useRef(null);
  return (
    <Box sx={{ mt: 5 }}>
      <Container>
        <Editor
          apiKey="q15jacj5azzopukv0hldcafwptxanxfvjsizqpn9y2jztsur"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            statusbar: false,
            background_colors: "red",
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "underline",
              "strikethrough",
              "lists",
            ],
            toolbar: "bold italic underline strikethrough | bullist numlist",
            body_class: "my_class",
          }}
        />
      </Container>
    </Box>
  );
}
