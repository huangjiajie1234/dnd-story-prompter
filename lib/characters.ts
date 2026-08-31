export type ImagePrompt = {
  title: string;
  purpose: string;
  prompt: string;
};

export type Character = {
  slug: string;
  name: string;
  alias: string;
  role: string;
  race: string;
  className: string;
  subclass: string;
  alignment: string;
  quote: string;
  summary: string;
  evidence: string[];
  visualNotes: string;
  accent: string;
  identityCard: string;
  keepUnchanged: string;
  doNot: string;
  prompts: ImagePrompt[];
};

export const characters: Character[] = [
  {
    slug: "rourou",
    name: "肉肉",
    alias: "Rourou",
    role: "前排、告白、爆炸",
    race: "龙裔（红金血脉）",
    className: "野蛮人",
    subclass: "以血还血 / 巨武器",
    alignment: "混乱善良偏混乱",
    quote: "反正我本来就是要出来找男人的，并没有说这男人不可以是个机魂。",
    summary:
      "队伍里最高、最吵、最容易把任务升级成事故的人。博物馆里一开狂暴就往活化盔甲上砍；银行里自称保镖，把行长吓到怀疑人生；废料场里对着发条机魂唱赞美诗，最后把机魂娶进了自己的巨斧。她自称龙裔的眼神天生就凶，别人应激是别人的问题。",
    evidence: [
      "自称龙裔，被缩小术点名为「龙裔大个子」；龙鳞挡过盔甲重拳，战斗中可吐息。",
      "惯用巨斧，狂暴一开就往前送；斧头后来炸过一次，又被机魂附身、烧红。",
      "银行任务里给耀希当「保镖」，一口一个「我们家小姐」。",
      "对机魂告白：「你的机甲就像刚毅健美的肌肉……你，就是全世界最帅的机魂！」",
    ],
    visualNotes:
      "团内没有逐像素的官方人设图，只确认了龙裔、体型偏大、龙鳞、巨斧与火焰倾向。身份卡把鳞色锁成铜红、瞳色锁成琥珀，方便 Image 2 建模。",
    accent: "#c45a32",
    identityCard:
      "CHARACTER ID — Rourou / 肉肉. Adult female dragonborn barbarian, about 6 foot 4, powerfully built and broad-shouldered. Overlapping copper-red scales with darker rust along the jaw, forearms, and knuckles. Short swept-back horn ridges, no mammalian hair. Amber-gold slit pupils, ember glow faintly visible along the throat scales when she speaks or laughs. Strong snout, confident slightly chaotic grin showing a hint of fang. Dark travel leathers and a fur-lined left pauldron, brass buckles, worn harness over the chest. Always carries a massive two-handed greataxe: blackened steel head with residual ember-runes along the blade (a machine-spirit later bound into the weapon). Stance: loud, forward-leaning, ready to charge. Distinctive: the largest person in any frame, copper-red scales, greataxe, unapologetic grin.",
    keepUnchanged:
      "species (dragonborn, not human), copper-red scale color, amber-gold slit eyes, horn ridge shape, body scale pattern, greataxe silhouette, female presentation, relative height (largest of the party)",
    doNot:
      "Do not make her a human in costume. Do not add mammalian hair or cat/rabbit ears. Do not soften the snout into a human nose. Do not change scale color to green, blue, or black. Do not shrink her to average human height. Do not remove the greataxe unless Change only explicitly says so. Do not add extra horns, wings, or a tail.",
    prompts: [
      {
        title: "角色设定三视图",
        purpose: "先用这一条建立锚点底图，后续所有出图都复用身份卡。",
        prompt: `A professional character design reference sheet for a tabletop RPG, animation model-sheet aesthetic.
Show, in one image, the SAME character in four consistent views: front, three-quarter, side profile, and back. Same outfit, same proportions, aligned eye-line.
Clean warm-gray cyclorama, even studio lighting, no dramatic shadows on the face.
Label text at the top, verbatim: "ROUROU — Reference Sheet"
Character ID (verbatim): Adult female dragonborn barbarian, about 6 foot 4, powerfully built and broad-shouldered. Overlapping copper-red scales with darker rust along the jaw, forearms, and knuckles. Short swept-back horn ridges, no mammalian hair. Amber-gold slit pupils, ember glow faintly visible along the throat scales. Strong snout, confident slightly chaotic grin showing a hint of fang. Dark travel leathers and a fur-lined left pauldron, brass buckles, worn harness. Massive two-handed greataxe, blackened steel with residual ember-runes.
Keep unchanged: dragonborn anatomy, copper-red scales, amber eyes, horn ridges, greataxe, female presentation.
Do not: human face, mammalian hair, extra wings, cute chibi proportions, text typos.`,
      },
      {
        title: "半身身份肖像",
        purpose: "干净的脸与上半身，适合当系列图的 Reference A。",
        prompt: `A cinematic bust portrait, medium close-up, 3/4 view, eye-level.
Character ID (verbatim every time): Rourou, adult female copper-red dragonborn barbarian, 6'4", powerful build, rust-dark scale shading on jaw and knuckles, short swept-back horn ridges, amber-gold slit pupils, faint ember glow in the throat, confident fang-hint grin, dark leather harness, fur-lined pauldron, brass buckles. Greataxe haft visible over one shoulder.
Scene: soot-colored tavern interior, brass lamp rim-light, haze in the air, shallow depth of field.
Style: painterly fantasy realism, tactile scale texture, filmic contrast, no illustration outline.
Keep unchanged: face bone structure, scale pattern, eye color, horn shape.
Do not: humanize the face, add hair, change species, beauty-filter the snout.`,
      },
      {
        title: "狂暴挥斧",
        purpose: "只改动作与场面，身份锁定。",
        prompt: `Cinematic full-body action still from a tabletop heist campaign.
Character ID (verbatim): Rourou — adult female copper-red dragonborn barbarian, 6'4", powerful, rust-dark jaw scales, swept-back horn ridges, amber-gold slit eyes, ember throat glow, dark leather + fur pauldron, brass buckles, massive ember-rune greataxe.
Change only: action and scene. She is mid-rage, greataxe mid-swing against an animated museum plate-armor construct in a shattered marble hall at night. Sparks, cracked floor tiles, a distant T-rex silhouette crashing through the front doors.
Keep unchanged: species, scale color, face, horns, outfit, weapon identity.
Do not: add other party members as main subjects, change her into a man, replace the axe with a sword.`,
      },
      {
        title: "向机魂求婚",
        purpose: "标志性名场面，仍只改情绪与道具。",
        prompt: `A single-character emotional scene, medium shot.
Character ID (verbatim): Rourou, adult female copper-red dragonborn barbarian, amber-gold slit eyes, rust-dark jaw scales, horn ridges, dark leather harness, fur pauldron. She holds her huge greataxe like a bouquet; a faint clockwork-spirit glow lives inside the blade.
Change only: expression and prop handling. She looks earnest and a little ridiculous, proposing marriage to the machine-spirit in the axe, scrapyard lanterns and rusted airship ribs behind her.
Keep unchanged: face, scales, body, outfit language.
Do not: turn this into a comedy chibi, do not add a human groom, do not change the axe into a bouquet of flowers.`,
      },
    ],
  },
  {
    slug: "mialie",
    name: "米艾莉",
    alias: "Mialie",
    role: "暮光、治疗、吐槽",
    race: "人类",
    className: "牧师",
    subclass: "暮光领域",
    alignment: "守序善良，偶尔想改混乱中立",
    quote: "科技是没有罪的，需要被约束的是使用它的人。",
    summary:
      "队伍里最像「还想把事情做对」的人。敏捷不高，闪现和沉默倒是常用；圣徽一举，暮光领域就罩住全队。她会给刚被揍过的人质疗伤好继续演戏，也会在队友把城市经济改成烤老鼠本位时选择职业性沉默。不是光明牧，火光不刺眼，暮色才是她的颜色。",
    evidence: [
      "明确展开过暮光领域，队友获得临时生命；会召灵体武器。",
      "自称不是光明牧，火也不炫；曾说「为了配合团队调性，改混乱中立还来得及吗」。",
      "机动性差但有闪现；银行里开沉默、给行长疗伤好继续带路。",
      "队友调侃她还没拿到「命定的那根鞭子」。",
    ],
    visualNotes:
      "团内未写死发色与脸型。按暮光领域与「不刺眼」的施法气质，把发色锁成深栗色、瞳色锁成暮灰紫，圣徽做成新月叠暗日，方便以后出系列图。",
    accent: "#7a6bb5",
    identityCard:
      "CHARACTER ID — Mialie / 米艾莉. Human woman about 28, twilight-domain cleric. Oval face, composed slightly tired expression, dusky violet-gray eyes, faint dusk-blue under-eye shadow. Dark chestnut hair in a low practical braid with a few loose strands at the temples. Fair-warm skin. Silver holy symbol at the throat: a crescent moon overlapping a dim sun-and-gear. Traveling cleric layers: deep indigo wool coat, pewter clasps, muted gold thread at the cuffs, charcoal skirt-split for walking, scuffed boots. A coiled dusk-leather whip rests at her left hip (not yet legendary, but clearly hers). Hands look like a healer's — clean nails, a few old nicks. Distinctive: the calmest face in the party, indigo-and-pewter palette, crescent-sun holy symbol, dusk-leather whip.",
    keepUnchanged:
      "human woman, age window 26-30, oval face, dusky violet-gray eyes, dark chestnut braid, indigo-pewter coat, crescent-sun-gear holy symbol, dusk-leather whip, no animal ears",
    doNot:
      "Do not make her a glowing light-cleric with gold radiance and white robes. Do not add cat ears, rabbit ears, horns, or scales. Do not change hair to platinum or bright white. Do not give her heavy plate armor. Do not make the holy symbol a standard Christian cross.",
    prompts: [
      {
        title: "角色设定三视图",
        purpose: "建立牧师的服装剪裁与圣徽位置。",
        prompt: `A professional character design reference sheet, animation model-sheet aesthetic.
Four consistent views of the SAME woman: front, 3/4, side, back. Same coat, same braid, aligned proportions.
Neutral warm-gray cyclorama, flat even lighting.
Label text verbatim: "MIALIE — Reference Sheet"
Character ID (verbatim): Human woman about 28, twilight cleric. Oval face, composed tired look, dusky violet-gray eyes, dark chestnut hair in a low practical braid, loose temple strands. Fair-warm skin. Silver holy symbol: crescent moon overlapping a dim sun-and-gear. Deep indigo wool coat, pewter clasps, muted gold cuff thread, charcoal split skirt, scuffed boots, coiled dusk-leather whip at left hip.
Keep unchanged: face, eye color, braid, coat color, holy symbol design.
Do not: glowing halo, white-gold light cleric look, animal features, plate armor.`,
      },
      {
        title: "半身身份肖像",
        purpose: "锚点底图，强调暮光而不是圣光。",
        prompt: `Painterly bust portrait, 3/4 view, soft dusk key light from the left.
Character ID (verbatim every time): Mialie, human woman ~28, oval face, dusky violet-gray eyes, faint dusk-blue under-eyes, dark chestnut low braid, silver crescent-sun-gear holy symbol, deep indigo wool coat, pewter clasps.
Scene: a soot-and-brass chapel interior, one stained-glass pane of indigo and amber, no blinding holy glow.
Style: quiet cinematic realism, wool texture visible, restrained palette.
Keep unchanged: face, eyes, hair, holy symbol.
Do not: beauty-pageant makeup, white robes, radiant gold aura, extra jewelry crowns.`,
      },
      {
        title: "领域展开",
        purpose: "只改法术效果，人不能漂。",
        prompt: `Medium-wide cinematic still.
Character ID (verbatim): Mialie, human twilight cleric, chestnut braid, violet-gray eyes, indigo wool coat, pewter clasps, crescent-sun-gear holy symbol raised in her right hand, dusk-leather whip at hip.
Change only: magic and scene. A 30-foot sphere of soft twilight haze follows her through a scrapyard fight; allies are rim-lit in muted violet, no sparkle, no blinding gold. A faint spiritual weapon — a dusk-colored floating hammer — hangs at her shoulder.
Keep unchanged: face, wardrobe, holy symbol geometry.
Do not: turn the domain into bright daylight, do not add wings, do not change her into an elf.`,
      },
      {
        title: "给人质疗伤",
        purpose: "银行名场面：疗伤是为了继续演戏。",
        prompt: `Intimate two-shot, but Mialie is the visual lead.
Character ID (verbatim): Mialie — human woman 28, chestnut braid, dusky violet-gray eyes, indigo coat, pewter clasps, crescent-sun holy symbol.
Change only: action. She kneels in a mahogany bank office, quietly healing a terrified dwarven manager's bruises so the woman can walk them into the vault without looking freshly beaten. Brass desk lamp, ledgers, one potted plant.
Keep unchanged: Mialie's face and clothes.
Do not: make this a romantic scene, do not add glowing cruciform light, do not show gore.`,
      },
    ],
  },
  {
    slug: "closs",
    name: "克洛斯",
    alias: "寒芒 · 克洛斯",
    role: "侦察、易容、补刀",
    race: "兔人（Harengon）",
    className: "游侠",
    subclass: "猎人印记 / 夙敌 / 恐惧奇兵",
    alignment: "中立偏善，职业骗子",
    quote: "贵族都这么不会骗人吗。",
    summary:
      "群名片写着「青铜私语 · 寒芒」。竖起耳朵就能把博物馆外围听一遍；兔人一跳，能带着两个变小的队友越过活化盔甲。她觉得绿铠甲比谁的机甲都帅，后来把镶钉皮甲和散弹枪也收拾进了霾都的生存方案。队伍里的计划往往由她先拆成「断电、吸引注意、两个人去偷」。",
    evidence: [
      "多次被叫「兔人小姐 / 兔子人小姐」；拥有兔人跳跃，可带人逃。",
      "游侠：猎人印记、夙敌、神莓；后补散弹枪与镶钉皮甲韧性符文。",
      "自称绿铠甲更帅；青铜私语是她对外的名号。",
      "习惯易容、侦察、拆计划；会吐槽贵族不会骗人。",
    ],
    visualNotes:
      "耳型、兔人跳跃、绿色调护甲是硬锚点。把毛色锁成灰褐、瞳色锁成黄绿，胸前加一枚青铜齿轮私语徽，避免每次出图耳朵形状乱漂。",
    accent: "#6f8f4a",
    identityCard:
      "CHARACTER ID — Closs / 寒芒·克洛斯. Adult female harengon (rabbit-folk) ranger, athletic compact build, about 5 foot 6 not counting ears. Long upright taupe-ash rabbit ears with dusty-rose inner fur, always slightly turning toward sound. Short ash-brown hair between the ears, a few wind-cut bangs. Sharp chartreuse-gold eyes, light freckles across a short human-like nose, soft fur along jawline and hands. Green-tinted studded leather armor over a soot-brown shirt, bronze-whisper pin at the collar: a small bronze gear with a hush-mark. Buckler on the left forearm, a short hunting blade and a compact shotgun worn practical, not ornamental. Expression: alert, slightly cynical, as if already planning the exit. Distinctive: long taupe rabbit ears, green leather, bronze gear pin, chartreuse eyes.",
    keepUnchanged:
      "harengon ears (length, taupe-ash, dusty-rose inners), chartreuse-gold eyes, ash-brown short hair, freckles, green-tinted studded leather, bronze gear-and-hush pin, female presentation",
    doNot:
      "Do not make her a human with a headband. Do not change ears to cat ears. Do not recolor the armor to gold plate. Do not give her a cute round Disney rabbit face. Do not add a cotton-ball tail that dominates the silhouette. Do not age her into a child.",
    prompts: [
      {
        title: "角色设定三视图",
        purpose: "把耳长、护甲剪裁和徽章一次钉死。",
        prompt: `Professional character reference sheet, model-sheet lighting.
Four views: front, 3/4, side, back, same harengon woman, same green studded leather.
Warm-gray cyclorama, even light, ears fully visible and uncropped.
Label text verbatim: "CLOSS — Reference Sheet"
Character ID (verbatim): Adult female harengon ranger. Long upright taupe-ash rabbit ears, dusty-rose inner fur. Short ash-brown hair, chartreuse-gold eyes, light freckles, soft fur at jaw and hands. Green-tinted studded leather, soot-brown shirt, bronze gear-and-hush pin at the collar, buckler, compact shotgun and short blade.
Keep unchanged: ear length and color, eye color, armor tint, pin design.
Do not: cat ears, gold plate, child proportions, floppy cartoon ears.`,
      },
      {
        title: "半身身份肖像",
        purpose: "锚点底图，耳朵必须完整入画。",
        prompt: `Cinematic bust, 3/4 view, both rabbit ears fully in frame.
Character ID (verbatim every time): Closs, female harengon ranger, taupe-ash upright ears with dusty-rose inners, short ash-brown hair, chartreuse-gold eyes, freckles, green studded leather, bronze gear-and-hush pin.
Scene: night museum colonnade, one brass lantern, she is half-hidden beside an armor stand.
Style: grounded fantasy realism, fur micro-texture, no anime sparkle.
Keep unchanged: ear shape, face, pin.
Do not: crop the ears, humanize her into an elf, add a hood that hides the species.`,
      },
      {
        title: "兔人带人跳跃",
        purpose: "只改动作：带着缩小的队友越过盔甲。",
        prompt: `Dynamic full-body action shot, low angle.
Character ID (verbatim): Closs — female harengon, taupe-ash ears, chartreuse eyes, green studded leather, bronze whisper pin, buckler and shotgun.
Change only: action and scene. She is mid rabbit-leap up a museum stairwell, two shrunken allies tucked under her arms, animated suits of armor reaching from below. Night, marble dust, sparks from clashing plate.
Keep unchanged: her face, ears, armor.
Do not: replace her with a generic rogue, do not remove the ears, do not make the leap look like flying.`,
      },
      {
        title: "霾都易容出门",
        purpose: "只改场景与配件，脸和耳朵仍要可识别。",
        prompt: `Street-level medium shot in a smoggy brass city.
Character ID (verbatim): Closs, female harengon ranger, taupe-ash ears, chartreuse-gold eyes, freckles, green studded leather, bronze gear pin.
Change only: setting and a short travel cloak in soot-olive (ears still visible). She checks a disguise kit on a crate behind Bullet & Barrel tavern, pistol-shotgun slung, eyes on the alley.
Keep unchanged: species, face, armor color language.
Do not: hide ears completely, do not switch her to a catfolk, do not add heavy makeup that changes bone structure.`,
      },
    ],
  },
  {
    slug: "tiru",
    name: "缇露",
    alias: "Tiru",
    role: "激励、剑舞、烤老鼠",
    race: "斑猫人（Tabaxi）",
    className: "吟游诗人",
    subclass: "剑歌学院",
    alignment: "混乱善良",
    quote: "明明完成任务了怎么感觉你不是很高兴喵。",
    summary:
      "第一场就被地下室宝箱怪咬了一口，惨叫把全队招来。她用「喵」给每句台词收尾，腰上会挂两只烤老鼠当口粮，夜里偷偷给自己染过头发，还认真觉得胡须烧起来很帅。剑舞、激励、鲁特琴和雷鸣音波轮着来；废料场里她把瓶子和蟑螂、老鼠排成一套自己才懂的后勤系统。",
    evidence: [
      "斑猫人：有尾巴、胡须、猫耳；被盔甲守卫差点抓住尾巴；别人说「身前有一大只斑猫人」。",
      "剑歌诗人：激励不能给自己，灵活/防御剑舞；会弹鲁特琴。",
      "口头禅带「喵」；腰挂烤老鼠；夜里染发，还把绿色染发剂送给拆墙佬。",
      "自称天才，混乱善；博物馆里被宝箱怪咬过。",
    ],
    visualNotes:
      "猫科特征、鲁特琴、烤老鼠和染色是可识别锚。毛色锁成奶油底+可可色玫瑰斑，左耳金环，鬃毛带一条青绿染绺——对应团里「偷偷染发」的戏。",
    accent: "#d4a017",
    identityCard:
      "CHARACTER ID — Tiru / 缇露. Tall slim adult female tabaxi bard, about 6 foot 1, long-limbed. Cream fur with cocoa-brown rosettes on shoulders, cheeks, and tail. Long ringed tail. Large triangular cat ears, gold hoop in the left ear. Visible whiskers, small fangs when she grins. Warm cocoa mane with one deliberate teal-green dyed streak falling past the right cheek. Mischievous green-gold eyes. Colorful patched performance coat over supple leather, travel scarf in mustard and wine, lute strapped to her back, light dueling blade at the hip. Optional signature prop: two roasted rats hanging from her belt like travel rations. Expression: mid-smirk, about to end a sentence with a catlike verbal tic. Distinctive: tall tabaxi, teal streak, gold left earring, lute, roasted-rat belt charm.",
    keepUnchanged:
      "tabaxi anatomy, cream-and-cocoa rosette pattern, teal-green mane streak, gold left-ear hoop, green-gold eyes, lute on back, tall slim proportion, female presentation",
    doNot:
      "Do not make her a human kemonomimi with only small ears. Do not remove whiskers or tail. Do not recolor the fur to solid black or orange tabby. Do not lose the teal streak. Do not turn the lute into a keytar or electric guitar. Do not make her short and chubby.",
    prompts: [
      {
        title: "角色设定三视图",
        purpose: "一次画清斑纹、尾巴和染绺位置。",
        prompt: `Professional character reference sheet.
Four views of the SAME tall tabaxi: front, 3/4, side, back. Tail fully visible in side and back views.
Warm-gray cyclorama, even lighting.
Label text verbatim: "TIRU — Reference Sheet"
Character ID (verbatim): Tall slim female tabaxi bard. Cream fur, cocoa rosettes, long ringed tail, large triangular ears, gold hoop in left ear, whiskers, cocoa mane with one teal-green streak on the right, green-gold eyes. Patched colorful performance coat, leather, mustard-wine scarf, lute on back, light blade, two roasted rats at the belt.
Keep unchanged: rosette map, teal streak side, earring side, lute.
Do not: human face with cat ears only, missing tail, chibi proportions.`,
      },
      {
        title: "半身身份肖像",
        purpose: "锚点底图，胡须和染绺必须在。",
        prompt: `Bust portrait, 3/4 view, whiskers sharp, teal streak visible.
Character ID (verbatim every time): Tiru, tall female tabaxi, cream fur, cocoa cheek rosettes, gold left-ear hoop, teal-green mane streak, green-gold mischievous eyes, patched performance coat, lute headstock behind the shoulder.
Scene: scrapyard campfire, colored glass fragments catching light like a chandelier.
Style: tactile fur, bardic color without turning cartoon.
Keep unchanged: face markings, streak, earring.
Do not: humanize the muzzle, remove whiskers, change eye color to blue.`,
      },
      {
        title: "宝箱怪开场",
        purpose: "只改场面：地下室被咬的第一声惨叫。",
        prompt: `Cinematic medium shot in a museum loading cellar.
Character ID (verbatim): Tiru — tall female tabaxi bard, cream-and-cocoa fur, teal streak, gold left hoop, lute on back, colorful patched coat.
Change only: action. A mimic-chest has just bitten her arm; she is leaping back with her tail puffed, mid-yowl, gold coins spilling. Dim lantern, crates, one open loading door.
Keep unchanged: her face, fur pattern, streak.
Do not: make the mimic cute, do not hide her species, do not add heavy blood.`,
      },
      {
        title: "鲁特琴与烤老鼠",
        purpose: "只改道具情绪：挂机 BGM 名场面。",
        prompt: `Relaxed three-quarter full body.
Character ID (verbatim): Tiru, tall tabaxi bard, cream fur, cocoa rosettes, teal streak, gold hoop, green-gold eyes, lute in hands, two roasted rats at the belt, patched coat.
Change only: pose and venue. She sits on a crate in a noisy Alkenstar dance hall, casually providing lute BGM while chaos happens off-frame, tail curling, smirking.
Keep unchanged: identity lock.
Do not: replace lute with a modern guitar, do not remove the rats if the belt is visible, do not change her into a housecat.`,
      },
    ],
  },
  {
    slug: "yaoxi",
    name: "耀希",
    alias: "Yaoxi",
    role: "贵族、幻术、乌鸦",
    race: "人类",
    className: "邪术师",
    subclass: "巨灵锁（火脉）",
    alignment: "中立，气场是贵族",
    quote: "上次抢博物馆这次抢银行，我们以后出去还做不做人了。",
    summary:
      "队伍里走在最前面、别人会自动让路的那个人。契约来自巨灵，魔能爆、次级幻影、灼热射线和火球轮着来；肩上那只乌鸦会抽嘴巴、扇风点火、吐闪电，还会唱俄语。银行里她是「外地来的小姐」，肉肉是保镖。脸上那道疤到飞艇出发时还没完全消去。",
    evidence: [
      "巨灵锁邪术师：魔能爆、巨灵之怒、法师之手、幻术、后期火球；贵族背景可 RP 过门卫。",
      "魔宠是乌鸦，可协助攻击、侦察、喂药、吐息。",
      "肉肉称她「我们家小姐」；气场能让商人和围观人群让路。",
      "飞艇篇仍有未消完的面部伤疤。",
    ],
    visualNotes:
      "贵族气场、乌鸦、巨灵火脉和左脸未愈伤疤是硬锚。发色锁成直黑、瞳色锁成琥珀，外套金线用「灯与焰」纹样，避免和米艾莉的暮光紫撞车。",
    accent: "#c9a15b",
    identityCard:
      "CHARACTER ID — Yaoxi / 耀希. Human woman about 25, noble-born genie-pact warlock. Straight shoulder-length black hair, center part, a few strands across the brow. Pale ivory skin. Sharp almond amber eyes. A fresh pink-brown scar across the left cheek, not fully healed, still slightly raised. Dark tailored travel coat with gold-thread lamp-and-flame embroidery at the cuffs and collar, brass rings, high collar, travel-worn but expensive. A living raven familiar often perches on the right shoulder. Posture is aristocratic even in a scrapyard. Expression: composed, faintly amused, as if everyone else is slightly late to the plan. Distinctive: left-cheek scar, amber eyes, black hair, gold lamp embroidery, raven.",
    keepUnchanged:
      "human woman, straight black shoulder-length hair, amber almond eyes, left-cheek scar (position and length), dark coat with gold lamp-and-flame embroidery, raven familiar when present, no animal ears",
    doNot:
      "Do not heal or omit the left-cheek scar. Do not add horns, pointed ears, or cat features. Do not recolor hair to white or red. Do not make the coat bright crimson sorcerer robes. Do not replace the raven with an owl or imp. Do not make her look teenage.",
    prompts: [
      {
        title: "角色设定三视图",
        purpose: "把伤疤位置和金线纹样一次画死。",
        prompt: `Professional character reference sheet, model-sheet lighting.
Four views of the SAME noble warlock: front, 3/4, side, back.
Warm-gray cyclorama. Scar must be visible on front and 3/4.
Label text verbatim: "YAOXI — Reference Sheet"
Character ID (verbatim): Human woman ~25. Straight shoulder-length black hair, center part. Pale ivory skin, amber almond eyes, fresh pink-brown scar across left cheek. Dark tailored coat, gold-thread lamp-and-flame embroidery, brass rings, high collar. Raven on right shoulder in the front view.
Keep unchanged: scar placement, hair, eye color, embroidery motif.
Do not: hide the scar with hair, add horns, change the raven into another animal.`,
      },
      {
        title: "半身身份肖像",
        purpose: "锚点底图，疤和乌鸦都在。",
        prompt: `Cinematic bust, 3/4 view favoring the left cheek.
Character ID (verbatim every time): Yaoxi, human noble warlock, straight black hair, amber eyes, raised pink-brown scar on left cheek, dark tailored coat, gold lamp-and-flame embroidery, raven on right shoulder.
Scene: brass-and-soot bank lobby, one shaft of dirty daylight, shallow depth of field.
Style: portrait realism, expensive fabric wear, no glamour retouching on the scar.
Keep unchanged: face, scar, hair, embroidery.
Do not: airbrush the scar away, anime-enlarge the eyes, add a glowing pentagram halo.`,
      },
      {
        title: "乌鸦与魔能爆",
        purpose: "只改法术与动作。",
        prompt: `Action medium-wide shot.
Character ID (verbatim): Yaoxi — human woman 25, black hair, amber eyes, left-cheek scar, dark gold-embroidered coat. Raven diving to harry an animated armor's ankle while she fires a crackling eldritch blast from one hand.
Change only: action and magic. Museum night, marble hall, two plate constructs.
Keep unchanged: her face and wardrobe.
Do not: replace eldritch blast with a fireball unless asked, do not remove the scar, do not add extra familiars.`,
      },
      {
        title: "银行里的小姐",
        purpose: "只改社交场面，气场要在。",
        prompt: `Interior medium shot, formal but tense.
Character ID (verbatim): Yaoxi, human noble warlock, black hair, amber eyes, left-cheek scar, dark tailored coat with gold lamp embroidery, raven quiet on her shoulder.
Change only: scene. She stands in a shabby Gold Jug savings-bank lobby holding a gem like a customer who might take her money elsewhere, aristocratic posture, one eyebrow slightly raised.
Keep unchanged: identity lock.
Do not: make her look like a smiling idol, do not hide the scar, do not change the coat into a ballgown.`,
      },
    ],
  },
];

export function getCharacter(slug: string) {
  return characters.find((c) => c.slug === slug);
}
