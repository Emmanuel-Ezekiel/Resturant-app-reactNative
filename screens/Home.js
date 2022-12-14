import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, ServerStackIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';


const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Title Home",
            headerShown: false,
        });
    }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
                source={{
                    url: 'https://orders2.me/wp-content/uploads/2019/09/Choose-the-right-name-for-your-restaurant-no-text.png'
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className="flex-1">
              <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
              <Text className='font-bold text-xl'>Current Location
                    <ChevronDownIcon size={20} color="#00CCBB" /> 
              </Text>
            </View>

            <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 mx-4 '>
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
              <ServerStackIcon color="gray" size={20}/>
              <TextInput placeholder='Restaraunt'
                keyboardType='default'

              />
          </View>
          <AdjustmentsHorizontalIcon color="#00CCBB"/>
        </View>

        {/* body */}
        <ScrollView className='bg-gray-100'
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Categories/>
        </ScrollView>
     
    </SafeAreaView>
  )
}

export default Home;