const view=document.getElementById('view');
const buttons=[...document.querySelectorAll('[data-route]')];
const menu=document.getElementById('mobileNav');
const menuButton=document.getElementById('menuButton');
const closeMenu=document.getElementById('closeMenu');

const vocab=[['이름','name','Strong'],['학생','student','Strong'],['친구','friend','Review'],['책','book','Strong'],['가방','bag','Learning'],['물','water','Strong'],['커피','coffee','Learning'],['회사원','office worker','Review']];

const pages={
home:()=>`
<section class="page">
  <header class="page-header">
    <div><span class="korean-label">오늘의 한국어 · TODAY</span><h1>Learn Korean without making your day feel like homework.</h1></div>
    <p>Hallium keeps one clear next step in front of you, while your grammar, vocabulary and TOPIK practice stay connected in the background.</p>
  </header>
  <div class="hero-grid">
    <article class="hero-panel">
      <div><span class="eyebrow">Continue where you left off</span><h2>Your morning, in Korean.</h2><p>Finish the Foundation lesson, review five words, then test yourself in one short round.</p></div>
      <div class="actions"><button class="btn" data-go="foundation">Continue lesson</button><button class="btn secondary" data-go="vocabulary">Quick review</button></div>
    </article>
    <div class="side-stack">
      <article class="soft-card tint-lavender"><span class="eyebrow">Current level</span><h3>Foundation · Lower Int.</h3><div class="progress-line"><span style="width:62%"></span></div><p>8 of 13 lesson blocks complete.</p></article>
      <article class="soft-card tint-sage"><span class="eyebrow">Review queue</span><h3>7 items waiting</h3><p>Mostly place particles and everyday nouns. About six minutes.</p></article>
    </div>
  </div>
  <div class="section-title"><div><span class="eyebrow">Study directly, then test it</span><h2>One system, four focused tools.</h2></div><p>No floating bar. No overlap. Pick a lane and stay in context.</p></div>
  <div class="module-grid">
    <article class="module-card"><div><span class="meta">WORDS · 12 min</span><h3>Vocabulary</h3><p>Useful words grouped by the situations you actually meet.</p></div><button class="btn secondary" data-go="vocabulary">Open words</button></article>
    <article class="module-card"><div><span class="meta">PATTERNS · 15 min</span><h3>Grammar</h3><p>See the pattern, hear it, then build your own sentence.</p></div><button class="btn secondary" data-go="grammar">Open grammar</button></article>
    <article class="module-card"><div><span class="meta">CHECK · 8 min</span><h3>TOPIK & Test</h3><p>Short checks that pull from what you have actually studied.</p></div><button class="btn secondary" data-go="test">Start check</button></article>
  </div>
</section>`,
foundation:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">기초 · FOUNDATION</span><h1>Build the base once. Reuse it everywhere.</h1></div><p>A calmer lesson map replaces the old stacked cards. Each block explains what it unlocks next.</p></header>
  <div class="hero-grid">
    <article class="hero-panel"><div><span class="eyebrow">Lesson 08</span><h2>Place · 에 / 에서</h2><p>Learn the difference between destination/location and where an action happens.</p></div><div class="actions"><button class="btn">Resume lesson</button><button class="btn secondary">Preview examples</button></div></article>
    <div class="side-stack"><article class="soft-card tint-rose"><span class="eyebrow">Next up</span><h3>Time markers</h3><p>Connect when something happens with where it happens.</p></article><article class="soft-card"><span class="eyebrow">Confidence</span><h3>72%</h3><p>Based on recent review answers, not lesson completion alone.</p></article></div>
  </div>
  <div class="section-title"><h2>Foundation path</h2><p>Progressive, but never visually crowded.</p></div>
  <div class="study-list">
    <div class="study-row"><strong>01 · Hangul refresh</strong><span>Sounds, spacing, reading rhythm</span><span class="pill">Complete</span></div>
    <div class="study-row"><strong>02 · 이에요 / 예요</strong><span>Identity and basic statements</span><span class="pill">Complete</span></div>
    <div class="study-row"><strong>03 · 은/는 and 이/가</strong><span>Topic and subject basics</span><span class="pill">Review</span></div>
    <div class="study-row"><strong>04 · Place · 에 / 에서</strong><span>Location and action place</span><span class="pill">Current</span></div>
    <div class="study-row"><strong>05 · Time markers</strong><span>Days, time and sequence</span><span class="pill">Next</span></div>
  </div>
</section>`,
vocabulary:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">단어 · VOCABULARY</span><h1>Words should feel useful before they feel numerous.</h1></div><p>Instead of a wall of identical cards, words are grouped by context, with clearer emphasis on Korean, meaning and recall state.</p></header>
  <div class="section-title"><h2>Everyday set</h2><p>8 words · approximately 6 minutes</p></div>
  <div class="module-grid">${vocab.map(([k,e,s])=>`<article class="module-card"><div><span class="meta">${s}</span><div class="word">${k}</div><div class="meaning">${e}</div></div><button class="btn secondary">Hear + recall</button></article>`).join('')}</div>
</section>`,
grammar:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">문법 · GRAMMAR</span><h1>Understand the pattern separately. Use it naturally together.</h1></div><p>The grammar view now gives the rule, contrast and real sentence structure enough room to breathe.</p></header>
  <div class="study-list">
    <div class="study-row"><strong>Noun + 이에요 / 예요</strong><span>“to be” after a noun</span><span class="pill">4 examples</span></div>
    <div class="study-row"><strong>Topic + 은/는</strong><span>Set the topic or contrast</span><span class="pill">5 examples</span></div>
    <div class="study-row"><strong>Place + 에</strong><span>Destination or static location</span><span class="pill">6 examples</span></div>
    <div class="study-row"><strong>Place + 에서</strong><span>Where an action happens</span><span class="pill">6 examples</span></div>
  </div>
  <div class="section-title"><h2>Build one sentence</h2><p>Short enough to repeat aloud.</p></div>
  <article class="hero-panel"><div><span class="eyebrow">Pattern practice</span><h2>저는 카페에서 한국어를 공부해요.</h2><p>I study Korean at a café. Notice how 에서 marks the place where the action happens.</p></div><div class="actions"><button class="btn">Hear sentence</button><button class="btn secondary">Swap the place</button></div></article>
</section>`,
test:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">시험 · TOPIK & TEST</span><h1>Test what you learned, not what the dashboard wants to count.</h1></div><p>Checks are tied to your actual lesson history. Missed concepts return to review without turning the page into a score board.</p></header>
  <div class="hero-grid"><article class="hero-panel"><div><span class="eyebrow">Recommended check</span><h2>Foundation checkpoint</h2><p>10 questions across vocabulary, particles and sentence meaning.</p></div><div class="actions"><button class="btn">Start 8-minute check</button><button class="btn secondary">See covered topics</button></div></article><div class="side-stack"><article class="soft-card tint-sage"><span class="eyebrow">Recent</span><h3>8 / 10</h3><p>Strong on vocabulary. Review 은/는 vs 이/가.</p></article><article class="soft-card"><span class="eyebrow">TOPIK mode</span><h3>Beginner set</h3><p>Question wording and pacing closer to exam style.</p></article></div></div>
</section>`,
partner:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">가까운 사람과 · PARTNER KOREAN</span><h1>Everyday Korean for someone close to you.</h1></div><p>A learner-first space for the phrases people actually want in a relationship: checking in, teasing, caring, apologizing, missing someone and making plans.</p></header>
  <div class="partner-learner">
    <section class="phrase-browser">
      <span class="eyebrow">Find the line you want fast</span>
      <div class="phrase-tabs"><button>Daily check-ins</button><button>Affection</button><button>Plans</button><button>Teasing</button></div>
      <div class="phrase-list">
        <div class="phrase-item"><strong>뭐 해?</strong><span>What are you doing?</span></div>
        <div class="phrase-item"><strong>밥 먹었어?</strong><span>Did you eat?</span></div>
        <div class="phrase-item"><strong>보고 싶어.</strong><span>I miss you.</span></div>
        <div class="phrase-item"><strong>사랑해.</strong><span>I love you.</span></div>
        <div class="phrase-item"><strong>잘 자.</strong><span>Sleep well.</span></div>
      </div>
    </section>
    <section class="dialogue-card">
      <span class="eyebrow">See how the phrases fit together</span>
      <h2 style="font-family:Georgia,serif;font-size:32px;margin:8px 0 18px">Lunch check-in</h2>
      <div class="bubble"><strong>뭐 해?</strong><small>What are you doing?</small></div>
      <div class="bubble you"><strong>지금 밥 먹으러 가.</strong><small>I’m going to eat now.</small></div>
      <div class="bubble"><strong>밥 맛있게 먹어. 보고 싶어.</strong><small>Enjoy your meal. I miss you.</small></div>
      <div class="bubble you"><strong>나도 보고 싶어. 이따 전화하자.</strong><small>I miss you too. Let’s call later.</small></div>
    </section>
  </div>
</section>`,
landing:()=>`
<section class="marketing-shell">
  <div class="marketing-top">
    <a class="brand" href="#landing"><span class="brand-mark">ㅎ</span><span><strong>Hallium</strong><small>learn Korean like a person</small></span></a>
    <div class="marketing-links"><button data-go="home">Open app</button><button data-go="creator">Creators</button></div>
  </div>
  <div class="marketing-hero">
    <div><span class="eyebrow">KOREAN LEARNING, RECONSIDERED</span><h1>Use Hallium like a learner first.</h1><p>Structured when you need a path. Flexible when life gets messy. Hallium connects foundation lessons, grammar, vocabulary, TOPIK practice and real-life Korean without turning the product into a maze.</p><div class="actions"><button class="btn" data-go="home">Start learning</button><button class="btn secondary" data-go="partner">See real-life Korean</button></div></div>
    <aside class="marketing-note"><span class="eyebrow">The design principle</span><strong>Calm enough to return to every day.</strong><p>One visual system, fewer competing cards, clearer hierarchy, and no floating navigation covering the thing you came to learn.</p></aside>
  </div>
  <div class="principle-grid">
    <div class="principle"><strong>Structured, not endless</strong><span>Clear paths and next steps instead of an infinite feed.</span></div>
    <div class="principle"><strong>Useful before impressive</strong><span>Real learner actions take priority over decorative dashboard metrics.</span></div>
    <div class="principle"><strong>Adaptive by evidence</strong><span>Review follows what you miss, not arbitrary streak pressure.</span></div>
    <div class="principle"><strong>Progress that travels</strong><span>Your words, grammar and tests inform each other across the product.</span></div>
  </div>
</section>`,
creator:()=>`
<section class="page">
  <div class="partner-hero"><span class="eyebrow">CREATOR & AMBASSADOR PROGRAM · 함께 만들어요</span><h1>Grow Hallium with people whose audience actually wants to learn Korean.</h1><p>A product relationship, not a copy-paste promo brief. Creators should be able to stand behind the learning experience, not just the landing page.</p><div class="actions"><button class="btn">Explore partnership</button><button class="btn secondary">Creator principles</button></div></div>
  <div class="stat-grid"><div class="stat"><strong>15</strong><span>creator seats</span></div><div class="stat"><strong>76</strong><span>learner interviews</span></div><div class="stat"><strong>5</strong><span>learning tracks tested</span></div><div class="stat"><strong>6</strong><span>markets in pilot</span></div></div>
  <div class="section-title"><h2>The product should carry the partnership.</h2><p>Creators should not have to oversell it.</p></div>
  <div class="module-grid">
    <article class="module-card"><div><span class="meta">MODEL 01</span><h3>Structured, not endless</h3><p>Creators introduce one clear learning path instead of an unbounded content feed.</p></div></article>
    <article class="module-card"><div><span class="meta">MODEL 02</span><h3>Audience fit first</h3><p>Work with people whose community already has a reason to learn Korean.</p></div></article>
    <article class="module-card"><div><span class="meta">MODEL 03</span><h3>Attribution without clutter</h3><p>Approved ambassadors get clear links and reporting while the learner UI stays clean.</p></div></article>
  </div>
</section>`
};

function render(route){
  const key=pages[route]?route:'home';
  view.innerHTML=pages[key]();
  buttons.forEach(b=>b.classList.toggle('is-active',b.dataset.route===key));
  view.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));
  menu?.classList.remove('is-open');menu?.setAttribute('aria-hidden','true');
  requestAnimationFrame(()=>view.focus({preventScroll:true}));
}
function navigate(route){history.replaceState(null,'','#'+route);render(route)}
buttons.forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.route)));
menuButton?.addEventListener('click',()=>{menu.classList.add('is-open');menu.setAttribute('aria-hidden','false')});
closeMenu?.addEventListener('click',()=>{menu.classList.remove('is-open');menu.setAttribute('aria-hidden','true')});
render(location.hash.replace('#','')||'home');