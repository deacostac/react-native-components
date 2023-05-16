import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatListItems } from '../components/FlatListItems'
import { menuItems } from '../data/menuItems'

export const HomeScreen = ( ) => {

    const { top } = useSafeAreaInsets()

    const renderListHeader = () => {
        return (
            <View style={{marginTop: top + 20, marginBottom: 10}}>
                <Text style={styles.title}>Opciones de Menú</Text>      
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical: 8
            }}
            />
        )
    }

  return (
    <View style={{flex:1, ...styles.globalMargin}}>
        
        <FlatList 
            data={menuItems}
            renderItem={ ({ item }) => <FlatListItems item={item} />}
            keyExtractor={(item)=> item.name}
            ListHeaderComponent={() => renderListHeader()}
            ItemSeparatorComponent={() => itemSeparator()}
        />
    </View>
  )
}

