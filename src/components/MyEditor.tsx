import { Editor } from "@tinymce/tinymce-react";
import { PropsWithChildren } from "react";

export default function MyEditor(props: PropsWithChildren<{handleDataChange: (data: string) => void}>) {
    return (
        <Editor
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            init={{
                height: 500,
                menubar: 'file edit insert view format table tools help',
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                    'codesample'
                ],
                toolbar: 'undo redo searchreplace | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify codesample | bullist numlist outdent indent | ' +
                    'removeformat | help',
                image_list: [],
                codesample_languages: [
                    { text: 'HTML/XML', value: 'markup' },
                    { text: 'JavaScript', value: 'javascript' },
                    { text: 'CSS', value: 'css' },
                    { text: 'PHP', value: 'php' },
                    { text: 'Ruby', value: 'ruby' },
                    { text: 'Python', value: 'python' },
                    { text: 'Java', value: 'java' },
                    { text: 'C', value: 'c' },
                    { text: 'C#', value: 'csharp' },
                    { text: 'C++', value: 'cpp' }
                ],
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onChange={(a, e) => props.handleDataChange(e.getContent())}
        />
    );
}