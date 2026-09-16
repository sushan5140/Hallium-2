const view=document.getElementById('view');
const buttons=[...document.querySelectorAll('[data-route]')];
const menu=document.getElementById('mobileNav');
const menuButton=document.getElementById('menuButton');
const closeMenu=document.getElementById('closeMenu');

const vocab=[
  ['이름','name','Strong','이름이 뭐예요?','What is your name?'],
  ['학생','student','Strong','저는 학생이에요.','I am a student.'],
  ['친구','friend','Review','친구를 만나요.','I meet a friend.'],
  ['책','book','Strong','책을 읽어요.','I read a book.'],
  ['가방','bag','Learning','가방이 여기 있어요.','The bag is here.'],
  ['물','water','Strong','물 주세요.','Water, please.'],
  ['커피','coffee','Learning','커피를 마셔요.','I drink coffee.'],
  ['회사원','office worker','Review','제 형은 회사원이에요.','My older brother is an office worker.'],
  ['학교','school','Learning','학교에 가요.','I go to school.'],
  ['집','home','Strong','집에서 공부해요.','I study at home.'],
  ['오늘','today','Strong','오늘은 화요일이에요.','Today is Tuesday.'],
  ['시간','time','Review','지금 시간 있어요?','Do you have time now?']
];

const foundationLessons=[
  ['01 · Hangul refresh','Sounds, spacing, batchim and reading rhythm','Complete'],
  ['02 · 이에요 / 예요','Say what someone or something is','Complete'],
  ['03 · 은/는 and 이/가','Introduce topics and mark subjects','Review'],
  ['04 · 있어요 / 없어요','Say what exists, what you have and what is absent','Complete'],
  ['05 · 을/를','Mark the object of an action','Complete'],
  ['06 · 주세요','Ask politely for things','Complete'],
  ['07 · -고 싶어요','Say what you want to do','Complete'],
  ['08 · 에 / 에서','Destination, location and action place','Current'],
  ['09 · Time markers','Days, clock time and when things happen','Next'],
  ['10 · 안 / 못','Simple negation and inability','Next'],
  ['11 · -(으)세요','Polite requests and instructions','Next'],
  ['12 · 아/어요 past','Talk about what already happened','Next'],
  ['13 · 연결하기','Connect beginner patterns into natural short conversations','Next']
];

const grammarPoints=[
  {
    form:'Noun + 이에요 / 예요',
    meaning:'“to be” after a noun',
    note:'Use 이에요 after a consonant-ending noun and 예요 after a vowel-ending noun.',
    examples:[
      ['저는 학생이에요.','I am a student.'],
      ['여기는 학교예요.','This place is a school.'],
      ['민수는 제 친구예요.','Minsu is my friend.']
    ]
  },
  {
    form:'은/는',
    meaning:'topic / contrast marker',
    note:'Use 은 after a consonant and 는 after a vowel. It often sets what the sentence is about.',
    examples:[
      ['저는 인도 사람이에요.','As for me, I am Indian.'],
      ['오늘은 바빠요.','As for today, I am busy.'],
      ['커피는 좋아하지만 차는 안 마셔요.','I like coffee, but I do not drink tea.']
    ]
  },
  {
    form:'이/가',
    meaning:'subject marker',
    note:'Use 이 after a consonant and 가 after a vowel. It often identifies or highlights the subject.',
    examples:[
      ['친구가 와요.','A friend is coming.'],
      ['비가 와요.','It is raining.'],
      ['누가 학생이에요?','Who is the student?']
    ]
  },
  {
    form:'Place + 에',
    meaning:'destination / static location / time',
    note:'Use 에 for where someone goes, where something is, or when something happens.',
    examples:[
      ['학교에 가요.','I go to school.'],
      ['책이 가방에 있어요.','The book is in the bag.'],
      ['세 시에 만나요.','Let’s meet at three.']
    ]
  },
  {
    form:'Place + 에서',
    meaning:'where an action happens',
    note:'Use 에서 for the place where you do an action.',
    examples:[
      ['집에서 공부해요.','I study at home.'],
      ['카페에서 커피를 마셔요.','I drink coffee at a café.'],
      ['학교에서 한국어를 배워요.','I learn Korean at school.']
    ]
  },
  {
    form:'Verb + 고 싶어요',
    meaning:'want to do',
    note:'Attach -고 싶어요 to the verb stem to express a personal wish.',
    examples:[
      ['한국에 가고 싶어요.','I want to go to Korea.'],
      ['한국어를 잘하고 싶어요.','I want to speak Korean well.'],
      ['떡볶이를 먹고 싶어요.','I want to eat tteokbokki.']
    ]
  }
];

const quiz=[
  {
    q:'Choose the natural particle: 저는 집___ 공부해요.',
    a:'에서',
    why:'공부해요 is an action, so the place where the action happens takes 에서.'
  },
  {
    q:'What does “물 주세요” mean?',
    a:'Water, please.',
    why:'주세요 is a polite beginner pattern for asking someone to give you something.'
  },
  {
    q:'Choose the natural sentence for “I want to learn Korean.”',
    a:'한국어를 배우고 싶어요.',
    why:'배우다 becomes 배우고 싶어요 with the “want to do” pattern.'
  },
  {
    q:'Which sentence means “The book is in the bag”?',
    a:'책이 가방에 있어요.',
    why:'에 marks the static location used with 있어요.'
  }
];

const partnerSets={
  'Daily check-ins':[
    ['뭐 해?','What are you doing?'],
    ['밥 먹었어?','Did you eat?'],
    ['오늘 어땠어?','How was your day?'],
    ['집에 잘 들어갔어?','Did you get home safely?'],
    ['지금 시간 있어?','Do you have time now?']
  ],
  'Affection':[
    ['보고 싶어.','I miss you.'],
    ['네 생각났어.','I thought of you.'],
    ['오늘도 고생했어.','You worked hard today too.'],
    ['네가 있어서 좋아.','I’m glad you’re here.'],
    ['잘 자. 좋은 꿈 꿔.','Sleep well. Sweet dreams.']
  ],
  'Plans':[
    ['주말에 뭐 할래?','What do you want to do this weekend?'],
    ['같이 밥 먹자.','Let’s eat together.'],
    ['이따 전화하자.','Let’s call later.'],
    ['몇 시에 만날까?','What time should we meet?'],
    ['도착하면 연락해.','Message me when you arrive.']
  ],
  'Teasing':[
    ['또 늦었네?','Late again?'],
    ['진짜야?','Really?'],
    ['왜 이렇게 귀여워?','Why are you so cute?'],
    ['알았어, 알았어.','Okay, okay.'],
    ['장난이야.','I’m kidding.']
  ]
};

function exampleList(items){
  return `<div class="study-list">${items.map(([k,e])=>`<div class="study-row"><strong>${k}</strong><span>${e}</span><span class="pill">Say it aloud</span></div>`).join('')}</div>`;
}

const pages={
home:()=>`
<section class="page">
  <header class="page-header">
    <div><span class="korean-label">오늘의 한국어 · TODAY</span><h1>Learn Korean without making your day feel like homework.</h1></div>
    <p>Hallium keeps one clear next step in front of you, while your grammar, vocabulary, speaking and TOPIK practice stay connected in the background.</p>
  </header>
  <div class="hero-grid">
    <article class="hero-panel">
      <div><span class="eyebrow">Continue where you left off</span><h2>오늘 어디에서 공부해요?</h2><p><strong>Where are you studying today?</strong> Finish the 에 / 에서 lesson, review five words, then use them in one short practice round.</p></div>
      <div class="actions"><button class="btn" data-go="foundation">Continue lesson</button><button class="btn secondary" data-go="practice">Quick practice</button></div>
    </article>
    <div class="side-stack">
      <article class="soft-card tint-lavender"><span class="eyebrow">Current level</span><h3>Foundation · TOPIK I</h3><div class="progress-line"><span style="width:62%"></span></div><p>8 of 13 foundation blocks in progress.</p></article>
      <article class="soft-card tint-sage"><span class="eyebrow">Review queue</span><h3>7 items waiting</h3><p>Mostly 에 / 에서, 은/는 vs 이/가, and everyday nouns.</p></article>
    </div>
  </div>
  <div class="section-title"><div><span class="eyebrow">Today’s Korean</span><h2>One sentence, fully understood.</h2></div><p>Read it, notice the pattern, then say it once.</p></div>
  <article class="hero-panel"><div><span class="eyebrow">오늘의 문장 · SENTENCE OF THE DAY</span><h2>저는 저녁에 집에서 한국어를 공부해요.</h2><p><strong>I study Korean at home in the evening.</strong> · 저녁에 = in the evening · 집에서 = at home · 한국어를 = Korean + object marker · 공부해요 = study.</p></div><div class="actions"><button class="btn" data-go="grammar">Open grammar</button><button class="btn secondary" data-go="vocabulary">Review words</button></div></article>
  <div class="section-title"><div><span class="eyebrow">Study directly, then test it</span><h2>One system, four focused tools.</h2></div><p>Each tool now uses the same beginner Korean so learning transfers between sections.</p></div>
  <div class="module-grid">
    <article class="module-card"><div><span class="meta">WORDS · 12 min</span><h3>Vocabulary</h3><p>12 useful words with a natural beginner sentence for each.</p></div><button class="btn secondary" data-go="vocabulary">Open words</button></article>
    <article class="module-card"><div><span class="meta">PATTERNS · 15 min</span><h3>Grammar</h3><p>See the rule, contrast it, and read three real examples.</p></div><button class="btn secondary" data-go="grammar">Open grammar</button></article>
    <article class="module-card"><div><span class="meta">CHECK · 8 min</span><h3>TOPIK & Test</h3><p>Short checks drawn from exactly what appears in Foundation, Words and Grammar.</p></div><button class="btn secondary" data-go="test">Start check</button></article>
  </div>
</section>`,

foundation:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">기초 · FOUNDATION</span><h1>Build the base once. Reuse it everywhere.</h1></div><p>The path now covers the Korean a true beginner needs before moving into longer TOPIK I reading and listening.</p></header>
  <div class="hero-grid">
    <article class="hero-panel"><div><span class="eyebrow">Lesson 08</span><h2>Place · 에 / 에서</h2><p><strong>에</strong> marks destination, static location or time. <strong>에서</strong> marks the place where an action happens.</p><p style="margin-top:12px">학교에 가요. · I go to school.<br>학교에서 공부해요. · I study at school.</p></div><div class="actions"><button class="btn" data-go="grammar">See full explanation</button><button class="btn secondary" data-go="practice">Practice now</button></div></article>
    <div class="side-stack"><article class="soft-card tint-rose"><span class="eyebrow">Next up</span><h3>Time markers</h3><p>오늘, 내일, 오전, 오후, and clock time with 에.</p></article><article class="soft-card"><span class="eyebrow">Useful line</span><h3>몇 시에 만나요?</h3><p>What time are we meeting?</p></article></div>
  </div>
  <div class="section-title"><h2>Foundation path</h2><p>13 connected beginner blocks.</p></div>
  <div class="study-list">
    ${foundationLessons.map(([a,b,c])=>`<div class="study-row"><strong>${a}</strong><span>${b}</span><span class="pill">${c}</span></div>`).join('')}
  </div>
  <div class="section-title"><h2>Core survival Korean</h2><p>Short lines worth being able to say without translating first.</p></div>
  ${exampleList([
    ['안녕하세요.','Hello.'],
    ['저는 수잔이에요.','I’m Susan.'],
    ['한국어 공부하고 싶어요.','I want to study Korean.'],
    ['책 주세요.','A book, please.'],
    ['몇 시예요?','What time is it?'],
    ['시간 있어요?','Do you have time?'],
    ['도와줄 수 있어요?','Can you help me?'],
    ['괜찮아요.','It’s okay / I’m okay.']
  ])}
</section>`,

vocabulary:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">단어 · VOCABULARY</span><h1>Words should feel useful before they feel numerous.</h1></div><p>Every word now comes with a sentence so you learn how it behaves, not only what it translates to.</p></header>
  <div class="section-title"><h2>Everyday foundation set</h2><p>12 words · people, places, objects and time</p></div>
  <div class="module-grid">${vocab.map(([k,e,s,ex,tr])=>`<article class="module-card"><div><span class="meta">${s}</span><div class="word">${k}</div><div class="meaning">${e}</div><p style="margin-top:14px"><strong>${ex}</strong><br>${tr}</p></div><button class="btn secondary">Hear + recall</button></article>`).join('')}</div>
  <div class="section-title"><h2>Mini recall</h2><p>Try answering before looking back.</p></div>
  ${exampleList([
    ['“school” → ?','학교'],
    ['“friend” → ?','친구'],
    ['“I drink coffee.” → ?','커피를 마셔요.'],
    ['“I study at home.” → ?','집에서 공부해요.']
  ])}
</section>`,

grammar:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">문법 · GRAMMAR</span><h1>Understand the pattern separately. Use it naturally together.</h1></div><p>Each grammar item now has a short rule, a contrast point and three beginner sentences.</p></header>
  <div class="study-list">
    ${grammarPoints.map((g,i)=>`<div class="study-row"><strong>${g.form}</strong><span>${g.meaning}</span><span class="pill">${g.examples.length} examples</span></div>`).join('')}
  </div>
  ${grammarPoints.map((g,i)=>`
    <div class="section-title"><div><span class="eyebrow">PATTERN ${String(i+1).padStart(2,'0')}</span><h2>${g.form}</h2></div><p>${g.note}</p></div>
    ${exampleList(g.examples)}
  `).join('')}
  <div class="section-title"><h2>Build one sentence</h2><p>Notice how several beginner patterns work together.</p></div>
  <article class="hero-panel"><div><span class="eyebrow">Pattern practice</span><h2>저는 저녁에 카페에서 한국어를 공부하고 싶어요.</h2><p>I want to study Korean at a café in the evening.<br><strong>저는</strong> topic · <strong>저녁에</strong> time · <strong>카페에서</strong> action place · <strong>한국어를</strong> object · <strong>공부하고 싶어요</strong> want to study.</p></div><div class="actions"><button class="btn" data-go="practice">Practice this pattern</button><button class="btn secondary" data-go="vocabulary">Review the words</button></div></article>
</section>`,

test:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">시험 · TOPIK & TEST</span><h1>Test what you learned, not random Korean.</h1></div><p>The checkpoint now pulls from the exact grammar and vocabulary taught elsewhere in Hallium.</p></header>
  <div class="hero-grid"><article class="hero-panel"><div><span class="eyebrow">Recommended check</span><h2>Foundation checkpoint</h2><p>10 questions across vocabulary, particles, sentence meaning and beginner reading.</p></div><div class="actions"><button class="btn" data-go="practice">Start practice</button><button class="btn secondary">TOPIK-style set</button></div></article><div class="side-stack"><article class="soft-card tint-sage"><span class="eyebrow">Focus</span><h3>에 vs 에서</h3><p>One is location/destination/time; the other is action place.</p></article><article class="soft-card"><span class="eyebrow">Reading target</span><h3>1–2 sentence notices</h3><p>Build toward beginner TOPIK-style comprehension.</p></article></div></div>
  <div class="section-title"><h2>What the check covers</h2><p>Everything below is already taught elsewhere in this site.</p></div>
  ${exampleList([
    ['Particles','은/는 · 이/가 · 을/를 · 에 · 에서'],
    ['Identity','이에요 / 예요'],
    ['Existence','있어요 / 없어요'],
    ['Requests','주세요 · -(으)세요'],
    ['Wants','-고 싶어요'],
    ['Time','오늘 · 내일 · 오전 · 오후 · 몇 시']
  ])}
</section>`,

practice:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">연습 · PRACTICE</span><h1>Use the Korean you just learned.</h1></div><p>This route now contains real practice instead of falling back to the Today screen.</p></header>
  <div class="hero-grid">
    <article class="hero-panel"><div><span class="eyebrow">Round 1 · PARTICLES</span><h2>${quiz[0].q}</h2><p><strong>Answer:</strong> ${quiz[0].a}<br>${quiz[0].why}</p></div><div class="actions"><button class="btn">I got it</button><button class="btn secondary" data-go="grammar">Review 에 / 에서</button></div></article>
    <div class="side-stack"><article class="soft-card tint-lavender"><span class="eyebrow">Say it</span><h3>오늘 어디에서 공부해요?</h3><p>Where are you studying today?</p></article><article class="soft-card tint-sage"><span class="eyebrow">Answer frame</span><h3>저는 ___에서 공부해요.</h3><p>I study at ___.</p></article></div>
  </div>
  <div class="section-title"><h2>Four quick checks</h2><p>Read the question first, then reveal the answer mentally.</p></div>
  <div class="study-list">
    ${quiz.map((x,i)=>`<div class="study-row"><strong>${i+1}. ${x.q}</strong><span><strong>${x.a}</strong> · ${x.why}</span><span class="pill">Review</span></div>`).join('')}
  </div>
  <div class="section-title"><h2>Production practice</h2><p>Change only one part each time.</p></div>
  ${exampleList([
    ['저는 집에서 공부해요.','I study at home. → Replace 집 with 카페 or 학교.'],
    ['저는 커피를 마셔요.','I drink coffee. → Replace 커피 with 물.'],
    ['한국에 가고 싶어요.','I want to go to Korea. → Replace 가다 with 배우다 / 먹다.'],
    ['세 시에 만나요.','We meet at three. → Change the time.']
  ])}
</section>`,

partner:()=>`
<section class="page">
  <header class="page-header"><div><span class="korean-label">가까운 사람과 · PARTNER KOREAN</span><h1>Everyday Korean for someone close to you.</h1></div><p>Natural informal Korean for checking in, making plans, joking lightly and showing care. The tone stays warm rather than textbook-stiff.</p></header>
  <div class="partner-learner">
    <section class="phrase-browser">
      <span class="eyebrow">Find the line you want fast</span>
      <div class="phrase-tabs"><button>Daily check-ins</button><button>Affection</button><button>Plans</button><button>Teasing</button></div>
      <div class="phrase-list">
        ${partnerSets['Daily check-ins'].map(([k,e])=>`<div class="phrase-item"><strong>${k}</strong><span>${e}</span></div>`).join('')}
      </div>
    </section>
    <section class="dialogue-card">
      <span class="eyebrow">See how the phrases fit together</span>
      <h2 style="font-family:Georgia,serif;font-size:32px;margin:8px 0 18px">Lunch check-in</h2>
      <div class="bubble"><strong>뭐 해?</strong><small>What are you doing?</small></div>
      <div class="bubble you"><strong>지금 밥 먹으러 가.</strong><small>I’m going to eat now.</small></div>
      <div class="bubble"><strong>밥 맛있게 먹어. 오늘도 고생했어.</strong><small>Enjoy your meal. You worked hard today too.</small></div>
      <div class="bubble you"><strong>고마워. 이따 전화하자.</strong><small>Thanks. Let’s call later.</small></div>
    </section>
  </div>
  ${Object.entries(partnerSets).map(([title,items])=>`<div class="section-title"><h2>${title}</h2><p>Natural 반말 for someone you are genuinely close with.</p></div>${exampleList(items)}`).join('')}
</section>`,

landing:()=>`
<section class="marketing-shell">
  <div class="marketing-top">
    <a class="brand" href="#landing"><span class="brand-mark">ㅎ</span><span><strong>Hallium</strong><small>learn Korean like a person</small></span></a>
    <div class="marketing-links"><button data-go="home">Open app</button><button data-go="creator">Creators</button></div>
  </div>
  <div class="marketing-hero">
    <div><span class="eyebrow">KOREAN LEARNING, RECONSIDERED</span><h1>Use Hallium like a learner first.</h1><p>Structured when you need a path. Flexible when life gets messy. Hallium connects foundation lessons, grammar, vocabulary, TOPIK practice and real-life Korean without turning the product into a maze.</p><div class="actions"><button class="btn" data-go="home">Start learning</button><button class="btn secondary" data-go="partner">See real-life Korean</button></div></div>
    <aside class="marketing-note"><span class="eyebrow">Try one line now</span><strong>오늘 한국어 공부할 거예요?</strong><p>Are you going to study Korean today? Hallium teaches the sentence, then carries its words and patterns into review and practice.</p></aside>
  </div>
  <div class="principle-grid">
    <div class="principle"><strong>Structured, not endless</strong><span>Clear paths from Hangul through connected TOPIK I foundations.</span></div>
    <div class="principle"><strong>Useful before impressive</strong><span>Real Korean such as 뭐 해?, 시간 있어요?, and 집에서 공부해요.</span></div>
    <div class="principle"><strong>Adaptive by evidence</strong><span>Miss 에 vs 에서 and that exact contrast returns to review.</span></div>
    <div class="principle"><strong>Progress that travels</strong><span>A word learned in Vocabulary reappears in Grammar, Practice and Test.</span></div>
  </div>
</section>`,

creator:()=>`
<section class="page">
  <div class="partner-hero"><span class="eyebrow">CREATOR & AMBASSADOR PROGRAM · 함께 만들어요</span><h1>Grow Hallium with people whose audience actually wants to learn Korean.</h1><p>A product relationship, not a copy-paste promo brief. Creators can demonstrate the actual learning loop: learn <strong>집에서</strong>, use it in a sentence, miss it in practice, and see it return intelligently.</p><div class="actions"><button class="btn">Explore partnership</button><button class="btn secondary" data-go="landing">See learner experience</button></div></div>
  <div class="stat-grid"><div class="stat"><strong>13</strong><span>foundation blocks</span></div><div class="stat"><strong>12+</strong><span>contextual words</span></div><div class="stat"><strong>6</strong><span>core grammar patterns</span></div><div class="stat"><strong>4</strong><span>practice modes connected</span></div></div>
  <div class="section-title"><h2>The product should carry the partnership.</h2><p>Creators should be able to show actual Korean, not only a polished landing page.</p></div>
  <div class="module-grid">
    <article class="module-card"><div><span class="meta">DEMO 01</span><h3>Teach one useful contrast</h3><p>학교에 가요 vs 학교에서 공부해요 — a clear before/after learning moment.</p></div></article>
    <article class="module-card"><div><span class="meta">DEMO 02</span><h3>Show real-life Korean</h3><p>뭐 해?, 밥 먹었어?, and 이따 전화하자 in natural context.</p></div></article>
    <article class="module-card"><div><span class="meta">DEMO 03</span><h3>Show connected review</h3><p>The same Korean travels from lesson to vocab to grammar to test instead of living in isolated cards.</p></div></article>
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
