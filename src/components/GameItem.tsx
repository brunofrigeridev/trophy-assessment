import React, { memo, useState } from "react";
import { TouchableOpacity, Text, Image, StyleSheet, NativeModules } from 'react-native'
import { Game } from "../services/types";
const { ToastModule } = NativeModules;

interface GameItemProps {
  game: Game
}

const fallbackImage = 'https://via.placeholder.com/200x300'

const GameItem = memo(({ game }: GameItemProps) => {
  const [image, setImage] = useState<string>(game?.imageUrl || fallbackImage)

  return (
    <TouchableOpacity onPress={() => ToastModule.show(game.title)} style={[styles.container]}>
      <Image resizeMode="contain" source={{ uri: image }} style={styles.image} onError={() => setImage(fallbackImage)} />
      <Text numberOfLines={1} ellipsizeMode="middle" style={styles.text}>{game.title}</Text>
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
    height: 175,
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '600',
    fontSize: 14
  }
})

export default GameItem