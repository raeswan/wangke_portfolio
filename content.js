/* 所有可见文案、链接与素材地址都在这里编辑。路径相对于 index.html。
   不要创建空的 JPG/MP4/PDF 文件；素材缺失时，页面自动显示占位。
   补齐简历后将 cvReady 改为 true；补齐邮箱后将 emailReady 改为 true。 */
window.PORTFOLIO = {
  "meta": {
    "title": "王炣 — AI 内容与创意",
    "description": "王炣的 AI Creative Portfolio：Creative Strategy、AI 视频、视觉概念、内容制作与 AI Workflow。"
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
      "label": "创作方法",
      "href": "#workflow"
    },
    {
      "label": "背景",
      "href": "#experience"
    },
    {
      "label": "联系",
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
    "focus": "AI 内容与创意｜Creative Strategy｜Visual Direction",
    "english": "AI Creative Content · Creative Strategy · Visual Direction",
    "intro": "从创意方向、人物、音乐与视觉语言，\n到图像、动态与最终内容，\n将一个想法逐步发展成完整的表达。"
  },
  "intro": {
    "label": "01 / PROFILE",
    "title": "从长期创意实践，\n到 AI 生成内容。",
    "text": "长期从事音乐、品牌内容及海外内容创作，对音乐、画面、节奏、品牌调性和用户感受形成持续的创意判断。此后独立创建并运营面向海外用户的数字产品与内容业务，并持续探索不同形式的内容表达。\n\n现在将生成式 AI 应用于音乐视频、视觉概念、广告内容及创意实验，从 concept、visual direction、prompt development、生成与筛选，到 motion、editing 和最终交付，逐步建立自己的 AI creative workflow。\n\n长期面向海外用户及国际品牌工作，英语可作为工作语言。",
    "tags": [
      "Creative Strategy · Visual Direction",
      "AI Video · Generative Content",
      "Runway · Seedance · AI Image Generation",
      "Codex · Claude · ChatGPT",
      "DaVinci Resolve · Canva · CapCut",
      "中文 · English as a working language"
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
      "category": "AI AD CREATIVE / CONTENT EXPERIMENTS",
      "title": "AI 广告内容实验",
      "summary": "根据不同产品方向和 brief，快速发展内容概念、人物场景、视觉表达及短视频结构，并使用生成式 AI 完成创意测试与内容输出。重点在于根据产品和受众选择不同的表达方式，而不是使用同一种 AI 风格处理所有内容。",
      "role": "Creative Direction / Concept Development / Visual Direction / AI Content Production / Iteration",
      "tools": "ChatGPT / Runway / Codex / Omni / Seedance / FFmpeg",
      "note": "3 个产品方向 · 6 支短视频内容",
      "cta": "展开精选内容",
      "closeCta": "收起精选内容",
      "previewCaption": "不同产品方向 · 广告内容集合",
      "galleryIntro": "音乐 / 内容产品、金融工具与电商创意工具：三个方向，分别测试人物、场景与短视频表达。",
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
      "category": "AI WORKFLOW / CREATIVE SYSTEMS",
      "title": "AI Workflow / Skills 构建",
      "summary": "从实际内容与创意工作中的重复问题出发，将部分研究、数据整理、内容分析和生产步骤整理成可复用的 AI skills、workflow 与内部工具，提高创作与执行效率。",
      "role": "Problem Framing / Workflow Design / Codex / AI Skills / Documentation",
      "tools": "Codex / ChatGPT / Python / Local Scripts / Automation",
      "previewCaption": "内容与创意工作中的可复用方法",
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
          "alt": "可复用 Codex Skill：scripts、schemas 与使用文档"
        }
      ],
      "cta": "展开 Workflow 案例",
      "closeCta": "收起 Workflow 案例",
      "intro": "从内容发现、数据比较到制作步骤整理，识别实际工作中的重复环节，再建立可以持续使用的方法。",
      "problemLabel": "PROBLEM",
      "solutionLabel": "SOLUTION",
      "examples": [
        {
          "label": "01 / DISCOVER",
          "category": "VIRAL CONTENT DISCOVERY",
          "title": "爆款内容发现工具",
          "problem": "内容研究需要持续寻找高播放、高互动的作品作为选题和创意参考，逐个查看账号和内容耗时，也不容易快速比较。",
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
          "category": "REUSABLE CODEX SKILLS / WORKFLOWS",
          "title": "把重复步骤整理成 Codex Skill",
          "problem": "视频分析、生成与输出步骤分散，重复执行时需要清晰的方法与说明。",
          "solution": "将视频内容分析、生成和输出步骤整理成可复用的 Codex Skill，包括脚本、schemas、文档与标准化流程，方便在实际内容制作中重复使用。",
          "images": [
            {
              "src": "assets/case-3/evidence/team-package.png",
              "alt": "可复用 Codex Skill：scripts、schemas 与使用文档"
            }
          ],
          "tags": [
            "CODEX",
            "REUSABLE SKILL",
            "CONTENT PRODUCTION",
            "DOCUMENTATION"
          ],
          "sop": {
            "label": "SOP / DOCUMENTATION",
            "title": "将内容制作方法整理为 SOP",
            "text": "记录内容方向、音乐 MV、口播素材与最终剪辑合成步骤，方便重复使用与协作。",
            "image": {
              "src": "assets/case-3/evidence/original-content-sop.png",
              "alt": "原创短视频制作流程 · SOP / Documentation"
            }
          }
        }
      ]
    }
  ],
  "workflow": {
    "label": "03 / CREATIVE WORKFLOW",
    "title": "清晰的方向。\n持续的迭代。",
    "text": "从概念、音乐、人物和视觉方向开始，通过生成、判断、筛选与持续迭代，把一个抽象想法逐步转化为完整内容。",
    "steps": [
      {
        "title": "定义核心概念",
        "text": "明确作品真正要表达的内容、情绪与方向。",
        "tag": "CONCEPT"
      },
      {
        "title": "发展内容与世界",
        "text": "发展音乐、人物、场景、故事或内容结构。",
        "tag": "CONTENT & WORLD"
      },
      {
        "title": "建立视觉语言",
        "text": "确定构图、颜色、材质、人物状态、空间与整体气质。",
        "tag": "VISUAL DIRECTION"
      },
      {
        "title": "生成与判断",
        "text": "通过 prompt、图像与不同结果持续测试，并主动筛选与调整。",
        "tag": "GENERATE & SELECT"
      },
      {
        "title": "Motion / Production",
        "text": "将视觉方向转化为人物动作、镜头、场景变化与动态内容。",
        "tag": "MOTION / PRODUCTION"
      },
      {
        "title": "Refine & Deliver",
        "text": "继续调整节奏、画面与细节，形成最终可使用内容。",
        "tag": "REFINE & DELIVER"
      }
    ]
  },
  "experience": {
    "label": "04 / BACKGROUND",
    "title": "不同阶段，持续扩展同一种能力。",
    "items": [
      {
        "company": "RAE SWAN INC.",
        "extra": "2024 – 2026",
        "role": "创始人｜Digital Product, Global Content & Growth",
        "points": [
          "从 0 到 1 创建并运营面向海外用户的数字产品与内容业务。",
          "搭建 Instagram、TikTok 等海外内容渠道，Instagram 主账号实现数万级粉丝增长，多个内容达到百万级观看。",
          "建立从内容自然流量、DM / ManyChat、lead capture、Email / Newsletter Marketing 到数字产品销售的转化路径。",
          "独立完成英文产品、内容、营销及用户沟通，并持续根据反馈优化内容与 conversion。"
        ]
      },
      {
        "company": "AI / TECH COLLABORATIONS",
        "extra": "2026",
        "role": "AI Content｜Creative Production｜Workflow",
        "points": [
          "与 AI 科技产品及团队合作，参与海外内容、创意测试、内容增长及 AI workflow 相关工作。",
          "参与 Instagram 等海外内容策划、制作及增长实验，单条内容达到 100 万+观看。",
          "使用 Runway、Seedance 等生成式 AI 工具完成 AI 图片、视频、广告及产品内容制作。",
          "使用 Codex 搭建 AI skills / workflows、Viral Content Discovery、内容数据汇总等实际工作工具。"
        ]
      },
      {
        "company": "W 酒店 / 成都丽思卡尔顿 / 成都尼依格罗酒店",
        "extra": "2017 – 2022",
        "role": "品牌音乐内容策划｜Music Manager",
        "points": [
          "长期从事国际高端酒店品牌音乐内容、现场氛围及整体风格策划。",
          "在音乐、品牌和用户体验之间进行持续的内容与创意判断。",
          "长期参与音乐及现场演出制作，对音乐、节奏、视觉氛围、品牌调性及用户体验形成综合判断。",
          "与国内外品牌团队及客户进行中英文沟通。"
        ]
      }
    ]
  },
  "strengths": {
    "label": "05 / CREATIVE STRENGTHS",
    "title": "创意判断，也能落到实际输出。",
    "items": [
      {
        "title": "跨媒介创意判断",
        "text": "长期在音乐、品牌、视觉、内容与 AI 生成之间工作，对画面、声音、节奏、人物状态、品牌调性和用户感受具有持续的判断能力。"
      },
      {
        "title": "从 0 到 1",
        "text": "能够从空白开始发展概念、内容、人物与视觉方向，并持续推进到最终可使用的内容输出。"
      },
      {
        "title": "快速学习与实际应用",
        "text": "长期通过实际项目学习新的工具与方法，并快速将其转化为真实的创作和工作流程。"
      },
      {
        "title": "跨文化与英文工作",
        "text": "长期面向海外用户及国际品牌工作，能够使用英文进行沟通、内容写作及创意执行。"
      }
    ]
  },
  "contact": {
    "label": "06 / CONTACT",
    "title": "有新的内容或创意，\n可以从这里开始。",
    "email": "raeswanrae@gmail.com",
    "emailReady": true,
    "cv": "assets/cv/Wang_Ke_CV_2026.pdf",
    "cvReady": true,
    "footer": "AI Creative Content · Creative Strategy · Visual Direction",
    "phone": "13658005992",
    "growthLink": {
      "label": "Growth / Digital Marketing Portfolio ↗",
      "href": "growth/"
    }
  },
  "featured": {
    "label": "FEATURED WORK / 重点作品",
    "title": "从 0 开始，把一个想法变成 AI 音乐视频。",
    "category": "AI MUSIC VIDEO",
    "role": "Concept Development / Music & Lyrics / Visual Direction / Prompt Development / AI Video",
    "description": "从最初的想法出发，发展音乐方向与歌词，建立人物、场景和视觉语言；通过多轮 prompt 与图像迭代确定关键画面，再设计人物动作、镜头与场景变化，逐步完成多镜头 AI 音乐视频。",
    "processLabel": "查看 DIRTY GOLD 创作过程 →",
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
    "description": "每个作品建立不同的人物、音乐、空间、色彩与视觉语言。从最初的概念出发，通过图像、prompt、筛选与动态生成，逐步形成独立的视觉世界。"
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
