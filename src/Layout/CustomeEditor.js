import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { RichUtils } from "draft-js";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export default function CustomeEditor() {
  const editorRef = React.useRef(null);

  const handleBoxClick = () => {
    editorRef.current.focus();
  };
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  console.log(editorState);

  return (
    <Container>
      <Box>
        <Typography>Editor</Typography>
      </Box>
      <Box sx={{ backgroundColor: "#eff2f9", p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Box
              onClick={() =>
                setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
              }
              sx={{
                cursor: "pointer",
                height: "24px",
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormatBoldIcon sx={{ fontSize: "20px", color: "#495163" }} />
            </Box>
            <Box
              onClick={() =>
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, "ITALIC")
                )
              }
              sx={{
                cursor: "pointer",
                height: "24px",
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormatItalicIcon sx={{ fontSize: "20px", color: "#495163" }} />
            </Box>
            <Box
              onClick={() =>
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
                )
              }
              sx={{
                cursor: "pointer",
                height: "24px",
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormatUnderlinedIcon
                sx={{ fontSize: "20px", color: "#495163" }}
              />
            </Box>
            <Box
              onClick={() =>
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH")
                )
              }
              sx={{
                cursor: "pointer",
                height: "24px",
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StrikethroughSIcon sx={{ fontSize: "20px", color: "#495163" }} />
            </Box>
            <Box
              sx={{
                height: "20px",
                width: "1px",
                margin: " 0px 10px",
                backgroundColor: "rgb(190, 196, 213)",
              }}
            ></Box>
            <Box
              onClick={() =>
                setEditorState(
                  RichUtils.toggleBlockType(editorState, "unordered-list-item")
                )
              }
              sx={{
                cursor: "pointer",
                height: "24px",
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormatListBulletedIcon
                sx={{ fontSize: "20px", color: "#495163" }}
              />
            </Box>

            <Box
              onClick={() =>
                setEditorState(
                  RichUtils.toggleBlockType(editorState, "ordered-list-item")
                )
              }
              sx={{
                cursor: "pointer",
                height: "24px",
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormatListNumberedIcon
                sx={{ fontSize: "20px", color: "#495163" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{ color: "#828ba2", fontSize: "14px", fontWeight: 400 }}
            >
              Pre-written phrases
            </Typography>{" "}
            <AddCircleSharpIcon sx={{ color: "#1a91f0" }} />
          </Box>
        </Box>
        <Box
          sx={{
            p: 1,
            border: "none",
            outline: "none",
            minHeight: "200px",
          }}
          onClick={handleBoxClick}
        >
          <Editor
            editorState={editorState}
            onChange={handleChange}
            handleKeyCommand={handleKeyCommand}
            ref={editorRef}
          />
        </Box>
      </Box>
    </Container>
  );
}
