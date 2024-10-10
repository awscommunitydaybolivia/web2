import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Dialog = ({ isOpen, closeDialog }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeDialog}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg overflow-y-auto max-h-[90vh] w-full max-w-3xl p-6 relative font-sans"
        role="dialog"
        aria-labelledby="dialog-title"
      >
        <h2 id="dialog-title" className="text-2xl font-bold mb-4 text-gray-900">
          Código de conducta
        </h2>
        <button
          onClick={closeDialog}
          className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
          aria-label="Close dialog"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold mt-6">Importancia</h3>
          <p className="mt-2">
            Creemos firmemente en el valor y la importancia de un entorno en el
            que todos los miembros de la comunidad AWS y los participantes en
            eventos se sientan bienvenidos y seguros. Este{" "}
            <strong>Código de Conducta</strong> explica qué tipo de
            comportamiento esperamos de los miembros de la comunidad AWS y de
            los participantes en eventos. Los términos de este Código de
            Conducta no son negociables. No toleraremos comportamientos
            contrarios a este Código de Conducta.
          </p>

          <h3 className="text-xl font-semibold mt-6">Comportamiento</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              Te comportarás de forma que crees un entorno seguro y de apoyo
              para todos los participantes del evento.
            </li>
            <li>
              No participarás en discursos o comportamientos perturbadores, ni
              interferirá de ningún otro modo en el evento o en la participación
              de otras personas en el mismo.
            </li>
            <li>
              No participarás en ningún tipo de discurso o comportamiento
              acosador, ofensivo, discriminatorio o amenazador, incluyendo (pero
              sin limitarse a) los relacionados con la raza, el sexo, la
              identidad y expresión de género, el origen nacional, la religión,
              la discapacidad, el estado civil, la edad, la orientación sexual.
            </li>
            <li>
              La suplantación de identidad, incluyendo el intento de acceder al
              evento utilizando el registro de otra persona, es un asunto grave
              que no será tolerado. Esto abarca cualquier forma de falsificación
              de identidad.
            </li>
            <li>
              Cumplirás las instrucciones del personal del evento y del lugar de
              celebración.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Alcance</h3>
          <p className="mt-2">
            Esperamos que todos los participantes en el evento (incluidos los
            empleados de AWS, asistentes, proveedores, patrocinadores, ponentes,
            voluntarios e invitados) respeten los principios de este Código de
            Conducta. Este Código de Conducta cubre el evento principal y todos
            los eventos relacionados (sociales o de otro tipo).
          </p>

          <h3 className="text-xl font-semibold mt-6">Consecuencias</h3>
          <p className="mt-2">
            Si consideramos que no estás cumpliendo este Código de Conducta,
            podemos cancelar tu solicitud, negarte la entrada o exigirte que
            abandones todos los sitios del evento. Todas las decisiones quedan a
            nuestra entera discreción. Involucraremos a las fuerzas del orden
            locales si lo consideramos oportuno. Si te denegamos la entrada o te
            exigimos que abandones el sitio, no tendrás derecho a recibir el
            reembolso de ninguna de las tarifas que hayas abonado en relación
            con el evento o los eventos relacionados. El incumplimiento de este
            Código de Conducta puede dar lugar a la descalificación para
            participar en futuros eventos.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Publicaciones en redes sociales
          </h3>
          <p className="mt-2">
            Siéntete libre de tomar fotos y/o videos y publicarlas a través de
            tus perfiles en las redes sociales. Asegúrate de etiquetarnos en{" "}
            <strong>#awscommunitydaybolivia</strong>,{" "}
            <strong>#awsbolivia</strong> y <strong>#awscommunity</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-6">Ponte en contacto</h3>
          <p className="mt-2">
            Si eres testigo o víctima de un comportamiento inapropiado, o si
            tiene alguna duda relacionada con este código de conducta, ponte en
            contacto con los organizadores del AWS Community Day, en{" "}
            <a
              href="mailto:contacto@awscommunity.org.bo"
              className="text-blue-500 hover:underline"
            >
              contacto@awscommunity.org.bo
            </a>{" "}
            o directamente con cualquier miembro del staff.
          </p>

          <h3 className="text-xl font-semibold mt-6">Derechos de imagen</h3>
          <p className="mt-2">
            Amazon Web Services, AWS y el logotipo de AWS son Marcas registradas
            de Amazon.com, Inc. o sus afiliados.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default Dialog;
