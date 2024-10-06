//
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { humanizeTimestamp, smartRender } from '../utils';
import Avatar from './Avatar';
import { buildStylesheet } from '../styles';

import { withTranslationContext } from '../Context';
import SeeMoreText from '../../../../src/components/SeeMoreText';

/**
 * Renders a comment
 * @example ./examples/CommentItem.md
 */
class CommentItem extends React.Component {
  static defaultProps = {
    collapsedCount: 65,
  };

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: !props?.comment?.data?.text?.length ||
        props?.comment?.data?.text?.length <= props?.collapsedCount,
    }
  }

  componentDidMount() {
    const text = this.props.comment?.data?.text;
    this.setState({
      isExpanded: !text?.length || text?.length <= this.props.collapsedCount,
    })
  }

  componentDidCatch(error, info) {
    if (this.props.componentDidCatch) {
      this.props.componentDidCatch(error, info, this.props);
    } else {
      console.error(error);
      console.error('The following comment caused the previous error');
      console.error(this.props.comment);
    }
  }

  render() {
    const { comment, tDateTimeParser, onPressAvatar } = this.props;
    const styles = buildStylesheet('commentItem', this.props.styles || {});
    return (
      <View style={styles.container}>
        <TouchableOpacity
          disabled={!onPressAvatar}
          onPress={() => {
            onPressAvatar?.();
          }}
        >
          <Avatar source={comment.user.data.profileImage} size={25} noShadow />
        </TouchableOpacity>
        <View style={styles.commentText}>
          <Text>
            <Text style={styles.commentAuthor}>{comment.user.data.name} </Text>
            <Text style={styles.commentContent}>
              {this.state.isExpanded
                ? comment.data.text
                : comment.data.text?.substring(0, this.props.collapsedCount) + '...'}{' '}
            </Text>
            {this.state.isExpanded ? undefined : (
              <TouchableOpacity
                onPress={() => {
                  this.setState({isExpanded: true});
                }}
              >
                <Text style={styles.txtBtnExpand}>
                  See more
                </Text>
              </TouchableOpacity>
            )}{' '}
            <Text style={styles.commentTime}>
              {humanizeTimestamp(comment.created_at, tDateTimeParser)}
            </Text>
          </Text>
        </View>
        {smartRender(this.props.Footer)}
      </View>
    );
  }
}

CommentItem.propTypes = {
  /** The comment that should be displayed */
  comment: PropTypes.shape({
    user: PropTypes.object,
    data: PropTypes.shape({
      name: PropTypes.string,
    }),
    created_at: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  }),
  /**
   * UI component which should be displayed in the Footer of the component, such as a like button */
  Footer: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  /** Styling of the component */
  styles: PropTypes.object,
  /**
   * Handle errors in the render method in a custom way, by default this component logs the error in the console
   * @param {*} error Error object
   * @param {*} info object
   * @param {*} props object
   */
  componentDidCatch: PropTypes.func,
  onPressAvatar: PropTypes.func,
  collapsedCount: PropTypes.number,
};
export default withTranslationContext(CommentItem);
