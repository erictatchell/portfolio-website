import { useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope } from "@phosphor-icons/react";
import { Resend } from 'resend';

const resend = new Resend('re_bFQZQocE_5XPxwBfmQzeMCTY1RLr6uCnG');

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState(''); // State for the subject line
    const [body, setBody] = useState('');

    if (!isOpen) return null;

    const backdrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { y: "0", opacity: 1, transition: { delay: 0.2 } },
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // resend.emails.send({
        //     from: email,
        //     to: 'etatchell@outlook.com',
        //     subject: subject,
        //     html: `<p>${body}</p>`
        // });
        onClose();
    };


    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center"
            style={{ backdropFilter: 'blur(8px)' }}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className="shadow bg-white bg-opacity-20 border-white border p-6"
                variants={modal}
            >
                <p className='text-white tracking-wide text-lg'>etatchell@outlook.com</p>
                <p className='mb-4 text-white font-extralight text-md'>I&apos;ll get back to you as soon as possible</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent placeholder-white border focus:outline-none focus:ring-0 active:outline-none border-white text-white p-2 mb-4"
                        required
                    />
                    <input
                        type="text"
                        placeholder="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-transparent placeholder-white border focus:outline-none focus:ring-0 active:outline-none border-white text-white p-2 mb-4"
                        required
                    />
                    <textarea
                        placeholder=""
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-full bg-transparent border placeholder-white focus:outline-none focus:ring-0 active:outline-none border-white text-white p-2 mb-4 h-40"
                        required
                    ></textarea>

                    <button type="submit" className="hover:bg-white hover:text-black uppercase px-4 py-2 text-white font-bold border border-white">
                        Send
                    </button>
                    <button onClick={onClose} className="ml-4 hover:bg-white hover:text-black uppercase px-4 py-2 text-white font-bold border border-white">
                        Close
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};
const Email: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen(true); }} className="hover:bg-red-300 border-black border inline-flex justify-center items-center text-base font-medium text-center">
                <Envelope size={32} />
            </a>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Email;
