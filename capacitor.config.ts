import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'capacitor-splashscreen',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      showSpinner: true,
      launchShowDuration: 5000,
    },
  },
};

export default config;
