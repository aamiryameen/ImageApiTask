import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFeeds } from '../../api'
import { scale } from "react-native-size-matters";
import { heightPercentage, widthPercentage } from '../../utils/dimensions';
import colors from '../../themes/colors';
import Card from '../../components/Card';
import { Loader } from '../../components/Loader';

const Feeds = ({ navigation }) => {
    const [feedsData, setFeedsData] = useState();

    const fetchFeeds = async () => {
        const data = await getFeeds()
        setFeedsData(data)

    }

    useEffect(() => {
        fetchFeeds()
    }, [])


    /**
 * render  feeds data
 * @returns
 */
    const renderNewsFeedData = (feeds) => {

        return (
            <TouchableOpacity
                style={styles.wrapper}

                onPress={() =>
                    navigation.navigate("FeedsDetails", { feeds })
                }
            >
                <Text style={styles.heading}>{feeds?.item?.title}</Text>
                <Card style={styles.news_card}>
                    <View style={styles.news_card_img_wrapper}>

                        <Image
                            style={styles.news_card_img}
                            resizeMode="stretch"
                            source={
                                { uri: feeds?.item?.images?.downsized_large?.url }
                            }
                        />
                    </View>
                </Card>
            </TouchableOpacity>

        );

    };

    if (feedsData?.data?.length <= 0) {
        return <Loader />
    }

    return (
        <View style={styles.container}>
            <View style={{}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={feedsData?.data}
                    renderItem={renderNewsFeedData}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    news_card: {
        marginTop: 8,
        marginHorizontal: widthPercentage(2)
    },
    heading: {
        fontWeight: 'bold',
        marginHorizontal: widthPercentage(4)
    },
    overlay: {
        backgroundColor: colors.overlay,
        marginVertical: heightPercentage(2),
        position: "absolute",
        width: widthPercentage(100),
        height: heightPercentage(100),
        top: 0,
        left: 0,
        zIndex: 1,
        borderRadius: scale(8),
    },
    news_card_img_wrapper: {
        height: heightPercentage(23),
        borderRadius: scale(8),

    },
    news_card_img: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: scale(8),
    },
    wrapper: {
        marginTop: heightPercentage(2)
    }
})


export default Feeds