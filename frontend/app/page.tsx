export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      color: '#0f172a',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '10px' }}>
          Gazeti la An-Nuur
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '20px' }}>
          Mfumo wa Kidijitali wa Kusoma na Kupakua Magazeti Matoleo Mapya na Yaliyopita.
        </p>

        <div style={{ marginTop: '25px' }}>
          {/* Tumia tag ya asili ya HTML <a> ikiwa na slash / mwishoni */}
          <a 
            href="/magazeti/" 
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#1d4ed8',
              color: '#ffffff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Angalia Magazeti Yote
          </a>
        </div>
      </div>
    </main>
  );
}