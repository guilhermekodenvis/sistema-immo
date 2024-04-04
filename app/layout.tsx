import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Immo",
  description: "O melhor sistema PDV para docerias e confeitarias, gerencie suas receitas, vendas, funcionários, estoque e finanças de forma eficiente.",
  keywords: "ERP, Docerias, Gestão de Vendas, Gestão de Estoque, Finanças, Gestão Empresarial",
  authors: [{
    name: "Immo Space",
    url: "https://immospace.com.br/",
  }],
  robots: "index, follow",
  openGraph: {
    title: "Sistema Immo",
    description: "O melhor sistema PDV para docerias e confeitarias, gerencie suas receitas, vendas, funcionários, estoque e finanças de forma eficiente.",
    url: "https://immospace.com.br/",
    images: [
      {
        url: "https://immospace.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Immo Space",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
