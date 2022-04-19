import type { BeforeMiniState } from '../types/store'

import { defineStore } from 'pinia'
import { store } from '@/store'

import { ThemeEnum } from '@/types/enums/app'
import { APP_DARK_MODE_KEY_ } from '@/types/enums/cache'

interface AppState {
  darkMode?: ThemeEnum
  // Page loading status
  pageLoading: boolean
  // When the window shrinks, remember some states, and restore these states when the window is restored
  beforeMiniInfo: BeforeMiniState
}
let timeId: TimeoutHandle
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
    beforeMiniInfo: {}
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading
    },

    getBeforeMiniInfo(): BeforeMiniState {
      return this.beforeMiniInfo
    }
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading
    },

    setDarkMode(mode: ThemeEnum): void {
      this.darkMode = mode
      localStorage.setItem(APP_DARK_MODE_KEY_, mode)
    },

    setBeforeMiniInfo(state: BeforeMiniState): void {
      this.beforeMiniInfo = state
    },

    async setPageLoadingAction(loading: boolean): Promise<void> {
      if (loading) {
        clearTimeout(timeId)
        // Prevent flicker
        timeId = setTimeout(() => {
          this.setPageLoading(loading)
        }, 50)
      } else {
        this.setPageLoading(loading)
        clearTimeout(timeId)
      }
    }
  }
})

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
