/** UI languages for the label switch. First one is the default. */
export const uiLanguages = [
	{ code: 'en', name: 'English', flag: '🇬🇧', country: 'gb' },
	{ code: 'ko', name: '한국어', flag: '🇰🇷', country: 'kr' },
	{ code: 'zh', name: '中文', flag: '🇨🇳', country: 'cn' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷', country: 'fr' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪', country: 'de' },
	{ code: 'tr', name: 'Türkçe', flag: '🇹🇷', country: 'tr' },
] as const;

export type UiLang = (typeof uiLanguages)[number]['code'];
export type Label = Record<UiLang, string>;

/** Section labels on the alliance page. */
export const labels = {
	languages: {
		en: 'Languages',
		ko: '언어',
		zh: '语言',
		fr: 'Langues',
		de: 'Sprachen',
		tr: 'Diller',
	},
	bear: {
		en: 'Bear Trap',
		ko: '곰',
		zh: '熊',
		fr: 'Piège à ours',
		de: 'Bärenfalle',
		tr: 'Ayı Tuzağı',
	},
	swordland: {
		en: 'Swordland',
		ko: '성검 등',
		zh: '劍域等等',
		fr: 'Swordland',
		de: 'Swordland',
		tr: 'Swordland',
	},
	tri_alliance_clash: {
		en: 'Tri-Alliance Clash',
		ko: '삼대연맹전',
		zh: '三盟',
		fr: 'Choc des trois alliances',
		de: 'Drei-Allianzen-Kampf',
		tr: 'Üçlü İttifak Çatışması',
	},
	vikings: {
		en: 'Vikings Vengeance',
		ko: '바이킹 활동 시간',
		zh: '維京人活動',
		fr: 'Vengeance des Vikings',
		de: 'Wikinger-Rache',
		tr: 'Viking İntikamı',
	},
	cesares: {
		en: 'Cesares Bosses',
		ko: '체사레 보스를 정복하세요',
		zh: '征討切薩雷',
		fr: 'Boss Cesares',
		de: 'Cesares-Bosse',
		tr: 'Cesares Bossları',
	},
	yourTime: {
		en: 'your time',
		ko: '현지 시간',
		zh: '本地时间',
		fr: 'heure locale',
		de: 'deine Zeit',
		tr: 'yerel saat',
	},
} satisfies Record<string, Label>;

/** Home page "skills" boxes. `{n}` is replaced with a number. */
export const skills = {
	kvkTitle: {
		en: 'KvK Focused',
		ko: 'KvK 집중',
		zh: '专注 KvK',
		fr: 'Axés sur le KvK',
		de: 'KvK-fokussiert',
		tr: 'KvK Odaklı',
	},
	kvkText: {
		en: 'We save for KvK preparation and fight hard in battle',
		ko: 'KvK 준비를 위해 자원을 모으고 전투에서 치열하게 싸웁니다',
		zh: '我们为 KvK 备战积攒资源，并在战斗中全力以赴',
		fr: 'Nous économisons pour la préparation du KvK et nous nous battons avec acharnement',
		de: 'Wir sparen für die KvK-Vorbereitung und kämpfen hart in der Schlacht',
		tr: 'KvK hazırlığı için biriktirir ve savaşta sıkı mücadele ederiz',
	},
	activeTitle: {
		en: 'Active',
		ko: '활발함',
		zh: '活跃',
		fr: 'Actifs',
		de: 'Aktiv',
		tr: 'Aktif',
	},
	activeText: {
		en: '{n} big alliances filled with active players from all over the world.',
		ko: '전 세계의 활발한 플레이어로 가득한 {n}개의 큰 연맹.',
		zh: '{n} 个大型联盟，汇聚来自世界各地的活跃玩家。',
		fr: '{n} grandes alliances remplies de joueurs actifs du monde entier.',
		de: '{n} große Allianzen voller aktiver Spieler aus aller Welt.',
		tr: 'Dünyanın dört bir yanından aktif oyuncularla dolu {n} büyük ittifak.',
	},
	peacefulTitle: {
		en: 'Peaceful',
		ko: '평화',
		zh: '和平',
		fr: 'Pacifiques',
		de: 'Friedlich',
		tr: 'Barışçıl',
	},
	peacefulText: {
		en: 'No town hitting within the kingdom allowed.',
		ko: '왕국 안에서 다른 도시를 공격하는 것은 금지입니다.',
		zh: '王国内禁止攻击城镇。',
		fr: 'Interdit d’attaquer les villes au sein du royaume.',
		de: 'Keine Angriffe auf Städte innerhalb des Königreichs.',
		tr: 'Krallık içinde şehirlere saldırmak yasaktır.',
	},
	unitedTitle: {
		en: 'United',
		ko: '단결',
		zh: '团结',
		fr: 'Unis',
		de: 'Vereint',
		tr: 'Birlik',
	},
	unitedText: {
		en: 'We help each other within the kingdom and fight together as one in battle.',
		ko: '왕국 안에서 서로 돕고, 전투에서는 하나가 되어 함께 싸웁니다.',
		zh: '我们在王国内互相帮助，在战斗中团结一心、并肩作战。',
		fr: 'Nous nous entraidons au sein du royaume et combattons unis dans la bataille.',
		de: 'Wir helfen uns gegenseitig im Königreich und kämpfen in der Schlacht geschlossen zusammen.',
		tr: 'Krallık içinde birbirimize yardım eder, savaşta tek vücut olarak birlikte savaşırız.',
	},
	sanctuariesTitle: {
		en: 'Shared Sanctuaries',
		ko: '성소 공유',
		zh: '共享圣所',
		fr: 'Sanctuaires partagés',
		de: 'Geteilte Heiligtümer',
		tr: 'Ortak Sığınaklar',
	},
	sanctuariesText: {
		en: 'We share sanctuaries within the kingdom.',
		ko: '왕국 안에서 성소를 함께 나눕니다.',
		zh: '我们在王国内共享圣所。',
		fr: 'Nous partageons les sanctuaires au sein du royaume.',
		de: 'Wir teilen die Heiligtümer innerhalb des Königreichs.',
		tr: 'Krallık içinde sığınakları paylaşırız.',
	},
	helpTitle: {
		en: 'Ready to help',
		ko: '언제나 도움',
		zh: '乐于助人',
		fr: 'Prêts à aider',
		de: 'Hilfsbereit',
		tr: 'Yardıma Hazır',
	},
	helpText: {
		en: 'We are always ready to teach and support each other.',
		ko: '언제나 서로 가르치고 도울 준비가 되어 있습니다.',
		zh: '我们随时愿意互相指导、互相支持。',
		fr: 'Nous sommes toujours prêts à nous enseigner et à nous soutenir mutuellement.',
		de: 'Wir sind immer bereit, einander etwas beizubringen und zu unterstützen.',
		tr: 'Birbirimize öğretmeye ve destek olmaya her zaman hazırız.',
	},
} satisfies Record<string, Label>;

/** Navigation, alliance sections and join-us box. */
export const ui = {
	navKingdom: {
		en: 'Kingdom',
		ko: '왕국',
		zh: '王国',
		fr: 'Royaume',
		de: 'Königreich',
		tr: 'Krallık',
	},
	navAlliances: {
		en: 'Alliances',
		ko: '연맹',
		zh: '联盟',
		fr: 'Alliances',
		de: 'Allianzen',
		tr: 'İttifaklar',
	},
	alliancesIntro: {
		en: 'Take a look below at our top alliances.',
		ko: '아래에서 우리의 주요 연맹을 확인하세요.',
		zh: '在下方查看我们的主要联盟。',
		fr: 'Découvrez ci-dessous nos meilleures alliances.',
		de: 'Unten findest du unsere Top-Allianzen.',
		tr: 'En iyi ittifaklarımıza aşağıdan göz atın.',
	},
	viewAll: {
		en: 'View All',
		ko: '모두 보기',
		zh: '查看全部',
		fr: 'Tout voir',
		de: 'Alle ansehen',
		tr: 'Tümünü Gör',
	},
	alliancesTagline: {
		en: 'See our alliances below to get an idea of our kingdom.',
		ko: '아래 연맹들을 보고 우리 왕국을 알아보세요.',
		zh: '浏览下方的联盟，了解我们的王国。',
		fr: 'Découvrez nos alliances ci-dessous pour vous faire une idée de notre royaume.',
		de: 'Sieh dir unten unsere Allianzen an, um unser Königreich kennenzulernen.',
		tr: 'Krallığımızı tanımak için aşağıdaki ittifaklarımıza göz atın.',
	},
	joinTitle: {
		en: 'Want to join us?',
		ko: '함께하고 싶으신가요?',
		zh: '想加入我们吗？',
		fr: 'Envie de nous rejoindre ?',
		de: 'Willst du mitmachen?',
		tr: 'Bize katılmak ister misin?',
	},
	joinText: {
		en: 'If you are interested in joining Kingdom 351 or want to learn more about our alliances, please get in touch with R5s or R4s!',
		ko: 'Kingdom 351에 가입하고 싶거나 우리 연맹에 대해 더 알고 싶다면 R5 또는 R4에게 연락하세요!',
		zh: '如果你有兴趣加入 Kingdom 351，或想进一步了解我们的联盟，请联系 R5 或 R4！',
		fr: 'Si vous souhaitez rejoindre Kingdom 351 ou en savoir plus sur nos alliances, contactez les R5 ou R4 !',
		de: 'Wenn du Kingdom 351 beitreten oder mehr über unsere Allianzen erfahren möchtest, melde dich bei den R5s oder R4s!',
		tr: "Kingdom 351'e katılmak veya ittifaklarımız hakkında daha fazla bilgi almak istiyorsan R5'ler veya R4'lerle iletişime geç!",
	},
} satisfies Record<string, Label>;

/** Short event names on alliance cards. Key = first word in `short` data. */
export const shortEvents: Record<string, Label> = {
	Bear: { en: 'Bear', ko: '곰', zh: '熊', fr: 'Ours', de: 'Bär', tr: 'Ayı' },
	Swordland: { en: 'Swordland', ko: '성검', zh: '剑域', fr: 'Swordland', de: 'Swordland', tr: 'Swordland' },
	'Tri-Alliance': { en: 'Tri-Alliance', ko: '삼대연맹', zh: '三盟', fr: 'Tri-alliance', de: 'Drei-Allianzen', tr: 'Üçlü İttifak' },
	Vikings: { en: 'Vikings', ko: '바이킹', zh: '维京', fr: 'Vikings', de: 'Wikinger', tr: 'Vikingler' },
	Cesares: { en: 'Cesares', ko: '체사레', zh: '切萨雷', fr: 'Cesares', de: 'Cesares', tr: 'Cesares' },
};
