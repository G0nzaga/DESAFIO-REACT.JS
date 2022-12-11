import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";


// import Feather from 'react-native-vector-icons/Feather'
// import Material from 'react-native-vector-icons/MaterialIcons'
// import Octicons from 'react-native-vector-icons/Octicons'
import Font from 'react-native-vector-icons/FontAwesome'
// import M from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Home(){

    const navigation = useNavigation();

    function navegaGit(){
        navigation.navigate('Git')
    }

    return(
        <SafeAreaView style={styles.container}>
        <ImageBackground
             source={require('../img/buscacinco.jpg')}
             style={styles.imgBackground}>

    

              <SafeAreaView style={styles.caixatxt}>
                <Text style={styles.textobio}>Hello Word! Welcome to Git Search,
                   to search for any profile,
                   just click the button below, so grab a coffe, make yourself comfortable and
                    good search!</Text>
              </SafeAreaView>

            <SafeAreaView style={styles.btn}>
              <TouchableOpacity style={styles.testando}
              onPress={navegaGit}
              >
              <Text style={styles.texto}>GitSearch</Text>
              <Font
              name='github-alt'
              color='white'
              size={30}
              style={styles.icone}></Font>
              </TouchableOpacity>
            </SafeAreaView>


        </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  
    container:{
      flex: 1,
      alignItems: 'center'
    },

    imgBackground:{
      flex: 1,
      justifyContent: "center",
      width: 450,
    },

    
    texto:{
        fontFamily: 'NanumGothic-ExtraBold',
        fontSize: 20,
        
        color: 'white'
    },

    textobio:{
        fontFamily: 'NanumGothic-ExtraBold',
        fontSize: 20,
        textAlign: 'justify',
        color: 'black',
        width: 300
    },

    testando:{
      fontSize: 25,
      color: 'black',
      fontFamily: 'NanumGothic-ExtraBold',
      height: 60,
       backgroundColor: 'black',
      marginBottom: 500,
      width: 105,
      borderRadius: 10,
      
      justifyContent: "center",
      alignItems: 'center',
    },
    caixatxt:{
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'NanumGothic-ExtraBold',
      marginTop: 50
    },
    btn:{
      flex: 1,
      alignItems: 'center',
      marginTop: 25
    }

})