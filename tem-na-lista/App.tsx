import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import ResultadoCard, { StatusLeitura } from "./components/ResultadoCard";
import ListaProdutos from "./components/ListaProdutos";
import { PRODUTOS } from "./dados/produtos";

export default function App() {
  // TEMPORÁRIO: só para testar o layout (some nas próximas tarefas)
  const [status, setStatus] = useState<StatusLeitura>("aguardando");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />

        <Text style={styles.cabecalho}>Tem na lista?</Text>

        <View style={styles.areaCamera}>
          <View style={styles.moldura} />
        </View>

        <ResultadoCard
          status={status}
          produto={PRODUTOS[0]}
          codigoLido="7899876000114"
        />

        {/* TEMPORÁRIO: botões de teste */}
        <View style={styles.botoesTeste}>
          <Button title="Aguardando" onPress={() => setStatus("aguardando")} />
          <Button title="Encontrado" onPress={() => setStatus("encontrado")} />
          <Button
            title="Não achou"
            onPress={() => setStatus("nao_encontrado")}
          />
        </View>

        <ListaProdutos
          produtos={PRODUTOS}
          codigoDestacado={
            status === "encontrado" ? PRODUTOS[0].codigo : undefined
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  cabecalho: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12,
  },
  areaCamera: {
    height: 220,
    backgroundColor: "#222",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  moldura: {
    width: "80%",
    height: 100,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 8,
  },
  botoesTeste: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
});