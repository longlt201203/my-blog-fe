import LocalFilesQuery from "../queries/LocalFilesQuery";
import FormModal from "../components/FormModal";
import { UpdateLocalFileDto } from "@/entities/LocalFile";
import { ChangeEvent, PropsWithChildren, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export default function EditFileModal(props: PropsWithChildren<{
    localFileId?: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: (id: string, dto: UpdateLocalFileDto) => void
}>) {
    const [dto, setDto] = useState<UpdateLocalFileDto | undefined>();
    const localFileId = props.localFileId;
    const { status, data, error } = useQuery(["getLocalFile", localFileId], () => LocalFilesQuery.getLocalFile(localFileId ?? ""), {
        enabled: !!localFileId,
        onSuccess: (newData) => {
            setDto({ ...newData });
        }
    });

    function onAliasNameChange(e: ChangeEvent<HTMLInputElement>) {
        const aliasName = e.target.value;
        setDto({
            ...dto,
            aliasName: aliasName
        });
    }

    function handleSubmit() {
        if (dto && localFileId) {
            props.handleSubmit(localFileId, dto);
        }
        props.setShow(false);
    }

    return (
        <FormModal title="Edit Image Information" show={props.show} setShow={props.setShow} onSave={handleSubmit} >
            {status == "loading" || status == "idle" ? (
                <Spinner animation="border" />
            ) : status == "success" ? (
                <Form.Group>
                    <Form.Label>Alias Name</Form.Label>
                    <Form.Control type="text" onChange={onAliasNameChange} value={dto?.aliasName} />
                </Form.Group>
            ) : (<>{toast("Error!")}</>)}
        </FormModal>
    );
}