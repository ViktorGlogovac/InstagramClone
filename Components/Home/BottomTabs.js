import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/icons8-home-active.png'),
        inactive: require('../../assets/icons8-home-inactive.png')
    },
    {
        name: 'Search',
        active: require('../../assets/icons8-search-active.png'),
        inactive: require('../../assets/icons8-search-inactive.png')
    },
    {
        name: 'Reels',
        active: require('../../assets/icons8-reels-active.png'),
        inactive: require('../../assets/icons8-reels-inactive.png')
    },
    {
        name: 'Shop',
        active: require('../../assets/icons8-shop-active.png'),
        inactive: require('../../assets/icons8-shop-inactive.png')
    },
    {
        name: 'Profile',
        active: require('../../assets/icons8-profile-active.png'),
        inactive: require('../../assets/icons8-profile-inactive.png')
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={activeTab === icon.name ? icon.active : icon.inactive} style={styles.icon}/>
        </TouchableOpacity>
    )
  return (
    <View styles={styles.wrapper}>
        <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
        {icons.map((icon, index) => (
            <Icon key = {index} icon={icon} />
        ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absoluet',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        height: 50,
    },
    icon: {
        width: 30,
        height: 30,
    },
});


export default BottomTabs