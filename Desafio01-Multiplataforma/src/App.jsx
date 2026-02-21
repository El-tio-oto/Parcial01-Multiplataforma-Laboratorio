import React from 'react';
import AddContactForm from './AddContactForm'; 
import Contact from './Contact';
import contactsData from './contacts.json'; 

function App() {
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.mainLayout}>
        
        {/* ENCABEZADO CON GRADIENTE */}
        <header style={styles.header}>
          <h1 style={styles.title}>📱 Mi Agenda</h1>
          <p style={styles.subtitle}>Gestión de Contactos • Parcial 1</p>
        </header>

        {/* CONTENEDOR DE DOS COLUMNAS */}
        <div style={styles.contentGrid}>
          
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <section style={styles.column}>
            <h2 style={styles.sectionTitle}>Nuevo Contacto</h2>
            <div style={styles.glassCard}>
              <AddContactForm />
            </div>
          </section>

          {/* COLUMNA DERECHA: LISTA */}
          <section style={styles.column}>
            <h2 style={styles.sectionTitle}>Contactos Guardados</h2>
            <div style={styles.listScrollContainer}>
              {contactsData.map((c) => (
                <Contact key={c.id} contact={c} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: '#e2e8f0', // Fondo general 
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center'
  },
  mainLayout: {
    maxWidth: '1000px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', // Degradado 
    color: 'white',
  },
  title: { 
    margin: 0, 
    fontSize: '2.2rem', 
    fontWeight: '800',
    letterSpacing: '-0.025em'
  },
  subtitle: { 
    margin: '8px 0 0', 
    fontSize: '1rem', 
    opacity: 0.8,
    fontWeight: '400'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Responsivo: 2 col o 1 col si es pequeño
    gap: '40px',
    padding: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  sectionTitle: { 
    color: '#1e293b', 
    fontSize: '1.25rem', 
    fontWeight: '700',
    borderLeft: '4px solid #3b82f6',
    paddingLeft: '12px',
    margin: 0
  },
  glassCard: {
    backgroundColor: '#f8fafc',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0'
  },
  listScrollContainer: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '16px',
    maxHeight: '550px', // Altura fija con scroll para no deformar la página
    overflowY: 'auto',
    paddingRight: '10px'
  }
};

export default App;