import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import firebase from '../../config/firebaseConfig';
import ListaPessoa from './ListaPessoa';


export default function CadastroPessoa() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cadas, setCadas] = useState([])

  useEffect(() => {
    async function dados() {
      setCadas([])
      await firebase.database().ref("cadasPessoa").on('value', (snaphot) => {
        snaphot.forEach((childItem) => {
          let data = {
            key: childItem.key,
            nome: childItem.val().nome,
            idade: childItem.val().idade,
            sexo: childItem.val().sexo,
            rua: childItem.val().rua,
            bairro: childItem.val().bairro,
          };
          setCadas(olArray => [...olArray, data].reverse());
        })
      })
    }

    dados()

  }, [])

  async function saveCadastro() {

    if (nome != " " & idade != "" & sexo != "" & rua != "" & bairro != "") {
      let cadasPessoa = await firebase.database().ref("cadasPessoa");
      let chave = cadasPessoa.push().key;

      cadasPessoa.child(chave).set({
        nome: nome,
        idade: idade,
        sexo: sexo,
        rua: rua,
        bairro: bairro,
      })
      alert("Cadastrado realizado com sucesso")
    } else {
      alert("Por favor Preencha Todos os campos")
    }


  }

  return (
    <View style={styles.container}>
      <View style={styles.cab}>
        <Text style={styles.text}>Cadastro</Text>
      </View>
      <View style={styles.cart}>
        <View style={styles.caert}>
          <Text style={styles.texto1}>Nome:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setNome(texto)}
          />
        </View>
        <View style={styles.caert}>
          <Text style={styles.texto1}>Idade:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setIdade(texto)}
          />
        </View>
        <View style={styles.caert}>
          <Text style={styles.texto1}>sexo:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setSexo(texto)}
          />
        </View>
        <View style={styles.caert}>
          <Text style={styles.texto1}>rua:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setRua(texto)}
          />
        </View>
        <View style={styles.caert}>
          <Text style={styles.texto1}>bairro:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setBairro(texto)}
          />
        </View>
        <View>
          <Button style={styles.btnCadastrar}
            title="Cadastrar"
            onPress={saveCadastro}
          />
        </View>
      </View>
      <View style={{ margin: 20 }}>

        <FlatList
          keyExtractor={item => item.key}
          data={cadas}
          renderItem={({ item }) => (<ListaPessoa data={item} />)}
        />
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
    width: 290,
    height: 320,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "red",
    padding: 10
  },

  cab: {
    flexDirection: 'row',
    marginBottom: 20
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  },
  texto1: {
    color: "red"
  },
  caert: {
    flexDirection: 'row',
    padding: 10
  },
  spam: {
    color: "green"
  },
  input: {
    width: 150,
    color: "green",
    borderColor: "green",
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 5,
  },
  btnCadastrar: {
    width: 100,
    backgroundColor: "green"
  },
  cab: {
    flexDirection: 'row',
    marginBottom: 20
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  },
  texto1: {
    color: "red"
  },

});