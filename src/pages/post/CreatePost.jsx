import { Input, useToast } from "@chakra-ui/react";
import { Button as Btn } from "antd";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import useLoader from "../../store";
import usePostApi from "../../service/blog";
import useImagesApi from "../../service/image";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { isLoading, startLoading, endLoading } = useLoader();
  const { createPost } = usePostApi();
  const { posterImage } = useImagesApi();
  const [title, setTitle] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [fileConfig, setFileConfig] = useState({
    error: false,
    file: null,
  });
  const editorRef = useRef(null);

  //fuksiya

  const createNewPost = () => {
    startLoading();
    if (fileConfig.file) {
      let formData = new FormData();
      formData.append("image", fileConfig.file);

      posterImage(formData)
        .then((res) => {
          if (res.data.fileName) {
            const body = {
              title: `${res.data.fileName}^*^${title}`,
              body: editorRef.current.getContent(),
              user_id: localStorage.getItem("my_id"),
            };
            createPost(body)
              .then((res) => {
                if (res.data) {
                  endLoading(true);
                  toast({
                    title: "New post successfully",
                    status: "success",
                    position: "top",
                  });
                  return navigate("/");
                }
              })
              .catch((err) => {
                endLoading(true),
                  toast({
                    title: err.message,
                    status: "error",
                    position: "top",
                  });
                console.log(err);
              });
          }
        })
        .catch((err) => {
          endLoading(true);
          toast({
            title: err.message,
            status: "error",
            position: "top",
          });
        });
    } else {
      console.log("file yo'q");
    }
  };
  const uploadFile = (e) => {
    if (e?.target?.files[0].size <= 1000000) {
      setFileConfig((p) => ({
        ...p,
        file: e?.target?.files[0],
        error: false,
      }));
    } else {
      setFileConfig((p) => ({ ...p, error: true, error: true }));
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="title" className="text-[20px]">
          Enter new post title
        </label>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2"
          id="title"
          size="lg"
        />

        <div className="flex items-center justify-center w-full mt-5 mb-5">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-34 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            style={{
              border:
                fileConfig.error === true
                  ? "2px dashed red"
                  : "2px dashed gray",
              opacity: fileConfig.loading === true ? "0.5" : "1",
            }}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              {fileConfig?.file?.name ? (
                <p className="text-[17px] font-semibold">
                  File: {fileConfig?.file?.name}
                </p>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="mb-2 text-sm text-gray-500 ">
                    <span className="font-semibold">
                      Click to upload poster
                    </span>{" "}
                    or drag and drop
                  </p>
                  {fileConfig.error === false ? (
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 1MB)
                    </p>
                  ) : (
                    <p className="text-sm text-red-500">
                      The file is larger then <strong>1MB</strong>
                    </p>
                  )}
                </div>
              )}
            </div>
            <input
              onChange={(e) => uploadFile(e)}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>
        <div className="min-h-[300px] w-full bg-gray-100 rounded-lg">
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <Btn
          loading={isLoading}
          type="primary"
          className="mt-7"
          size="large"
          onClick={createNewPost}
        >
          Create new Post
        </Btn>
      </div>
    </div>
  );
};

export default CreatePost;
