// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://imake.space',
	integrations: [
		starlight({
			title: '云朵创客空间',
			locales: {
            root: {
                label: '简体中文',
                lang: 'zh-CN',
        },
      },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iMakeSpace' }],
			sidebar: [
				// {
				// 	label: '指南',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: '课程介绍',
					autogenerate: { directory: 'introduction' },
				},
			],
		}),
	],
});
