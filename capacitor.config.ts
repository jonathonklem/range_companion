import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonathonklem.range_companion',
  appName: 'range-companion',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
