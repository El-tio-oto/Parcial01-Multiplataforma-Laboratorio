import React, { useState } from 'react';
import AddContactForm from './AddContactForm'; 
import Contact from './Contact';
import contactsData from './contacts.json'; 

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Lógica del buscador
  const filteredContacts = contactsData.filter(contact =>
    `${contact.nombre} ${contact.apellido}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.mainLayout}>
        
        {/* BARRA LATERAL IZQUIERDA: FORMULARIO */}
        <aside style={styles.sidebar}>
          <header style={styles.sidebarHeader}>
            <h1 style={styles.title}>📱 Mi Agenda</h1>
            <p style={styles.subtitle}>Gestión Profesional • Parcial 1</p>
          </header>
          
          <div style={styles.formContainer}>
            <h2 style={styles.sectionTitle}>Nuevo Contacto</h2>
            <AddContactForm />
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL DERECHA: BUSCADOR Y LISTA */}
        <main style={styles.mainContent}>
          <div style={styles.topBar}>
            <h2 style={styles.sectionTitle}>Contactos Guardados</h2>
            <div style={styles.searchWrapper}>
              <span style={styles.searchIcon}>🔍</span>
              <input 
                type="text" 
                placeholder="Buscar contacto..." 
                style={styles.searchInput}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div style={styles.listGrid}>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => (
                <Contact key={c.id} contact={c} />
              ))
            ) : (
              <p style={styles.noResults}>No se encontraron contactos.</p>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'Inter', sans-serif"
  },
  mainLayout: {
    maxWidth: '1200px',
    width: '100%',
    height: '85vh',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    display: 'flex',
    overflow: 'hidden'
  },
  sidebar: {
    width: '350px',
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  sidebarHeader: { borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' },
  title: { margin: 0, fontSize: '1.8rem', fontWeight: '800' },
  subtitle: { margin: '5px 0 0', fontSize: '0.85rem', opacity: 0.6 },
  formContainer: { marginTop: '10px' },
  sectionTitle: { fontSize: '1.1rem', fontWeight: '700', color: 'inherit', margin: 0 },
  
  mainContent: {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    backgroundColor: '#ffffff'
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid #f1f5f9',
    color: '#1e293b'
  },
  searchWrapper: { position: 'relative', width: '300px' },
  searchIcon: { position: 'absolute', left: '12px', top: '10px', opacity: 0.4 },
  searchInput: {
    width: '100%',
    padding: '10px 15px 10px 40px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    outline: 'none',
    fontSize: '0.9rem'
  },
  listGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    overflowY: 'auto',
    paddingRight: '10px'
  },
  noResults: { textAlign: 'center', color: '#64748b', marginTop: '40px' }
};

export default App;