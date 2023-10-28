import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../context/store';
import ResultItem from '../../components/search/ResultItem';
import MemberDetails from '../../components/pitchIn/MemberDetails';
import { Button, Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_PAGES } from '../../constants/navigation';

export default function JoinToPitchInPage({ route }): JSX.Element {
  const type = route?.params?.type;
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const navigation = useNavigation();

  const membersList = [
    {
      name: 'Fátima Débora',
      pitchInQuantity: 15,
      rating: 5,
      pitchInList: [
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
      ],
    },
    {
      name: 'Fátima Débora',
      pitchInQuantity: 2,
      rating: 5,
      pitchInList: [
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
      ],
    },
    {
      name: 'Fátima Débora',
      pitchInQuantity: 13,
      rating: 5,
      pitchInList: [
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
        {
          total: 4000,
          date: '21/09/2023',
        },
      ],
    },
  ];

  const renderItem = ({ item, index }) => {
    return <MemberDetails {...item} />;
  };

  const keyExtractor = useCallback(
    (item: any, index: number) => `${item.id}_${index}`,
    []
  );

  const goBack = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    navigation.navigate(NAVIGATION_PAGES.SEND_SUCCESFULLY_REQUEST_PAGE);
  };

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <View style={[styles.header]}>
        <Button
          type="clear"
          icon={<Icon type="material-community" name="arrow-left" color={colors.MAIN} />}
          onPress={goBack}
        />
        {type !== 'DETAILS' && <Text style={styles.title}>Unirte a la junta</Text>}
        {type == 'DETAILS' && <Text style={styles.title}>Detalles de la junta</Text>}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={membersList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <ResultItem
            total={3000}
            currency={'PEN'}
            duration="3 meses"
            membersTotal={10}
            missingMembers={3}
            period="mes"
            quota={1000}
            rating={4.8}
            page="details"
          />
        }
      />
      {type !== 'DETAILS' && (
        <View style={styles.footer}>
          <Button
            title={'Unirte a la junta'}
            buttonStyle={[styles.button]}
            titleStyle={styles.buttonTitle}
            onPress={handlePress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontFamily: 'Figtree-Bold',
    fontSize: 20,
    paddingLeft: 10,
  },
  footer: {
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 13,
    backgroundColor: colors.MAIN,
  },
  buttonTitle: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
  },
});
