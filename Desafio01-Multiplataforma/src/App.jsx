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

          {/* COLUMNA DERECHA: LISTA (Aquí se llena el espacio vacío) */}
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
    backgroundColor: '#e2e8f0', // Fondo general sutil
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start' 
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
    padding: '30px 20px',
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', // Degradado elegante
    color: 'white',
  },
  title: { 
    margin: 0, 
    fontSize: '2rem', 
    fontWeight: '800',
    letterSpacing: '-0.025em'
  },
  subtitle: { 
    margin: '5px 0 0', 
    fontSize: '0.9rem', 
    opacity: 0.8,
    fontWeight: '400'
  },
  contentGrid: {
    display: 'grid',
    // Ajuste para forzar 2 columnas
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '30px',
    padding: '30px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    minWidth: '0'
  },
  sectionTitle: { 
    color: '#1e293b', 
    fontSize: '1.2rem', 
    fontWeight: '700',
    borderLeft: '4px solid #3b82f6',
    paddingLeft: '12px',
    margin: 0
  },
  glassCard: {
    backgroundColor: '#f8fafc',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
  },
  listScrollContainer: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px',
    maxHeight: '500px', // Altura fija para activar el scroll
    overflowY: 'auto',
    paddingRight: '10px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#cbd5e1 #f8fafc'
  }
};

export default App;