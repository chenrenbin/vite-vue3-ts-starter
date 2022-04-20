import { BasicPageParams, BasicFetchResult } from '@/api/baseModel'

export interface LoginParams {
  name?: string
  password?: string
}

export type AccountParams = BasicPageParams & {
  account?: string
  nickname?: string
}

export interface AccountListItemSchema {
  id: string
  account: string
  email: string
  nickname: string
  role: number
  createTime: string
  remark: string
  status: number
}

export interface AccountInfoSchema {
  id: string
  email: string
  name: string
  introduction: string
  phone: string
  address: string
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchResult<AccountListItemSchema>
