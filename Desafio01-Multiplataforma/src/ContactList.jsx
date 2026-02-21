import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onDelete, onFavorite }) => {
  return (
    <div style={styles.contactsGrid} className="contacts-grid">
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
        <p style={styles.emptyMsg}>No hay contactos que coincidan con la búsqueda.</p>
      )}
    </div>
  );
};

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
