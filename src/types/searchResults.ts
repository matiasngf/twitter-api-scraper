/* eslint-disable quotes */
/* eslint-disable camelcase */
export interface SearchResults {
  globalObjects: GlobalObjects
  timeline: Timeline
}

export interface GlobalObjects {
  tweets: { [key: string]: TweetValue }
  users: { [key: string]: UserValue }
  moments: Broadcasts
  cards: Broadcasts
  places: Broadcasts
  media: Broadcasts
  broadcasts: Broadcasts
  topics: Broadcasts
  lists: Broadcasts
}

export interface Broadcasts {}

export interface TweetValue {
  created_at: string
  id: number
  id_str: string
  full_text: string
  truncated: boolean
  display_text_range: number[]
  entities: TweetEntities
  extended_entities?: ExtendedEntities
  source: string
  in_reply_to_status_id: number | null
  in_reply_to_status_id_str: null | string
  in_reply_to_user_id: number | null
  in_reply_to_user_id_str: null | string
  in_reply_to_screen_name: null | string
  user_id: number
  user_id_str: string
  geo: null
  coordinates: null
  place: null
  contributors: null
  is_quote_status: boolean
  retweet_count: number
  favorite_count: number
  reply_count: number
  quote_count: number
  conversation_id: number
  conversation_id_str: string
  favorited: boolean
  retweeted: boolean
  possibly_sensitive?: boolean
  possibly_sensitive_editable?: boolean
  lang: Lang
  supplemental_language: null
  self_thread?: SelfThread
  quoted_status_id?: number
  quoted_status_id_str?: string
  quoted_status_permalink?: QuotedStatusPermalink
}

export interface TweetEntities {
  hashtags: Hashtag[]
  symbols: any[]
  user_mentions: any[]
  urls: any[]
  media?: EntitiesMedia[]
}

export interface Hashtag {
  text: string
  indices: number[]
}

export interface EntitiesMedia {
  id: number
  id_str: string
  indices: number[]
  media_url: string
  media_url_https: string
  url: string
  display_url: string
  expanded_url: string
  type: Type
  original_info: OriginalInfo
  sizes: Sizes
  source_status_id?: number
  source_status_id_str?: string
  source_user_id?: number
  source_user_id_str?: string
}

export interface OriginalInfo {
  width: number
  height: number
  focus_rects?: FocusRect[]
}

export interface FocusRect {
  x: number
  y: number
  h: number
  w: number
}

export interface Sizes {
  thumb: Large
  large: Large
  small: Large
  medium: Large
}

export interface Large {
  w: number
  h: number
  resize: Resize
}

export enum Resize {
  Crop = 'crop',
  Fit = 'fit'
}

export enum Type {
  Photo = 'photo',
  Video = 'video'
}

export interface ExtendedEntities {
  media: ExtendedEntitiesMedia[]
}

export interface ExtendedEntitiesMedia {
  id: number
  id_str: string
  indices: number[]
  media_url: string
  media_url_https: string
  url: string
  display_url: string
  expanded_url: string
  type: Type
  original_info: OriginalInfo
  sizes: Sizes
  media_key: string
  ext_alt_text: null
  ext_media_availability: EXTMediaAvailability
  ext_media_color: MediaColor
  ext: MediaEXT
  source_status_id?: number
  source_status_id_str?: string
  source_user_id?: number
  source_user_id_str?: string
  video_info?: VideoInfo
  additional_media_info?: AdditionalMediaInfo
}

export interface AdditionalMediaInfo {
  monetizable: boolean
  source_user?: UserValue
}

export interface UserValue {
  id: number
  id_str: string
  name: string
  screen_name: string
  location: string
  description: string
  url: null | string
  entities: UserEntities
  protected: boolean
  followers_count: number
  fast_followers_count: number
  normal_followers_count: number
  friends_count: number
  listed_count: number
  created_at: string
  favourites_count: number
  utc_offset: null
  time_zone: null
  geo_enabled: boolean
  verified: boolean
  statuses_count: number
  media_count: number
  lang: null
  contributors_enabled: boolean
  is_translator: boolean
  is_translation_enabled: boolean
  profile_background_color: string
  profile_background_image_url: null | string
  profile_background_image_url_https: null | string
  profile_background_tile: boolean
  profile_image_url: string
  profile_image_url_https: string
  profile_banner_url?: string
  profile_image_extensions_media_color: MediaColor
  profile_image_extensions_alt_text: null
  profile_image_extensions_media_availability: null
  profile_image_extensions: ProfileExtensions
  profile_banner_extensions_alt_text?: null
  profile_banner_extensions_media_availability?: null
  profile_banner_extensions_media_color?: MediaColor
  profile_banner_extensions?: ProfileExtensions
  profile_link_color: string
  profile_sidebar_border_color: ProfileSidebarBorderColor
  profile_sidebar_fill_color: ProfileSidebarFillColor
  profile_text_color: string
  profile_use_background_image: boolean
  has_extended_profile: boolean
  default_profile: boolean
  default_profile_image: boolean
  pinned_tweet_ids: number[]
  pinned_tweet_ids_str: string[]
  has_custom_timelines: boolean
  can_dm: null
  following: null
  follow_request_sent: null
  notifications: null
  muting: null
  blocking: null
  blocked_by: null
  want_retweets: null
  advertiser_account_type: AdvertiserAccountType
  advertiser_account_service_levels: string[]
  profile_interstitial_type: string
  business_profile_state: AdvertiserAccountType
  translator_type: TranslatorType
  withheld_in_countries: any[]
  followed_by: null
  ext: UserEXT
  require_some_consent: boolean
}

export enum AdvertiserAccountType {
  None = 'none',
  PromotableUser = 'promotable_user'
}

export interface UserEntities {
  description: Description
  url?: Description
}

export interface Description {
  urls: URL[]
}

export interface URL {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface UserEXT {
  highlightedLabel: HighlightedLabel
}

export interface HighlightedLabel {
  r: HighlightedLabelR
  ttl: number
}

export interface HighlightedLabelR {
  ok: Broadcasts
}

export interface ProfileExtensions {
  mediaStats: ProfileBannerExtensionsMediaStats
}

export interface ProfileBannerExtensionsMediaStats {
  r: MediaStatsRClass
  ttl: number
}

export interface MediaStatsRClass {
  missing: null
}

export interface MediaColor {
  palette: Palette[]
}

export interface Palette {
  rgb: RGB
  percentage: number
}

export interface RGB {
  red: number
  green: number
  blue: number
}

export enum ProfileSidebarBorderColor {
  C0Deed = 'C0DEED',
  Ffffff = 'FFFFFF',
  The000000 = '000000'
}

export enum ProfileSidebarFillColor {
  Ddeef6 = 'DDEEF6',
  F5Deb3 = 'F5DEB3',
  The000000 = '000000'
}

export enum TranslatorType {
  None = 'none',
  Regular = 'regular'
}

export interface MediaEXT {
  mediaStats: EXTMediaStats
}

export interface EXTMediaStats {
  r: RRClass | REnum
  ttl: number
}

export interface RRClass {
  ok: Ok
}

export interface Ok {
  viewCount: string
}

export enum REnum {
  Missing = 'Missing'
}

export interface EXTMediaAvailability {
  status: Status
}

export enum Status {
  Available = 'available'
}

export interface VideoInfo {
  aspect_ratio: number[]
  duration_millis: number
  variants: Variant[]
}

export interface Variant {
  bitrate?: number
  content_type: ContentType
  url: string
}

export enum ContentType {
  ApplicationXMPEGURL = 'application/x-mpegURL',
  VideoMp4 = 'video/mp4'
}

export enum Lang {
  En = 'en'
}

export interface QuotedStatusPermalink {
  url: string
  expanded: string
  display: string
}

export interface SelfThread {
  id: number
  id_str: string
}

export interface Timeline {
  id: string
  instructions: Instruction[]
  responseObjects: ResponseObjects
}

export type Instruction = AddEntryInstruction

export interface AddEntryInstruction {
  addEntries: AddEntries
}

export interface AddEntries {
  entries: Entry[]
}

export interface Entry {
  entryId: string
  sortIndex: string
  content: EntryContent
}

export interface EntryContent {
  timelineModule?: TimelineModule
  item?: ContentItem
  operation?: Operation
}

export interface ContentItem {
  content: PurpleContent
  clientEventInfo: ItemClientEventInfo
  feedbackInfo: FeedbackInfo
}

export interface ItemClientEventInfo {
  component: Component
  element: PurpleElement
  details: Details
}

export enum Component {
  ConversationModule = 'conversation_module',
  Result = 'result',
  UserModule = 'user_module'
}

export interface Details {
  timelinesDetails: TimelinesDetails
}

export interface TimelinesDetails {
  controllerData: string
}

export enum PurpleElement {
  Tweet = 'tweet',
  User = 'user'
}

export interface PurpleContent {
  tweet: ContentTweet
}

export interface ContentTweet {
  id: string
  displayType: DisplayType
  highlights?: Highlights
}

export enum DisplayType {
  Tweet = 'Tweet'
}

export interface Highlights {
  textHighlights: TextHighlight[]
}

export interface TextHighlight {
  startIndex: number
  endIndex: number
}

export interface FeedbackInfo {
  feedbackKeys: FeedbackKey[]
  displayContext: DisplayContext
  clientEventInfo: FeedbackInfoClientEventInfo
}

export interface FeedbackInfoClientEventInfo {
  component: Component
  element: FluffyElement
  action: Action
}

export enum Action {
  Click = 'click'
}

export enum FluffyElement {
  FeedbackGivefeedback = 'feedback_givefeedback',
  FeedbackNotcredible = 'feedback_notcredible',
  FeedbackNotrelevant = 'feedback_notrelevant'
}

export interface DisplayContext {
  reason: Reason
}

export enum Reason {
  ThisTweetSNotHelpful = "This Tweet's not helpful"
}

export enum FeedbackKey {
  Givefeedback = 'givefeedback'
}

export interface Operation {
  cursor: Cursor
}

export interface Cursor {
  value: string
  cursorType: string
}

export interface TimelineModule {
  items: ItemElement[]
  displayType: string
  header?: Header
  footer?: Footer
  clientEventInfo: TimelineModuleClientEventInfo
}

export interface TimelineModuleClientEventInfo {
  component: Component
  element: string
}

export interface Footer {
  text: string
  url: string
  displayType: string
}

export interface Header {
  text: string
  sticky: boolean
  displayType: string
}

export interface ItemElement {
  entryId: string
  item: ItemItem
}

export interface ItemItem {
  content: FluffyContent
  clientEventInfo: ItemClientEventInfo
  feedbackInfo?: FeedbackInfo
}

export interface FluffyContent {
  user?: ContentUser
  tweet?: ContentTweet
}

export interface ContentUser {
  id: string
  displayType: string
}

export interface ResponseObjects {
  feedbackActions: FeedbackActions
}

export interface FeedbackActions {
  givefeedback: Givefeedback
  notrelevant: Givefeedback
  notcredible: Givefeedback
}

export interface Givefeedback {
  feedbackType: string
  prompt: string
  confirmation: string
  childKeys?: string[]
  hasUndoAction: boolean
  confirmationDisplayType: string
  clientEventInfo: FeedbackInfoClientEventInfo
  icon?: string
}
