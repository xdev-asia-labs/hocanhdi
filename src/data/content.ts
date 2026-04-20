export type Letter = { letter: string; ipa: string; example: string; meaning: string };

export const ALPHABET: Letter[] = [
  { letter: 'A', ipa: '/eɪ/', example: 'apple', meaning: 'quả táo' },
  { letter: 'B', ipa: '/biː/', example: 'book', meaning: 'quyển sách' },
  { letter: 'C', ipa: '/siː/', example: 'cat', meaning: 'con mèo' },
  { letter: 'D', ipa: '/diː/', example: 'dog', meaning: 'con chó' },
  { letter: 'E', ipa: '/iː/', example: 'egg', meaning: 'trứng' },
  { letter: 'F', ipa: '/ɛf/', example: 'fish', meaning: 'con cá' },
  { letter: 'G', ipa: '/dʒiː/', example: 'girl', meaning: 'cô gái' },
  { letter: 'H', ipa: '/eɪtʃ/', example: 'hat', meaning: 'cái mũ' },
  { letter: 'I', ipa: '/aɪ/', example: 'ice', meaning: 'đá lạnh' },
  { letter: 'J', ipa: '/dʒeɪ/', example: 'jam', meaning: 'mứt' },
  { letter: 'K', ipa: '/keɪ/', example: 'key', meaning: 'chìa khóa' },
  { letter: 'L', ipa: '/ɛl/', example: 'lion', meaning: 'sư tử' },
  { letter: 'M', ipa: '/ɛm/', example: 'moon', meaning: 'mặt trăng' },
  { letter: 'N', ipa: '/ɛn/', example: 'nose', meaning: 'mũi' },
  { letter: 'O', ipa: '/oʊ/', example: 'orange', meaning: 'cam' },
  { letter: 'P', ipa: '/piː/', example: 'pen', meaning: 'cây bút' },
  { letter: 'Q', ipa: '/kjuː/', example: 'queen', meaning: 'nữ hoàng' },
  { letter: 'R', ipa: '/ɑːr/', example: 'red', meaning: 'màu đỏ' },
  { letter: 'S', ipa: '/ɛs/', example: 'sun', meaning: 'mặt trời' },
  { letter: 'T', ipa: '/tiː/', example: 'tree', meaning: 'cái cây' },
  { letter: 'U', ipa: '/juː/', example: 'umbrella', meaning: 'cái dù' },
  { letter: 'V', ipa: '/viː/', example: 'van', meaning: 'xe tải' },
  { letter: 'W', ipa: '/ˈdʌbəl.juː/', example: 'water', meaning: 'nước' },
  { letter: 'X', ipa: '/ɛks/', example: 'box', meaning: 'cái hộp' },
  { letter: 'Y', ipa: '/waɪ/', example: 'yellow', meaning: 'màu vàng' },
  { letter: 'Z', ipa: '/ziː/', example: 'zoo', meaning: 'sở thú' },
];

export type VocabWord = { word: string; ipa: string; pos: string; meaning: string; example: string };
export type VocabTopic = { id: string; label: string; level: string; words: VocabWord[] };

export const VOCAB_TOPICS: VocabTopic[] = [
  {
    id: 'family', label: '👨‍👩‍👧 Gia đình', level: 'A1',
    words: [
      { word: 'father', ipa: '/ˈfɑːðər/', pos: 'n', meaning: 'bố', example: 'My father is a doctor.' },
      { word: 'mother', ipa: '/ˈmʌðər/', pos: 'n', meaning: 'mẹ', example: 'My mother cooks well.' },
      { word: 'brother', ipa: '/ˈbrʌðər/', pos: 'n', meaning: 'anh/em trai', example: 'I have one brother.' },
      { word: 'sister', ipa: '/ˈsɪstər/', pos: 'n', meaning: 'chị/em gái', example: 'She is my sister.' },
      { word: 'grandfather', ipa: '/ˈɡrænfɑːðər/', pos: 'n', meaning: 'ông', example: 'My grandfather is 80.' },
      { word: 'grandmother', ipa: '/ˈɡrænmʌðər/', pos: 'n', meaning: 'bà', example: 'Grandmother bakes cookies.' },
      { word: 'uncle', ipa: '/ˈʌŋkəl/', pos: 'n', meaning: 'chú/bác/cậu', example: 'Uncle Tom lives in Hue.' },
      { word: 'aunt', ipa: '/ɑːnt/', pos: 'n', meaning: 'cô/dì/thím', example: 'Aunt Mary is kind.' },
      { word: 'cousin', ipa: '/ˈkʌzən/', pos: 'n', meaning: 'anh chị em họ', example: 'My cousin is older than me.' },
      { word: 'parents', ipa: '/ˈperənts/', pos: 'n', meaning: 'bố mẹ', example: 'My parents love me.' },
    ],
  },
  {
    id: 'food', label: '🍔 Đồ ăn', level: 'A1',
    words: [
      { word: 'rice', ipa: '/raɪs/', pos: 'n', meaning: 'cơm', example: 'I eat rice every day.' },
      { word: 'bread', ipa: '/brɛd/', pos: 'n', meaning: 'bánh mì', example: 'Bread is delicious.' },
      { word: 'noodle', ipa: '/ˈnuːdəl/', pos: 'n', meaning: 'mì', example: 'I love noodles.' },
      { word: 'meat', ipa: '/miːt/', pos: 'n', meaning: 'thịt', example: 'Meat is expensive.' },
      { word: 'fish', ipa: '/fɪʃ/', pos: 'n', meaning: 'cá', example: 'We had fish for dinner.' },
      { word: 'vegetable', ipa: '/ˈvɛdʒtəbəl/', pos: 'n', meaning: 'rau', example: 'Eat more vegetables.' },
      { word: 'fruit', ipa: '/fruːt/', pos: 'n', meaning: 'trái cây', example: 'Fruit is healthy.' },
      { word: 'water', ipa: '/ˈwɔːtər/', pos: 'n', meaning: 'nước', example: 'Drink enough water.' },
      { word: 'coffee', ipa: '/ˈkɔːfi/', pos: 'n', meaning: 'cà phê', example: 'I need coffee.' },
      { word: 'delicious', ipa: '/dɪˈlɪʃəs/', pos: 'adj', meaning: 'ngon', example: 'This soup is delicious.' },
    ],
  },
  {
    id: 'travel', label: '✈️ Du lịch', level: 'A2',
    words: [
      { word: 'airport', ipa: '/ˈerpɔːrt/', pos: 'n', meaning: 'sân bay', example: 'The airport is busy.' },
      { word: 'ticket', ipa: '/ˈtɪkɪt/', pos: 'n', meaning: 'vé', example: 'I bought a ticket.' },
      { word: 'passport', ipa: '/ˈpæspɔːrt/', pos: 'n', meaning: 'hộ chiếu', example: 'Show me your passport.' },
      { word: 'hotel', ipa: '/hoʊˈtɛl/', pos: 'n', meaning: 'khách sạn', example: 'We stayed at a hotel.' },
      { word: 'luggage', ipa: '/ˈlʌɡɪdʒ/', pos: 'n', meaning: 'hành lý', example: 'My luggage is heavy.' },
      { word: 'flight', ipa: '/flaɪt/', pos: 'n', meaning: 'chuyến bay', example: 'The flight was delayed.' },
      { word: 'arrive', ipa: '/əˈraɪv/', pos: 'v', meaning: 'đến', example: 'We arrive at noon.' },
      { word: 'depart', ipa: '/dɪˈpɑːrt/', pos: 'v', meaning: 'khởi hành', example: 'The train departs at 7.' },
      { word: 'journey', ipa: '/ˈdʒɜːrni/', pos: 'n', meaning: 'chuyến đi', example: 'Have a safe journey!' },
      { word: 'adventure', ipa: '/ədˈvɛntʃər/', pos: 'n', meaning: 'cuộc phiêu lưu', example: 'Life is an adventure.' },
    ],
  },
  {
    id: 'business', label: '💼 Công việc', level: 'B1',
    words: [
      { word: 'meeting', ipa: '/ˈmiːtɪŋ/', pos: 'n', meaning: 'cuộc họp', example: 'We have a meeting at 9.' },
      { word: 'deadline', ipa: '/ˈdɛdlaɪn/', pos: 'n', meaning: 'hạn chót', example: 'The deadline is Friday.' },
      { word: 'client', ipa: '/ˈklaɪənt/', pos: 'n', meaning: 'khách hàng', example: 'Our client is happy.' },
      { word: 'report', ipa: '/rɪˈpɔːrt/', pos: 'n', meaning: 'báo cáo', example: 'Send me the report.' },
      { word: 'negotiate', ipa: '/nɪˈɡoʊʃieɪt/', pos: 'v', meaning: 'đàm phán', example: 'We negotiate a deal.' },
      { word: 'budget', ipa: '/ˈbʌdʒɪt/', pos: 'n', meaning: 'ngân sách', example: 'Stay within budget.' },
      { word: 'revenue', ipa: '/ˈrɛvənuː/', pos: 'n', meaning: 'doanh thu', example: 'Revenue grew 10%.' },
      { word: 'strategy', ipa: '/ˈstrætədʒi/', pos: 'n', meaning: 'chiến lược', example: 'Our strategy works.' },
      { word: 'stakeholder', ipa: '/ˈsteɪkhoʊldər/', pos: 'n', meaning: 'bên liên quan', example: 'Inform all stakeholders.' },
      { word: 'leverage', ipa: '/ˈlɛvərɪdʒ/', pos: 'v', meaning: 'tận dụng', example: 'Leverage your strengths.' },
    ],
  },
  {
    id: 'advanced', label: '🎓 Nâng cao', level: 'C1',
    words: [
      { word: 'ubiquitous', ipa: '/juːˈbɪkwɪtəs/', pos: 'adj', meaning: 'phổ biến khắp nơi', example: 'Smartphones are ubiquitous today.' },
      { word: 'ephemeral', ipa: '/ɪˈfɛmərəl/', pos: 'adj', meaning: 'phù du, ngắn ngủi', example: 'Fame is often ephemeral.' },
      { word: 'serendipity', ipa: '/ˌsɛrənˈdɪpəti/', pos: 'n', meaning: 'may mắn tình cờ', example: 'We met by serendipity.' },
      { word: 'meticulous', ipa: '/məˈtɪkjələs/', pos: 'adj', meaning: 'tỉ mỉ', example: 'She is meticulous about details.' },
      { word: 'ambivalent', ipa: '/æmˈbɪvələnt/', pos: 'adj', meaning: 'do dự', example: 'I feel ambivalent about it.' },
      { word: 'quintessential', ipa: '/ˌkwɪntɪˈsɛnʃəl/', pos: 'adj', meaning: 'điển hình nhất', example: 'He is the quintessential gentleman.' },
      { word: 'paradigm', ipa: '/ˈpærədaɪm/', pos: 'n', meaning: 'mô hình, hệ chuẩn', example: 'A paradigm shift is coming.' },
      { word: 'nuance', ipa: '/ˈnuːɑːns/', pos: 'n', meaning: 'sắc thái tinh tế', example: 'Note the nuance in his tone.' },
      { word: 'pragmatic', ipa: '/præɡˈmætɪk/', pos: 'adj', meaning: 'thực dụng', example: 'Take a pragmatic approach.' },
      { word: 'resilient', ipa: '/rɪˈzɪliənt/', pos: 'adj', meaning: 'kiên cường', example: 'Children are resilient.' },
    ],
  },
];

export type QuizQuestion = { q: string; opts: string[]; a: number; ex: string };
export const QUIZ: QuizQuestion[] = [
  { q: 'Choose the correct word: "She ___ to school every day."', opts: ['go', 'goes', 'going', 'gone'], a: 1, ex: 'Chủ ngữ "She" (ngôi 3 số ít) → động từ thêm -s/-es ở thì hiện tại đơn.' },
  { q: 'What is the past tense of "buy"?', opts: ['buyed', 'buys', 'bought', 'buying'], a: 2, ex: '"Buy" là động từ bất quy tắc: buy → bought → bought.' },
  { q: '"I have lived here ___ 2010."', opts: ['for', 'since', 'from', 'at'], a: 1, ex: '"Since" + mốc thời gian; "For" + khoảng thời gian.' },
  { q: 'Choose the correct article: "He is ___ honest man."', opts: ['a', 'an', 'the', '—'], a: 1, ex: '"Honest" có "h" câm, bắt đầu bằng nguyên âm /ɒ/ → dùng "an".' },
  { q: '"If I ___ rich, I would travel the world."', opts: ['am', 'was', 'were', 'be'], a: 2, ex: 'Câu điều kiện loại 2 dùng "were" cho mọi ngôi.' },
  { q: 'Synonym of "happy"?', opts: ['sad', 'joyful', 'angry', 'tired'], a: 1, ex: 'Joyful = vui mừng, đồng nghĩa với happy.' },
  { q: '"The book ___ by millions of people."', opts: ['reads', 'is read', 'read', 'reading'], a: 1, ex: 'Câu bị động hiện tại đơn: is/are + V3.' },
  { q: '"I look forward to ___ from you."', opts: ['hear', 'hearing', 'heard', 'hears'], a: 1, ex: '"Look forward to" + V-ing.' },
  { q: '"Neither John ___ Mary likes coffee."', opts: ['or', 'nor', 'and', 'but'], a: 1, ex: 'Cấu trúc "Neither ... nor ...".' },
  { q: 'IPA /θ/ is the sound in which word?', opts: ['this', 'think', 'then', 'though'], a: 1, ex: '/θ/ là âm "th" vô thanh trong "think". /ð/ hữu thanh trong this/then/though.' },
];

export type ListenItem = { level: string; text: string };
export const LISTEN: ListenItem[] = [
  { level: 'A1', text: 'Hello! My name is Anna. I am from Vietnam. I am a student. I love learning English.' },
  { level: 'A2', text: 'Yesterday I went to the market with my mother. We bought some fruit and vegetables. Then we cooked dinner together.' },
  { level: 'B1', text: 'Learning a new language can be challenging, but it opens up many opportunities. With consistent practice, anyone can become fluent over time.' },
  { level: 'B2', text: 'Despite the rapid advancement of technology, face-to-face communication remains essential for building genuine human relationships and trust.' },
  { level: 'C1', text: 'The proliferation of artificial intelligence has prompted both excitement and apprehension, raising profound ethical questions that society must address thoughtfully.' },
];

export type GrammarLesson = { id: string; title: string; level: 'A1'|'A2'|'B1'|'B2'|'C1'|'C2'; html: string };
export const GRAMMAR: GrammarLesson[] = [
  { id: 'present-simple', level: 'A1', title: 'Hiện tại đơn (Present Simple)', html: `
    <p><b>Cấu trúc:</b> S + V(s/es) + O</p>
    <p><b>Dùng:</b> thói quen, sự thật hiển nhiên, lịch trình.</p>
    <p><b>Dấu hiệu:</b> always, usually, often, every day...</p>
    <p><i>Ví dụ:</i> "I <code>drink</code> coffee every morning." / "The sun <code>rises</code> in the east."</p>` },
  { id: 'present-continuous', level: 'A1', title: 'Hiện tại tiếp diễn (Present Continuous)', html: `
    <p><b>Cấu trúc:</b> S + am/is/are + V-ing</p>
    <p><b>Dùng:</b> hành động đang xảy ra ngay lúc nói, kế hoạch sắp tới.</p>
    <p><b>Dấu hiệu:</b> now, at the moment, Look!, Listen!</p>
    <p><i>Ví dụ:</i> "She <code>is studying</code> right now."</p>` },
  { id: 'past-simple', level: 'A2', title: 'Quá khứ đơn (Past Simple)', html: `
    <p><b>Cấu trúc:</b> S + V2/V-ed + O</p>
    <p><b>Dùng:</b> hành động đã kết thúc trong quá khứ, có mốc thời gian.</p>
    <p><b>Dấu hiệu:</b> yesterday, last week, in 2010, ago...</p>
    <p><i>Ví dụ:</i> "I <code>visited</code> Paris last year."</p>` },
  { id: 'present-perfect', level: 'A2', title: 'Hiện tại hoàn thành (Present Perfect)', html: `
    <p><b>Cấu trúc:</b> S + have/has + V3</p>
    <p><b>Dùng:</b> hành động bắt đầu trong quá khứ, còn liên quan đến hiện tại.</p>
    <p><b>Dấu hiệu:</b> just, already, yet, ever, never, since, for.</p>
    <p><i>Ví dụ:</i> "I <code>have lived</code> here for 5 years."</p>` },
  { id: 'future', level: 'A2', title: 'Tương lai: Will & Be going to', html: `
    <p><b>Will:</b> quyết định tức thời, dự đoán không có cơ sở.</p>
    <p><b>Be going to:</b> kế hoạch đã định, dự đoán có dấu hiệu.</p>
    <p><i>Ví dụ:</i> "It <code>is going to</code> rain. Look at the clouds."</p>` },
  { id: 'conditionals', level: 'B1', title: 'Câu điều kiện (Conditionals)', html: `
    <table>
      <tr><th>Loại</th><th>Cấu trúc</th><th>Nghĩa</th></tr>
      <tr><td>0</td><td>If + S + V(htai), S + V(htai)</td><td>Sự thật</td></tr>
      <tr><td>1</td><td>If + S + V(htai), S + will + V</td><td>Có thể xảy ra</td></tr>
      <tr><td>2</td><td>If + S + V(qkhứ/were), S + would + V</td><td>Trái hiện tại</td></tr>
      <tr><td>3</td><td>If + S + had + V3, S + would have + V3</td><td>Trái quá khứ</td></tr>
    </table>
    <p><i>Ví dụ:</i> "If I <code>were</code> you, I <code>would</code> apologize."</p>` },
  { id: 'passive', level: 'B1', title: 'Câu bị động (Passive Voice)', html: `
    <p><b>Cấu trúc:</b> S + be + V3 (+ by + O)</p>
    <table>
      <tr><th>Thì</th><th>Chủ động</th><th>Bị động</th></tr>
      <tr><td>HT đơn</td><td>writes</td><td>is/are written</td></tr>
      <tr><td>QK đơn</td><td>wrote</td><td>was/were written</td></tr>
      <tr><td>HTHT</td><td>has written</td><td>has/have been written</td></tr>
    </table>` },
  { id: 'relative', level: 'B2', title: 'Mệnh đề quan hệ (Relative Clauses)', html: `
    <p><b>Đại từ:</b> who (người), which (vật), that (cả 2), whose, where, when.</p>
    <p><i>Ví dụ:</i> "The man <code>who</code> lives next door is a doctor."</p>
    <p>Mệnh đề có dấu phẩy = không xác định, chỉ bổ sung thông tin.</p>` },
  { id: 'reported', level: 'B2', title: 'Câu tường thuật (Reported Speech)', html: `
    <p>Lùi 1 thì khi tường thuật. HT đơn → QK đơn; HTHT → QKHT; will → would.</p>
    <p><i>Ví dụ:</i> She said, "I <code>am</code> tired." → She said she <code>was</code> tired.</p>` },
  { id: 'inversion', level: 'C1', title: 'Đảo ngữ (Inversion)', html: `
    <p>Đảo trợ động từ lên trước chủ ngữ sau: <i>Never, Rarely, Hardly, No sooner, Not only, Little, Seldom...</i></p>
    <p><i>Ví dụ:</i> "<code>Never have I seen</code> such a beautiful sunset."</p>` },
  { id: 'subjunctive', level: 'C1', title: 'Câu giả định (Subjunctive)', html: `
    <p>Sau <i>suggest, recommend, demand, insist, propose, require</i> + that + S + V(nguyên thể).</p>
    <p><i>Ví dụ:</i> "The doctor recommended that he <code>take</code> a rest."</p>` },
  { id: 'advanced', level: 'C2', title: 'Cấu trúc nâng cao (Advanced Patterns)', html: `
    <ul>
      <li><b>Cleft sentences:</b> "It is <code>John</code> who broke the window."</li>
      <li><b>Participle clauses:</b> "<code>Having finished</code> the project, she went home."</li>
      <li><b>Hedging:</b> dùng might, could, tend to, somewhat để giảm nhẹ phát biểu.</li>
    </ul>` },
];

export type BlogPost = { slug: string; title: string; date: string; excerpt: string; tags: string[]; html: string };

export const BLOG: BlogPost[] = [
  {
    slug: 'lo-trinh-hoc-tieng-anh-tu-zero',
    title: 'Lộ trình học tiếng Anh từ Zero đến C1 trong 12 tháng',
    date: '2026-04-10',
    tags: ['lộ trình', 'beginner'],
    excerpt: 'Một roadmap rõ ràng, có thể đo lường, dành cho người mất gốc muốn đạt C1 trong 1 năm.',
    html: `
      <p>Học tiếng Anh không cần "thiên phú" - chỉ cần một lộ trình hợp lý và sự kiên trì. Dưới đây là roadmap 12 tháng đã được nhiều học viên áp dụng thành công.</p>
      <h2>Tháng 1-2: Phá băng (A1)</h2>
      <ul>
        <li>Học bảng chữ cái + 44 âm IPA (mỗi ngày 30 phút).</li>
        <li>500 từ vựng cơ bản (chủ đề: gia đình, đồ ăn, số đếm, màu sắc).</li>
        <li>Ngữ pháp: hiện tại đơn, hiện tại tiếp diễn, to be.</li>
      </ul>
      <h2>Tháng 3-4: Xây nền (A2)</h2>
      <ul>
        <li>1.000 từ vựng tiếp theo + collocations cơ bản.</li>
        <li>Ngữ pháp: quá khứ đơn, hiện tại hoàn thành, tương lai.</li>
        <li>Bắt đầu nghe podcast level A2 (BBC Learning English - 6 Minute English).</li>
      </ul>
      <h2>Tháng 5-7: Bứt phá (B1 → B2)</h2>
      <ul>
        <li>Đọc tin tức song ngữ mỗi ngày 1 bài.</li>
        <li>Ngữ pháp nâng cao: điều kiện, bị động, mệnh đề quan hệ.</li>
        <li>Speaking: tự nói chuyện trước gương 10 phút/ngày, ghi âm lại.</li>
      </ul>
      <h2>Tháng 8-12: Hoàn thiện (B2 → C1)</h2>
      <ul>
        <li>Xem phim không phụ đề Việt, viết tóm tắt 200 từ mỗi tuần.</li>
        <li>Học academic vocabulary (AWL - 570 từ).</li>
        <li>Luyện đề IELTS/TOEFL để đo trình.</li>
      </ul>
      <blockquote>Nguyên tắc vàng: 1 giờ mỗi ngày trong 365 ngày > 7 giờ một ngày trong 52 ngày.</blockquote>` },
  {
    slug: 'meo-hoc-tu-vung-nho-lau',
    title: '7 mẹo học từ vựng tiếng Anh nhớ lâu (dựa trên khoa học não bộ)',
    date: '2026-04-08',
    tags: ['từ vựng', 'mẹo'],
    excerpt: 'Spaced repetition, chunking, story method... Cách áp dụng những kỹ thuật này vào việc học từ vựng hằng ngày.',
    html: `
      <h2>1. Spaced Repetition (Lặp lại có khoảng cách)</h2>
      <p>Học từ mới hôm nay, ôn lại sau 1 ngày, 3 ngày, 7 ngày, 14 ngày, 30 ngày. Đây là cách nhồi từ vựng vào trí nhớ dài hạn hiệu quả nhất.</p>
      <h2>2. Học từ trong ngữ cảnh (Context)</h2>
      <p>Đừng học từ đơn lẻ. Học cả câu chứa nó. "Adventure" sẽ khó nhớ; "Life is an adventure" sẽ in vào đầu.</p>
      <h2>3. Chunking - Học theo cụm</h2>
      <p>Người bản xứ không nói từng từ, họ nói thành cụm: <i>"as a matter of fact", "by the way", "to be honest"</i>. Học cụm = nói tự nhiên.</p>
      <h2>4. Story method</h2>
      <p>Ghép 10 từ vựng mới thành một câu chuyện ngắn buồn cười. Não nhớ chuyện cười tốt hơn 10 lần so với danh sách rời rạc.</p>
      <h2>5. Output ngay</h2>
      <p>Học xong từ → đặt 1 câu của mình ngay → đăng lên mạng xã hội/nhắn cho bạn. Output kích hoạt vùng nhớ chủ động.</p>
      <h2>6. Học bằng nhiều giác quan</h2>
      <p>Đọc + nghe + nói + viết cùng 1 từ. Càng nhiều kênh, càng nhớ lâu.</p>
      <h2>7. Đặt mục tiêu nhỏ</h2>
      <p>5 từ/ngày × 365 ngày = 1.825 từ - đủ cho B2. Đừng tham 50 từ/ngày để rồi bỏ cuộc sau 1 tuần.</p>` },
  {
    slug: 'cach-phat-am-th',
    title: 'Phát âm âm /θ/ và /ð/ chuẩn như người bản xứ',
    date: '2026-04-05',
    tags: ['phát âm'],
    excerpt: 'Hai âm "th" - vô thanh và hữu thanh - khiến nhiều người Việt nhầm lẫn. Hướng dẫn chi tiết từng bước.',
    html: `
      <h2>Hai âm "th" trong tiếng Anh</h2>
      <ul>
        <li><b>/θ/</b> - vô thanh, không rung dây thanh: <i>think, three, thank, math, bath</i>.</li>
        <li><b>/ð/</b> - hữu thanh, rung dây thanh: <i>this, that, mother, father, the</i>.</li>
      </ul>
      <h2>Cách tạo âm</h2>
      <ol>
        <li>Đặt đầu lưỡi <b>nhẹ</b> giữa hai hàm răng (không cần cắn).</li>
        <li>Đẩy hơi ra qua khe hở giữa lưỡi và răng trên.</li>
        <li>Với /θ/: chỉ có hơi. Với /ð/: thêm rung dây thanh (đặt tay lên cổ họng để cảm nhận).</li>
      </ol>
      <h2>Bài tập</h2>
      <p>Đọc to: "I <b>th</b>ink <b>th</b>at <b>th</b>e <b>th</b>ree bro<b>th</b>ers <b>th</b>anked <b>th</b>eir mo<b>th</b>er."</p>
      <blockquote>Sai phổ biến: phát âm /θ/ thành /t/ ("think" → "tink") hoặc /s/ ("think" → "sink"). Hãy tập trung đặt lưỡi đúng vị trí.</blockquote>` },
  {
    slug: 'luyen-nghe-hieu-qua',
    title: 'Phương pháp luyện nghe Shadowing - bí quyết của polyglot',
    date: '2026-04-02',
    tags: ['luyện nghe', 'speaking'],
    excerpt: 'Shadowing giúp bạn vừa nghe vừa nói cùng lúc, cải thiện cả accent lẫn khả năng phản xạ.',
    html: `
      <h2>Shadowing là gì?</h2>
      <p>Shadowing = "bám đuôi" - bạn lặp lại lời người bản xứ <b>ngay lập tức</b> (chậm hơn vài từ), bắt chước y hệt từ ngữ điệu, tốc độ đến cách ngắt câu.</p>
      <h2>Quy trình 5 bước</h2>
      <ol>
        <li><b>Nghe lần 1:</b> nghe thoải mái, hiểu nội dung tổng quát.</li>
        <li><b>Đọc transcript:</b> tra từ mới, hiểu 100%.</li>
        <li><b>Nghe lần 2 + nhìn transcript:</b> chú ý nối âm, nuốt âm.</li>
        <li><b>Shadow lần 1:</b> vừa nghe vừa đọc theo, có transcript.</li>
        <li><b>Shadow lần 2-5:</b> bỏ transcript, chỉ nghe và nói theo.</li>
      </ol>
      <h2>Nguồn shadowing chất lượng</h2>
      <ul>
        <li>TED Talks (có transcript).</li>
        <li>BBC 6 Minute English.</li>
        <li>Phim Pixar (chậm, rõ).</li>
        <li>Audiobook trẻ em (Roald Dahl, J.K. Rowling).</li>
      </ul>
      <p>15 phút shadowing/ngày trong 90 ngày sẽ tạo ra thay đổi rõ rệt về accent và phản xạ nói.</p>` },
  {
    slug: '12-thi-tieng-anh',
    title: '12 thì trong tiếng Anh - Tổng hợp 1 trang nhớ cả đời',
    date: '2026-03-28',
    tags: ['ngữ pháp'],
    excerpt: 'Bảng so sánh trực quan tất cả 12 thì với cấu trúc, dấu hiệu nhận biết và ví dụ.',
    html: `
      <h2>Hiện tại (Present)</h2>
      <ul>
        <li><b>Đơn:</b> S + V(s/es) - thói quen, sự thật.</li>
        <li><b>Tiếp diễn:</b> S + am/is/are + Ving - đang xảy ra.</li>
        <li><b>Hoàn thành:</b> S + have/has + V3 - đến hiện tại.</li>
        <li><b>Hoàn thành tiếp diễn:</b> S + have/has been + Ving - kéo dài đến hiện tại.</li>
      </ul>
      <h2>Quá khứ (Past)</h2>
      <ul>
        <li><b>Đơn:</b> S + V2/Ved - đã xảy ra, kết thúc.</li>
        <li><b>Tiếp diễn:</b> S + was/were + Ving - đang xảy ra trong quá khứ.</li>
        <li><b>Hoàn thành:</b> S + had + V3 - xảy ra trước hành động khác trong QK.</li>
        <li><b>Hoàn thành tiếp diễn:</b> S + had been + Ving - kéo dài trước thời điểm QK.</li>
      </ul>
      <h2>Tương lai (Future)</h2>
      <ul>
        <li><b>Đơn:</b> S + will + V - sẽ xảy ra.</li>
        <li><b>Tiếp diễn:</b> S + will be + Ving - đang xảy ra tại thời điểm tương lai.</li>
        <li><b>Hoàn thành:</b> S + will have + V3 - hoàn tất trước thời điểm tương lai.</li>
        <li><b>Hoàn thành tiếp diễn:</b> S + will have been + Ving - kéo dài đến thời điểm tương lai.</li>
      </ul>
      <blockquote>Mẹo: nắm vững 4 thì hiện tại + 2 thì quá khứ (đơn, hoàn thành) là đã giao tiếp được 90% tình huống đời thường.</blockquote>` },
];
