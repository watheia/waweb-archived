import { HtmlHTMLAttributes, SVGProps } from "react"

export type DivProps = HtmlHTMLAttributes<HTMLDivElement>

export type GfxProps = SVGProps<SVGSVGElement>

export const color_scheme = {
  light: "light",
  dark: "dark"
}

export type ColorScheme = typeof color_scheme[keyof typeof color_scheme]

export const user_status = {
  ONLINE: "ONLINE",
  OFFLINE: "OFFLINE"
}

export type UserStatus = typeof user_status[keyof typeof user_status]

export interface Stat {
  label: string
  value: string | number
}

export interface Profile {
  id: string
  avatar_url: string
  username: string
  website: string
  updated_at: string
}

export interface Feature {
  id: string | number
  name: string
  description: string
  icon?: any
}

export interface Post {
  id: number | string
  title: string
  href: string
  date: string
  datetime: string
  category: { name: string; href: string; color?: number | string }
  imageUrl?: string
  description: string
  author: {
    name: string
    imageUrl?: string
    href?: string
  }
  readingTime: string
}

export interface Feature {
  id: string | number
  name: string
  description: string
  icon?: any
}

/**
 * Model Channel
 */
// export interface Channel {
//   id: bigint
//   inserted_at: Date
//   slug: string
//   created_by: string
// }

/**
 * Model Message
 */
// export interface Message {
//   id: bigint
//   inserted_at: Date
//   message: string | null
//   user_id: string
//   channel_id: bigint
// }

/**
 * Model RolePermission
 */
// export interface RolePermission {
//   id: bigint
//   role: AppRole
//   permission: AppPermission
// }

/**
 * Model UserRole
 */
// export interface UserRole {
//   id: bigint
//   user_id: string
//   role: AppRole
// }

/**
 * Model Principal
 */
// export interface Principal {
//   id: string
//   username: string | null
//   status: UserStatus | null
// }

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

// export const app_role = {
//   admin: "admin",
//   moderator: "moderator",
//   guest: "guest"
// }

// export type AppRole = typeof app_role[keyof typeof app_role]

// export const app_permission = {
//   channels_delete: "channels_delete",
//   messages_delete: "messages_delete"
// }

// export type AppPermission = typeof app_permission[keyof typeof app_permission]

// export interface Product {
//   id: string | number
//   active: boolean
//   name: string
//   description: string
//   images: string[]
//   metadata: Metadata
// }

// export interface PricingPeriod {
//   interval: 12 | 1
//   interval_count: number
//   trial_period_days: number
// }

// export interface Pricing {
//   id: string | number
//   product: Product
//   active: boolean
//   currency: "USD" | "PESO" | "BITCOIN"
//   nickname: string
//   type: string
//   unit_amount: number
//   recurring: PricingPeriod
//   metadata: Metadata
// }

// export interface Person {
//   uuid: string
//   name: string
//   email?: string
//   handle?: string
//   imageUrl: string
//   href: string
// }

// export interface Payload {
//   url: string
//   token: string
//   data: Metadata
// }

// export type View = {
//   meta?: Metadata
//   colorScheme?: ColorScheme
// }

// export interface Greeting {
//   message: string
// }

// export interface Announcement {
//   id: number | string
//   title: string
//   href: string
//   preview: string
// }

// export interface Sample {
//   label: string
//   value: number
// }

// export interface Action {
//   icon: any
//   name: string
//   href?: string
//   iconForeground?: string
//   iconBackground?: string
// }

// export type ActivityType = "comment" | "mention" | "post" | "update" | "assignment" | "tags"

// export interface Activity extends Record<string, any> {
//   id: string | number
//   type: ActivityType
// }
