import { FlatList, StyleSheet, Text, View } from "react-native";
import { Produto } from "../interfaces/Produto";

interface Props {
  produtos: Produto[];
  codigoDestacado?: string;
}

export default function ListaProdutos({ produtos, codigoDestacado }: Props) {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.codigo}
      renderItem={({ item }) => (
        <View
          style={[
            styles.item,
            item.codigo === codigoDestacado && styles.itemDestacado,
          ]}
        >
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.codigo}>{item.codigo}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#f7f7f7",
  },
  itemDestacado: {
    backgroundColor: "#ffe9a8",
    borderWidth: 2,
    borderColor: "#f0b400",
  },
  nome: { fontSize: 15, fontWeight: "600" },
  codigo: { fontSize: 13, color: "#666" },
});