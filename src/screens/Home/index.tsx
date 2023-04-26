import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native'
import { RootState, useAppDispatch } from '../../store';
import { fetchJsonData } from '../../store/asyncThunk';
import { jsonBaseUrl } from '../../services';
import GameItem from '../../components/GameItem';
import { Game } from '../../services/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
 
export interface HomeProps {}
 
const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useAppDispatch();
  const { data, error, isFetching } = useSelector<RootState, RootState['games']>(state => state.games)

  useEffect(() => {
    dispatch(fetchJsonData(jsonBaseUrl))
  }, [dispatch])

  if (isFetching) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="blue" />
      </SafeAreaView>
    )
  }

  if (!data.length && error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{error}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList numColumns={3} contentContainerStyle={styles.listContainer} data={data as Game[]} renderItem={({ item, index }) => <GameItem game={item} />} keyExtractor={item => item?.id?.toString()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    gap: 10,
  }
})
 
export default Home
 