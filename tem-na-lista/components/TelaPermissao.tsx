import { Button, StyleSheet, Text, View } from "react-native";

interface Props {
  podePedir: boolean;
  onPermitir: () => void;
  onAbrirConfiguracoes: () => void;
}

export default function TelaPermissao({
  podePedir,
  onPermitir,
  onAbrirConfiguracoes,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Precisamos da câmera</Text>
      <Text style={styles.texto}>
        O app usa a câmera do celular para ler o código de barras dos produtos
        e verificar se eles estão na lista.
      </Text>
      {podePedir ? (
        <Button title="Permitir câmera" onPress={onPermitir} />
      ) : (
        <Button title="Abrir configurações" onPress={onAbrirConfiguracoes} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  titulo: { fontSize: 20, fontWeight: "bold" },
  texto: { fontSize: 15, textAlign: "center" },
});