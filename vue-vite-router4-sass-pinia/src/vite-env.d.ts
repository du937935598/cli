/// <reference types="vite/client" />

interface ImportMetaEnv{
  readonly VITE_TITLE: string
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'particles.vue3';