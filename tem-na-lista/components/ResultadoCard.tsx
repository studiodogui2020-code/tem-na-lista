import { StyleSheet, Text, View } from "react-native";
import { Produto } from "../interfaces/Produto";

export type StatusLeitura = "aguardando" | "encontrado" | "nao_encontrado";

interface Props {
  status: StatusLeitura;
  produto?: Produto;
  codigoLido?: string;
}

function formatarPreco(valor: number): string {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

export default function ResultadoCard({ status, produto, codigoLido }: Props) {
  if (status === "encontrado" && produto) {
    return (
      <View style={[styles.card, styles.cardEncontrado]}>
        <Text style={styles.titulo}>✅ Produto encontrado</Text>
        <Text style={styles.texto}>{produto.nome}</Text>
        <Text style={styles.preco}>{formatarPreco(produto.preco)}</Text>
      </View>
    );
  }

  if (status === "nao_encontrado") {
    return (
      <View style={[styles.card, styles.cardNaoEncontrado]}>
        <Text style={styles.titulo}>❌ Produto não encontrado</Text>
        <Text style={styles.texto}>Código lido: {codigoLido}</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Aponte para um código de barras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eeeeee",
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
  },
  cardEncontrado: { backgroundColor: "#d9f5dd" },
  cardNaoEncontrado: { backgroundColor: "#fbdcdc" },
  titulo: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  texto: { fontSize: 15 },
  preco: { fontSize: 20, fontWeight: "bold", marginTop: 4 },
});