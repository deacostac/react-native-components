import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MenuItem } from "../interfaces/interfaces"
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/core"
import { ThemeContext } from "../context/themeContext/ThemeContext"
import { useContext } from "react"

interface Props {
    item: MenuItem
}

export const FlatListItems = ( {item} :Props) => {

  const navigation = useNavigation()
  const { theme: { colors } } = useContext( ThemeContext );

  return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate( item.component as never) }
        >
            <View style={styles.container}>
                <Icon
                    name={item.icon}
                    color={ colors.primary }
                    size={ 15 }
                />
                <Text style={{ 
                    ...styles.itemText, 
                    color: colors.text
                    }}
                >
                    {item.name} - {item.icon}
                </Text>  
                <View style={{flex:1}}/>
                <Icon
                    name='chevron-forward-outline'
                    color={ colors.primary }
                    size={ 23 }
                />   
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        flexDirection: "row",
    },
    itemText: {
       marginLeft: 10,
       fontSize: 19
    }
})