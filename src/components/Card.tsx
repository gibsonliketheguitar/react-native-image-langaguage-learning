import React from "react"
import { StyleSheet, Text } from "react-native"
import Animated, { Layout, SlideInLeft, SlideOutRight } from "react-native-reanimated"

interface ICards {
    currIndex: number,
}

export default function Card({ currIndex }: ICards) {
    const Cards = [<Card1 />, <Card2 />, <Card3 />]
    return (
        <>
            {Cards[currIndex]}
        </>
    )
}

const Card1 = () => {
    return (
        <Animated.View
            entering={SlideInLeft.delay(100)}
            exiting={SlideOutRight}
            layout={Layout.springify()}
        >
            <Text style={styles.h2} > Store your{"\n"}NFT collection1</Text >
            <Text style={styles.h3}>This is a subtext that describes this{"\n"}feature in a better way</Text>
        </Animated.View>
    )
}

const Card2 = () => {
    return (
        <Animated.View
            entering={SlideInLeft.delay(100)}
            exiting={SlideOutRight}
            layout={Layout.springify()}
        >
            <Text style={styles.h2} > Store your{"\n"}NFT collection2</Text >
            <Text style={styles.h3}>This is a subtext that describes this{"\n"}feature in a better way</Text>
        </Animated.View>
    )
}

const Card3 = () => {
    return (
        <Animated.View
            entering={SlideInLeft.delay(100)}
            exiting={SlideOutRight}
            layout={Layout.springify()}
        >
            <Text style={styles.h2} > Store your{"\n"}NFT collection3</Text >
            <Text style={styles.h3}>This is a subtext that describes this{"\n"}feature in a better way</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    h2: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 34,
        paddingBottom: 12,
    },
    h3: {
        color: '#7C829F',
        textAlign: 'center',
        marginBottom: 11,
    }
});