export interface MediaItem {
  type: 'image' | 'video'
  src: string
  poster?: string
  alt: string
  naturalWidth?: number
}

export interface TechnicalCard {
  title: string
  text: string
  image?: string
  imageAlt?: string
}

export interface ChildSection {
  id: string
  label: string
  title: string
  body: string[]
  comment?: string
  media: MediaItem[]
}

export interface Project {
  type: 'project'
  id: string
  title: string
  subtitle: string
  description: string
  heroImages: MediaItem[]
  demoVideo: MediaItem | null
  overview: {
    body: string[]
    media: MediaItem[]
  }
  technical: TechnicalCard[]
  children: ChildSection[]
}

export interface RepoProject {
  type: 'repo'
  id: string
  title: string
  label: string
  description: string
  media: MediaItem
  github?: string
  paper?: string
}

export type AnyProject = Project | RepoProject

export const projects: AnyProject[] = [
  {
    type: 'project',
    id: 'dishplay',
    title: 'Dishplay',
    subtitle: 'Edible Display Utilizing Magnetic Response of Iron in Cereal',
    description: '鉄分を含むシリアルを磁力で動かし、液体上に文字やパターンを表示する可食ディスプレイ',
    heroImages: [
      { type: 'image', src: '/assets/dishplay/00_hero/hero_main1.png', alt: 'Dishplay visual 1', naturalWidth: 521 },
      { type: 'image', src: '/assets/dishplay/00_hero/hero_main2.png', alt: 'Dishplay visual 2', naturalWidth: 521 },
      { type: 'image', src: '/assets/dishplay/00_hero/hero_main3.png', alt: 'Dishplay visual 3', naturalWidth: 599 },
      { type: 'image', src: '/assets/dishplay/00_hero/hero_main4.png', alt: 'Dishplay visual 4', naturalWidth: 444 },
    ],
    demoVideo: {
      type: 'video',
      src: '/assets/dishplay/00_hero/hero_motion.mp4',
      alt: 'Dishplay demo video',
    },
    overview: {
      body: [
        'Dishplayは、食品そのものを表示媒体として扱う研究プロジェクトです。',
        '鉄分を含むシリアル粒子を液体上に浮かべ、磁力で移動させることで、パターンを生成します。',
        
      ],
      media: [],
    },
    technical: [
      {
        title: 'Interface',
        text: '8×8グリッドUIで、表示したいパターンを指定。',
      },
      {
        title: 'Control',
        text: 'Arduinoでアクチュエータアレイを制御。',
      },
      {
        title: 'Hardware',
        text: 'ネオジム磁石とリニアアクチュエータでシリアル粒子を移動。',
      },
      {
        title: 'Fabrication',
        text: '3Dプリント部品とPCBを用いて装置を制作。',
      },
      {
        title: 'Evaluation',
        text: '撮影画像をもとに、表示パターンや粒子の動きを評価。',
      },
    ],
    children: [
      {
        id: 'wiss',
        label: 'WISS',
        title: 'WISS Presentation & Demo',
        body: [
          'WISSにて、Dishplayの登壇発表とデモ展示を行いました。研究者や参加者に実際の動作を見てもらい、食品そのものを動かして表示する体験についてフィードバックを得ました。',
        ],
        media: [
          {
            type: 'image',
            src: '/assets/dishplay/03_wiss_presentation_demo/wiss_presentation.jpg',
            alt: 'WISS presentation stage',
          },
          {
            type: 'image',
            src: '/assets/dishplay/03_wiss_presentation_demo/wiss_demo.jpg',
            alt: 'WISS demo exhibition',
          },

        ],
      },
      {
        id: 'nakanishi-award',
        label: '中西奨励賞',
        title: 'Nakanishi Encouragement Award',
        body: [
          'Dishplayは、卒業研究として学内の中西奨励賞を受賞しました。',
        ],
        media: [
          {
            type: 'image',
            src: '/assets/dishplay/04_nakanishi_award/award_certificate.png',
            alt: 'Nakanishi Encouragement Award certificate',
          },
          {
            type: 'image',
            src: '/assets/dishplay/04_nakanishi_award/award_photo.jpg',
            alt: 'Award ceremony photo',
          },
        ],
      },
      {
        id: 'yoxo',
        label: 'YOXO FESTIVAL',
        title: 'YOXO FESTIVAL 2026',
        body: [
          'YOXO FESTIVAL 2026では、来場者にDishplayを体験してもらいました。研究発表の場とは異なり、専門家ではない人が、食材が動いて表示になる体験にどう反応するかを観察できました。',
        ],
        media: [
          {
            type: 'image',
            src: '/assets/dishplay/05_yoxo_festival_2026/yoxo_booth.jpg',
            alt: 'YOXO FESTIVAL 2026 booth',
          },
          {
            type: 'image',
            src: '/assets/dishplay/05_yoxo_festival_2026/yoxo_experience.jpg',
            alt: 'Visitor experiencing Dishplay',
          },
        ],
      },
      {
        id: 'taiwan',
        label: '台湾研究訪問',
        title: 'Taiwan Research Visit',
        body: [
          '国立陽明交通大学に訪問留学をし、異なる研究者や学生との議論を通じて、食体験・HCI・デモ設計に関する視点を広げました。',
        ],
        media: [
          {
            type: 'image',
            src: '/assets/dishplay/06_taiwan_research_visit/taiwan_NYCU.png',
            alt: 'Taiwan research lab',
          },
          {
            type: 'image',
            src: '/assets/dishplay/06_taiwan_research_visit/taiwan_discussion.jpg',
            alt: 'Discussion with researchers in Taiwan',
          },
        ],
      },
    ],
  },

  {
    type: 'repo',
    id: 'lexquest',
    title: 'LexQuest',
    label: 'Next.js / Claude API',
    description: 'AIと英会話するだけで「語彙図鑑」が育つRPG型学習Webアプリ。使った単語・フレーズが自動で蓄積され、XPやレベルアップで語彙の成長と偏りを可視化する。暗記ではなく「話す」ことを中心に設計。',
    media: { type: 'image', src: '/assets/repos/lexquest/preview.png', alt: 'LexQuest screenshot' },
    github: 'https://github.com/akito-0620/LexQuest',
  },

  {
    type: 'repo',
    id: 'pptai',
    title: 'SlideAudience',
    label: 'C# / Gemini API',
    description: 'PowerPointスライドショー中に「観客が思いそうなコメント」をAIがリアルタイム生成し、透明なオーバーレイとして表示するVSTOアドイン。スライド切替のたびに自動でコメントが更新される。',
    media: { type: 'video', src: '/assets/repos/pptai/preview.mp4', poster: '/assets/repos/pptai/poster.jpg', alt: 'SlideAudience demo' },
    github: 'https://github.com/akito-0620/pptAI',
  },

  {
    type: 'repo',
    id: 'sichi',
    title: '発汗で実感：EDAに反応するインタラクティブな食デザイン',
    label: 'SICHI 学生コンテスト',
    description: '辛い物を食べたときの発汗をEDAセンサーでリアルタイム検知し、ランダムフォレスト分類で「辛さ由来の発汗」を識別してゲームダメージに変換する体感型食体験。SICHI 学生コンテストにてポスター発表・デモ展示を行った。',
    media: { type: 'image', src: '/assets/repos/sichi/preview.png', alt: 'SICHI ポスター発表・デモ' },
    github: 'https://github.com/akito-0620/SICHI',
  },

  {
    type: 'repo',
    id: 'bc2025-app',
    title: '筋電ダーツゲーム',
    label: 'Python / BITalino',
    description: '筋電センサーで腕に力を入れるとダーツが発射される体感型ゲーム。BITalinoのEMGセンサーと加速度センサーを組み合わせ、腕の動きをゲーム操作に変換する3ステージ構成。',
    media: { type: 'video', src: '/assets/repos/bc2025-app/preview.mp4', poster: '/assets/repos/bc2025-app/poster.jpg', alt: '筋電ダーツゲーム demo' },
    github: 'https://github.com/akito-0620/bc2025_app',
  },

  {
    type: 'repo',
    id: 'taskquest',
    title: 'QuestDock',
    label: 'Python / PyQt6',
    description: 'タスクを「クエスト」として管理するPC常駐のRPG型ToDoアプリ。完了するとXPが貯まりレベルアップ。画面右上に常に表示され、折りたたみ・透明度調整・冒険の書など多彩な機能を備える。',
    media: { type: 'image', src: '/assets/repos/taskquest/preview.png', alt: 'QuestDock screenshot' },
    github: 'https://github.com/akito-0620/TaskQuest',
  },

  {
    type: 'repo',
    id: 'screenshot-tool',
    title: 'Screenshot Tool',
    label: 'Python / PyQt6',
    description: '撮影前に保存先フォルダを設定しておくことで、講義・研究・就活など用途ごとにスクリーンショットを自動整理できるWindowsアプリ。マウスドラッグによる範囲選択撮影に対応。',
    media: { type: 'image', src: '/assets/repos/screenshot-tool/preview.svg', alt: 'Screenshot Tool UI mockup' },
    github: 'https://github.com/akito-0620/screenshot-tool',
  },

  {
    type: 'repo',
    id: 'attendance-app',
    title: 'Attendance App',
    label: 'PWA / Vanilla JS',
    description: 'スマートフォン向けの出席管理PWA。インストール不要でブラウザから即座に利用でき、Service Workerによるオフライン動作とホーム画面へのインストールに対応。',
    media: { type: 'image', src: '/assets/repos/attendance-app/preview.svg', alt: 'Attendance App UI mockup' },
    github: 'https://github.com/akito-0620/attendance-app',
  },
]
