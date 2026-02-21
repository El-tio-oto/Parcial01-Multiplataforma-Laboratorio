import React from 'react';
import AddContactForm from './AddContactForm'; 
import Contact from './Contact';
import contactsData from './contacts.json'; 

function App() {
  return (
    <div style={styles.mainLayout}>
      
      <header style={styles.header}>
        <h1 style={styles.title}>📱 Mi Agenda</h1>
        <p style={styles.subtitle}>Gestión de Contactos - Parcial 1</p>
      </header>

      <AddContactForm />
      
      <hr style={styles.divider} />

      <h2 style={styles.sectionTitle}>Lista de Contactos</h2>
      <div style={styles.listContainer}>
        {contactsData.map((c) => (
          <Contact key={c.id} contact={c} />
        ))}
      </div>

    </div>
  );
}

const styles = {
  mainLayout: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f7f6',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#2c3e50',
    color: 'white',
    borderRadius: '10px',
    marginBottom: '25px'
  },
  title: { margin: 0, fontSize: '1.6rem' },
  subtitle: { margin: 0, fontSize: '0.9rem', opacity: 0.8 },
  divider: { margin: '25px 0', border: 'none', borderTop: '1px solid #ddd' },
  sectionTitle: { color: '#34495e', marginBottom: '15px' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '15px' }
};

export default App;