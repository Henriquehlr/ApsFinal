import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListaPessoa({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Text style={styles.texto2}>Nome:
           <Text style={styles.sp}>{data.nome}</Text>
        </Text>
        <Text style={styles.texto2}>Idade:
          <Text style={styles.sp}>{data.idade}
          </Text>
        </Text>
        <Text style={styles.texto2}>sexo:
        <Text style={styles.sp}>{data.sexo}
          </Text>
        </Text>
        <Text style={styles.texto2}>rua:
         <Text style={styles.sp}>{data.rua}
          </Text>
        </Text>
        <Text style={styles.texto2}>bairro:
        <Text style={styles.sp}>{data.bairro}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: "#000",
    width: "100vw",

  },
  cart: {
    flexDirection: 'column',
    width: 300,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "red",
    padding: 10
  },

  cabecalho: {
    flexDirection: 'row',
    marginBottom: 20
  },
  textCabecalho: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  },
  texto2: {
    color: "red"
  },
  sp: {
    color: "green"
  }

});