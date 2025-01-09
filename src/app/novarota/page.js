import { Header } from "./header/componentes";
import { CarrosInfo } from "./section/componentes";
import { Footer } from "./footer/componentes";

export default function NovaRotaHome() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Garante que a página ocupe toda a altura da janela
    }}>
      <Header subtopico = "Stênio Éric Barrêto da Costa"/>
      <main style={{ flex: 1 }}>
        <CarrosInfo />
      </main>
      <Footer />
    </div>
  );
}
