/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  // Define other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
