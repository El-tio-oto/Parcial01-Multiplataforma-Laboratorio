import React, { useState } from 'react';

const AddContactForm = () => {
    // Estado local para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nuevo contacto capturado:", { nombre, apellido, telefono });
        alert(`Contacto ${nombre} listo para guardarse!`);
        // Limpiar campos
        setNombre(''); setApellido(''); setTelefono('');
    };

    return (
        <section style={styles.container}>
            <h2 style={styles.title}>➕ Agregar Nuevo Contacto</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    style={styles.input} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Apellido" 
                    value={apellido} 
                    onChange={(e) => setApellido(e.target.value)} 
                    style={styles.input} 
                    required 
                />
                <input 
                    type="tel" 
                    placeholder="Número de teléfono" 
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)} 
                    style={styles.input} 
                    required 
                />
                <button type="submit" style={styles.button}>Guardar en Agenda</button>
            </form>
        </section>
    );
};

// Estilos (Layout y Formulario)
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
    form: { display: 'flex', flexDirection: 'column', gap: '12px' },
    input: { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' },
    button: {
        backgroundColor: '#28a745',
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