import { Button, ButtonGroup, Card, Col, Row, Spinner, Stack } from "react-bootstrap";
import AdminLayout from "../layouts/AdminLayout";
import { useState } from "react";
import UploadFileModal from "../components/UploadFileModal";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "react-query";
import LocalFile, { UpdateLocalFileDto } from "@/entities/LocalFile";
import LocalFilesQuery from "../queries/LocalFilesQuery";
import { ToastContainer, toast } from "react-toastify";
import ConfirmModal from "../components/ConfirmModal";
import EditFileModal from "../components/EditFileModal";

export default function AdminFilesPage() {
    const [handleYes, setHandleYes] = useState(() => () => { });
    const [confirmModalShow, setConfirmModalShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editLocalFileId, setEditLocalFileId] = useState<string | undefined>();
    // const { status, data, error } = useQuery<LocalFile[], Error>("getFiles", LocalFilesQuery.getLocalFiles);

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: "getFiles",
        queryFn: async ({ pageParam = 1 }) => {
            return await LocalFilesQuery.getLocalFiles(pageParam);
        },
        getNextPageParam: (lastPage, pages) => lastPage.nextPage
    });

    const queryClient = useQueryClient();
    const uploadFileMutation = useMutation("uploadFiles", LocalFilesQuery.uploadFiles, {
        onSuccess: () => {
            queryClient.invalidateQueries("getFiles");
            toast('Upload success');
        }
    });
    const editFileInfoMutation = useMutation("editFileInfo", LocalFilesQuery.editFileInfo, {
        onSuccess: () => {
            queryClient.invalidateQueries("getFiles");
            toast('Edit success');
        }
    });
    const deleteFileMutation = useMutation("deleteFile", LocalFilesQuery.deleteFile, {
        onSuccess: () => {
            queryClient.invalidateQueries("getFiles");
            toast('Delete success');
        }
    });

    function handleSubmit(submitData: FormData) {
        uploadFileMutation.mutate(submitData);
    }

    function handleDeleteFile(id: string) {
        deleteFileMutation.mutate(id);
    }

    function handleEditFileInfo(id: string, dto: UpdateLocalFileDto) {
        editFileInfoMutation.mutate({ id, dto });
    }

    return (
        <AdminLayout>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h1 className="text-center">Files</h1>
            <div className="mb-3">
                <Button onClick={() => setModalShow(true)}>Upload</Button>
            </div>

            {status == "loading" ? (<Spinner animation="border" />) : status == "error" ? (<>{toast("Error")}</>) : (
                <>
                    <Row className="row-cols-3 gy-3">
                        {data?.pages.map((group, index) => (<>
                            {group.data.map(item => (
                                <Col key={item._id}>
                                    <Card>
                                        <Card.Img variant="top" className="img-fluid" src={item.link} />
                                        <Card.Footer>
                                            <Stack className="justify-content-between" gap={2}>
                                                <Card.Title className="text-center">{item.aliasName}</Card.Title>
                                                <ButtonGroup>
                                                    <Button variant="secondary" onClick={() => {
                                                        setEditLocalFileId(item._id);
                                                        setEditModalShow(true);
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                        </svg>
                                                    </Button>
                                                    <Button variant="danger" onClick={() => {
                                                        setHandleYes(() => () => {
                                                            handleDeleteFile(item._id);
                                                            setConfirmModalShow(false);
                                                        });
                                                        setConfirmModalShow(true);
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                                        </svg>
                                                    </Button>
                                                </ButtonGroup>
                                            </Stack>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </>))}
                    </Row>
                </>
            )}
            <Button onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}>{isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}</Button>
            {isFetching && !isFetchingNextPage ? (<Spinner animation="border" />) : null}

            <UploadFileModal handleSubmit={handleSubmit} show={modalShow} setShow={setModalShow} />
            <EditFileModal localFileId={editLocalFileId} handleSubmit={handleEditFileInfo} show={editModalShow} setShow={setEditModalShow} />
            <ConfirmModal handleYes={handleYes} handleCancel={() => setConfirmModalShow(false)} show={confirmModalShow} text="Are you sure?" />
        </AdminLayout>
    );
}