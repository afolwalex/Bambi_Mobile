import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

const entries = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
];

const Recommended = () => {
    return (
        <View>
            {/* <Carousel
                ref={c => (this._slider1Ref = c)}
                data={entries}
                renderItem={this._renderItemWithParallax}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                // inactiveSlideShift={20}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={index =>
                    this.setState({slider1ActiveSlide: index})
                }
            /> */}
        </View>
    );
};

export default Recommended;

const styles = StyleSheet.create({});
