import React, { useRef, useState, useEffect } from 'react';
import {
  MdOutlineAlternateEmail,
  MdSubject,
  MdError,
  MdCheckCircle,
} from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { RiMessage3Fill, RiSendPlaneFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

import Input, { InputArea } from './Input';
import emailConfig from '../../../utils/config';
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormValues } from '@/interfaces/types';
import schema from '@/utils/contactFormSchema';

const ContactForm = () => {
  const defaultModalState = {
    showModal: false,
    type: '',
    message: '',
  };

  const [modalDetails, setModalDetails] = useState(defaultModalState);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const form = useRef<HTMLFormElement | null>(null);

  const onsubmit: SubmitHandler<ContactFormValues> = data => {
    setLoading(true);
    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        currentForm,
        emailConfig.PUBLIC_KEY
      )
      .then(
        () => {
          reset();
          setLoading(false);
          setModalDetails({
            ...modalDetails,
            showModal: true,
            type: 'success',
            message: 'Thanks! Message sent successfully!',
          });
        },
        error => {
          console.log('Error: ', error);
          setModalDetails({
            ...modalDetails,
            showModal: true,
            type: 'error',
            message: 'An error occured',
          });
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    if (modalDetails.showModal) {
      document.documentElement.setAttribute('class', ' overflow-y-hidden');
    } else {
      document.documentElement.removeAttribute('class');
    }
    return () => {
      document.documentElement.removeAttribute('class');
    };
  }, [modalDetails.showModal]);

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit(onsubmit)}
        className="mt-4">
        <div className="grid gap-5">
          <Input
            name="name"
            reg={register}
            registerOptions={schema.name}
            placeholder="Name"
            error={errors.name && errors.name.message}
            icon={<FaUserAlt />}
          />
          <Input
            type="email"
            reg={register}
            registerOptions={schema.email}
            error={errors.email_from && errors.email_from.message}
            name="email_from"
            placeholder="Email"
            icon={<MdOutlineAlternateEmail />}
          />
          <Input
            reg={register}
            registerOptions={schema.subject}
            error={errors.subject && errors.subject.message}
            name="subject"
            placeholder="Subject"
            icon={<MdSubject />}
          />
          <InputArea
            reg={register}
            registerOptions={schema.message}
            error={errors.message && errors.message.message}
            name="message"
            placeholder="Message"
            icon={<RiMessage3Fill />}
          />
          <div className="">
            <button
              className={`py-2 bg-backgroundColor1 dark:bg-backgroundColor2 shadow-shadowWhite3 dark:shadow-shadow1 rounded-md ml-auto group text-lg px-5 flex items-center hover:bg-gradientRedHover hover:text-colorLight border border-colorWhite dark:border-colorTertiary border-opacity-30 ${
                loading && 'pointer-events-none relative inline-block text-sm'
              }`}>
              {loading && (
                <span className="animate-spin mr-3">
                  <ImSpinner2 />
                </span>
              )}
              <span className={`${!loading && 'mr-3'}`}>
                {loading ? 'Sending . . .' : 'Send'}
              </span>
              {!loading && (
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-400ms">
                  <RiSendPlaneFill />
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
      {modalDetails.showModal && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-filter backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className={`bg-backgroundColor1 dark:bg-backgroundColor2 shadow-shadowWhite3 dark:shadow-shadow1 backdrop-filter border-opacity-20 backdrop-blur-lg border rounded-lg py-8 sm:px-20 md:px-28 lg:px-36 max-w-md text-center ${
                modalDetails.type === 'success'
                  ? 'border-colorSuccess  px-10'
                  : 'border-colorDanger px-16'
              }`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.3 }}>
              <h3
                className={`text-5xl flex justify-center mb-4 text-center ${
                  modalDetails.type === 'success'
                    ? 'text-colorSuccess'
                    : 'text-colorDanger'
                }`}>
                {modalDetails.type === 'success' ? (
                  <MdCheckCircle />
                ) : (
                  <MdError />
                )}
              </h3>
              <p>{modalDetails.message}</p>
              <button
                className={`bg-backgroundColor1 mt-8 transition-colors duration-400ms dark:bg-backgroundColor2 py-2 px-5 rounded shadow-shadowWhite3 dark:shadow-shadow1 ${
                  modalDetails.type === 'success'
                    ? 'text-colorSuccess dark:hover:bg-colorSuccess hover:bg-colorSuccess dark:hover:text-colorWhite hover:text-colorWhite'
                    : 'text-colorDanger dark:hover:bg-colorDanger hover:bg-colorDanger dark:hover:text-colorWhite hover:text-colorWhite'
                }`}
                onClick={() =>
                  setModalDetails(prev => ({ ...prev, showModal: false }))
                }>
                OK
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default ContactForm;
