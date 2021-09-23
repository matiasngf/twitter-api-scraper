/* eslint-disable quotes */
/* eslint-disable camelcase */
export interface UserInterface {
  data: Data
}

interface Data {
  user: UserClass
}

interface UserClass {
  result: Result
}

interface Result {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel
  legacy: Legacy
  smart_blocked_by: boolean
  smart_blocking: boolean
  legacy_extended_profile: LegacyExtendedProfile
  is_profile_translatable: boolean
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
  url: string
  verified: boolean
  withheld_in_countries: any[]
}

interface Entities {
  description: Description
  url: Description
}

interface Description {
  urls: URL[]
}

interface URL {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
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

interface LegacyExtendedProfile {
  birthdate: Birthdate
}

interface Birthdate {
  day: number
  month: number
  year: number
  visibility: string
  year_visibility: string
}
