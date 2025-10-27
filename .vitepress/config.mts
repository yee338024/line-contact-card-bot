import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    sitemap: {
        hostname: 'https://linebots.app'
    },
    head: [
        ['meta', {name: 'language', content: 'zh, en, ru, jp, tw, kr, id, my, vn'}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-w6NaJGChtA'}],
        ['meta', {
            name: 'keywords',
            content: 'LINE 名片, LINE 名片机器人, LINE 个人资料卡, LINE MID 转换, LINE 用户 ID 转换, 将 mid 转为名片, 发起聊天 名片, LINE 联系人卡片, LINE 名片 生成器, LINE Chat 发起卡片, line mid',
            'data-lang': 'zh'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Line 名片, Line 名片機器人, Line 個人資料卡, Line 使用者 ID 轉換, mid 轉名片, 啟動聊天 名片, Line 聯絡人 卡片, Line 名片產生器, line mid',
            'data-lang': 'tw'
        }],
        ['meta', {
            name: 'keywords',
            content: 'LINE profile card, LINE profile card bot, convert LINE user id, convert LINE mid to profile, LINE mid converter, LINE contact card, start chat LINE profile, LINE bot profile card, profile card generator for LINE, LINE user ID to chat link, line mid',
            'data-lang': 'en'
        }],
        ['meta', {
            name: 'keywords',
            content: 'LINE 名刺, LINE 名刺ボット, LINE プロフィールカード, LINE ユーザーID 変換, mid を名刺に変換, チャット開始 プロフィール, LINE 連絡先カード, 名刺ジェネレーター LINE, line mid',
            'data-lang': 'jp'
        }],
        ['meta', {
            name: 'keywords',
            content: 'LINE 명함, LINE 명함 봇, LINE 프로필 카드, LINE 사용자 ID 변환, mid 를 명함으로 변환, 채팅 시작 프로필, LINE 연락처 카드, 명함 생성기 LINE, line mid',
            'data-lang': 'kr'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Kartu profil LINE, Bot kartu profil LINE, Ubah ID pengguna LINE, Konversi mid LINE ke kartu, Generator kartu LINE, Kartu kontak LINE, Mulai chat kartu profil, LINE mid converter, line mid',
            'data-lang': 'id'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Kad profil LINE, Bot kad profil LINE, Tukar ID pengguna LINE, Tukar mid LINE kepada kad, Penjana kad LINE, Kad kenalan LINE, Mula sembang kad profil, Penukar mid LINE, line mid',
            'data-lang': 'my'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Thẻ hồ sơ LINE, Bot thẻ hồ sơ LINE, Chuyển ID người dùng LINE, Chuyển mid LINE thành thẻ, Bộ tạo thẻ LINE, Thẻ liên hệ LINE, Bắt đầu trò chuyện bằng thẻ, LINE mid converter, line mid',
            'data-lang': 'vn'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Визитка LINE, Бот визитки LINE, Профильная карточка LINE, Конвертировать LINE ID, Преобразовать mid в визитку, Карточка контакта LINE, Запустить чат профиль, Генератор визиток LINE, line mid',
            'data-lang': 'ru'
        }],
        ['link', {rel: 'alternate', hreflang: 'x-default', href: 'https://linebots.app/'}],
        ['link', {rel: 'alternate', hreflang: 'zh', href: 'https://linebots.app/'}],
        ['link', {rel: 'alternate', hreflang: 'zh-TW', href: 'https://linebots.app/tw/'}],
        ['link', {rel: 'alternate', hreflang: 'en', href: 'https://linebots.app/en/'}],
        ['link', {rel: 'alternate', hreflang: 'ja', href: 'https://linebots.app/jp/'}],
        ['link', {rel: 'alternate', hreflang: 'ko', href: 'https://linebots.app/kr/'}],
        ['link', {rel: 'alternate', hreflang: 'id', href: 'https://linebots.app/id/'}],
        ['link', {rel: 'alternate', hreflang: 'ms', href: 'https://linebots.app/my/'}],
        ['link', {rel: 'alternate', hreflang: 'vi', href: 'https://linebots.app/vn/'}],
        ['link', {rel: 'alternate', hreflang: 'ru', href: 'https://linebots.app/ru/'}]

    ],
    srcDir: "docs",
    title: "Line Contact Bot",
    description: "Transform Line user mid to Profile card",
    locales: {
        root: {
            label: 'Chinese',
            lang: 'zh'
        },
        'zh': {
            lang: 'zh',
            title: 'Line 名片机器人',
            description: '将Line用户ID（mid）转换为可发起聊天的个人资料卡片',
            label: '简体中文',
        },
        'en': {
            lang: 'en',
            title: 'LINE Profile Card Bot',
            description: 'Convert a LINE user ID (mid) into a profile card that can initiate a chat',
            label: 'English',
        },
        'jp': {
            lang: 'ja',
            title: 'LINE名刺ボット',
            description: 'LINEのユーザーID（mid）を、チャットを開始できるプロフィールカードに変換します',
            label: '日本語',
        },
        'tw': {
            lang: 'tw',
            title: 'Line 名片機器人',
            description: '將 Line 使用者 ID（mid）轉換為可發起聊天的個人資料卡片',
            label: '繁體中文',
        },
        'kr': {
            lang: 'kr',
            title: 'LINE 명함 봇',
            description: 'LINE 사용자 ID(mid)를 채팅을 시작할 수 있는 프로필 카드로 변환합니다',
            label: '한국어',
        },
        'id': {
            lang: 'id',
            title: 'Bot Kartu Profil LINE',
            description: 'Mengubah ID pengguna LINE (mid) menjadi kartu profil yang dapat memulai percakapan',
            label: 'Bahasa Indonesia',
        },
        'my': {
            lang: 'my',
            title: 'Bot Kad Profil LINE',
            description: 'Menukar ID pengguna LINE (mid) kepada kad profil yang boleh memulakan perbualan',
            label: 'Bahasa Melayu',
        },
        'vn': {
            lang: 'vn',
            title: 'Bot Danh Thiếp LINE',
            description: 'Chuyển ID người dùng LINE (mid) thành thẻ hồ sơ có thể bắt đầu trò chuyện',
            label: 'Tiếng Việt',
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        socialLinks: [
            {icon: 'telegram', link: 'https://t.me/linebot_pro'}
        ],
        // text for language selector
        selectText: 'Languages'
    }

})
