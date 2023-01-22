import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import { RichUtils } from "draft-js";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

export default function CustomeEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  return (
    <Container>
      <Box>
        <Typography>Editor</Typography>
        <Box
          sx={{
            backgroundColor: "#b3d4fc",
            padding: "10px",
            border: "none",
            outline: "none",
          }}
        >
          <button
            onClick={() =>
              setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
            }
          >
            <FormatBoldIcon />
          </button>
          <button
            onClick={() =>
              setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
            }
          >
            Italic
          </button>
          <button
            onClick={() =>
              setEditorState(
                RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
              )
            }
          >
            Underline
          </button>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
          />
        </Box>
      </Box>
    </Container>
  );
}
