import React, { useState } from 'react';
import AddContactForm from './AddContactForm'; 
import Contact from './Contact';
import contactsData from './contacts.json'; 

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra los contactos por nombre mientras escribes
  const filteredContacts = contactsData.filter(contact =>
    contact.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.appContainer}>
      <div style={styles.mainWrapper}>
        
        {/* PANEL IZQUIERDO: CONTROL */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            <h1 style={styles.brandTitle}>Mi Agenda</h1>
            <p style={styles.brandStatus}>Gestión Profesional • Parcial 1</p>
          </div>
          
          <div style={styles.formContainer}>
            <h2 style={styles.sidebarHeading}>Nuevo Contacto</h2>
            <AddContactForm />
          </div>
        </aside>

        {/* PANEL DERECHO: DATOS */}
        <main style={styles.contentArea}>
          <div style={styles.topNavigation}>
            <h2 style={styles.mainHeading}>Contactos Guardados</h2>
            
            <div style={styles.searchBox}>
              <span style={styles.searchIcon}>🔍</span>
              <input 
                type="text" 
                placeholder="Buscar por nombre..." 
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div style={styles.contactsGrid}>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => (
                <Contact key={c.id} contact={c} />
              ))
            ) : (
              <p style={styles.emptyMsg}>No hay contactos que coincidan con la búsqueda.</p>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    backgroundColor: '#ffffff',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    overflow: 'hidden',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  mainWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  sidebar: {
    width: '350px',
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 30px',
    boxShadow: '4px 0 15px rgba(0,0,0,0.1)',
    zIndex: 10
  },
  sidebarHeader: { marginBottom: '40px', borderBottom: '1px solid #334155', paddingBottom: '20px' },
  brandTitle: { margin: 0, fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-1px' },
  brandStatus: { margin: '5px 0 0', fontSize: '0.8rem', color: '#94a3b8' },
  sidebarHeading: { fontSize: '1.2rem', marginBottom: '20px', color: '#f1f5f9' },
  
  contentArea: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto'
  },
  topNavigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid #e2e8f0'
  },
  mainHeading: { color: '#1e293b', fontSize: '1.6rem', margin: 0, fontWeight: '700' },
  searchBox: { position: 'relative', width: '350px' },
  searchIcon: { position: 'absolute', left: '15px', top: '10px', opacity: 0.4 },
  searchInput: {
    width: '100%',
    padding: '10px 15px 10px 45px',
    borderRadius: '12px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.2s'
  },
  contactsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '25px'
  },
  emptyMsg: { color: '#64748b', textAlign: 'center', gridColumn: '1/-1', marginTop: '50px' }
};

export default App;