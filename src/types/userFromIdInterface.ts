/* eslint-disable quotes */
/* eslint-disable camelcase */
export interface UserFromId {
  data: Data
}

interface Data {
  user: User
}

interface User {
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel
  legacy: Legacy
}

interface AffiliatesHighlightedLabel {}

interface Legacy {
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities
  fast_followers_count: number
  favourites_count: number
  followers_count: number
  friends_count: number
  has_custom_timelines: boolean
  is_translator: boolean
  listed_count: number
  location: string
  media_count: number
  name: string
  normal_followers_count: number
  pinned_tweet_ids_str: string[]
  profile_banner_extensions: ProfileExtensions
  profile_banner_url: string
  profile_image_extensions: ProfileExtensions
  profile_image_url_https: string
  profile_interstitial_type: string
  protected: boolean
  screen_name: string
  statuses_count: number
  translator_type: string
  verified: boolean
  withheld_in_countries: any[]
}

interface Entities {
  description: Description
}

interface Description {
  urls: any[]
}

interface ProfileExtensions {
  mediaColor: MediaColor
}

interface MediaColor {
  r: R
}

interface R {
  ok: Ok
}

interface Ok {
  palette: Palette[]
}

interface Palette {
  percentage: number
  rgb: RGB
}

interface RGB {
  blue: number
  green: number
  red: number
}
