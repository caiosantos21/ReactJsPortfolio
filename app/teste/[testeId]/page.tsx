interface TesteProps {
  params: { testeId: string }
}
export default function Teste({ params }: TesteProps) {
  return <main>page {params.testeId}</main>
}
