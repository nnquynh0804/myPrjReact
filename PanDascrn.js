import { Image } from "react-native";
import styles from "./src/styles";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as React from 'react';
import{ useState } from 'react';
import { Text } from "react-native-paper";


const Panda=()=>{
    const [selectedSrc,setSelectedSrc]=useState(require('./img/PandaMew.jpg'));
    const srcChange =()=>{setSelectedSrc(require('./img/PanDaCung.jpg'))}
    return(
        <SafeAreaView>
            <Image  id="imgPD"
                    selectedSrc='./img/PandaMew.jpg'
                    source={selectedSrc}
                    style={styles.Panda}
            ></Image>
            <Button 
                style={styles.button}
                onPress={srcChange}
            >
                <Text>Go to PanDa cúng</Text>
            </Button>
        </SafeAreaView>
    );
}

export default Panda;