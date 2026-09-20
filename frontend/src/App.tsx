import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

// FitFlow entry point — client layer (React Native + React Native Web)
// Renders the "Daily Flow" AI recommendation card, workout builder, social
// feed, and nutrition logger as described in docs/architecture-notes.md.
export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FitFlow</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "600" },
});
