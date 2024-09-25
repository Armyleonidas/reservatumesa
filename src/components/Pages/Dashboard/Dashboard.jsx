import React from 'react'
import criterion from './criterion.jpg'
import marie from './marie.jpg'
import osaka from './osaka.jpg'
import seratta from './seratta.jpg'
import storiadamore from './storiadamore.jpg'

// ----------------------------------------------------------------------


const Dashboard = () => {
	const restaurantes = [
        {
            id: 1,
            nombre: 'Criterion',
            descripcion: 'Un restaurante de alta cocina con una oferta gastronómica que fusiona lo clásico con lo contemporáneo. Criterion destaca por su ambiente sofisticado y su menú cuidadosamente elaborado, ideal para los amantes de la cocina gourmet.',
            imagen: criterion
        },
        {
            id: 2,
            nombre: 'Marie',
            descripcion: 'Un espacio acogedor y elegante que se especializa en la cocina francesa tradicional. Marie ofrece una experiencia gastronómica refinada, con platos que celebran la riqueza y delicadeza de los sabores franceses.',
            imagen: marie
        },
        {
            id: 3,
            nombre: 'Osaka',
            descripcion: 'Un restaurante de cocina Nikkei que fusiona la gastronomía japonesa con influencias peruanas. Osaka es conocido por su creatividad y frescura en cada plato, combinando técnicas de sushi y ceviche para una experiencia única y moderna.',
            imagen: osaka
        },
        {
            id: 4,
            nombre: 'Seratta',
            descripcion: ' Un restaurante que combina la alta cocina internacional con un diseño espectacular. Seratta ofrece una experiencia multisensorial con platos creativos y una atmósfera vibrante, ideal para disfrutar de una cena especial.',
            imagen: seratta
        },
        {
            id: 5,
            nombre: 'Storidamore',
            descripcion: ' Inspirado en la tradición culinaria italiana, Storidamore ofrece un menú que celebra los sabores auténticos de Italia. Con una atmósfera romántica y platos caseros, es perfecto para una velada inolvidable.',
            imagen: storiadamore
        }
    ];

    return (
        <div>
            <header style={styles.header}>
                <h1>Bienvenidos a los Mejores Restaurantes</h1>
                <p>Explora nuestra selección de restaurantes</p>
            </header>

            <div style={styles.container}>
                <section style={styles.restaurantList}>
                    {restaurantes.map((restaurante) => (
                        <div key={restaurante.id} style={styles.restaurantCard}>
                            <img src={restaurante.imagen} alt={restaurante.nombre} style={styles.restaurantImage} />
                            <h2>{restaurante.nombre}</h2>
                            <p>{restaurante.descripcion}</p>
                        </div>
                    ))}
                </section>
            </div>

            <footer style={styles.footer}>
                <p>&copy; 2024 - Reserva tu Mesa.</p>
            </footer>
        </div>
    );
};

const styles = {
    header: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
    },
    container: {
        width: '90%',
        margin: '0 auto',
        padding: '20px'
    },
    restaurantList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
    },
    restaurantCard: {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        overflow: 'hidden',
        textAlign: 'center'
    },
    restaurantImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#333',
        color: 'white',
        marginTop: '40px'
    }
	
}

export default Dashboard