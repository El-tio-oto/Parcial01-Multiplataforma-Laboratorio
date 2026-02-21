import React from 'react';

const Contact = ({ contact, onDelete, onFavorite }) => {
    // 1. Extraemos el 'id' del objeto contact para que las funciones no se confundan
    const { id, nombre, apellido, telefono, esFavorito } = contact;

    // 2. Estilos dinámicos (Punto 5 y 6 de la rúbrica)
    const cardStyle = {
        border: esFavorito ? '3px solid #FFD700' : '1px solid #ddd',
        backgroundColor: esFavorito ? '#fffdeb' : '#ffffff',
        padding: '15px',
        borderRadius: '12px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: esFavorito ? '0 4px 12px rgba(255, 215, 0, 0.4)' : '0 2px 5px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
    };

    return (
        <div style={cardStyle}>
            {/* Información del contacto */}
            <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: 0, color: '#333' }}>
                    {/* Solo mostramos el nombre, la estrella va en el botón para no duplicar */}
                    {nombre} {apellido}
                </h3>
                <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>
                    📞 {telefono}
                </p>
            </div>

            {/* Botones de acción */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                
                {/* BOTÓN FAVORITO: Usa 'id' dinámico para no marcar a otros */}
                <button 
                    onClick={() => onFavorite(id)} 
                    style={{
                        backgroundColor: esFavorito ? '#FFD700' : '#f0f0f0',
                        color: esFavorito ? 'white' : '#888',
                        border: '1px solid #ccc',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    {/* El texto cambia según el estado (Toggle) */}
                    {esFavorito ? '⭐ Quitar' : '☆ Favorito'}
                </button>

                {/* BOTÓN ELIMINAR */}
                <button 
                    onClick={() => onDelete(id)}
                    style={{
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.8rem'
                    }}
                >
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    );
};

export default Contact;
