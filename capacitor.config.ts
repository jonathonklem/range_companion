import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonathonklem.rangecompanion',
  appName: 'RangeCompanion',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
