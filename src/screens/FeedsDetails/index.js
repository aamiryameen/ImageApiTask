import { View, Text, StyleSheet, Image } from 'react-native'
import React, { } from 'react'
import { heightPercentage, widthPercentage } from '../../utils/dimensions';
import colors from '../../themes/colors';
import { scale } from "react-native-size-matters";
import Card from '../../components/Card';
import { Loader } from '../../components/Loader';

const FeedsDetails = ({ route }) => {

    const feedsDetails = route?.params?.feeds


    /**
 * render  feeds data
 * @returns
 */
    const renderNewsFeedData = () => {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.heading}>{feedsDetails?.item?.title}</Text>
                <Card style={styles.news_card}>
                    <View style={styles.news_card_img_wrapper}>
                        {
                            feedsDetails?.item?.images?.downsized_large?.url ?
                                <Image
                                    style={styles.news_card_img}
                                    resizeMode="stretch"
                                    source={
                                        { uri: feedsDetails?.item?.images?.downsized_large?.url }
                                    }
                                /> : <Loader />
                        }
                    </View>
                </Card>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            {renderNewsFeedData()}
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
        height: heightPercentage(80),
        borderRadius: scale(8),
    },
    news_card_img: {
        flex: 1,
        borderRadius: scale(8),
    },
    heading: {
        fontWeight: 'bold',
        marginHorizontal: widthPercentage(4)
    },
    wrapper: {
        marginTop: heightPercentage(2)
    }
})


export default FeedsDetails