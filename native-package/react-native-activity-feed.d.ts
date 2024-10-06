declare module '@bdtren/react-native-activity-feed' {
  import { Component } from 'react';
  import { StreamClient, StreamUser } from 'getstream/src';
  // Context
  export class StreamApp extends Component<any> {}
  export class Feed extends Component<any> {}
  export const StreamContext: React.Context<{ client: StreamClient; user: StreamUser }>;
  export const FeedContext: React.Context<unknown>;
  export const TranslationContext: React.Context<unknown>;

  export function withTranslationContext<C extends React.Component>(component: C): C;

  // Components
  export class FlatFeed extends Component<any> {}
  export class NotificationFeed extends Component<any> {}
  export class SinglePost extends Component<any> {}
  export class Avatar extends Component<any> {}
  export class FollowButton extends Component<any> {}
  export class UrlPreview extends Component<any> {}
  export class StatusUpdateForm extends Component<any> {}
  export class UploadImage extends Component<any> {}
  export class UserBar extends Component<any> {}
  export class UserCard extends Component<any> {}
  export class ReactionIcon extends Component<any> {}
  export class ReactionToggleIcon extends Component<any> {}
  export class ReactionIconBar extends Component<any> {}
  export class CommentsContainer extends Component<any> {}
  export class Card extends Component<any> {}
  export class ReactionList extends Component<any> {}
  export class SectionHeader extends Component<any> {}
  export class CommentBox extends Component<any> {}
  export class CommentItem extends Component<any> {}
  export class CommentList extends Component<any> {}
  export class LikeList extends Component<any> {}
  export class BackButton extends Component<any> {}
  export class Activity extends Component<any> {}
  export class LikeButton extends Component<any> {}
  export class NewActivitiesNotification extends Component<any> {}
  export class IconBadge extends Component<any> {}

  // Style
  export function updateStyle(...args: unknown[]): unknown;
  export function getStyle(...args: unknown[]): unknown;
  export function buildStylesheet(...args: unknown[]): unknown;

  // Utils
  export function humanizeTimestamp(...args: unknown[]): unknown;
  export function registerNativeHandlers(...args: unknown[]): unknown;
  export function setAndroidTranslucentStatusBar(...args: unknown[]): unknown;
}
