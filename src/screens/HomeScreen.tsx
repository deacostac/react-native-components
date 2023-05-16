import React from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { styles } from '../theme/appTheme'
import { FlatListItems } from '../components/FlatListItems'
import { menuItems } from '../data/menuItems'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'

export const HomeScreen = ( ) => {

  return (
    <View style={{flex:1, ...styles.globalMargin}}>
        
        <FlatList 
            data={menuItems}
            renderItem={ ({ item }) => <FlatListItems item={item} />}
            keyExtractor={(item)=> item.name}
            ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" /> }
            ItemSeparatorComponent={ () => <ItemSeparator /> }
        />
    </View>
  )
}

