import { useState } from 'react';
import { Button, Modal } from '@wordpress/components';
import { Spinner } from '@wordpress/components';

export default function MyModal() {
    const [isOpen, setOpen] = useState(false);
    const openModal = () => {
        <Spinner />
        setOpen(true)
    };
    const closeModal = () => setOpen(false);

    return (
        <>
            <Button variant="secondary" onClick={openModal}>
                Open Modal
            </Button>
            {isOpen && (
                <Modal title="This is my modal" onRequestClose={closeModal}>
                    <Button variant="secondary" onClick={closeModal}>
                        My custom close button
                    </Button>
                </Modal>
            )}
        </>
    );
};
