import React, { useState } from 'react';

// Solo letras (y espacios para nombres compuestos). Incluye acentos y ñ.
const onlyLetters = (value) => value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
// Solo números, signo + y espacios
const onlyNumbersPlusAndSpaces = (value) => value.replace(/[^0-9+\s]/g, '');

const AddContactForm = ({ setContacts, contacts }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleNombreChange = (e) => setNombre(onlyLetters(e.target.value));
    const handleApellidoChange = (e) => setApellido(onlyLetters(e.target.value));
    const handleTelefonoChange = (e) => setTelefono(onlyNumbersPlusAndSpaces(e.target.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        const maxId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) : 0;
        const newContact = {
            id: maxId + 1,
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            telefono: telefono.trim(),
            esFavorito: false
        };
        setContacts([...contacts, newContact]);
        setNombre('');
        setApellido('');
        setTelefono('');
    };

    return (
        <section style={styles.container} className="add-contact-form">
            <h2 style={styles.title}>Agregar Nuevo Contacto</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.fieldGroup}>
                    <label htmlFor="nombre" style={styles.label}>Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Francisco"
                        value={nombre}
                        onChange={handleNombreChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.fieldGroup}>
                    <label htmlFor="apellido" style={styles.label}>Apellido</label>
                    <input
                        id="apellido"
                        type="text"
                        placeholder="Gaviria"
                        value={apellido}
                        onChange={handleApellidoChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.fieldGroup}>
                    <label htmlFor="telefono" style={styles.label}>Número de teléfono</label>
                    <input
                        id="telefono"
                        type="tel"
                        placeholder="+503 1254 6254"
                        value={telefono}
                        onChange={handleTelefonoChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Guardar en Agenda</button>
            </form>
        </section>
    );
};

const styles = {
    container: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        marginBottom: '30px',
        border: '1px solid #e0e0e0'
    },
    title: { color: '#2c3e50', marginBottom: '15px', fontSize: '1.4rem', textAlign: 'center' },
    form: { display: 'flex', flexDirection: 'column', gap: '16px' },
    fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
    label: {
        color: '#334155',
        fontSize: '0.9rem',
        fontWeight: '600'
    },
    input: {
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        backgroundColor: '#ffffff',
        color: '#1e293b',
        boxSizing: 'border-box',
        width: '100%'
    },
    button: {
        backgroundColor: '#28a77b',
        color: 'white',
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: 'background 0.3s'
    }
};

export default AddContactForm;