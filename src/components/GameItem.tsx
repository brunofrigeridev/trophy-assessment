import React, { memo } from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native'
import { Game } from "../services/types";

interface GameItemProps {
  game: Game
}

const GameItem = memo(({ game }: GameItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      {
        game.imageUrl ? <Image resizeMode="contain" source={{ uri: game.imageUrl }} style={styles.image} /> : null 
      }
      <Text>{game.title}</Text>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  image: {
    width: '100%', 
    height: 100,
  },
  noImage: {
    
  }
})

export default GameItem