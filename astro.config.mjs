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
				{
					label: '指南',
					items: [
						{ label: '云朵创客空间学习管理系统',
						items: [
							{ label: '如何登录 LMS', slug: 'guides/lms/getting-started' },
							{ label: '如何在 LMS 中查看剩余课时', slug: 'guides/lms/viewing-remaining-hours' },
						],
						},
					],
				},
				{
					label: '课程介绍',
					autogenerate: { directory: 'introduction' },
				},
			],
		}),
	],
});
