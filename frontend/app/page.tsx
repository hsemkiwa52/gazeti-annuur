import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Gazeti la An-Nuur</h1>
      <p>Mfumo wa Kidijitali wa Kusoma na Kupakua Magazeti.</p>
      
      {/* Link ya kuhamia kwenye ukurasa wa magazeti */}
      <div style={{ marginTop: '20px' }}>
        <Link 
          href="/magazeti" 
          style={{
            padding: '10px 20px',
            backgroundColor: '#1d4ed8',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none'
          }}
        >
          Angalia Magazeti Yote
        </Link>
      </div>
    </main>
  );
}