import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      <Text>categories</Text>
    </ScrollView>
  )
}

export default Categories;