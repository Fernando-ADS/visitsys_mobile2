import { StyleSheet, ImageBackground} from "react-native";

    const css = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor:'#c7e9f7'
        },
    
        logo:{
            marginBottom:13
        },
    
        inputContainer:{
            width:'90%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 34,
            paddingHorizontal: 14,
        },
    
        input:{
            width:'90%',
            height: 40,
            backgroundColor: '#fff',
            marginBottom: 12,
            borderRadius: 12,
            paddingHorizontal: 12,
            color:'#000',
        },
    
        button:{
            padding: 12,
            width: '70%',
            height: 45,
            backgroundColor:'#36abf7',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center'
        },
    
        buttonmodal:{
            padding: 12,
            width: '85%',
            height: 45,
            backgroundColor:'#36abf7',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center'
        },
    
        buttonlogin:{
            padding: 12,
            width: '90%',
            height: 45,
            backgroundColor:'#36abf7',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center'
        },

        buttonText:{
            fontSize: 17,
            fontWeight: 'bold',
            color:'#fff'
        },
        
        imgfundo:{
            flex:1,
            resizeMode: "cover",
            width:'100%',
            justifyContent: "center",
            alignItems: "center",
        },

          container2: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },

          camera:{
            height:300,
            width:300,
            flexDirection: "column",
            justifyContent: "space-around",
          },

          barcode:{
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            width: 300,
            overflow: 'hidden',
            borderRadius: 30
        
          },
        
        
          mainText:{
            fontWeight: "bold",
            fontSize: 20,
            margin: 20
          },

          modal:{
            padding: 12,
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            //margin:24,
            borderRadius:20,
            //backgroundColor: "lightgrey",
            marginVertical:50,
  
          },

          scanner:{
            width:'100%',
            height:'90%',
            borderRadius:20,
            //backgroundColor:'lightgrey',
            justifyContent:'center',
            display:'flex',
            marginBottom: 20
          },

    
    
    });

export default css;