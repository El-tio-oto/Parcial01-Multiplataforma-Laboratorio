import React from 'react';

// 1. DEFINICIÓN DEL COMPONENTE Y RECEPCIÓN DE PROPS
// Aquí el componente recibe un objeto llamado 'contact' que trae la info del JSON
const Contact = ({ contact }) => {

    // 2. CREACIÓN DE VARIABLES CONSTANTES (Desestructuración)
    // Extraemos los datos del objeto para usarlos fácilmente sin escribir 'contact.nombre'
    const { nombre, apellido, telefono, esFavorito } = contact;

    // 3. FUNCIONES DE INTERACCIÓN (Manejadores de eventos)
    // Aquí concatenamos un String con la variable usando "Template Literals" (las comillas invertidas)
    // Esto es para probar que los botones responden antes de poner la lógica final
    const handleEliminar = () => console.log(`Eliminar click: ${nombre}`); 
    const handleFavorito = () => console.log(`Favorito click: ${nombre}`);

    // 4. DEFINICIÓN DE ESTILOS (Objetos de JavaScript)
    // Creamos una constante para el diseño visual que pide la rúbrica
    const cardStyle = {
        // Uso de Operador Ternario para diseño dinámico:
        // Si esFavorito es true, pone borde dorado, si no, uno gris
        border: esFavorito ? '3px solid #FFD700' : '1px solid #ddd',
        backgroundColor: esFavorito ? '#fffdeb' : '#ffffff',
        padding: '15px',
        borderRadius: '12px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Sombra dinámica para que el favorito "resalte"
        boxShadow: esFavorito ? '0 4px 12px rgba(255, 215, 0, 0.4)' : '0 2px 5px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
    };

    // 5. RENDERIZADO DEL COMPONENTE (Estructura HTML/JSX)
    return (
        <div style={cardStyle}>
            {/* Contenedor de Información Personal */}
            <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: 0, color: '#333' }}>
                    {/* Renderizado Condicional: Solo muestra la estrella si es favorito */}
                    {esFavorito && <span style={{ marginRight: '5px' }}>⭐</span>}
                    {/* Concatenación visual de Nombre y Apellido */}
                    {nombre} {apellido}
                </h3>
                <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>
                    📞 {telefono}
                </p>
            </div>

            {/* Contenedor de Botones (Lógica de la Persona 2) */}
            <div style={{ display: 'flex', gap: '10px' }}>
                {/* Botón Favorito: Cambia el icono según el estado */}
                <button 
                    onClick={handleFavorito}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: esFavorito ? '#FFD700' : '#ccc'
                    }}
                >
                    {esFavorito ? '★' : '☆'}
                </button>

                {/* Botón Eliminar: Estilo rojo para destacar la acción */}
                <button 
                    onClick={handleEliminar}
                    style={{
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    );
};

// 6. EXPORTACIÓN
// Exportamos el componente para que la Persona 1 lo use en su ContactList
export default Contact;