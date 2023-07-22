import { Alert, FlatList, Text, TextInput, View, TouchableOpacity } from "react-native";

import { Participant } from "../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const participants = ['Diego Ferreira', 'Camila Silva', 'Diana Souza', 'Wellington Silva', 'Luana Reis', 'Anile Justino', 'Priscila Lins', 'Manoel Marinho', 'Marcio Gomes'];

  function handleParticipantAdd() {
    if (participants.includes("Diego Ferreira")) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}