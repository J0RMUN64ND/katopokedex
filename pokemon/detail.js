const NAMES = {
  1:'이상해씨',2:'이상해풀',3:'이상해꽃',
  4:'파이리',5:'리자드',6:'리자몽',
  7:'꼬부기',8:'어니부기',9:'거북왕',
  10:'캐터피',11:'단데기',12:'버터플',
  13:'뿔충이',14:'딱충이',15:'독침붕',
  16:'구구',17:'피죤',18:'피죤투',
  19:'꼬렛',20:'레트라',
  21:'깨비참',22:'깨비드릴조',
  23:'아보',24:'아보크',
  25:'피카츄',26:'라이츄',
  27:'모래두지',28:'고지',
  29:'니드런♀',30:'니드러나',31:'니드퀸',
  32:'니드런♂',33:'니드리노',34:'니드킹',
  35:'삐삐',36:'픽시',
  37:'식스테일',38:'나인테일',
  39:'푸린',40:'푸크린',
  41:'주뱃',42:'골뱃',
  43:'뚜벅쵸',44:'냄새꼬',45:'라플레시아',
  46:'파라스',47:'파라섹트',
  48:'콘팡',49:'도나리',
  50:'디그다',51:'닥트리오',
  52:'나옹',53:'페르시온',
  54:'고라파덕',55:'골덕',
  56:'망키',57:'성원숭',
  58:'가디',59:'윈디',
  60:'발챙이',61:'슈륙챙이',62:'강챙이',
  63:'케이시',64:'윤겔라',65:'후딘',
  66:'알통몬',67:'근육몬',68:'괴력몬',
  69:'모다피',70:'우츠동',71:'우츠보트',
  72:'왕눈해',73:'독파굴',
  74:'꼬마돌',75:'데구리',76:'딱구리',
  77:'포니타',78:'날씽마',
  79:'야돈',80:'야도란',
  81:'코일',82:'레어코일',
  83:'파오리',
  84:'두두',85:'두트리오',
  86:'쥬쥬',87:'쥬레곤',
  88:'질퍽이',89:'질뻐기',
  90:'셀러',91:'파르셀',
  92:'고스',93:'고우스트',94:'팬텀',
  95:'롱스톤',
  96:'슬리프',97:'슬리퍼',
  98:'크랩',99:'킹크랩',
  100:'찌리리공',101:'붐볼',
  102:'아라리',103:'나시',
  104:'탕구리',105:'텅구리',
  106:'시라소몬',107:'홍수몬',108:'내루미',
  109:'또가스',110:'또도가스',
  111:'뿔카노',112:'코뿌리',
  113:'럭키',114:'덩쿠리',115:'캥카',
  116:'쏘드라',117:'시드라',
  118:'콘치',119:'왕콘치',
  120:'별가사리',121:'아쿠스타',
  122:'마임맨',123:'스라크',124:'루주라',
  125:'에레브',126:'마그마',127:'쁘사이저',128:'켄타로스',
  129:'잉어킹',130:'갸라도스',
  131:'라프라스',132:'메타몽',
  133:'이브이',134:'샤미드',135:'쥬피썬더',136:'부스터',
  137:'폴리곤',
  138:'암나이트',139:'암스타',
  140:'투구',141:'투구푸스',
  142:'프테라',143:'잠만보',
  144:'프리져',145:'썬더',146:'파이어',
  147:'미뇽',148:'신뇽',149:'망나뇽',
  150:'뮤츠',151:'뮤'
};

const EVO_PREV = {
  2:1,3:2, 5:4,6:5, 8:7,9:8,
  11:10,12:11, 14:13,15:14, 17:16,18:17,
  20:19, 22:21, 24:23, 26:25, 28:27,
  30:29,31:30, 33:32,34:33,
  36:35, 38:37, 40:39, 42:41,
  44:43,45:44, 47:46, 49:48, 51:50,
  53:52, 55:54, 57:56, 59:58,
  61:60,62:61, 64:63,65:64, 67:66,68:67,
  70:69,71:70, 73:72, 75:74,76:75,
  78:77, 80:79, 82:81, 85:84, 87:86,
  89:88, 91:90, 93:92,94:93, 97:96,
  99:98, 101:100, 103:102, 105:104,
  110:109, 112:111, 117:116, 119:118,
  121:120, 130:129, 134:133,135:133,136:133,
  139:138, 141:140, 148:147,149:148
};

const EVO_NEXT = {
  1:[2],2:[3], 4:[5],5:[6], 7:[8],8:[9],
  10:[11],11:[12], 13:[14],14:[15], 16:[17],17:[18],
  19:[20], 21:[22], 23:[24], 25:[26], 27:[28],
  29:[30],30:[31], 32:[33],33:[34],
  35:[36], 37:[38], 39:[40], 41:[42],
  43:[44],44:[45], 46:[47], 48:[49], 50:[51],
  52:[53], 54:[55], 56:[57], 58:[59],
  60:[61],61:[62], 63:[64],64:[65], 66:[67],67:[68],
  69:[70],70:[71], 72:[73], 74:[75],75:[76],
  77:[78], 79:[80], 81:[82], 84:[85], 86:[87],
  88:[89], 90:[91], 92:[93],93:[94], 96:[97],
  98:[99], 100:[101], 102:[103], 104:[105],
  109:[110], 111:[112], 116:[117], 118:[119],
  120:[121], 129:[130], 133:[134,135,136],
  138:[139], 140:[141], 147:[148],148:[149]
};

function pad(n) { return String(n).padStart(4, '0'); }

function buildChain(n) {
  const nexts = EVO_NEXT[n];
  if (!nexts) return [n];
  if (nexts.length === 1) return [n, ...buildChain(nexts[0])];
  return [n, nexts];
}

document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'evo-hover-tooltip';
  document.body.appendChild(tooltip);

  function inhover(el, onEnter, onLeave) {
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousemove', (e) => {
      posTooltip(e.clientX, e.clientY);
    });
  }

  function posTooltip(x, y) {
    tooltip.style.left = (x + 16) + 'px';
    tooltip.style.top  = (y - 120) + 'px';
  }

  function applyInhover(link) {
    const numStr = link.dataset.num;
    inhover(
      link,
      (e) => {
        tooltip.innerHTML = `<img src="../media/${numStr}.webp" alt="" onerror="this.onerror=null;this.src='../media/egg.png'">`;
        tooltip.style.display = 'block';
        posTooltip(e.clientX, e.clientY);
      },
      () => { tooltip.style.display = 'none'; }
    );
  }

  const numEl = document.querySelector('.detail-num');
  if (!numEl) return;
  const num = Number.parseInt(numEl.textContent.replace(/\D/g, ''), 10);

  if (!EVO_PREV[num] && !EVO_NEXT[num]) return;

  // Find chain root
  let root = num;
  while (EVO_PREV[root]) root = EVO_PREV[root];

  const chain = buildChain(root);

  // Render chain nodes
  let html = '<div class="detail-section-title">진화</div><div class="evo-chain">';

  chain.forEach((item, i) => {
    if (i > 0) html += '<span class="evo-arrow">→</span>';

    const items = Array.isArray(item) ? item : [item];
    items.forEach((n, j) => {
      if (j > 0) html += '<span class="evo-sep"> / </span>';
      if (n === num) {
        html += `<span class="evo-node evo-current">${NAMES[n]}</span>`;
      } else {
        const p = pad(n);
        html += `<a class="evo-node evo-link" href="${p}.html" data-num="${p}">${NAMES[n]}</a>`;
      }
    });
  });

  html += '</div>';

  const section = document.createElement('div');
  section.className = 'detail-section';
  section.innerHTML = html;

  const detailInfo = document.querySelector('.detail-info');
  if (detailInfo) detailInfo.appendChild(section);

  section.querySelectorAll('.evo-link').forEach(applyInhover);
});
