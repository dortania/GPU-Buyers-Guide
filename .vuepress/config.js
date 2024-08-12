const {
    description
} = require('../package')

module.exports = {
    title: 'GPU Buyers Guide',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        }]
    ],
    base: '/GPU-Buyers-Guide/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
                headerless: true,
            });
            md.renderer.rules.emoji = function(token, idx) {
                return '<span class="emoji emoji_' + token[idx].markup + '">' + token[idx].content + '</span>';
            };
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/dortania/GPU-Buyers-Guide',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        logo: '/homepage.png',
        nav: [{
            text: 'Dortania Guides',
            items: [{
                text: 'Home Site',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Getting Started With ACPI',
                link: 'https://dortania.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore Install Guide',
                link: 'https://dortania.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'OpenCore Post-Install',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Wireless Buyers Guide',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introduction',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
            ]

        },
        {
            title: 'Modern GPUs',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/modern-gpus/amd-gpu',
                '/modern-gpus/nvidia-gpu',
                '/modern-gpus/intel-gpu',
            ]
        },
        {
            title: 'Legacy GPUs',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/legacy-gpus/legacy-amd',
                '/legacy-gpus/legacy-nvidia',
                '/legacy-gpus/legacy-intel',
            ]
        },
        {
            title: 'Buyers Guide',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/buyers-guide/gpu-avoid',
                '/buyers-guide/what-gpu-to-get',
            ]
        },
        {
            title: 'Misc',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/misc/bootflag',
                '/misc/discrete-laptops',
                '/misc/common-issues',
                '/misc/kvm',
                'misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-fulltext-search',
        ['@vuepress/medium-zoom',
            {
                selector: ".theme-succinct-content :not(a) > img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}