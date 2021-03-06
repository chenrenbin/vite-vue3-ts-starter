import { LoginParams, AccountParams, AccountListGetResultModel } from './model'
import { defHttp } from '@/utils/http'

enum Api {
  Login = '/api/login',
  AccountList = '/system/getAccountList',
  setRoleStatus = '/system/setRoleStatus'
}
export const Login = (params: LoginParams) =>
  defHttp.post({ url: Api.Login, params })

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params })

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } })
