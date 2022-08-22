import React from "react";
import { StyleSheet, Text, View, Button, Modal, ImageBackground, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import css from "../../css/css";
import Scanner from "../../components/Scanner";


const imgbackground = "../../assets/img/fundo.png";


export default function Home(){
    const [modalVisible, setModalVisible] = React.useState(false);

    const [type, setType] = React.useState("");
    const [data, setData] = React.useState("");


    const onCodeScanned = (type, data) => {
        setType(type);
        setData(data);
        setModalVisible(false);
        //console.log(data)
      };
    


    return(
        

        <View style={css.container}>
            <ImageBackground source={require(imgbackground)} style={css.imgfundo}>
            <Modal
             visible={modalVisible}
             transparent={true}
             animationType="fade"
             onRequestClose={()=> setModalVisible(false)}
            >

            <View style={css.modal}>
                <Scanner onCodeScanned={onCodeScanned}/>      
                <TouchableOpacity style={css.buttonmodal} onPress={()=> setModalVisible(false)}>
                    <Text style={css.buttonText}>Cancelar</Text>
                </TouchableOpacity>          
                
            </View>

            </Modal>
           
           
            <View>  
                <Text style={css.mainText}>Dados: {data}</Text>
            </View>


            <TouchableOpacity style={css.button} onPress={()=> setModalVisible(true)}>
                    <Text style={css.buttonText}>Escanear</Text>
            </TouchableOpacity>
            </ImageBackground>

        </View>
     




        /*
        <View style={css.container}>
    
        <Modal
        visible= {modalVisible}
        transparent= {true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        >
    
        <View style={css.modal}>
        <QRCode onCodeScanned={onCodeScanned}/>
    
        <TouchableOpacity style={css.button}  onPress={() => setModalVisible(false)}>
          <Text style={css.buttonText}> Cancelar </Text>
        </TouchableOpacity>
    
        </View>
        </Modal>
    
        <TouchableOpacity style={css.button} onPress={() => setModalVisible(true)}>
          <Text style={css.buttonText}> Escanear </Text>
        </TouchableOpacity>
    

        </View>
        */
    )
}