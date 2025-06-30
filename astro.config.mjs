// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: '📚 boreal.chat Docs',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/wosherco/boreal.chat' }, { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/knDFUB5UtU' }],
            sidebar: [
                {
                    label: 'Beta Docs',
                    autogenerate: { directory: 'beta-docs' },
                },

            ],
        }),
    ],

    adapter: cloudflare(),
});