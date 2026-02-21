import React from 'react';

const Contact = ({ contact, onDelete, onFavorite }) => {
    // 1. Desestructuración
    const { id, nombre, apellido, telefono, esFavorito } = contact;

    // 2. Estilo de la tarjeta (Se mantiene igual, pa)
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
            {/* Contenedor de Info */}
            <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: 0, color: '#333', display: 'flex', alignItems: 'center' }}>
                    {/* ESTA ES LA ÚNICA ESTRELLA DECORATIVA */}
                    {esFavorito && <span style={{ marginRight: '8px' }}>⭐</span>}
                    {nombre} {apellido}
                </h3>
                <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>
                    📞 {telefono}
                </p>
            </div>

            {/* Contenedor de Acciones */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                
                {/* BOTÓN DE FAVORITO: Al darle clic, marca o desmarca según el estado actual */}
                <button 
                    onClick={() => onFavorite(id)} // Esta función en el App.jsx debe invertir el valor de esFavorito
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.4rem',
                        cursor: 'pointer',
                        color: esFavorito ? '#FFD700' : '#ccc',
                        padding: '5px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
                >
                    {/* Si esFavorito es true, muestra la estrella llena ★, si es false, la vacía ☆ */}
                    {esFavorito ? '★' : '☆'}
                </button>

                {/* Botón Eliminar */}
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
