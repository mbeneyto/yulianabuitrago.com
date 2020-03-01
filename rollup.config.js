import { createCompatibilityConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';

const configs = createCompatibilityConfig({ input: './index.html' });

export default configs.map(config => ({
  ...config,
  plugins: [
    ...config.plugins,
    copy({
      targets: [{ src: 'assets/**', dest: 'dist/assets' }],
    }),
  ],
}));
