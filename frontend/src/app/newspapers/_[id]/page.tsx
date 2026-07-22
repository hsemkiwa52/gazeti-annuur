// 1. Amria Next.js dynamic params
export const dynamicParams = false;

// 2. Amria Next.js IDs zitakazotengenezwa wakati wa static export
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NewspaperDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Gazeti Namba: {id}</h1>
      <p>Ukurasa wa maelezo ya gazeti hili upo tayari.</p>
    </div>
  );
}