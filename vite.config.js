import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Autoprefixer from 'autoprefixer';
import PostcssUnit from 'postcss-unitlist';
import CssNano from 'cssnano';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Unocss from 'unocss/vite';
import { presetIcons } from 'unocss';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        Autoprefixer,
        CssNano({ preset: ['advanced'] }),
        PostcssUnit({
          exclude: /^((?!(@Mobile)).)*$/i,
          unitList: [
            {
              math: '100 / 375 * $word',
              word: 'px',
              unit: 'vw',
            },
          ],
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/element.scss" as *;',
      },
    },
  },
  define: {
    'import.meta.env.SSRBUILD': process.argv.includes('--ssrManifest'),
    'import.meta.env.DEVICE': JSON.stringify((process.argv[3].match(/\/@([^/]+)$/) ?? [])[1] ?? ''),
  },
  plugins: [
    Vue(),
    VueJsx(),
    AutoImport({
      dts: './auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        IconsResolver(),
      ],
    }),
    Components({
      extensions: ['vue', 'jsx'],
      dirs: ['./'],
      dts: './auto-components.d.ts',
      include: [/\.vue$/, /\.jsx$/],
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        IconsResolver(),
      ],
    }),
    Icons({ autoInstall: true }),
    Unocss({
      presets: [presetIcons()],
      variants: [
        {
          match: value => {
            if (value.startsWith('i-')) {
              return {
                matcher: value,
                selector: value => value.startsWith('.') ? `${value.slice(1)},${value}` : value,
              };
            }
          },
        },
      ],
    }),
    ElementPlus({
      useSource: true,
      defaultLocale: 'zh-cn',
    }),
  ],
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
