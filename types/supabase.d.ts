

declare module "@supabase/supabase-js" {
  export function createClient(url: string, key: string): any
  export * from "@supabase/supabase-js/dist/main/index"
}
