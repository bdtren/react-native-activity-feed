//
import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import { buildStylesheet } from '../styles';

import _ from 'lodash';
import { sanitizeUrlForLinking } from '../utils';

/**
 * Card element
 * @example ./examples/Card.md
 */
const Card = (props) => {
  const { title, description, image, url } = props;
  const styles = buildStylesheet('card', props.styles);

  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(sanitizeUrlForLinking(url));
      }}
      style={styles.container}
    >
      <FastImage
        style={styles.image}
        source={image ? { uri: image } : require('../images/placeholder.png')}
        resizeMethod='resize'
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  styles: PropTypes.object,
  pressed: PropTypes.func,
};

export default Card;
