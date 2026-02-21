import React, { useState, useEffect } from 'react';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import contactsData from './contacts.json';
import './App.css';

const SPLASH_DURATION_MS = 1200;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(contactsData);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  const deleteContact = (id) => {
    if (!window.confirm('¿Está seguro de que desea eliminar este contacto?')) return;
    const updated = contacts.filter(c => c.id !== id);
    setContacts(updated);
  };
 
  // 2. FUNCIÓN PARA FAVORITOS + ORDENAR (Aquí estaba el bug)
  const toggleFavorite = (id) => {
    // Primero mapeamos sobre 'contacts' (el estado), no sobre 'contactsData'
    const updated = contacts.map(c => 
      c.id === id ? { ...c, esFavorito: !c.esFavorito } : c
    );

    // Ordenamos una copia para que los favoritos queden arriba
    const sorted = [...updated].sort((a, b) => {
      if (a.esFavorito === b.esFavorito) return 0;
      return a.esFavorito ? -1 : 1;
    });
    
    setContacts(sorted);
  };

  // 3. FILTRADO: Importante filtrar sobre 'contacts' para ver los cambios en tiempo real
  const filteredContacts = contacts.filter(contact =>
    contact.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.apellido.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div style={splashStyles.container} className="splash-screen" aria-hidden="false">
        <div style={splashStyles.content}>
          <h1 style={splashStyles.title}>Mi Agenda</h1>
          <p style={splashStyles.subtitle}>Gestión Profesional</p>
          <div style={splashStyles.spinner} className="splash-spinner" />
        </div>
      </div>
    );
  }

  return (
    <div style={styles.appContainer} className="app-agenda">
      <div style={styles.mainWrapper} className="main-wrapper">
        
        {/* PANEL IZQUIERDO: CONTROL */}
        <aside style={styles.sidebar} className="sidebar">
          <div style={styles.sidebarHeader}>
            <h1 style={styles.brandTitle}>Mi Agenda</h1>
            <p style={styles.brandStatus}>Gestión Profesional • Parcial 1</p>
          </div>
          
          <div style={styles.formContainer} className="form-container">
            <h2 style={styles.sidebarHeading}>Nuevo Contacto</h2>
            <AddContactForm setContacts={setContacts} contacts={contacts} />
          </div>
        </aside>

        {/* PANEL DERECHO: DATOS */}
        <main style={styles.contentArea} className="content-area">
          <div style={styles.topNavigation} className="top-navigation">
            <h2 style={styles.mainHeading}>Contactos Guardados</h2>
            
            <div style={styles.searchBox} className="search-box">
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

          <ContactList
            contacts={filteredContacts}
            onDelete={deleteContact}
            onFavorite={toggleFavorite}
          />
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
  }
};

const splashStyles = {
  container: {
    position: 'fixed',
    inset: 0,
    backgroundColor: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  },
  content: {
    textAlign: 'center',
    color: '#f8fafc'
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    fontWeight: '800',
    letterSpacing: '-1px'
  },
  subtitle: {
    margin: '8px 0 24px',
    fontSize: '0.95rem',
    color: '#94a3b8'
  },
  spinner: {
    width: 40,
    height: 40,
    border: '3px solid #334155',
    borderTopColor: '#28a77b',
    borderRadius: '50%',
    margin: '0 auto'
  }
};

export default App;
