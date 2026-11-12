import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import ResultadoCard from "./components/ResultadoCard";
import ListaProdutos from "./components/ListaProdutos";
import TelaPermissao from "./components/TelaPermissao";
import { PRODUTOS } from "./dados/produtos";

export default function App() {
  const [permissao, pedirPermissao] = useCameraPermissions();

  let conteudo;

  if (!permissao) {
    // ainda consultando o sistema
    conteudo = (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (!permissao.granted) {
    // sem permissão
    conteudo = (
      <TelaPermissao
        podePedir={permissao.canAskAgain}
        onPermitir={pedirPermissao}
        onAbrirConfiguracoes={() => Linking.openSettings()}
      />
    );
  } else {
    // com permissão
    conteudo = (
      <>
        <View style={styles.areaCamera}>
          <CameraView style={StyleSheet.absoluteFill} facing="back" />
          <View style={styles.moldura} />
        </View>

        <ResultadoCard status="aguardando" />

        <ListaProdutos produtos={PRODUTOS} />
      </>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <Text style={styles.cabecalho}>Tem na lista?</Text>
        {conteudo}
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
  centro: { flex: 1, justifyContent: "center", alignItems: "center" },
  areaCamera: {
    height: 220,
    backgroundColor: "#222",
    borderRadius: 12,
    overflow: "hidden",
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
});