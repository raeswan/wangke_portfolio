/* 所有可见文案、链接与素材地址都在这里编辑。路径相对于 index.html。
   不要创建空的 JPG/MP4/PDF 文件；素材缺失时，页面自动显示占位。
   补齐简历后将 cvReady 改为 true；补齐邮箱后将 emailReady 改为 true。 */
window.PORTFOLIO = {
  "meta": {
    "title": "王炣 — AI 内容与创意",
    "description": "王炣的 AI 内容与创意作品集：生成式视频、视觉概念与可复用 AI 工作流。"
  },
  "name": "王炣",
  "romanName": "WANG KE",
  "brand": "创意，从想法到输出。",
  "nav": [
    {
      "label": "作品",
      "href": "#works"
    },
    {
      "label": "方法",
      "href": "#workflow"
    },
    {
      "label": "经验",
      "href": "#experience"
    },
    {
      "label": "联系方式",
      "href": "#contact"
    }
  ],
  "ui": {
    "skip": "跳至正文",
    "menu": "打开导航",
    "closeMenu": "收起导航",
    "close": "关闭预览 ×",
    "viewWorks": "查看作品",
    "cv": "下载简历",
    "email": "邮件联系",
    "play": "播放作品视频",
    "image": "放大查看图像",
    "videoPlaceholder": "在此替换为作品视频",
    "imagePlaceholder": "在此替换为过程图像",
    "videoHint": "视频就绪后，可在此直接播放",
    "imageHint": "关键帧 / 过程记录",
    "details": "展开项目过程",
    "hideDetails": "收起项目过程",
    "role": "我的角色",
    "tools": "使用工具",
    "process": "创作路径",
    "output": "作品输出",
    "cvMissing": "简历暂时无法下载，请通过邮件联系。",
    "emailMissing": "联系方式待补充，请在 content.js 中替换邮箱并启用。",
    "backTop": "回到顶部",
    "mediaError": "暂时无法播放，请检查视频文件或浏览器格式支持。",
    "videoUnavailable": "视频暂不可用"
  },
  "hero": {
    "eyebrow": "AI CREATIVE PORTFOLIO",
    "title": [
      "让想法",
      "成为可见的表达。"
    ],
    "focus": "AI 内容与创意｜AI 工作流",
    "english": "AI Content · Creative Workflow",
    "intro": "从创意方向、prompt 设计到图像与动态生成，\n将想法转化为具有表达力的 AI 内容。"
  },
  "intro": {
    "label": "01 / PROFILE",
    "title": "在 AI 与创意之间，\n把方向变成内容。",
    "text": "具备 AI 内容制作、生成式视频、内容增长及 AI 工作流实践经验。近期在科技公司负责 AI Content，参与 AI 视频、广告创意及不同产品方向的内容实验，使用 Runway、Codex 等工具完成从创意、生成、迭代到交付，并搭建可复用的 AI skills / workflows 支持团队工作。此前长期从事海外内容增长及品牌音乐内容工作，具备跨媒介创意判断、海外用户理解及英文工作能力。具备较强的自驱学习、独立执行与快速适应能力。",
    "tags": [
      "Runway · Seedance · AI 图片与视频生成",
      "Codex · Claude · ChatGPT · n8n",
      "Canva · CapCut · Davinci Resolve",
      "Content Strategy · Social Growth",
      "中文｜English as a working language"
    ]
  },
  "works": {
    "label": "02 / SELECTED WORKS",
    "title": "作品与实践",
    "text": "从视觉概念到动态输出，也从一次创作到可复用的方法。"
  },
  "cases": [
    {
      "id": "case-1",
      "number": "01",
      "layout": "editorial-process",
      "title": "DIRTY GOLD",
      "category": "AI MUSIC VIDEO / ZERO-TO-ONE CREATIVE PROCESS",
      "subtitle": "从零开始，把一个创意发展成多镜头 AI 音乐视频。",
      "summary": "项目从一个初始想法开始，没有既定歌曲、人物、场景或视觉素材。从音乐概念与歌词出发，逐步发展人物与视觉方向，通过多轮图像与 prompt 迭代，再将人工整理后的 production prompt 与最终参考图输入 Seedance 2.0，生成多镜头 AI 音乐视频。",
      "role": "创意方向 / 音乐与内容概念 / Prompt Development / Visual Direction / AI Image Iteration / Manual Prompt Refinement / AI Video Production",
      "tools": "ChatGPT / AI Image Generation / Notes / Seedance 2.0",
      "cover": "assets/case-1/dirty-gold-cover-v2.png",
      "coverAlt": "DIRTY GOLD：最终选定的红衬衫人物与排练室视觉方向",
      "media": {
        "type": "video",
        "src": "assets/worlds/world-01.mp4",
        "poster": "assets/worlds/world-01.jpg",
        "alt": "DIRTY GOLD — 多镜头 AI 音乐视频"
      },
      "stages": [
        {
          "label": "01 / FROM ZERO",
          "title": "从空白开始",
          "text": "最初只有一个方向：一个年轻的 British rock band，以及发展一支 AI 音乐视频的初始想法。先从多个歌曲与 MV 概念中探索可能性，最终选择 “Dirty Gold” 继续发展。",
          "signal": "BLANK → OPTIONS → DIRECTION",
          "kind": "origin",
          "images": [
            {
              "src": "assets/case-1/evidence/initial-request.jpg",
              "alt": "最初的 British rock band 创作请求"
            },
            {
              "src": "assets/case-1/evidence/dirty-gold-choice.jpg",
              "alt": "候选歌曲与 MV 概念：Dirty Gold"
            }
          ]
        },
        {
          "label": "02 / MUSIC & CONTENT",
          "title": "音乐与内容方向",
          "text": "确定 “Dirty Gold” 后，继续发展歌曲风格、音乐 prompt、歌词与 MV 内容方向，使音乐、人物和视觉表达来自同一个核心概念。",
          "signal": "IDEA → MUSIC → LYRICS → MV DIRECTION",
          "kind": "music",
          "images": [
            {
              "src": "assets/case-1/evidence/music-direction.jpg",
              "alt": "选择第三个创意，发展歌曲风格与音乐 prompt"
            }
          ],
          "excerptTitle": "DIRTY GOLD",
          "music": [
            "Raw British rock",
            "Gritty electric guitar",
            "Loose live drums",
            "Warm bass",
            "Raspy male vocal",
            "Big singalong chorus"
          ],
          "lyrics": "We were born in the dirt\nBut we shine like gold\nRunning through the night\nWith a fire we stole"
        },
        {
          "label": "03 / VISUAL DIRECTION",
          "title": "人物与视觉方向迭代",
          "text": "通过多轮图像生成，持续判断人物、服装、色彩与整体气质，逐步排除不符合方向的结果，最终形成自然、温暖、真实的 70s British rock rehearsal-room 视觉语言。",
          "kind": "iterations",
          "images": [
            {
              "src": "assets/case-1/evidence/iteration-dark.jpg",
              "alt": "偏暗的初版图像与调整色彩的反馈",
              "original": "assets/case-1/originals/iteration-dark.png",
              "label": "01 / TOO DARK",
              "caption": "初始方向偏暗，继续调整色彩与整体气质。"
            },
            {
              "src": "assets/case-1/evidence/iteration-character.jpg",
              "alt": "人物服装迭代与改为红色衬衫的反馈",
              "original": "assets/case-1/originals/iteration-character.png",
              "label": "02 / REFINE CHARACTER",
              "caption": "继续调整服装、人物气质与年代感。"
            },
            {
              "src": "assets/case-1/evidence/selected-direction.jpg",
              "alt": "最终选定的红衬衫人物与暖色排练室",
              "original": "assets/case-1/originals/selected-direction.png",
              "label": "03 / SELECTED DIRECTION",
              "caption": "最终确定人物、红色衬衫、暖色 rehearsal room 与 70s British rock 的整体视觉方向。"
            }
          ]
        },
        {
          "label": "04 / PROMPT REFINEMENT",
          "title": "从 AI 草稿到人工编辑",
          "text": "AI 辅助发展草稿，再将 prompt 转入 Notes，经过人工整理、删改与重写后用于视频生成。",
          "signal": "AI DRAFT → MANUAL REFINEMENT → FINAL PRODUCTION PROMPT",
          "kind": "refinement",
          "images": [
            {
              "src": "assets/case-1/evidence/ai-draft.jpg",
              "alt": "ChatGPT 中的多镜头 MV prompt 草稿",
              "label": "AI DRAFT",
              "caption": "基于前面的音乐、人物与视觉方向，继续发展 multi-shot 视频结构、人物表演、镜头与节奏。"
            },
            {
              "src": "assets/case-1/evidence/manual-refinement.jpg",
              "alt": "Apple Notes 中人工整理的 production prompt",
              "label": "MANUAL REFINEMENT",
              "caption": "将生成的 prompt 转入 Notes，继续手动整理、删改与重写，形成最终用于视频生成的 production prompt。"
            }
          ]
        },
        {
          "label": "05 / PRODUCTION",
          "title": "REFERENCE + PROMPT → SEEDANCE 2.0",
          "text": "将选定参考图与人工整理后的 production prompt 输入 Seedance 2.0，在 prompt 中描述人物表演、镜头切换、乐队动作、节奏与歌词内容，生成 9:16 multi-shot AI 音乐视频。",
          "kind": "production",
          "images": [
            {
              "src": "assets/case-1/evidence/seedance-production.jpg",
              "alt": "Seedance 2.0：参考图、最终 prompt 与多镜头竖屏 AI 音乐视频输出"
            }
          ],
          "tags": [
            "REFERENCE IMAGE",
            "FINAL PROMPT",
            "SEEDANCE 2.0",
            "9:16",
            "MULTI-SHOT"
          ]
        },
        {
          "label": "06 / FINAL FILM",
          "title": "最终作品",
          "text": "从最初的方向，到歌曲、歌词、人物、视觉、prompt 与生成，最终形成多镜头 AI 音乐视频。",
          "kind": "film"
        }
      ]
    },
    {
      "id": "case-2",
      "number": "02",
      "layout": "ad-showcase",
      "category": "AI AD CREATIVE / PRODUCT CONTENT",
      "title": "AI 广告内容实验",
      "summary": "为不同产品方向制作 AI 广告内容与短视频实验，根据 brief 快速发展创意路径，并输出适合展示、测试与投放方向的视觉素材。",
      "role": "创意构思 / Prompt 设计 / AI 内容制作 / 输出迭代",
      "tools": "ChatGPT / Runway / Codex / Omni / Seedance / FFmpeg",
      "note": "3 个产品方向 · 6 支短视频内容",
      "cta": "展开精选内容",
      "closeCta": "收起精选内容",
      "previewCaption": "不同产品方向 · 广告内容集合",
      "galleryIntro": "覆盖音乐 / 内容产品、金融工具与电商创意工具等不同产品方向，根据 brief 快速发展视觉概念，并完成适合展示、测试与投放方向的短视频广告内容。",
      "groups": [
        {
          "label": "AI MUSIC / CONTENT PRODUCT",
          "title": "音乐 / 内容产品",
          "description": "为 AI 音乐与内容产品制作广告短视频，强调人物状态、视觉氛围与社交媒体节奏。",
          "tools": "ChatGPT / Runway",
          "videos": [
            {
              "title": "Ad 01",
              "src": "assets/case-2/ads/ad-01.mp4",
              "poster": "assets/case-2/ads/ad-01.jpg"
            },
            {
              "title": "Ad 02",
              "src": "assets/case-2/ads/ad-02.mp4",
              "poster": "assets/case-2/ads/ad-02.jpg"
            }
          ],
          "caption": "人物驱动 / 氛围表达 / 短视频节奏"
        },
        {
          "label": "FINTECH / UTILITY PRODUCT",
          "title": "金融工具 / 效率产品",
          "description": "为交易与市场辅助类产品制作短视频广告，用人物场景、口播感与字幕节奏快速传达功能和使用场景。",
          "tools": "ChatGPT / Runway",
          "videos": [
            {
              "title": "Ad 01",
              "src": "assets/case-2/ads/ad-03.mp4",
              "poster": "assets/case-2/ads/ad-03.jpg"
            },
            {
              "title": "Ad 02",
              "src": "assets/case-2/ads/ad-04.mp4",
              "poster": "assets/case-2/ads/ad-04.jpg"
            }
          ],
          "caption": "功能表达 / 场景传达 / 广告节奏"
        },
        {
          "label": "E-COMMERCE CREATIVE TOOL",
          "title": "电商广告生成工具",
          "description": "为电商广告生成产品制作示例内容与实验素材，结合图像生成、视频生成与本地剪辑测试不同商品与广告表达方式。",
          "tools": "Codex / ChatGPT / Omni / Seedance / FFmpeg",
          "videos": [
            {
              "title": "Ad 01",
              "src": "assets/case-2/ads/ad-05.mp4",
              "poster": "assets/case-2/ads/ad-05.jpg"
            },
            {
              "title": "Ad 02",
              "src": "assets/case-2/ads/ad-06.mp4",
              "poster": "assets/case-2/ads/ad-06.jpg"
            }
          ],
          "caption": "商品表达 / 生成测试 / 本地剪辑"
        }
      ]
    },
    {
      "id": "case-3",
      "number": "03",
      "layout": "workflow-showcase",
      "category": "WORKFLOW / AI PRODUCTIVITY",
      "title": "AI Workflow / Skills 构建",
      "summary": "将重复、耗时或依赖个人经验的工作拆解为可复用工具、自动化流程与团队方法，支持内容运营和日常协作。",
      "role": "需求拆解 / Workflow Design / Codex / Scripts / Automation / Team Handoff",
      "tools": "Codex / ChatGPT / Python / Local Scripts / Automation",
      "previewCaption": "重复工作 × 可复用系统",
      "preview": [
        {
          "src": "assets/case-3/evidence/discovery-report.png",
          "alt": "ViralIG Feed：内容筛选、播放量与互动率，账号标识已隐藏"
        },
        {
          "src": "assets/case-3/evidence/account-report-a.png",
          "alt": "多账号内容汇总：视频卡片、播放量和互动数据，账号标识已隐藏"
        },
        {
          "src": "assets/case-3/evidence/team-package.png",
          "alt": "可复用团队包结构：scripts、schemas、docs 与交接文档"
        }
      ],
      "cta": "展开 Workflow 案例",
      "closeCta": "收起 Workflow 案例",
      "intro": "这些案例覆盖内容发现、数据汇总与团队交付。我从实际工作需求出发，识别重复环节，并把它们转化为可运行、可复用、可交接的解决方案。",
      "problemLabel": "PROBLEM",
      "solutionLabel": "SOLUTION",
      "examples": [
        {
          "label": "01 / DISCOVER",
          "category": "VIRAL CONTENT DISCOVERY",
          "title": "爆款内容发现工具",
          "problem": "运营需要持续寻找高播放、高互动的内容作为选题和创意参考，人工逐个查看账号和内容耗时较高，也不容易快速比较。",
          "solution": "搭建内容汇总与筛选工具，将指定内容源的数据整理成可浏览的 ViralIG Feed，并支持按播放量等指标快速查看高表现内容。",
          "images": [
            {
              "src": "assets/case-3/evidence/discovery-report.png",
              "alt": "ViralIG Feed：内容筛选、播放量与互动率，账号标识已隐藏"
            }
          ],
          "tags": [
            "CONTENT DISCOVERY",
            "DATA SORTING",
            "LOCAL REPORT",
            "AUTOMATION READY"
          ]
        },
        {
          "label": "02 / ANALYZE",
          "category": "MULTI-ACCOUNT CONTENT ANALYTICS",
          "title": "多账号内容数据汇总",
          "problem": "多云手机、多账号同时发布内容后，数据分散在不同账号中，人工逐个查看和记录不利于每天快速判断内容表现。",
          "solution": "通过脚本与自动化流程汇总账号内容数据，生成统一的可视化页面，用于查看视频表现、播放量、互动数据并快速比较不同内容。",
          "images": [
            {
              "src": "assets/case-3/evidence/account-report-a.png",
              "alt": "多账号内容汇总：视频卡片、播放量和互动数据，账号标识已隐藏"
            }
          ],
          "tags": [
            "MULTI-ACCOUNT",
            "DAILY REPORT",
            "CONTENT PERFORMANCE",
            "AUTOMATED DATA VIEW"
          ]
        },
        {
          "label": "03 / SYSTEMIZE",
          "category": "REUSABLE SKILL + TEAM HANDOFF",
          "title": "把方法变成团队可复用的 Skill",
          "problem": "视频分析、生成与输出步骤分散，团队重复执行和交接时，需要统一的方法与说明。",
          "solution": "针对爆款视频复刻与团队内容生产，把原本分散的分析、生成和输出步骤整理成一个可复用的 Codex Skill / team package，包括脚本、schemas、文档与标准化流程，方便团队按统一方式运行和交接。",
          "images": [
            {
              "src": "assets/case-3/evidence/team-package.png",
              "alt": "可复用团队包结构：scripts、schemas、docs 与交接文档"
            }
          ],
          "tags": [
            "CODEX",
            "REUSABLE SKILL",
            "PYTHON SCRIPTS",
            "DOCUMENTATION",
            "TEAM HANDOFF"
          ],
          "sop": {
            "label": "TEAM DOCUMENTATION / SOP",
            "title": "将原创内容制作流程整理成可交接的 SOP",
            "text": "将原创短视频素材的制作方法整理成 SOP，明确内容方向、音乐 MV、口播素材与最终剪辑合成步骤，方便团队按统一流程继续执行与交接。",
            "image": {
              "src": "assets/case-3/evidence/original-content-sop.png",
              "alt": "Muvia 原创素材sop：王炣 · Modified May 21 · 原创短视频制作流程"
            }
          }
        }
      ]
    }
  ],
  "workflow": {
    "label": "03 / CREATIVE WORKFLOW",
    "title": "清晰的方向。\n持续的迭代。",
    "text": "通过清晰的创意判断、prompt 迭代与视觉筛选，把想法逐步转化为具有表达力的 AI 内容。",
    "steps": [
      {
        "title": "定义创意方向",
        "text": "从空白开始明确作品要表达什么，以及整体内容方向。",
        "tag": "CREATIVE DIRECTION"
      },
      {
        "title": "发展内容与世界",
        "text": "根据项目发展脚本、音乐、人物、场景或内容结构。",
        "tag": "CONTENT & WORLD BUILDING"
      },
      {
        "title": "建立视觉语言",
        "text": "明确风格、情绪、构图、节奏与整体视觉表达。",
        "tag": "VISUAL LANGUAGE"
      },
      {
        "title": "Prompt 与生成迭代",
        "text": "持续测试、修改、生成与筛选，把方向逐渐转化为具体内容。",
        "tag": "PROMPT & GENERATION"
      },
      {
        "title": "Motion / Production",
        "text": "将视觉方向转化为动态内容，控制人物、动作、镜头、环境与节奏。",
        "tag": "MOTION / PRODUCTION"
      },
      {
        "title": "筛选、调整与交付",
        "text": "根据生成结果持续判断与优化，完成最终可用内容。",
        "tag": "REFINE & DELIVER"
      }
    ]
  },
  "experience": {
    "label": "04 / EXPERIENCE",
    "title": "不同媒介，同一份创意判断。",
    "items": [
      {
        "company": "武汉洛希极限智能科技有限公司",
        "extra": "Riffle · 2026 年 1 月 – 2026 年 8 月",
        "role": "AI Content｜内容创意与运营",
        "points": [
          "负责 AI Content 创作及内容实验，根据产品 brief、业务及投放需求测试创意方向，制作短视频、广告及视觉素材，并根据反馈迭代。",
          "使用 Runway 等生成式 AI 工具，完成创意构思、AI 图片与视频生成、筛选迭代及内容交付。",
          "使用 Codex 搭建可复用的 AI skills / workflows，将部分重复性流程工具化，供团队成员在实际工作中使用。",
          "参与 Instagram 等海外社媒内容策划、制作、剪辑及增长实验，单条内容达到 100 万+观看。"
        ]
      },
      {
        "company": "Rae Swan Inc.",
        "extra": "2023 年 – 2025 年",
        "role": "创始人｜海外内容与增长",
        "points": [
          "独立搭建并运营 Instagram、TikTok 等海外账号，负责定位、选题、制作、发布及增长；Instagram 主账号实现数万级粉丝增长，多个内容达到百万级观看。",
          "从 0 到 1 搭建数字产品销售体系，通过内容自然流量实现产品销售与持续转化。",
          "独立完成英文产品内容、销售文案、邮件及社媒内容，使用 Manychat / Email Marketing 搭建自动化用户转化流程。",
          "根据内容表现与用户反馈，持续分析、测试并优化内容方向及转化流程。"
        ]
      },
      {
        "company": "W 酒店 / 成都丽思卡尔顿 / 成都尼依格罗酒店",
        "extra": "2017 年 – 2022 年",
        "role": "品牌音乐内容策划｜Music Manager",
        "points": [
          "负责品牌音乐内容、现场氛围及整体风格策划，根据品牌与场景调整表达，协调音乐、品牌及现场体验，保持品牌定位一致。",
          "长期参与音乐及现场演出制作，对音乐节奏、视觉氛围、品牌调性及用户体验形成综合判断。",
          "与国内外品牌团队及客户进行中英文沟通，参与国际品牌活动及内容执行。"
        ]
      },
      {
        "company": "厦门 MIID 有限公司",
        "extra": "2015 年 – 2016 年",
        "role": "市场营销运营助理",
        "points": [
          "参与产品内容运营、市场活动及品牌合作执行。",
          "协助社交媒体内容策划、用户推广及品牌传播工作。"
        ]
      }
    ]
  },
  "strengths": {
    "label": "05 / WHAT I BRING",
    "title": "把能力转化为交付。",
    "items": [
      {
        "title": "自驱学习与快速上手",
        "text": "音乐制作、海外内容增长、AI 内容及 AI 工作流等核心能力主要通过长期自学与实际项目建立，能够快速掌握新工具、新方法，并转化为实际工作产出。"
      },
      {
        "title": "独立解决问题与从 0 到 1",
        "text": "习惯自主拆解目标、寻找解决方案、搭建流程并持续迭代，能够在较少外部指导的情况下推进项目从想法到实际交付。"
      },
      {
        "title": "跨媒介创意判断",
        "text": "对画面、声音、节奏、品牌调性和用户感受具有较强感知，能够在音乐、视觉、内容与 AI 生成之间建立统一的创意判断。"
      },
      {
        "title": "跨文化与英文工作能力",
        "text": "长期面向海外用户及国际品牌工作，能够使用英文进行沟通、写作和内容执行，并理解不同市场与受众的表达差异。"
      }
    ]
  },
  "contact": {
    "label": "06 / CONTACT",
    "title": "下一次创意，\n从一次对话开始。",
    "email": "raeswanrae@gmail.com",
    "emailReady": true,
    "cv": "assets/cv/Wang_Ke_CV_2026.pdf",
    "cvReady": true,
    "footer": "AI Content · Creative Workflow",
    "phone": "13658005992"
  },
  "featured": {
    "label": "FEATURED WORK / 重点作品",
    "title": "从 0 开始，把一个想法变成 AI 音乐视频。",
    "category": "AI MUSIC VIDEO",
    "role": "Concept Development / Music & Lyrics / Visual Direction / Prompt Development / AI Video",
    "description": "从最初的想法出发，发展音乐方向与歌词，建立人物、场景和视觉语言；通过多轮 prompt 与图像迭代确定关键画面，再设计人物动作、镜头与场景变化，并在 Runway 中将这些元素转化为多镜头 AI 音乐视频。",
    "processLabel": "查看创作过程 →",
    "processLink": "#case-1",
    "media": {
      "type": "video",
      "src": "assets/featured/featured-video.mp4",
      "poster": "assets/featured/featured-poster.jpg",
      "alt": "从 0 开始，把一个想法变成 AI 音乐视频。"
    }
  },
  "worlds": {
    "label": "SELECTED WORLDS / 不同的视觉世界",
    "title": "不同世界，同一种方法。",
    "description": "每个作品拥有独立的音乐、人物、场景与视觉语言，但都来自同一种创作逻辑：从最初的想法出发，逐步发展内容、人物与视觉世界，再通过 prompt、图像生成与动态设计完成最终作品。"
  },
  "selectedWorlds": [
    {
      "title": "STREET LIGHT",
      "category": "AI MUSIC VIDEO",
      "descriptor": "街头 / 户外 / 自然光",
      "description": "以人物表演与城市户外环境为核心，通过自然光、街头空间与镜头变化建立相对直接、真实的音乐视频氛围。",
      "poster": "assets/worlds/world-03.jpg",
      "video": "assets/worlds/world-03.mp4"
    },
    {
      "title": "BLUE NIGHT",
      "category": "AI MUSIC VIDEO",
      "descriptor": "蓝紫夜色 / 后台 / 雨夜",
      "description": "以蓝紫色夜间氛围建立人物与空间关系，在室内、镜面、走廊与夜晚环境之间形成统一的视觉语言。",
      "poster": "assets/worlds/world-02.jpg",
      "video": "assets/worlds/world-02.mp4"
    },
    {
      "title": "LIVE ROOM",
      "category": "AI MUSIC VIDEO",
      "descriptor": "乐队 / 现场感 / 暖色空间",
      "description": "以乐队表演与现场空间为核心建立视觉世界，通过人物、乐器、表演状态与不同镜头变化形成多镜头 AI 音乐视频表达。",
      "poster": "assets/worlds/world-01.jpg",
      "video": "assets/worlds/world-01.mp4"
    },
    {
      "title": "AFTER DARK",
      "category": "AI MUSIC VIDEO",
      "descriptor": "城市夜晚 / 室内到街头",
      "description": "从室内人物状态延伸到夜间城市环境，通过空间变化与人物表演形成具有叙事推进感的音乐视频。",
      "poster": "assets/worlds/world-04.jpg",
      "video": "assets/worlds/world-04.mp4"
    },
    {
      "title": "PINK WORLD",
      "category": "AI MUSIC VIDEO",
      "descriptor": "粉色 / 校园空间 / Party",
      "description": "围绕鲜明的粉色视觉语言发展人物、服装与不同空间，在校园、室内与社交场景之间建立统一但明显不同于其他作品的世界。",
      "poster": "assets/worlds/world-05.jpg",
      "video": "assets/worlds/world-05.mp4"
    }
  ],
  "viewer": {
    "label": "作品浏览",
    "previous": "上一部作品",
    "next": "下一部作品",
    "play": "播放",
    "pause": "暂停",
    "mute": "静音",
    "sound": "开启声音",
    "fullscreen": "全屏",
    "exitFullscreen": "退出全屏",
    "close": "关闭",
    "seek": "播放进度",
    "open": "打开作品",
    "loading": "正在加载视频",
    "error": "视频暂时无法播放，请重试。"
  }
};
