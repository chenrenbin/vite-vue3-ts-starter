import { AccountParams, AccountListGetResultModel } from './model'
import { defHttp } from '@/utils/http'

enum Api {
  AccountList = '/system/getAccountList',
  setRoleStatus = '/system/setRoleStatus'
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params })

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } })
