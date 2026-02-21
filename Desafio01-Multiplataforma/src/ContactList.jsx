import React from 'react';
import Contact from './Contact';

// ContactList: muestra la lista de contactos y delega cada uno al componente Contact
// Recibe la lista (filtrada), onDelete y onFavorite para pasar a cada Contact
const ContactList = ({ contacts, onDelete, onFavorite }) => {
  return (
    <div style={styles.contactsGrid} className="contacts-grid">
      {/* Si hay contactos, mapear y renderizar cada uno con Contact */}
      {contacts.length > 0 ? (
        contacts.map((c) => (
          <Contact
            key={c.id}
            contact={c}
            onDelete={onDelete}
            onFavorite={onFavorite}
          />
        ))
      ) : (
        // Mensaje cuando no hay resultados (lista vacía o filtro sin coincidencias)
        <p style={styles.emptyMsg}>No hay contactos que coincidan con la búsqueda.</p>
      )}
    </div>
  );
};

// Grid responsivo: columnas automáticas con mínimo 320px por tarjeta
const styles = {
  contactsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '25px'
  },
  emptyMsg: {
    color: '#64748b',
    textAlign: 'center',
    gridColumn: '1/-1',
    marginTop: '50px'
  }
};

export default ContactList;
