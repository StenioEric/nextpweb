import Link from 'next/link'

export function Header({ subtopico }) {
  return (
    <header
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <h1>Carros Incríveis</h1>
      <p>Encontre informações sobre os melhores carros!</p>
      <Link href="/novarota">Rota1</Link> <br />
      <br />
      <p>{subtopico}</p>
    </header>
  );
}
