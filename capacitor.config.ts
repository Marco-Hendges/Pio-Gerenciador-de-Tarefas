import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pio.gereciador.de.tarefas',
  appName: 'PIU Gereciador de Tarefas',
  webDir: 'www/browser',
  android: {
    allowMixedContent: true
  }
};

export default config;
