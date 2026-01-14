export const AVAILABLE_YEARS = [
  // --- Main Venue ---
  { type: "separator", label: "本会場 (Main Venue)" },
  { id: "2025-2", year: 2025, session: 2, label: "2025年第2回 (The Mirror Test)" },
  { id: "2025-1", year: 2025, session: 1, label: "2025年第1回 (History of Tea Bags)" },
  { id: "2024-3", year: 2024, session: 3, label: "2024年第3回 (Diaries)" },
  { id: "2024-2", year: 2024, session: 2, label: "2024年第2回 (Community Gardens)" },
  { id: "2024-1", year: 2024, session: 1, label: "2024年第1回 (The Arts and Crafts Movement)" },
  { id: "2023-3-1", year: 2023, session: 3, label: "2023年第3回(1) (Keeping Up-to-Date)" },
  { id: "2023-3-2", year: 2023, session: 3, label: "2023年第3回(2) (Marie Curie)" },
  { id: "2023-2-1", year: 2023, session: 2, label: "2023年第2回(1) (Purple Straw Wheat)" },
  { id: "2023-2-2", year: 2023, session: 2, label: "2023年第2回(2) (Venice’s Books)" },
  { id: "2023-1-1", year: 2023, session: 1, label: "2023年第1回(1) (An Extraordinary Machine)" },
  { id: "2023-1-2", year: 2023, session: 1, label: "2023年第1回(2) (Living the Dream)" },

  // --- Semi Venue ---
  { type: "separator", label: "準会場 (Semi-Venue)" },
  { id: "2025-2-jun", year: 2025, session: 2, label: "2025年第2回(準会場) (Mars Exploration)" },
  { id: "2025-1-jun", year: 2025, session: 1, label: "2025年第1回(準会場) (Hidden in Plain Sight)" },
  { id: "2024-3-jun", year: 2024, session: 3, label: "2024年第3回(準会場) (Making Choices)" },
  { id: "2024-2-jun", year: 2024, session: 2, label: "2024年第2回(準会場) (Blues)" },
  { id: "2024-1-jun", year: 2024, session: 1, label: "2024年第1回(準会場) (Chichén Itzá)" },
  { id: "2023-3-1-jun", year: 2023, session: 3, label: "2023年第3回(準会場)(1) (American Birds)" },
  { id: "2023-3-2-jun", year: 2023, session: 3, label: "2023年第3回(準会場)(2) (George Bernard Shaw)" },
];


export const MOCK_DATA = {
  "2024-3-jun": {
    past: {
      title: "Making Choices",
      content: `## Title: Making Choices

People must make all kinds of choices every day. This starts when they are children and continues throughout their adult lives. However, this does not mean that people need to give all choices the same level of consideration and time. For example, people can easily make choices like what to eat, where to park, or when to wake up. On the other hand, they often spend a lot of time thinking about bigger life decisions, such as which school to go to, when to get married, and what career to follow.

People often think that having more choices is a good thing. However, some researchers disagree, and they conducted a study. In their experiment, they set up a table in a local supermarket in California. First, they created a display that let customers sample six different types of jam for one hour. Then, they made a different display, this time with twenty-four types of jam. Surprisingly, although fewer customers stopped to try the jam at the six-jam display, more customers actually purchased the products from this display than at the display with twenty-four types of jam.

This result may seem to be hard to understand at first. An owner of a supermarket would believe that they could increase their sales by increasing the choices. This is because more options would certainly match more customers' needs. However, this study shows that more choices do not always lead to great results. When people are given too many choices, the differences between each option become unclear, making it difficult to compare. As a result, people find it harder to choose.

Another negative impact of having too many choices is that it makes people less happy. Having many choices means there are also many things that they are not able to choose. Because of this, they end up feeling regret. According to experts, to avoid this, it is important to set a time limit on making choices and to try one's best not to think about it once decisions are made. Otherwise, the things that people did not choose could make them feel unhappy.`,
      questions: `### Questions

**(27) What kind of decision would people probably spend more time making?**
1. A decision about what meal to order for breakfast.
2. A decision about which type of job to apply for.
3. A decision about what time to set an alarm clock.
4. A decision about where they should park their car.

**(28) In one study, a group of researchers tested**
1. which flavor of jam was most popular among certain shoppers.
2. whether the number of choices influenced shoppers' decisions.
3. how long it took shoppers to visit the same supermarket again.
4. how many seconds each shopper took to taste different samples.

**(29) Why do some business owners try to increase their product selection?**
1. To make their business more popular among young people.
2. To reduce the production cost of making more products.
3. To meet the needs and tastes of a variety of customers.
4. To show their skill in finding many new kinds of products.

**(30) When people have too many choices, they often**
1. feel some regret for choices that they were not able to make.
2. have problems with other shoppers trying to make similar choices.
3. waste a lot of money trying to avoid making the wrong decision.
4. choose options that actually cost them more money in the end.

**(31) Which of the following statements is true?**
1. Children can make better choices about food than adults.
2. More customers visited a table with fewer jam selections.
3. Having more options does not guarantee more sales.
4. People can make the right decision by taking more time.

---
**Answer Key:** 2, 2, 3, 1, 3`,
      translations: [
        { en: "People must make all kinds of choices every day.", ja: "人々は毎日あらゆる種類の選択をしなければならない。" },
        { en: "This starts when they are children and continues throughout their adult lives.", ja: "これは彼らが子供の時に始まり、大人の生活を通して続く。" },
        { en: "However, this does not mean that people need to give all choices the same level of consideration and time.", ja: "しかし、これは人々がすべての選択に同じレベルの考慮と時間を与える必要があることを意味するわけではない。" },
        { en: "For example, people can easily make choices like what to eat, where to park, or when to wake up.", ja: "例えば、人々は何を食べるか、どこに駐車するか、あるいはいつ起きるかといった選択を簡単にすることができる。" },
        { en: "On the other hand, they often spend a lot of time thinking about bigger life decisions, such as which school to go to, when to get married, and what career to follow.", ja: "一方で、彼らはしばしば、どの学校に行くか、いつ結婚するか、どのようなキャリアを歩むかといった、より大きな人生の決断について考えることに多くの時間を費やす。" },
        { en: "People often think that having more choices is a good thing.", ja: "人々はしばしば、選択肢が多いことは良いことだと考える。" },
        { en: "However, some researchers disagree, and they conducted a study.", ja: "しかし、一部の研究者は同意せず、彼らはある研究を行った。" },
        { en: "In their experiment, they set up a table in a local supermarket in California.", ja: "彼らの実験では、彼らはカリフォルニアの地元のスーパーマーケットにテーブルを設置した。" },
        { en: "First, they created a display that let customers sample six different types of jam for one hour.", ja: "最初に、彼らは客が1時間の間6つの異なる種類のジャムを試食できるディスプレイ（陳列）を作った。" },
        { en: "Then, they made a different display, this time with twenty-four types of jam.", ja: "次に、彼らは異なるディスプレイを作ったが、今回は24種類のジャムを用意した。" },
        { en: "Surprisingly, although fewer customers stopped to try the jam at the six-jam display, more customers actually purchased the products from this display than at the display with twenty-four types of jam.", ja: "驚いたことに、6種類のジャムのディスプレイで足を止めて試食した客は少なかったにもかかわらず、実際には24種類のジャムがあるディスプレイよりも、このディスプレイから商品を購入した客の方が多かった。" },
        { en: "This result may seem to be hard to understand at first.", ja: "この結果は、最初は理解するのが難しいと思われるかもしれない。" },
        { en: "An owner of a supermarket would believe that they could increase their sales by increasing the choices.", ja: "スーパーマーケットのオーナーであれば、選択肢を増やすことで売り上げを伸ばせると信じるだろう。" },
        { en: "This is because more options would certainly match more customers' needs.", ja: "これは、より多くの選択肢があれば、より多くの顧客のニーズに確実に合致するからである。" },
        { en: "However, this study shows that more choices do not always lead to great results.", ja: "しかし、この研究は、より多くの選択肢が必ずしも素晴らしい結果につながるわけではないことを示している。" },
        { en: "When people are given too many choices, the differences between each option become unclear, making it difficult to compare.", ja: "人々が多すぎる選択肢を与えられると、それぞれの選択肢の違いが不明確になり、比較することが難しくなる。" },
        { en: "As a result, people find it harder to choose.", ja: "その結果、人々は選ぶのがより難しいと感じる。" },
        { en: "Another negative impact of having too many choices is that it makes people less happy.", ja: "選択肢が多すぎることのもう一つの否定的な影響は、それが人々を幸福でなくしてしまうことである。" },
        { en: "Having many choices means there are also many things that they are not able to choose.", ja: "多くの選択肢があるということは、彼らが選ぶことができない多くのものがあるということも意味する。" },
        { en: "Because of this, they end up feeling regret.", ja: "このため、彼らは結局後悔を感じることになる。" },
        { en: "According to experts, to avoid this, it is important to set a time limit on making choices and to try one's best not to think about it once decisions are made.", ja: "専門家によると、これを避けるためには、選択を行う際に時間制限を設けること、そして一度決定がなされたらそれについて考えないように最善を尽くすことが重要である。" },
        { en: "Otherwise, the things that people did not choose could make them feel unhappy.", ja: "そうしなければ、人々が選ばなかったものが彼らを不幸な気持ちにさせる可能性がある。" }
      ]
    },
    original: {
      title: "The Streaming Dilemma",
      content: `## Title: The Streaming Dilemma

In the modern world, technology has given people access to a nearly endless supply of entertainment. Deciding what to watch on TV used to be simple because there were only a few channels available. Today, however, streaming services offer thousands of movies and TV shows at the click of a button. While having so many options might seem like a dream come true, it has created a new type of stress for users. Instead of quickly picking a movie and enjoying it, many people spend more time searching for content than actually watching it.

To understand this behavior, a group of psychologists conducted an experiment with regular users of streaming services. They divided the participants into two groups. The first group was given a limited list of just five movies to choose from. The second group was given access to a library containing over five thousand titles. The results were clear. The people in the first group chose a movie within minutes and reported high levels of satisfaction. In contrast, those in the second group spent over twenty minutes scrolling through titles, and many of them gave up without watching anything at all.

Streaming companies often believe that adding more content is the best way to attract subscribers. They think that a larger library justifies the monthly fee and appeals to a wider audience. While this logic makes sense from a business perspective, it ignores the limits of human attention. When faced with too many similar options, the human brain struggles to make a decision. This phenomenon is known as "analysis paralysis," where the fear of making the wrong choice prevents people from making any choice.

Furthermore, even when people in the large-group experiment finally picked a movie, they enjoyed it less than the small-group participants did. Experts suggest that this happens because of the "fear of missing out." When there are thousands of other options, viewers constantly wonder if a different movie would have been better than the one they selected. To combat this, some experts recommend that viewers should use features like "random play" or simply stick to recommendations from friends to reduce the burden of choice.`,
      questions: `### Original Questions

**(1) How has choosing entertainment changed compared to the past?**
1. It has become much simpler because there are fewer channels to watch.
2. It has become more difficult because of the huge number of options.
3. It requires less time now because technology makes decisions for us.
4. It is no longer necessary because people prefer to read books instead.

**(2) What did the experiment with streaming service users reveal?**
1. Participants with fewer options chose a movie quickly and were happy.
2. Participants with many options watched more movies than the other group.
3. The group with five thousand titles found it easier to decide what to watch.
4. Both groups spent the same amount of time searching for a movie.

**(3) Why do streaming companies continue to add more content to their libraries?**
1. To confuse customers and make them spend more time on the platform.
2. To help psychologists conduct experiments on human behavior.
3. To encourage customers to cancel their subscriptions to other services.
4. To show that their service is valuable and suitable for many people.

**(4) Why did the participants in the second group enjoy their movies less?**
1. The movies they chose were generally of lower quality than the others.
2. They were worried that they might have missed out on a better option.
3. They were tired because they had to watch the movie late at night.
4. The streaming service they used had many technical problems.

**(5) Which of the following statements is true?**
1. Having unlimited choices always leads to the highest level of satisfaction.
2. "Analysis paralysis" occurs when people have too few options to choose from.
3. Streaming companies believe that a small library is better for business.
4. Limiting options can help viewers enjoy their entertainment more.

---
**Answer Key:** 2, 1, 4, 2, 4`,
      translations: [
        { en: "In the modern world, technology has given people access to a nearly endless supply of entertainment.", ja: "現代の世界では、テクノロジーによって人々はほぼ無限のエンターテインメントの供給にアクセスできるようになった。" },
        { en: "Deciding what to watch on TV used to be simple because there were only a few channels available.", ja: "利用可能なチャンネルが数個しかなかったため、テレビで何を見るかを決めるのは以前は簡単だった。" },
        { en: "Today, however, streaming services offer thousands of movies and TV shows at the click of a button.", ja: "しかし今日では、ストリーミングサービスがボタンをクリックするだけで何千もの映画やテレビ番組を提供している。" },
        { en: "While having so many options might seem like a dream come true, it has created a new type of stress for users.", ja: "これほど多くの選択肢があることは夢が叶ったように思えるかもしれないが、それはユーザーにとって新しい種類のストレスを生み出している。" },
        { en: "Instead of quickly picking a movie and enjoying it, many people spend more time searching for content than actually watching it.", ja: "映画を素早く選んで楽しむ代わりに、多くの人々は実際に見るよりもコンテンツを探すことに多くの時間を費やしている。" },
        { en: "To understand this behavior, a group of psychologists conducted an experiment with regular users of streaming services.", ja: "この行動を理解するために、ある心理学者のグループがストリーミングサービスの一般ユーザーを対象に実験を行った。" },
        { en: "They divided the participants into two groups.", ja: "彼らは参加者を2つのグループに分けた。" },
        { en: "The first group was given a limited list of just five movies to choose from.", ja: "最初のグループには、選ぶためのわずか5本の映画の限定リストが与えられた。" },
        { en: "The second group was given access to a library containing over five thousand titles.", ja: "2番目のグループには、5000以上のタイトルを含むライブラリへのアクセス権が与えられた。" },
        { en: "The results were clear.", ja: "結果は明白であった。" },
        { en: "The people in the first group chose a movie within minutes and reported high levels of satisfaction.", ja: "最初のグループの人々は数分以内に映画を選び、高い満足度を報告した。" },
        { en: "In contrast, those in the second group spent over twenty minutes scrolling through titles, and many of them gave up without watching anything at all.", ja: "対照的に、2番目のグループの人々はタイトルをスクロールするのに20分以上を費やし、彼らの多くは何も見ずに諦めてしまった。" },
        { en: "Streaming companies often believe that adding more content is the best way to attract subscribers.", ja: "ストリーミング会社は、コンテンツを増やすことが加入者を引き付ける最良の方法であるとしばしば信じている。" },
        { en: "They think that a larger library justifies the monthly fee and appeals to a wider audience.", ja: "彼らは、より大きなライブラリが月額料金を正当化し、より幅広い視聴者にアピールすると考えている。" },
        { en: "While this logic makes sense from a business perspective, it ignores the limits of human attention.", ja: "この論理はビジネスの観点からは理にかなっているが、人間の注意力の限界を無視している。" },
        { en: "When faced with too many similar options, the human brain struggles to make a decision.", ja: "類似した選択肢があまりにも多い場合、人間の脳は決断を下すのに苦労する。" },
        { en: "This phenomenon is known as \"analysis paralysis,\" where the fear of making the wrong choice prevents people from making any choice.", ja: "この現象は「分析麻痺」として知られており、間違った選択をすることへの恐れが、人々がいかなる選択もすることを妨げてしまうのである。" },
        { en: "Furthermore, even when people in the large-group experiment finally picked a movie, they enjoyed it less than the small-group participants did.", ja: "さらに、大規模グループの実験参加者が最終的に映画を選んだ時でさえ、彼らは小規模グループの参加者よりもそれを楽しめなかった。" },
        { en: "Experts suggest that this happens because of the \"fear of missing out.\"", ja: "専門家は、これは「見逃しの恐怖（FOMO）」が原因で起こると示唆している。" },
        { en: "When there are thousands of other options, viewers constantly wonder if a different movie would have been better than the one they selected.", ja: "他に何千もの選択肢がある場合、視聴者は自分が選んだものよりも別の映画の方が良かったのではないかと常に考えてしまう。" },
        { en: "To combat this, some experts recommend that viewers should use features like \"random play\" or simply stick to recommendations from friends to reduce the burden of choice.", ja: "これに対抗するために、一部の専門家は、選択の負担を減らすために視聴者が「ランダム再生」のような機能を使ったり、単に友人からの推薦に従ったりすることを推奨している。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Making Choices (2024-3)

### 1. 量的構造
- **総単語数:** ~380 words (Target 350-400)
- **パラグラフ構成:**
  1. **導入:** 現代における選択肢の多さ。昔（チャンネル数少）と今（ストリーミングで無限）の対比。
  2. **実験:** 5本 vs 5000本の映画リスト。選択時間と満足度の違い。
  3. **企業の論理と現実:** 企業は「量＝価値」と考えるが、ユーザーは「分析麻痺（Analysis Paralysis）」に陥る。
  4. **心理的影響と対策:** FOMO（見逃しの恐怖）による満足度低下。対策としてのランダム再生や推薦の利用。

### 2. 重要語彙
- **streaming service:** 動画配信サービス
- **justify:** 正当化する
- **perspective:** 視点
- **struggle:** 苦労する、もがく
- **phenomenon:** 現象
- **analysis paralysis:** 分析麻痺（考えすぎて動けなくなること）
- **combat:** ～と戦う、対処する`,
      summary: `## 講師用：本文要約 (Instructor Summary)

有名な「ジャムの法則」の現代版として、動画配信サービス（ストリーミング）における選択のパラドックスを扱っています。選択肢が多すぎることが、かえって満足度を下げてしまう現象を解説しています。

### 1. Too Much to Watch (第1段落)
昔はテレビのチャンネルが少なかったので見るものを決めるのは簡単でしたが、今はストリーミングサービスに何千もの選択肢があります。これは夢のようですが、実際には「見る時間」よりも「探す時間」の方が長くなるというストレスを生んでいます。

### 2. The Experiment (第2段落)
心理学者の実験で、5本の映画から選ぶグループと、5000本から選ぶグループを比較しました。選択肢が少ないグループはすぐに選んで満足しましたが、多いグループは選ぶのに20分以上かかり、諦めてしまう人もいました。

### 3. Quantity vs. Quality (第3段落)
企業は「作品数が多い＝価値がある」と考えますが、人間の脳は選択肢が多すぎると「分析麻痺」を起こし、選べなくなってしまいます。

### 4. The Fear of Missing Out (第4段落)
選択肢が多いと、「他にもっと良い映画があったかも」と疑ってしまい、選んだ作品を純粋に楽しめなくなります。専門家は、ランダム機能や友人の推薦を利用して、選択の負担を減らすことを勧めています。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Making Choices (過去問) | The Streaming Dilemma (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 選択のパラドックス（ジャムの実験） | 選択のパラドックス（動画配信の実験） | 選択肢過多がもたらすネガティブな影響 |
| **構造** | 1. 大小の決断<br>2. ジャムの実験（6種 vs 24種）<br>3. 企業の誤解と困難さ<br>4. 後悔と対策 | 1. 昔と今の視聴環境<br>2. 映画の実験（5本 vs 5000本）<br>3. 企業の誤解と分析麻痺<br>4. 満足度低下と対策 | 実験を通じた論証、企業側の視点と消費者側の心理の対比 |
| **設問1** | どんな決断に時間をかけるか（大きな決断） | 過去とどう変わったか（難しくなった） | 第1段落の「導入・背景」理解を問う |
| **設問2** | 実験の内容（選択数が影響するか） | 実験の結果（少ない方が早く幸せ） | 第2段落の「実験結果」の詳細を問う |
| **設問3** | なぜ店主は商品を増やすか（ニーズ対応） | なぜ企業は作品を増やすか（価値証明） | 第3段落の「供給側の意図」を問う |
| **設問4** | 選択肢過多の影響（後悔） | 満足度が低い理由（より良い選択への懸念） | 第4段落の「心理的・感情的影響」を問う |
| **設問5** | 内容一致（選択肢増は売上保証せず） | 内容一致（制限が満足度を高める） | 本文全体の結論・教訓 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Making Choices (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Shopping (Jam)
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「購入率（Purchased）」に焦点。選択肢が多いと買わなくなる。

* **The Streaming Dilemma (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Digital Content (Streaming)
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「満足度（Satisfaction）」と「探索時間」に焦点。選択肢が多いと楽しめなくなる。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 過去問は「どのタイプの決断が重いか」という具体例を問う。オリジナルは「昔との比較」で現状を問う。
* **Q2:** 両者とも実験の対比（少ない vs 多い）の結果を正解とする。
* **Q3:** 両者とも「なぜ供給側（店・企業）はもっと増やそうとするのか」という動機を問う。
* **Q4:** 過去問は「Regret（後悔）」がキーワード。オリジナルは「Worry about missing out（より良いものを逃す懸念）」がキーワード。
* **Q5:** どちらも「More is not always better（多いことは常に良いわけではない）」という逆説的な真実を選択させる。`,
      syntax: `
    ## 4. 正解の根拠となるセンテンスの構文解析

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1): The Streaming Dilemma</h3>
    <blockquote>While having so many options might seem like a dream come true, it <b>has created</b> a new type of stress for users.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>譲歩節 (While):</b> While having so many options might seem like a dream come true (多くの選択肢があることは夢のように思えるかもしれないが)</li>
        <li><b>主節:</b> it has created a new type of stress for users.</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>逆接の接続詞 "While" が前置きとなり、主節で「新しい種類のストレスを生み出した」と述べています。これが選択肢2の "become more difficult because of the huge number of options" （選択肢が多すぎて難しくなった）につながります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
    <blockquote>The people in the first group <b>chose</b> a movie within minutes and <b>reported</b> high levels of satisfaction.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> The people in the first group (少ない選択肢のグループ)</li>
        <li><b>動詞 (V1):</b> chose (a movie within minutes)</li>
        <li><b>動詞 (V2):</b> reported (high levels of satisfaction)</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>実験結果の記述です。第1グループ（選択肢が少なかった方）が「すぐに選び」「高い満足度を示した」ことが、選択肢1の "Participants with fewer options chose a movie quickly and were happy" と完全に一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
    <blockquote>They <b>think</b> that a larger library justifies the monthly fee and appeals to a wider audience.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> They (Streaming companies)</li>
        <li><b>動詞 (V):</b> think</li>
        <li><b>目的語 (O):</b> that節
          <ul>
            <li><b>S':</b> a larger library</li>
            <li><b>V':</b> justifies ... and appeals ...</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>企業の考え（They think...）を説明しています。「より大きなライブラリ（＝多くの作品）が...幅広い視聴者にアピールする」という部分が、選択肢4の "To show that their service is valuable and suitable for many people" の根拠となります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
    <blockquote>When there are thousands of other options, viewers constantly <b>wonder</b> if a different movie would have been better than the one they selected.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>接続詞節:</b> When there are...</li>
        <li><b>主語 (S):</b> viewers</li>
        <li><b>動詞 (V):</b> wonder</li>
        <li><b>目的語 (O):</b> if節 (if a different movie would have been better...)</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"wonder if..."（～ではないかと思う）という表現で、視聴者の心理を描写しています。「別の映画の方が良かったのではないか」と疑うことが、満足度を下げる原因であり、選択肢2の "worried that they might have missed out on a better option" と合致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
    <blockquote>To combat this, some experts <b>recommend</b> that viewers should use features like "random play" or simply stick to recommendations from friends to reduce the burden of choice.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>目的 (To combat this):</b> これに対処するために</li>
        <li><b>主語 (S):</b> some experts</li>
        <li><b>動詞 (V):</b> recommend</li>
        <li><b>目的語 (O):</b> that viewers should use... or stick to... to reduce...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>専門家の推奨事項として「選択の負担を減らす（reduce the burden of choice）」ために選択肢を絞る（ランダムや推薦に頼る）ことを挙げています。これは「選択肢を制限することが助けになる」という意味であり、選択肢4の "Limiting options can help viewers enjoy their entertainment more" が正しい記述（True statement）となります。</p>
    </div>
    `
    }
  },
  "2024-1-jun": {
    past: {
      title: "Chichén Itzá",
      content: `## Title: Chichén Itzá

Chichén Itzá is an ancient city in Mexico that contains some remarkable buildings. Construction of the city began around 1,500 years ago and was carried out by people of the Maya civilization. The site was probably first settled by the Maya people because it had a large, underground source of water, good soil for growing crops, and plenty of stone for building. For these reasons, the area was able to support a large population, and within a few hundred years, Chichén Itzá had become one of the most important Maya cities.

Among the people of the Maya civilization, there were great architects, artists, and scientists. They had observed that one year lasted 365 days, and they designed a building called the Temple of Kukulcán in Chichén Itzá to work as a calendar. It is believed that this temple was made so that a shadow on the temple in the shape of a snake's body joined up with statues of a snake's head on certain special days. Knowing such dates would help local farmers to know when to plant their crops.

The Temple of Kukulcán is also special for another reason. If a person stands in front of one of the temple's stairs and claps their hands, the echo sounds like the call of a bird called a quetzal. Quetzals are beautiful birds with bright green, red, and white feathers. The Maya people believed that these birds were the messengers of the gods. Clapping in front of the Temple of Kukulcán sounds as if the gods were talking to the Maya people through their messengers.

Sometime before European explorers first came to Chichén Itzá in the 16th century, the Maya people had left the city. Nobody is sure of the reason for this, but researchers are continuing to look for answers. These days, Chichén Itzá is a UNESCO World Heritage Site and a popular destination for tourists. However, the buildings have been closed to the public due to the damage caused by visitors. It is hoped that doing this will protect these wonderful structures for many years to come so that they can be studied and enjoyed.`,
      questions: `### Questions

**(27) What is one reason Chichén Itzá developed into a large city?**
1. The site was at the meeting point of two important trails.
2. The area had natural resources for farming and construction.
3. The weather in the region was constant throughout the year.
4. The first leader of the Maya people had been born there.

**(28) The design of the Temple of Kukulcán possibly helped**
1. farmers living near Chichén Itzá to plan their work.
2. scientists to accurately record the movements of stars and planets.
3. the artists of Chichén Itzá to become the most famous in the Maya civilization.
4. the people living nearby to catch snakes for food.

**(29) Why did the Maya people believe that birds called quetzals were special?**
1. The birds built their nests on the steps of a temple.
2. The birds were thought to deliver messages from the gods.
3. The birds' calls sounded like the name of one of the gods.
4. The birds' feathers were needed for a ceremony at a temple.

**(30) The buildings in Chichén Itzá were**
1. destroyed by European explorers who wanted to find gold and jewels.
2. damaged when people took stones from them to build hotels for visitors.
3. closed to keep them safe for future generations of tourists and researchers.
4. hidden for many years after a thick forest grew up around them.

**(31) Which of the following statements is true?**
1. Construction of Chichén Itzá began 1,500 years before the Maya people arrived.
2. People of the Maya civilization knew the number of days in a year.
3. There is no echo if a person claps in front of the Temple of Kukulcán.
4. Researchers have recently discovered why the Maya people left Chichén Itzá.

---
**Answer Key:** 2, 1, 2, 3, 2`,
      translations: [
        { en: "Chichén Itzá is an ancient city in Mexico that contains some remarkable buildings.", ja: "チチェン・イッツァは、いくつかの注目すべき建造物を含むメキシコの古代都市である。" },
        { en: "Construction of the city began around 1,500 years ago and was carried out by people of the Maya civilization.", ja: "都市の建設は約1500年前に始まり、マヤ文明の人々によって行われた。" },
        { en: "The site was probably first settled by the Maya people because it had a large, underground source of water, good soil for growing crops, and plenty of stone for building.", ja: "その場所がおそらく最初にマヤの人々によって定住されたのは、そこには大きな地下水源、作物を育てるための良質な土壌、そして建築のための豊富な石があったからである。" },
        { en: "For these reasons, the area was able to support a large population, and within a few hundred years, Chichén Itzá had become one of the most important Maya cities.", ja: "これらの理由から、その地域は多くの人口を支えることができ、数百年以内にチチェン・イッツァは最も重要なマヤの都市の一つとなった。" },
        { en: "Among the people of the Maya civilization, there were great architects, artists, and scientists.", ja: "マヤ文明の人々の中には、偉大な建築家、芸術家、科学者がいた。" },
        { en: "They had observed that one year lasted 365 days, and they designed a building called the Temple of Kukulcán in Chichén Itzá to work as a calendar.", ja: "彼らは1年が365日続くことを観察しており、チチェン・イッツァにあるククルカンの神殿と呼ばれる建物をカレンダーとして機能するように設計した。" },
        { en: "It is believed that this temple was made so that a shadow on the temple in the shape of a snake's body joined up with statues of a snake's head on certain special days.", ja: "この神殿は、特定の特別な日に、蛇の体の形をした神殿上の影が、蛇の頭の像とつながるように作られたと考えられている。" },
        { en: "Knowing such dates would help local farmers to know when to plant their crops.", ja: "そのような日付を知ることは、地元の農民がいつ作物を植えるべきかを知るのに役立っただろう。" },
        { en: "The Temple of Kukulcán is also special for another reason.", ja: "ククルカンの神殿は、もう一つの理由でも特別である。" },
        { en: "If a person stands in front of one of the temple's stairs and claps their hands, the echo sounds like the call of a bird called a quetzal.", ja: "もし人が神殿の階段の一つの前に立って手を叩くと、その反響音（エコー）はケツァールと呼ばれる鳥の鳴き声のように聞こえる。" },
        { en: "Quetzals are beautiful birds with bright green, red, and white feathers.", ja: "ケツァールは、鮮やかな緑、赤、白の羽を持つ美しい鳥である。" },
        { en: "The Maya people believed that these birds were the messengers of the gods.", ja: "マヤの人々は、これらの鳥が神々の使い（メッセンジャー）であると信じていた。" },
        { en: "Clapping in front of the Temple of Kukulcán sounds as if the gods were talking to the Maya people through their messengers.", ja: "ククルカンの神殿の前で手を叩くことは、まるで神々が使いを通してマヤの人々に話しかけているかのように聞こえる。" },
        { en: "Sometime before European explorers first came to Chichén Itzá in the 16th century, the Maya people had left the city.", ja: "16世紀にヨーロッパの探検家たちが初めてチチェン・イッツァに来るよりいつか前に、マヤの人々はその都市を去っていた。" },
        { en: "Nobody is sure of the reason for this, but researchers are continuing to look for answers.", ja: "誰もこの理由を確信していないが、研究者たちは答えを探し続けている。" },
        { en: "These days, Chichén Itzá is a UNESCO World Heritage Site and a popular destination for tourists.", ja: "今日では、チチェン・イッツァはユネスコの世界遺産であり、観光客に人気のある目的地である。" },
        { en: "However, the buildings have been closed to the public due to the damage caused by visitors.", ja: "しかし、訪問者によって引き起こされた損傷のため、建造物は一般公開が閉鎖されている（登ることが禁止されている）。" },
        { en: "It is hoped that doing this will protect these wonderful structures for many years to come so that they can be studied and enjoyed.", ja: "これを行うことが、これらの素晴らしい建造物を今後何年にもわたって保護し、それらが研究され楽しまれるようになることが期待されている。" }
      ]
    },
    original: {
      title: "The Lost City of the Incas",
      content: `## Title: The Lost City of the Incas 

[Image of Machu Picchu]


Machu Picchu is an ancient city located high in the Andes Mountains of Peru. It was built by the Inca civilization around the 15th century. Although it is situated on a steep mountain ridge, the site was carefully chosen by the Incas. It had a natural spring that provided fresh water and the surrounding slopes were perfect for building terraces. These terraces allowed the Incas to grow enough food to support the population and also prevented the mountain from sliding away during heavy rains. For these reasons, Machu Picchu became an important center for the Inca leaders.

The Incas were expert engineers and astronomers. They constructed a special building known as the Temple of the Sun to track the movement of the sun. The windows of this temple are perfectly aligned so that on the morning of the winter solstice, the sun shines directly through them. This design acted as a calendar. By observing the sunlight, the Inca people could determine the best times for planting and harvesting their crops, which was essential for their survival in the mountains.

The buildings in Machu Picchu are famous for another remarkable feature: their earthquake resistance. The Incas cut the stones so precisely that they fit together without using any cement or glue. This technique is called "ashlar masonry." Because of this design, when an earthquake occurs, the stones bounce slightly and then fall back into their perfect positions. If the Incas had used rigid cement, the buildings would have collapsed long ago. This advanced construction method suggests that the Incas understood the geology of their land very well.

Unlike many other Inca cities, Machu Picchu was never discovered by the Spanish conquerors who arrived in the 16th century. It remained hidden in the jungle until an American explorer named Hiram Bingham shared its existence with the world in 1911. Today, it is a UNESCO World Heritage Site, but its popularity has created problems. The large number of tourists walking on the site causes damage to the ancient stone paths. To protect the city for the future, the government has strictly limited the number of daily visitors.`,
      questions: `### Original Questions

**(1) What made the location of Machu Picchu suitable for a city?**
1. It was located near the ocean, which made trade with other countries easy.
2. It had natural water sources and land that could be used for farming.
3. It was surrounded by a thick forest that protected it from wild animals.
4. It was built on flat land that was easy to walk on for older people.

**(2) The Temple of the Sun was designed to help the Inca people**
1. communicate with their gods using special sound effects.
2. store large amounts of food for the winter months.
3. know the right time to farm by tracking the sun's position.
4. create a safe place to hide during enemy attacks.

**(3) Why did the Incas build their walls without using cement?**
1. They wanted the stones to be able to move during earthquakes.
2. Cement was too expensive and difficult to transport up the mountain.
3. They believed that using cement would make the gods angry.
4. They did not have enough time to finish the construction properly.

**(4) What is one problem that Machu Picchu faces today?**
1. The Spanish government is trying to claim the land as their own.
2. The surrounding jungle is growing too fast and covering the buildings.
3. Too many visitors are causing damage to the historic structures.
4. Researchers are digging too many holes to find hidden treasures.

**(5) Which of the following statements is true?**
1. Machu Picchu was discovered by Spanish conquerors in the 16th century.
2. The terraces at Machu Picchu were used only for decoration.
3. Hiram Bingham announced the existence of Machu Picchu to the world.
4. The Temple of the Sun was built to track the movement of the moon.

---
**Answer Key:** 2, 3, 1, 3, 3`,
      translations: [
        { en: "Machu Picchu is an ancient city located high in the Andes Mountains of Peru.", ja: "マチュ・ピチュは、ペルーのアンデス山脈の高い場所に位置する古代都市である。" },
        { en: "It was built by the Inca civilization around the 15th century.", ja: "それは15世紀頃にインカ文明によって建設された。" },
        { en: "Although it is situated on a steep mountain ridge, the site was carefully chosen by the Incas.", ja: "それは険しい山の尾根に位置しているが、その場所はインカ人によって慎重に選ばれた。" },
        { en: "It had a natural spring that provided fresh water and the surrounding slopes were perfect for building terraces.", ja: "そこには新鮮な水を供給する天然の泉があり、周囲の斜面は段々畑（テラス）を作るのに最適であった。" },
        { en: "These terraces allowed the Incas to grow enough food to support the population and also prevented the mountain from sliding away during heavy rains.", ja: "これらの段々畑は、インカ人が人口を支えるのに十分な食料を育てることを可能にし、また大雨の間に山が崩れるのを防いだ。" },
        { en: "For these reasons, Machu Picchu became an important center for the Inca leaders.", ja: "これらの理由から、マチュ・ピチュはインカの指導者たちにとって重要な中心地となった。" },
        { en: "The Incas were expert engineers and astronomers.", ja: "インカ人は熟練した技術者であり天文学者であった。" },
        { en: "They constructed a special building known as the Temple of the Sun to track the movement of the sun.", ja: "彼らは太陽の動きを追跡するために、太陽の神殿として知られる特別な建物を建設した。" },
        { en: "The windows of this temple are perfectly aligned so that on the morning of the winter solstice, the sun shines directly through them.", ja: "この神殿の窓は完全に整列されており、冬至の朝には太陽がそれらを直接通り抜けて輝くようになっている。" },
        { en: "This design acted as a calendar.", ja: "この設計はカレンダーとして機能した。" },
        { en: "By observing the sunlight, the Inca people could determine the best times for planting and harvesting their crops, which was essential for their survival in the mountains.", ja: "日光を観察することによって、インカの人々は作物の作付けと収穫に最適な時期を決定することができ、それは山での生存にとって不可欠であった。" },
        { en: "The buildings in Machu Picchu are famous for another remarkable feature: their earthquake resistance.", ja: "マチュ・ピチュの建物は、もう一つの注目すべき特徴、すなわち耐震性で有名である。" },
        { en: "The Incas cut the stones so precisely that they fit together without using any cement or glue.", ja: "インカ人は石を非常に正確に切ったので、それらはセメントや接着剤を使わずに互いにはまり合っている。" },
        { en: "This technique is called \"ashlar masonry.\"", ja: "この技術は「切石積み」と呼ばれる。" },
        { en: "Because of this design, when an earthquake occurs, the stones bounce slightly and then fall back into their perfect positions.", ja: "この設計のおかげで、地震が起きると、石はわずかに跳ね上がり、それから元の完璧な位置に戻る。" },
        { en: "If the Incas had used rigid cement, the buildings would have collapsed long ago.", ja: "もしインカ人が硬いセメントを使っていたら、建物はずっと昔に崩壊していただろう。" },
        { en: "This advanced construction method suggests that the Incas understood the geology of their land very well.", ja: "この高度な建設方法は、インカ人が彼らの土地の地質を非常によく理解していたことを示唆している。" },
        { en: "Unlike many other Inca cities, Machu Picchu was never discovered by the Spanish conquerors who arrived in the 16th century.", ja: "他の多くのインカの都市とは異なり、マチュ・ピチュは16世紀に到着したスペインの征服者たちによって発見されることはなかった。" },
        { en: "It remained hidden in the jungle until an American explorer named Hiram Bingham shared its existence with the world in 1911.", ja: "それは、ハイラム・ビンガムという名のアメリカ人探検家が1911年にその存在を世界と共有するまで、ジャングルの中に隠されたままであった。" },
        { en: "Today, it is a UNESCO World Heritage Site, but its popularity has created problems.", ja: "今日、それはユネスコの世界遺産であるが、その人気は問題を引き起こしている。" },
        { en: "The large number of tourists walking on the site causes damage to the ancient stone paths.", ja: "その場所を歩く多数の観光客が、古代の石の道に損傷を与えている。" },
        { en: "To protect the city for the future, the government has strictly limited the number of daily visitors.", ja: "将来のために都市を保護するため、政府は1日の訪問者数を厳しく制限している。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Chichén Itzá (2024-1)

### 1. 量的構造
- **総単語数:** ~350 words (Target 350-400)
- **パラグラフ構成:**
  1. **導入と立地:** 高地・断崖にあるが、水と農業（段々畑）に適した環境。
  2. **天文学と機能:** 「太陽の神殿」。冬至の光を利用したカレンダー機能（農業支援）。
  3. **建築技術:** 「耐震構造（Earthquake resistance）」。セメントを使わない石積み技術の利点。
  4. **歴史と現状:** スペインに見つからなかった「失われた都市」。1911年の再発見。観光公害と入場制限。

### 2. 重要語彙
- **civilization:** 文明
- **terrace:** 段々畑、テラス
- **astronomer:** 天文学者
- **align / alignment:** 整列させる
- **solstice:** 至（夏至・冬至）
- **resistance:** 耐性、抵抗
- **collapse:** 崩壊する`,
      summary: `## 講師用：本文要約 (Instructor Summary)

メキシコの「チチェン・イッツァ」と同様に、高度な文明と謎を持つペルーの「マチュ・ピチュ」を題材にしました。天文学的知識や建築技術の高さ、そして現代の観光問題まで、構成要素を忠実に再現しています。

### 1. High in the Clouds (第1段落)
マチュ・ピチュは断崖絶壁にありますが、インカ人は水源と農業に適したこの場所を選びました。「段々畑」は食料生産だけでなく、地滑りを防ぐ役割も果たしていました。

### 2. The Sun Calendar (第2段落)
インカ人は優れた天文学者でした。「太陽の神殿」の窓は冬至の太陽と一直線になるよう設計されており、農作業の時期を知るための正確なカレンダーとして機能しました。

### 3. Dancing Stones (第3段落)
マチュ・ピチュの最大の特徴は「耐震性」です。セメントを使わずに石を精巧に組み合わせることで、地震の揺れを吸収し、崩壊を防ぐ構造になっています。

### 4. Hidden and Found (第4段落)
スペインの征服者に見つからなかったため、破壊を免れました。1911年にハイラム・ビンガムによって世界に紹介されましたが、現在は観光客による遺跡の摩耗が問題となり、入場制限が行われています。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Chichén Itzá (過去問) | The Lost City of the Incas (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | マヤ文明の古代都市 | インカ文明の古代都市 | 古代文明、世界遺産、高度な技術 |
| **構造** | 1. 立地理由（水・土壌）<br>2. ククルカンの神殿（カレンダー）<br>3. 音響効果（宗教的意味）<br>4. 放棄と観光公害（閉鎖） | 1. 立地理由（水・段々畑）<br>2. 太陽の神殿（カレンダー）<br>3. 耐震構造（工学的意味）<br>4. 隠匿と観光公害（制限） | パラグラフごとのトピック（資源→天文学→特殊技術→保存問題）が一致 |
| **設問1** | 発展した理由（資源があった） | 立地が適していた理由（水と土地） | 第1段落の「都市形成の地理的要因」を問う |
| **設問2** | 神殿の機能（農業の計画） | 神殿の機能（農業の時期を知る） | 第2段落の「建造物の実用的用途」を問う |
| **設問3** | ケツァールの特別な理由（神の使い） | セメントを使わない理由（耐震性） | 第3段落の「特殊な信念または技術の理由」を問う |
| **設問4** | 建物の現状（閉鎖されている） | 現在の問題（観光客による損傷） | 第4段落の「保存上の課題」を問う |
| **設問5** | 内容一致（マヤ人は1年を知っていた） | 内容一致（ビンガムが世界に広めた） | 本文全体または特定パラグラフの事実確認 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Chichén Itzá (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Maya / Acoustics (音響)
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「音（エコー）」が神の使い（鳥）の声を模倣するという宗教的・芸術的側面に焦点。

* **The Lost City of the Incas (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Inca / Engineering (工学)
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「石組み（耐震）」が地震から建物を守るという工学的・実用的側面に焦点。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 両者とも「Natural resources (Water/Soil)」が都市形成の鍵であることを正解としている。
* **Q2:** 両者とも「To help farmers / Know time to farm」という天文学の農業利用を正解としている。
* **Q3:** 過去問は「Why special? (Religious reason)」。オリジナルは「Why no cement? (Engineering reason)」。
* **Q4:** 両者とも「Damage by visitors」が原因で制限/閉鎖されている現状を問う。
* **Q5:** 内容一致問題。`,
      syntax: `
    ## 4. 正解の根拠となるセンテンスの構文解析

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
    <blockquote>It <b>had</b> a natural spring that provided fresh water and the surrounding slopes <b>were</b> perfect for building terraces.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> It (The site)</li>
        <li><b>動詞 (V):</b> had</li>
        <li><b>目的語 (O):</b> a natural spring (関係代名詞that節で修飾)</li>
        <li><b>主語2 (S2):</b> the surrounding slopes</li>
        <li><b>動詞2 (V2):</b> were</li>
        <li><b>補語 (C):</b> perfect for building terraces</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>「天然の水源があった」ことと「斜面がテラス（農業用地）に最適だった」ことが並列されています。これが選択肢2の "natural water sources and land that could be used for farming" と完全に一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
    <blockquote>By observing the sunlight, the Inca people <b>could determine</b> the best times for planting and harvesting their crops, which was essential for their survival in the mountains.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>手段 (M):</b> By observing the sunlight</li>
        <li><b>主語 (S):</b> the Inca people</li>
        <li><b>動詞 (V):</b> could determine</li>
        <li><b>目的語 (O):</b> the best times for planting and harvesting their crops</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"determine the best times for planting..."（作付けに最適な時期を決定する）という部分が、選択肢3の "know the right time to farm" の根拠となります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
    <blockquote>Because of this design, when an earthquake occurs, the stones <b>bounce</b> slightly and then <b>fall back</b> into their perfect positions.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>接続詞:</b> when an earthquake occurs</li>
        <li><b>主語 (S):</b> the stones</li>
        <li><b>動詞 (V):</b> bounce ... and fall back...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>石が動く（bounce/fall back）ことで崩壊を防ぐ仕組みが説明されています。これが選択肢1の "stones to be able to move during earthquakes" を裏付けます。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
    <blockquote>The large number of tourists walking on the site <b>causes</b> damage to the ancient stone paths.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> The large number of tourists (walking on the site)</li>
        <li><b>動詞 (V):</b> causes</li>
        <li><b>目的語 (O):</b> damage</li>
        <li><b>方向 (M):</b> to the ancient stone paths</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>「多数の観光客がダメージを引き起こしている」という因果関係が明確です。これが選択肢3の "Too many visitors are causing damage..." と一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
    <blockquote>It <b>remained hidden</b> in the jungle until an American explorer named Hiram Bingham shared its existence with the world in 1911.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> It (Machu Picchu)</li>
        <li><b>動詞 (V):</b> remained hidden</li>
        <li><b>期間 (Until節):</b> until an American explorer ... shared its existence...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"share its existence with the world"（その存在を世界と共有した＝発表した）という表現が、選択肢3の "announced the existence of Machu Picchu to the world" と一致します。</p>
    </div>
    `
    }
  },
  "2024-1": {
    past: {
      title: "The Arts and Crafts Movement",
      content: `## Title: The Arts and Crafts Movement

In the United Kingdom during the nineteenth century, new technology greatly changed how people lived. Until this time, many people lived on small farms. They worked with their family members and neighbors to make by hand what they needed to live. When new machines were invented and factories were built so that items could be produced more quickly and easily, people moved into cities to take jobs in the factories. They used the money they earned to buy the things they needed, many of which were made by machines instead of by hand.

Some people disliked these changes. In particular, one group of artists and designers believed that society would be better if people went back to the old ways of making things. They formed a group that became known as the Arts and Crafts movement to share their ideas and sell their products. Although some members produced paintings and sculptures, most made objects that could be used, such as books and fabrics that had been printed by hand, furniture, and dishes. They wanted to design beautiful, high-quality items that were useful in everyday life.

William Morris, a famous designer, was one of the most important members of the Arts and Crafts movement. He was not against the use of machines. However, he disagreed with the way that the managers of large factories produced items. These managers divided the process into small stages, with each worker only working on one stage. Morris thought workers would be happier and healthier if they were involved in the whole production process, worked in small shops, and met the people who bought and used their products.

For a while, the Arts and Crafts movement was a success. Public exhibitions were held to display and sell the products made by the members of the movement, and people in the United Kingdom and abroad were inspired to form similar organizations. During the twentieth century, however, the popularity of such products declined because they took too long to make and cost too much to buy. However, the ideas of the Arts and Crafts movement continue to influence the way that artists and designers think about their work.`,
      questions: `### Questions

**(27) How did life change for people in the United Kingdom in the nineteenth century?**
1. They left their farms and started buying things that were made in factories.
2. They began working with family members and neighbors to make things.
3. They had larger families because they were earning more money than before.
4. They began taking vacations in the countryside and by the sea for their health.

**(28) What is one thing the members of the Arts and Crafts movement believed?**
1. Machines would never be able to make objects as quickly as artists could.
2. Paintings and sculptures were not worth making because they were not useful.
3. The lives of people would improve if they returned to making things by hand.
4. Designers should specialize in producing just one or two types of items.

**(29) William Morris believed that workers in factories**
1. were not able to understand each small stage of their work.
2. did not have enough involvement in the production process.
3. had to spend too much time dealing with their customers.
4. could make more money if they worked in small shops.

**(30) People started buying fewer products made by the Arts and Crafts movement because**
1. they realized that it would be simpler to make the items themselves.
2. better-quality products were being made abroad.
3. the products were expensive and not easily available.
4. other artists and designers began to have a greater influence.

**(31) Which of the following statements is true?**
1. Technology developed in the nineteenth century had a significant effect on UK society.
2. Many artists and designers were not allowed to join the Arts and Crafts movement.
3. William Morris thought that it was wrong to use machines to produce items.
4. Items made by the Arts and Crafts movement have never been exhibited in public.

---
**Answer Key:** (27) 1, (28) 3, (29) 2, (30) 3, (31) 1`,
      translations: [
        { en: "In the United Kingdom during the nineteenth century, new technology greatly changed how people lived.", ja: "19世紀のイギリスにおいて、新しい技術は人々の生活様式を大きく変えた。" },
        { en: "Until this time, many people lived on small farms.", ja: "この時まで、多くの人々は小さな農場に住んでいた。" },
        { en: "They worked with their family members and neighbors to make by hand what they needed to live.", ja: "彼らは生きていくために必要なものを手作業で作るために、家族や隣人と協力して働いた。" },
        { en: "When new machines were invented and factories were built so that items could be produced more quickly and easily, people moved into cities to take jobs in the factories.", ja: "新しい機械が発明され、より速く簡単に物が生産できるように工場が建設されると、人々は工場での仕事に就くために都市へと移り住んだ。" },
        { en: "They used the money they earned to buy the things they needed, many of which were made by machines instead of by hand.", ja: "彼らは稼いだお金を使って必要なものを購入したが、その多くは手作業ではなく機械で作られたものだった。" },
        { en: "Some people disliked these changes.", ja: "これらの変化を嫌う人々もいた。" },
        { en: "In particular, one group of artists and designers believed that society would be better if people went back to the old ways of making things.", ja: "特に、ある芸術家やデザイナーのグループは、人々が昔の物作りの方法に戻れば社会は良くなると信じていた。" },
        { en: "They formed a group that became known as the Arts and Crafts movement to share their ideas and sell their products.", ja: "彼らは自分たちの考えを共有し、製品を販売するために、アーツ・アンド・クラフツ運動として知られるようになるグループを結成した。" },
        { en: "Although some members produced paintings and sculptures, most made objects that could be used, such as books and fabrics that had been printed by hand, furniture, and dishes.", ja: "絵画や彫刻を制作するメンバーもいたが、ほとんどのメンバーは、手刷りの本や布地、家具、食器など、実際に使える物を作った。" },
        { en: "They wanted to design beautiful, high-quality items that were useful in everyday life.", ja: "彼らは、日常生活で役に立つ、美しく高品質な品物をデザインしたいと考えていた。" },
        { en: "William Morris, a famous designer, was one of the most important members of the Arts and Crafts movement.", ja: "有名なデザイナーであるウィリアム・モリスは、アーツ・アンド・クラフツ運動の最も重要なメンバーの一人だった。" },
        { en: "He was not against the use of machines.", ja: "彼は機械の使用に反対していたわけではなかった。" },
        { en: "However, he disagreed with the way that the managers of large factories produced items.", ja: "しかし、彼は大規模工場の経営者たちが製品を生産する方法には同意しなかった。" },
        { en: "These managers divided the process into small stages, with each worker only working on one stage.", ja: "これらの経営者たちは工程を小さな段階に分け、各労働者は一つの段階だけを担当していた。" },
        { en: "Morris thought workers would be happier and healthier if they were involved in the whole production process, worked in small shops, and met the people who bought and used their products.", ja: "モリスは、もし労働者が生産工程全体に関わり、小さな店で働き、製品を買って使う人々と顔を合わせるなら、彼らはより幸せで健康的になれるだろうと考えた。" },
        { en: "For a while, the Arts and Crafts movement was a success.", ja: "しばらくの間、アーツ・アンド・クラフツ運動は成功を収めた。" },
        { en: "Public exhibitions were held to display and sell the products made by the members of the movement, and people in the United Kingdom and abroad were inspired to form similar organizations.", ja: "運動のメンバーによって作られた製品を展示販売するための一般展示会が開かれ、イギリス国内外の人々が刺激を受けて同様の組織を結成した。" },
        { en: "During the twentieth century, however, the popularity of such products declined because they took too long to make and cost too much to buy.", ja: "しかし、20世紀になると、それらの製品は作るのに時間がかかりすぎ、買うには費用がかかりすぎたため、人気は衰退した。" },
        { en: "However, the ideas of the Arts and Crafts movement continue to influence the way that artists and designers think about their work.", ja: "しかしながら、アーツ・アンド・クラフツ運動の思想は、芸術家やデザイナーが自分たちの仕事について考える方法に影響を与え続けている。" }
      ]
    },
    original: {
      title: "The Slow Food Movement",
      content: `## Title: The Slow Food Movement

In the late twentieth century, the way people ate began to change dramatically across the globe. For centuries, meals were cooked at home using fresh ingredients grown on local farms. Families would sit down together to eat and talk. However, as new technologies made life faster and busier, fast food restaurants became very popular. These restaurants allowed people to buy cheap meals that were prepared in minutes. While this was convenient, it meant that people started eating more processed foods and spent less time at the dinner table.

Many people were worried about this shift in food culture. In Italy, a man named Carlo Petrini believed that the rise of fast food was destroying traditional ways of life. In 1986, he founded the "Slow Food" movement to protect local food cultures and traditions. The members of this group wanted to encourage people to slow down and enjoy their food. They focused on preserving regional dishes, using high-quality ingredients, and supporting local farmers instead of large food companies.

Carlo Petrini was one of the strongest voices in this movement. He was not completely against modern convenience, but he criticized how the food industry separated people from the source of their food. In the fast food system, consumers rarely knew where their ingredients came from or who grew them. Petrini thought that people would appreciate their meals more if they understood the history behind the food, bought directly from producers, and took the time to cook with care.

The Slow Food movement quickly spread from Italy to other countries. It organized events to teach people about taste and where food comes from. However, in recent years, the movement has faced some challenges. Critics argue that "slow food" is often too expensive for ordinary families and that cooking fresh meals every day takes too much time. Despite these issues, the movement has successfully changed how many people think about healthy eating and the environment.`,
      questions: `### Original Questions

**(1) How did eating habits change in the late twentieth century?**
1. People started growing their own vegetables in their gardens more often.
2. Families began to spend more time cooking traditional meals together.
3. People began eating fast food because it was quick and cheap.
4. Restaurants stopped serving processed foods to improve health.

**(2) What was the main goal of the Slow Food movement started by Carlo Petrini?**
1. To help large food companies sell their products to other countries.
2. To protect traditional food cultures and encourage people to enjoy eating.
3. To invent new technologies that could cook food faster than before.
4. To open more fast food restaurants in Italy and across Europe.

**(3) Carlo Petrini believed that the modern food industry**
1. helped people connect with the farmers who grew their vegetables.
2. made it difficult for people to know where their food came from.
3. improved the quality of ingredients used in everyday cooking.
4. should be supported because it provided jobs for many people.

**(4) Why do some people criticize the Slow Food movement today?**
1. The food recommended by the movement costs too much money.
2. The movement forces people to become farmers against their will.
3. The dishes are too complicated for professional chefs to cook.
4. Eating fresh food is considered unhealthy by modern doctors.

**(5) Which of the following statements is true?**
1. The Slow Food movement began in the United States and moved to Italy.
2. Carlo Petrini wanted people to eat alone to save time.
3. Technology had little effect on how people ate in the twentieth century.
4. The movement has influenced people's views on healthy eating and the environment.

---
**Answer Key:** (1) 3, (2) 2, (3) 2, (4) 1, (5) 4`,
      translations: [
        { en: "In the late twentieth century, the way people ate began to change dramatically across the globe.", ja: "20世紀後半、人々の食事の仕方は世界中で劇的に変化し始めた。" },
        { en: "For centuries, meals were cooked at home using fresh ingredients grown on local farms.", ja: "何世紀もの間、食事は地元の農場で育てられた新鮮な食材を使って家庭で作られていた。" },
        { en: "Families would sit down together to eat and talk.", ja: "家族は一緒に座って食事をし、会話をしたものだった。" },
        { en: "However, as new technologies made life faster and busier, fast food restaurants became very popular.", ja: "しかし、新しい技術が生活をより速く、忙しくするにつれて、ファストフードレストランが非常に人気になった。" },
        { en: "These restaurants allowed people to buy cheap meals that were prepared in minutes.", ja: "これらのレストランによって、人々は数分で調理される安い食事を買うことができるようになった。" },
        { en: "While this was convenient, it meant that people started eating more processed foods and spent less time at the dinner table.", ja: "これは便利ではあったが、人々がより多くの加工食品を食べ始め、食卓で過ごす時間が減ることを意味した。" },
        { en: "Many people were worried about this shift in food culture.", ja: "多くの人々がこの食文化の変化を心配していた。" },
        { en: "In Italy, a man named Carlo Petrini believed that the rise of fast food was destroying traditional ways of life.", ja: "イタリアでは、カルロ・ペトリーニという男性が、ファストフードの台頭が伝統的な生活様式を破壊していると信じていた。" },
        { en: "In 1986, he founded the \"Slow Food\" movement to protect local food cultures and traditions.", ja: "1986年、彼は地元の食文化と伝統を守るために「スローフード」運動を設立した。" },
        { en: "The members of this group wanted to encourage people to slow down and enjoy their food.", ja: "このグループのメンバーは、人々にペースを落とし、食事を楽しむよう奨励したかった。" },
        { en: "They focused on preserving regional dishes, using high-quality ingredients, and supporting local farmers instead of large food companies.", ja: "彼らは、大手の食品会社ではなく地元の農家を支援し、郷土料理を保存し、高品質な食材を使うことに焦点を当てた。" },
        { en: "Carlo Petrini was one of the strongest voices in this movement.", ja: "カルロ・ペトリーニは、この運動の中で最も強力な発言者の一人だった。" },
        { en: "He was not completely against modern convenience, but he criticized how the food industry separated people from the source of their food.", ja: "彼は現代の利便性に完全に反対していたわけではなかったが、食品産業が人々を食の源から切り離している方法を批判した。" },
        { en: "In the fast food system, consumers rarely knew where their ingredients came from or who grew them.", ja: "ファストフードのシステムでは、消費者は食材がどこから来たのか、誰が育てたのかをほとんど知らなかった。" },
        { en: "Petrini thought that people would appreciate their meals more if they understood the history behind the food, bought directly from producers, and took the time to cook with care.", ja: "ペトリーニは、もし人々が食の背後にある歴史を理解し、生産者から直接購入し、時間をかけて丁寧に料理すれば、食事をもっと大切にするだろうと考えた。" },
        { en: "The Slow Food movement quickly spread from Italy to other countries.", ja: "スローフード運動は急速にイタリアから他の国々へと広がった。" },
        { en: "It organized events to teach people about taste and where food comes from.", ja: "それは、味覚や食べ物の由来について人々に教えるイベントを組織した。" },
        { en: "However, in recent years, the movement has faced some challenges.", ja: "しかし、近年、この運動はいくつかの課題に直面している。" },
        { en: "Critics argue that \"slow food\" is often too expensive for ordinary families and that cooking fresh meals every day takes too much time.", ja: "批評家たちは、「スローフード」は一般の家庭にとって高価すぎることが多く、毎日新鮮な食事を作るには時間がかかりすぎると主張している。" },
        { en: "Despite these issues, the movement has successfully changed how many people think about healthy eating and the environment.", ja: "これらの問題にもかかわらず、この運動は多くの人々が健康的な食事や環境について考える方法を変えることに成功した。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Arts and Crafts Movement (2024-1) - "Historical Social Movement"

### 1. 量的構造
- **総単語数:** ~330 words
- **パラグラフ構成:**
  1. **背景・変化 (Context):** 産業革命による手工業の衰退（過去問） vs ファストフードによる食文化の変化（オリジナル）。
  2. **運動の発生 (The Movement):** アーツ・アンド・クラフツ運動の設立（過去問） vs スローフード運動の設立（オリジナル）。
  3. **中心人物の思想 (Key Figure):** ウィリアム・モリスの労働観（過去問） vs カルロ・ペトリーニの生産者とのつながり（オリジナル）。
  4. **課題と影響 (Challenges & Legacy):** コスト高・時間不足による衰退（過去問） vs コスト高・手間による批判と現代への影響（オリジナル）。

### 2. 重要語彙
- **dramatically:** 劇的に
- **ingredient:** 食材
- **convenient:** 便利な
- **preserve:** 保存する
- **criticize:** 批判する
- **consumer:** 消費者
- **appreciate:** 感謝する、良さがわかる`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、食の産業化（ファストフード）への対抗運動としてイタリアで始まった「スローフード運動」についての説明文です。過去問の「アーツ・アンド・クラフツ運動（産業革命への対抗）」と同じ論理構造で展開されています。

### 1. The Change in Eating Habits (第1段落)
20世紀後半、技術の進歩により生活が忙しくなり、家庭での食事から便利で安いファストフードへと食習慣が変化した。これにより加工食品の摂取が増え、家族の団欒が減った。

### 2. The Slow Food Movement (第2段落)
この変化を懸念し、イタリアのカルロ・ペトリーニが1986年に「スローフード運動」を創設。地域の伝統料理を守り、地元の農家を支援することを目指した。

### 3. Connection to Source (第3段落)
ペトリーニは、現代の食品産業が消費者と生産者を切り離していると批判した。彼は、消費者が食材の背景を知り、生産者から直接買うことで、食事の価値を再認識できると考えた。

### 4. Challenges and Legacy (第4段落)
運動は世界に広がったが、「高価すぎる」「時間がかかりすぎる」という批判もある。しかし、健康や環境に対する人々の意識を変えるという点では成功を収めている。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Arts and Crafts (過去問) | Slow Food (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 産業革命 vs 手仕事 | ファストフード vs スローフード | 効率化・産業化への反発と「質」への回帰 |
| **構造** | 変化(工場化) → 運動設立 → モリスの思想 → 衰退と影響 | 変化(即席化) → 運動設立 → ペトリーニの思想 → 批判と影響 | 4段落構成、歴史的背景→運動→リーダー→評価 |
| **設問1** | 19世紀の生活変化 (Farms -> Factories) | 20世紀の食の変化 (Home -> Fast food) | 第1段落の「社会的変化」を問う |
| **設問2** | 運動の信念 (Return to handmade) | 運動の目的 (Protect tradition) | 第2段落の「運動の理念」を問う |
| **設問3** | モリスの工場批判 (Process division) | ペトリーニの産業批判 (Separation) | 第3段落の「リーダーの具体的批判」を問う |
| **設問4** | 衰退の理由 (Cost/Time) | 批判の理由 (Cost/Time) | 第4段落の「ネガティブな側面」を問う |
| **設問5** | 全体の真偽 (Tech affected society) | 全体の真偽 (Movement influenced views) | 本文全体の要旨・影響 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Arts and Crafts (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> モノづくり（プロダクトデザイン）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 労働者の喜びと製品の美しさ。

* **Slow Food (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 食文化（ライフスタイル）。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 消費者の意識と生産者とのつながり。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** "Left farms... started buying things made in factories."
    * **Original:** "Began eating fast food because it was quick and cheap." (利便性へのシフト)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** "Lives would improve if they returned to making things by hand."
    * **Original:** "Protect traditional food cultures and encourage people to enjoy eating." (伝統への回帰)
* **Q3 (内容一致 - Para 3):**
    * **過去問:** "Did not have enough involvement in the production process." (プロセスの分断)
    * **Original:** "Made it difficult for people to know where their food came from." (情報の分断)
* **Q4 (内容一致 - Para 4):**
    * **過去問:** "Products were expensive and not easily available."
    * **Original:** "Food recommended by the movement costs too much money." (コストの壁)
* **Q5 (True Statement):**
    * **過去問:** "Technology... had a significant effect on UK society."
    * **Original:** "The movement has influenced people's views on healthy eating..." (社会的影響)`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>However, as new technologies made life faster and busier, fast food restaurants <b>became</b> very popular.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞 (M):</b> However</li>
    <li><b>従属節 (as):</b> as [new technologies made life faster and busier] (原因)</li>
    <li><b>主語 (S):</b> fast food restaurants</li>
    <li><b>動詞 (V):</b> became</li>
    <li><b>補語 (C):</b> very popular</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"as"（～するにつれて/～なので）が理由を表しています。技術によって生活が忙しくなった結果、ファストフードが広まったという因果関係が、選択肢3の "because it was quick and cheap"（忙しい生活＝早くて安いものを求める）につながります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>In 1986, he <b>founded</b> the "Slow Food" movement to protect local food cultures and traditions.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> he (Carlo Petrini)</li>
    <li><b>動詞 (V):</b> founded</li>
    <li><b>目的語 (O):</b> the "Slow Food" movement</li>
    <li><b>不定詞 (副詞的用法):</b> to protect local food cultures and traditions</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>不定詞の副詞的用法 "to protect..." が設立の「目的」を表しています。これが選択肢2の "protect traditional food cultures" と完全に一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>In the fast food system, consumers rarely <b>knew</b> where their ingredients came from or who grew them.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> consumers</li>
    <li><b>動詞 (V):</b> rarely knew</li>
    <li><b>目的語 (O):</b> where their ingredients came from or who grew them</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"separate A from B"（AをBから切り離す）という表現が重要です。人々を食の源から切り離す＝「どこから来たか分からなくさせる」ことであり、これが選択肢2の "made it difficult for people to know where their food came from" の根拠となります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>Critics <b>argue</b> that "slow food" is often too expensive for ordinary families and that cooking fresh meals every day takes too much time.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Critics</li>
    <li><b>動詞 (V):</b> argue</li>
    <li><b>目的語 (O):</b> that ["slow food" is often too expensive...]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"too expensive"（高すぎる）という明確な批判点が、選択肢1の "costs too much money" に言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall/Conclusion)</h3>
<blockquote>Despite these issues, the movement <b>has successfully changed</b> how many people think about healthy eating and the environment.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>譲歩 (M):</b> Despite these issues</li>
    <li><b>主語 (S):</b> the movement</li>
    <li><b>動詞 (V):</b> has successfully changed</li>
    <li><b>目的語 (O):</b> how [many people think about healthy eating and the environment]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"change how people think"（人々の考え方を変える）＝ "influence people's views"（人々の見方に影響を与える）です。文末の結論部分が、選択肢4の正解根拠となります。</p>
</div>`
    }
  },
  "2025-2": {
    past: {
      title: "The Mirror Test",
      content: `## Title: The Mirror Test

Humans and animals are different in many ways. Some say only humans can have a language and a culture. Among these discussions, one idea that is often discussed is whether only humans can recognize or tell the difference between themselves and others. The mirror test is used to judge this. It is done by putting a mark on an animal's body. The mark is put in a place where the animal cannot see without the help of a mirror. If the animal tries to remove the mark on its body, it shows that the animal recognizes itself.

The same test was done on fish called cleaner wrasses in a tank with a mirror. At first, they attacked their reflection. This could be because they thought the reflection was another fish. Later, they changed how they swam and checked if the fish in the mirror also changed how they swam. After they got used to the mirror, they were put to sleep, and a mark was put on them. When they woke up and looked in the mirror, many of them tried to take the mark off their body. They did so by brushing their body against the tank or the sand on the bottom.

They also recognized themselves in photographs. In a test done after the mirror test, researchers showed the fish some pictures. When they were shown a picture of themselves with a mark on their body, they tried to remove the mark from their body. However, they did not act the same way when pictures of other fish with a mark were shown. This suggests that they recognize differences between themselves and other fish.

The mirror test has led to much discussion and debate. First, animals that have not seen a mirror before might not understand that what is in the mirror is themselves. It does not suggest that they do not recognize themselves. Instead, it shows that they have no idea how a mirror works. Moreover, vision is not the main sense for all animals. Some animals rely more on smell than vision, so failing the mirror test does not always mean they cannot recognize themselves.`,
      questions: `### Questions

**(27) The mirror test is used**
1. to test an animal's ability to see in the dark.
2. to find out how far an animal can see outside.
3. to determine if an animal can recognize itself.
4. to see when a baby recognizes who its mother is.

**(28) How did the cleaner wrasses check if the fish in the mirror was themselves?**
1. They opened and closed their mouths many times.
2. They compared the color of their body to that of the mirrored fish.
3. They tried to touch the fish in the mirror with their fins.
4. They began to swim in a different way than before.

**(29) What behavior did the cleaner wrasses take when they were shown a picture of themselves with a mark?**
1. They tried to get rid of the mark on their body.
2. They escaped from the picture and hid behind a rock.
3. They ignored the picture and showed no interest in it.
4. They began swimming with other fish in the tank.

**(30) In the discussion about the mirror test, it has been pointed out that**
1. it costs a lot of money and takes too much time.
2. it is too dangerous to use a piece of glass in the water.
3. it only works on fish and some types of monkeys.
4. it needs to consider the other senses that animals have.

**(31) Which of the following statements is true?**
1. Some fish can understand the difference between themselves and others.
2. The cleaner wrasses were marked first and then placed in a tank with a mirror.
3. The cleaner wrasses did not notice the marks that were put on their bodies.
4. It was found that animals with large brains understood how to use mirrors.

---
**Answer Key:** (27) 3, (28) 4, (29) 1, (30) 4, (31) 1`,
      translations: [
        { en: "Humans and animals are different in many ways.", ja: "人間と動物は多くの点で異なっている。" },
        { en: "Some say only humans can have a language and a culture.", ja: "人間だけが言語や文化を持つことができると言う人もいる。" },
        { en: "Among these discussions, one idea that is often discussed is whether only humans can recognize or tell the difference between themselves and others.", ja: "これらの議論の中で、しばしば議論される一つの考えは、人間だけが自分自身と他者を認識し、違いを見分けることができるのかどうかということである。" },
        { en: "The mirror test is used to judge this.", ja: "ミラーテスト（鏡像認知テスト）はこれを判断するために用いられる。" },
        { en: "It is done by putting a mark on an animal's body.", ja: "それは動物の体に印をつけることによって行われる。" },
        { en: "The mark is put in a place where the animal cannot see without the help of a mirror.", ja: "その印は、鏡の助けなしでは動物が見ることができない場所に付けられる。" },
        { en: "If the animal tries to remove the mark on its body, it shows that the animal recognizes itself.", ja: "もしその動物が自分の体にある印を取り除こうとすれば、それはその動物が自分自身を認識していることを示している。" },
        { en: "The same test was done on fish called cleaner wrasses in a tank with a mirror.", ja: "同じテストが、鏡のある水槽の中にいるホンソメワケベラと呼ばれる魚に対して行われた。" },
        { en: "At first, they attacked their reflection.", ja: "最初、彼らは自分たちの反射像を攻撃した。" },
        { en: "This could be because they thought the reflection was another fish.", ja: "これは、彼らが反射像を別の魚だと思ったからかもしれない。" },
        { en: "Later, they changed how they swam and checked if the fish in the mirror also changed how they swam.", ja: "その後、彼らは泳ぎ方を変え、鏡の中の魚も泳ぎ方を変えるかどうかを確認した。" },
        { en: "After they got used to the mirror, they were put to sleep, and a mark was put on them.", ja: "彼らが鏡に慣れた後、彼らは眠らされ、体に印が付けられた。" },
        { en: "When they woke up and looked in the mirror, many of them tried to take the mark off their body.", ja: "彼らが目を覚まして鏡を見たとき、その多くが体から印を取り除こうとした。" },
        { en: "They did so by brushing their body against the tank or the sand on the bottom.", ja: "彼らは体を水槽や底の砂にこすりつけることによってそれを行った。" },
        { en: "They also recognized themselves in photographs.", ja: "彼らはまた、写真の中でも自分自身を認識した。" },
        { en: "In a test done after the mirror test, researchers showed the fish some pictures.", ja: "ミラーテストの後に行われたテストで、研究者は魚にいくつかの写真を見せた。" },
        { en: "When they were shown a picture of themselves with a mark on their body, they tried to remove the mark from their body.", ja: "体に印のついた自分自身の写真を見せられると、彼らは体から印を取り除こうとした。" },
        { en: "However, they did not act the same way when pictures of other fish with a mark were shown.", ja: "しかし、印のついた他の魚の写真が見せられたときには、彼らは同じようには振る舞わなかった。" },
        { en: "This suggests that they recognize differences between themselves and other fish.", ja: "これは、彼らが自分自身と他の魚との違いを認識していることを示唆している。" },
        { en: "The mirror test has led to much discussion and debate.", ja: "ミラーテストは多くの議論や論争を引き起こしてきた。" },
        { en: "First, animals that have not seen a mirror before might not understand that what is in the mirror is themselves.", ja: "第一に、これまでに鏡を見たことのない動物は、鏡に映っているのが自分自身であることを理解できないかもしれない。" },
        { en: "It does not suggest that they do not recognize themselves.", ja: "それは彼らが自分自身を認識していないことを示唆するものではない。" },
        { en: "Instead, it shows that they have no idea how a mirror works.", ja: "そうではなく、それは彼らが鏡がどのように機能するかを知らないということを示している。" },
        { en: "Moreover, vision is not the main sense for all animals.", ja: "さらに、視覚はすべての動物にとって主要な感覚というわけではない。" },
        { en: "Some animals rely more on smell than vision, so failing the mirror test does not always mean they cannot recognize themselves.", ja: "嗅覚に視覚以上に頼る動物もいるため、ミラーテストに失敗することが必ずしも彼らが自分自身を認識できないことを意味するわけではない。" }
      ]
    },
    original: {
      title: "Animal Self-Control",
      content: `## Title: Animal Self-Control

People often think about the future, but do animals do the same? One important sign of intelligence is self-control. This is the ability to wait for a better reward instead of taking a small one right away. In humans, this is often tested using the "marshmallow test" with children. Recently, researchers wanted to see if animals could also pass this kind of test. They used a special experiment to find out.

A study was done on cuttlefish to test their self-control. Cuttlefish are sea creatures related to squid. In the experiment, researchers offered the cuttlefish two types of food. One was a piece of king prawn, which the cuttlefish loved. The other was a piece of crab, which they liked less. The researchers taught the cuttlefish that if they did not eat the crab immediately, they would be given the prawn later. If they ate the crab, the prawn was taken away.

The results were surprising. The cuttlefish were able to wait for the prawn. They looked at the crab but did not attack it. They waited for up to two minutes to get the food they preferred. This behavior showed that cuttlefish could plan for the future. Before this, many scientists thought only animals like monkeys and crows could do this.

The study has changed how people view animal intelligence. However, some researchers point out that hunger levels can change the results. If an animal is very hungry, it might not wait, even if it has self-control. Therefore, checking an animal's physical condition is important before saying it is not smart. Self-control might be more common in the animal world than we thought.`,
      questions: `### Original Questions

**(1) What is the "marshmallow test" used to check?**
1. If a subject has the ability to wait for a better reward.
2. How fast an animal can find food in a hidden place.
3. Whether children prefer eating sweets or healthy food.
4. If animals can recognize their own reflection in a mirror.

**(2) In the experiment, what did the cuttlefish have to do to get the prawn?**
1. They had to catch the crab as fast as possible.
2. They had to move the crab to a different part of the tank.
3. They had to stop themselves from eating the crab.
4. They had to show that they liked the crab more than the prawn.

**(3) What did the cuttlefish do during the test?**
1. They ignored the crab to get the food they liked more.
2. They attacked the reflection of the prawn in the glass.
3. They ate the crab first and then waited for the prawn.
4. They tried to escape from the tank to find more food.

**(4) What has been pointed out about the test results?**
1. The test only works on animals that live in the sea.
2. Cuttlefish are not smart enough to understand the rules.
3. The type of food does not matter to the animals.
4. An animal's hunger can affect how it performs in the test.

**(5) Which of the following statements is true?**
1. The researchers found that cuttlefish prefer crab over king prawn.
2. Cuttlefish showed they have the ability to make plans for the future.
3. Scientists already knew that cuttlefish had the same intelligence as monkeys.
4. The cuttlefish ate the crab immediately because they were very hungry.

---
**Answer Key:** (1) 1, (2) 3, (3) 1, (4) 4, (5) 2`,
      translations: [
        { en: "People often think about the future, but do animals do the same?", ja: "人々はよく将来について考えるが、動物も同じことをするのだろうか？" },
        { en: "One important sign of intelligence is self-control.", ja: "知能の重要な兆候の一つは自制心である。" },
        { en: "This is the ability to wait for a better reward instead of taking a small one right away.", ja: "これは、すぐに小さな報酬を受け取る代わりに、より良い報酬を待つ能力のことである。" },
        { en: "In humans, this is often tested using the \"marshmallow test\" with children.", ja: "人間の場合、これは子供を対象とした「マシュマロテスト」を使ってしばしば試される。" },
        { en: "Recently, researchers wanted to see if animals could also pass this kind of test.", ja: "最近、研究者たちは動物もこの種のテストに合格できるかどうかを確認したいと考えた。" },
        { en: "They used a special experiment to find out.", ja: "彼らはそれを調べるために特別な実験を使用した。" },
        { en: "A study was done on cuttlefish to test their self-control.", ja: "コウイカの自制心をテストするためにある研究が行われた。" },
        { en: "Cuttlefish are sea creatures related to squid.", ja: "コウイカはイカに関連する海の生き物である。" },
        { en: "In the experiment, researchers offered the cuttlefish two types of food.", ja: "その実験で、研究者たちはコウイカに2種類の餌を提供した。" },
        { en: "One was a piece of king prawn, which the cuttlefish loved.", ja: "一つはクルマエビの一切れで、コウイカはそれが大好きだった。" },
        { en: "The other was a piece of crab, which they liked less.", ja: "もう一つはカニの一切れで、彼らはそれほど好きではなかった。" },
        { en: "The researchers taught the cuttlefish that if they did not eat the crab immediately, they would be given the prawn later.", ja: "研究者たちはコウイカに、もしすぐにカニを食べなければ、後でエビがもらえると教えた。" },
        { en: "If they ate the crab, the prawn was taken away.", ja: "もし彼らがカニを食べたら、エビは取り上げられた。" },
        { en: "The results were surprising.", ja: "結果は驚くべきものだった。" },
        { en: "The cuttlefish were able to wait for the prawn.", ja: "コウイカはエビを待つことができた。" },
        { en: "They looked at the crab but did not attack it.", ja: "彼らはカニを見たが、攻撃はしなかった。" },
        { en: "They waited for up to two minutes to get the food they preferred.", ja: "彼らは好みの餌を手に入れるために最大2分間待った。" },
        { en: "This behavior showed that cuttlefish could plan for the future.", ja: "この行動は、コウイカが将来の計画を立てられることを示した。" },
        { en: "Before this, many scientists thought only animals like monkeys and crows could do this.", ja: "これ以前、多くの科学者はサルやカラスのような動物だけがこれができると考えていた。" },
        { en: "The study has changed how people view animal intelligence.", ja: "この研究は、人々の動物の知能に対する見方を変えた。" },
        { en: "However, some researchers point out that hunger levels can change the results.", ja: "しかし、一部の研究者は、空腹のレベルが結果を変える可能性があると指摘している。" },
        { en: "If an animal is very hungry, it might not wait, even if it has self-control.", ja: "もし動物が非常に空腹であれば、たとえ自制心があったとしても待たないかもしれない。" },
        { en: "Therefore, checking an animal's physical condition is important before saying it is not smart.", ja: "したがって、動物が賢くないと言う前に、その身体状態を確認することが重要である。" },
        { en: "Self-control might be more common in the animal world than we thought.", ja: "自制心は、私たちが考えていたよりも動物界で一般的であるかもしれない。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Mirror Test (Animal Self-Recognition)

### 1. 量的構造
- **総単語数:** ~330 words
- **パラグラフ構成:**
  1. **導入:** 人間と動物の知能比較、特定のテスト（マシュマロテスト）の定義。
  2. **実験内容:** 特定の動物（コウイカ）を用いた実験手順。2つの選択肢（即時の報酬 vs 遅延報酬）の提示。
  3. **実験結果:** 動物が我慢してより良い報酬を得た行動。これが示す知能（計画性）。
  4. **考察・議論:** 結果に対する批判的視点や条件（空腹度）の影響、および結論。

### 2. 重要語彙
- **self-control:** 自制心
- **reward:** 報酬
- **experiment:** 実験
- **immediately:** すぐに
- **prefer:** ～を好む
- **behavior:** 行動
- **intelligence:** 知能`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、動物の知能、特に「自制心（将来のために我慢する能力）」に関する実験についての説明です。コウイカを用いた実験を通して、無脊椎動物でも将来を見越した計画的な行動がとれる可能性を示唆しつつ、その結果を評価する際の注意点にも触れています。

### 1. Animal Self-Control (第1段落)
人間には将来を考えて行動する自制心（マシュマロテストで測られるような能力）があるが、動物にも同様の能力があるかを調べるため、研究者たちは特別な実験を行った。

### 2. The Experiment on Cuttlefish (第2段落)
コウイカ（イカの仲間）に対し、大好物のエビと、それほどでもないカニを提示する実験を行った。「すぐにカニを食べなければ、後でエビがもらえる」というルールを学習させた。

### 3. The Results (第3段落)
驚くべきことに、コウイカはカニを無視して最大2分間待ち、より好みのエビを手に入れた。これは、サルやカラスだけでなく、コウイカも将来の計画を立てられることを示している。

### 4. Discussion (第4段落)
この研究は動物の知能に対する見方を変えたが、空腹レベルなどの身体的条件が結果に影響を与える可能性も指摘されている。テストに失敗しても、単に賢くないわけではない可能性がある。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | The Mirror Test (過去問) | Animal Self-Control (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 動物の自己認識（鏡） | 動物の自制心（マシュマロテスト） | 動物の知能実験とその解釈 |
| **構造** | 定義 → 実験(魚) → 追加実験(写真) → 議論/限界 | 定義 → 実験(イカ) → 結果の詳細 → 議論/限界 | 4段落構成、科学的実験の記述 |
| **設問1** | テストの目的・定義 | テストの目的・定義 | 第1段落の定義を問う |
| **設問2** | 実験中の具体的な確認行動 | 実験のルール/条件 | 第2段落の実験プロセスを問う |
| **設問3** | 追加実験（写真）への反応 | 実験結果（待機行動） | 第3段落の観察結果を問う |
| **設問4** | テストへの批判・指摘事項 | テスト結果への指摘事項 | 第4段落の限界・条件付けを問う |
| **設問5** | 全体の結論（True/False） | 全体の結論（True/False） | 本文全体の理解と結論の整合性 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **The Mirror Test (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 鏡を使った自己認識（視覚的認知）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> ホンソメワケベラが鏡や写真の自分を認識できるか。

* **Animal Self-Control (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 報酬を待つ自制心（時間的認知）。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> コウイカが好物のために我慢できるか（マシュマロテストの動物版）。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** "The mirror test is used..." (テストの目的)
    * **Original:** "What is the marshmallow test used to check?" (テストの目的)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** "How did the cleaner wrasses check...?" (行動の変化・確認方法)
    * **Original:** "...what did the cuttlefish have to do...?" (実験の条件・行動)
* **Q3 (内容一致 - Para 3):**
    * **過去問:** 写真を見せた時の反応 (removed the mark)。
    * **Original:** テスト中の実際の行動 (ignored the crab)。
* **Q4 (内容一致 - Para 4):**
    * **過去問:** 議論点 (consider other senses)。
    * **Original:** 議論点 (hunger levels effect)。
* **Q5 (内容一致 - Conclusion):**
    * **過去問:** 魚も他者との違いがわかる (True statement)。
    * **Original:** コウイカも計画性がある (True statement)。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1): Definition of Self-Control (自制心の定義)</h3>

<blockquote>This <b>is</b> the ability to wait for a better reward instead of taking a small one right away.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> This (Self-control)</li>
    <li><b>Verb (動詞):</b> is</li>
    <li><b>Complement (補語):</b> the ability [to wait for a better reward...]</li>
    <li><b>Modifier (修飾語):</b> instead of taking a small one right away (前置詞句)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>不定詞の形容詞的用法 "to wait..." が "ability" を修飾しています。「より良い報酬を待つ能力」という定義が、選択肢1の「より良い報酬を待つ能力があるか」と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2): Experiment Condition (実験の条件)</h3>

<blockquote>The researchers <b>taught</b> the cuttlefish that if they did not eat the crab immediately, they would be given the prawn later.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> The researchers</li>
    <li><b>Verb (動詞):</b> taught</li>
    <li><b>Object 1 (目的語1):</b> the cuttlefish</li>
    <li><b>Object 2 (目的語2):</b> that [if they did not eat... they would be given...] (接続詞that節)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"teach O1 O2" （O1にO2を教える）の第4文型です。that節の中の条件 "if they did not eat the crab immediately"（すぐにカニを食べなければ）が、エビを得るための条件となっており、これが選択肢3の「カニを食べるのを我慢しなければならなかった」に言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3): Resulting Behavior (結果としての行動)</h3>

<blockquote>They <b>looked at</b> the crab but <b>did not attack</b> it. / They <b>waited</b> for up to two minutes to get the food they preferred.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> They (The cuttlefish)</li>
    <li><b>Verb (動詞):</b> looked at / did not attack</li>
    <li><b>Object (目的語):</b> the crab / it</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>等位接続詞 "but" が「カニを見た」と「攻撃しなかった（＝食べなかった）」をつないでいます。この行動が、選択肢1の「好みの餌を得るためにカニを無視した」という記述と合致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4): Critical Point (指摘事項)</h3>

<blockquote>However, some researchers <b>point out</b> that hunger levels can change the results.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> some researchers</li>
    <li><b>Verb (動詞):</b> point out</li>
    <li><b>Object (目的語):</b> that [hunger levels can change the results]</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"point out that..."（～と指摘する）という表現が重要です。that節内の主語 "hunger levels"（空腹レベル）が結果を変えうるという内容が、選択肢4の "An animal's hunger can affect..." に対応しています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Conclusion): Final Conclusion (結論)</h3>

<blockquote>This behavior <b>showed</b> that cuttlefish could plan for the future.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> This behavior</li>
    <li><b>Verb (動詞):</b> showed</li>
    <li><b>Object (目的語):</b> that [cuttlefish could plan for the future]</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>第3段落の結論部分です。"plan for the future"（将来の計画を立てる）という表現が、コウイカの能力として示されており、これが選択肢2の正解の直接的な根拠となります。</p>
</div>`
    }
  },
  "2025-1": {
    past: {
      title: "History of Tea Bags",
      content: `## History of Tea Bags

At the start of the 1900s, Thomas Sullivan, a tea importer from New York, accidentally invented tea bags. He delivered tea leaf samples to his customers in small silk bags. He believed that they would take the leaves out of the bags before use. To his surprise, the customers thought it would be more convenient to pour hot water over the tea leaves while they were still in the bag. His invention had the advantage of making it easier to make a cup of tea, as well as making the process of cleaning the pot easier.

Tea bag materials have changed over time. Sullivan's first silk bags were replaced with cotton after his customers complained that silk bags were not the best for making tea. As the popularity of tea bags grew, it became impossible for tea bags made by hand to meet the demand. That was why filter paper was introduced. It was cheap and allowed water to pass through while keeping tea leaves inside. It was ideal for large-volume production. Today, in addition to filter paper, nylon tea bags are also common in the market.

The spread of tea bags was first observed in the United States and Canada. It took a while, however, for them to gain popularity in Britain. Using tea bags was considered rude in their culture among some people. This attitude began to change after World War II when people's lives became busier. In busy lifestyles, their traditional method of using tea leaves that were not in bags became difficult. Tea bags were suitable for the modern, fast-paced life.

Tea bags continue to improve. In the late 1990s, pyramid-shaped tea bags appeared on the market. The shape offers more space for tea leaves to move freely compared to square tea bags. At the same time, there is a movement to go back to using paper, cloth, or silk instead of nylons or materials that include some plastic. This goes with the global trend toward reducing plastic use. These efforts aim to make tea bags, which are usually thrown away after one use, more environmentally friendly.`,
      questions: `### Questions

**(27) Why was Thomas Sullivan surprised at his customers?**
1. They sent the tea samples back to him without opening them.
2. They asked for bigger bags to make it easier to make tea.
3. They used the tea leaves in the bags just as they were delivered.
4. They mixed different types of tea from different bags together.

**(28) The development of tea bag materials was mainly influenced by**
1. the need for a large amount of production of tea bags.
2. the desire to improve the taste of tea by using filters.
3. the demand for handmade bags over machine-made ones.
4. the popularity of smaller bags for easy transportation.

**(29) Why did tea bags finally become popular in Britain?**
1. The quality of tea in bags improved to match the British tea culture.
2. British tea companies said it was not rude to use tea bags.
3. The government provided financial support to tea bag factories.
4. They fit well with the pace of the modern life of British people.

**(30) Pyramid-shaped tea bags were introduced to**
1. reduce the amount of tea leaves used and cut production costs.
2. make tea bags look more modern and appealing to customers.
3. give more space for tea leaves to move around in tea bags.
4. compete with a traditional tea-making method in the market.

**(31) Which of the following statements is true?**
1. The filter paper was the first material used to make tea bags.
2. The materials used for tea bags are becoming more eco-friendly.
3. It was Sullivan's customers' idea to put tea leaves in the silk bags.
4. People in Britain never used tea bags until very recently.

---
**Answer Key:** (27) 3, (28) 1, (29) 4, (30) 3, (31) 2`,
      translations: [
        { en: "At the start of the 1900s, Thomas Sullivan, a tea importer from New York, accidentally invented tea bags.", ja: "1900年代初頭、ニューヨークの茶の輸入業者であるトーマス・サリヴァンは、偶然ティーバッグを発明した。" },
        { en: "He delivered tea leaf samples to his customers in small silk bags.", ja: "彼は顧客に茶葉のサンプルを小さな絹の袋に入れて届けた。" },
        { en: "He believed that they would take the leaves out of the bags before use.", ja: "彼は、彼らが使用前に袋から茶葉を取り出すだろうと考えていた。" },
        { en: "To his surprise, the customers thought it would be more convenient to pour hot water over the tea leaves while they were still in the bag.", ja: "驚いたことに、顧客たちは茶葉が袋に入ったままの状態で熱湯を注ぐ方が便利だと考えた。" },
        { en: "His invention had the advantage of making it easier to make a cup of tea, as well as making the process of cleaning the pot easier.", ja: "彼の発明には、ポットを洗う工程を簡単にするだけでなく、一杯のお茶を淹れるのを簡単にするという利点があった。" },
        { en: "Tea bag materials have changed over time.", ja: "ティーバッグの素材は時とともに変化してきた。" },
        { en: "Sullivan's first silk bags were replaced with cotton after his customers complained that silk bags were not the best for making tea.", ja: "サリヴァンの最初の絹の袋は、絹の袋はお茶を淹れるのに最適ではないと顧客が不満を言った後、綿に取って代わられた。" },
        { en: "As the popularity of tea bags grew, it became impossible for tea bags made by hand to meet the demand.", ja: "ティーバッグの人気が高まるにつれて、手作りのティーバッグでは需要を満たすことが不可能になった。" },
        { en: "That was why filter paper was introduced.", ja: "それがろ紙（フィルターペーパー）が導入された理由だった。" },
        { en: "It was cheap and allowed water to pass through while keeping tea leaves inside.", ja: "それは安価で、茶葉を内部に保ちながら水を通すことができた。" },
        { en: "It was ideal for large-volume production.", ja: "それは大量生産に理想的だった。" },
        { en: "Today, in addition to filter paper, nylon tea bags are also common in the market.", ja: "今日では、ろ紙に加えて、ナイロン製のティーバッグも市場で一般的である。" },
        { en: "The spread of tea bags was first observed in the United States and Canada.", ja: "ティーバッグの普及は最初にアメリカとカナダで見られた。" },
        { en: "It took a while, however, for them to gain popularity in Britain.", ja: "しかしながら、それらがイギリスで人気を得るまでには時間がかかった。" },
        { en: "Using tea bags was considered rude in their culture among some people.", ja: "ティーバッグを使うことは、一部の人々の間で彼らの文化において無作法だと考えられていた。" },
        { en: "This attitude began to change after World War II when people's lives became busier.", ja: "この態度は、人々の生活がより忙しくなった第二次世界大戦後に変わり始めた。" },
        { en: "In busy lifestyles, their traditional method of using tea leaves that were not in bags became difficult.", ja: "忙しいライフスタイルの中で、袋に入っていない茶葉を使う彼らの伝統的な方法は難しくなった。" },
        { en: "Tea bags were suitable for the modern, fast-paced life.", ja: "ティーバッグは現代のペースの速い生活に適していた。" },
        { en: "Tea bags continue to improve.", ja: "ティーバッグは改良され続けている。" },
        { en: "In the late 1990s, pyramid-shaped tea bags appeared on the market.", ja: "1990年代後半、ピラミッド型のティーバッグが市場に登場した。" },
        { en: "The shape offers more space for tea leaves to move freely compared to square tea bags.", ja: "その形状は、四角いティーバッグに比べて茶葉が自由に動くためのより多くのスペースを提供する。" },
        { en: "At the same time, there is a movement to go back to using paper, cloth, or silk instead of nylons or materials that include some plastic.", ja: "同時に、ナイロンやプラスチックを含む素材の代わりに、紙、布、あるいは絹の使用に戻ろうとする動きがある。" },
        { en: "This goes with the global trend toward reducing plastic use.", ja: "これはプラスチックの使用を減らすという世界的な傾向と一致している。" },
        { en: "These efforts aim to make tea bags, which are usually thrown away after one use, more environmentally friendly.", ja: "これらの取り組みは、通常一度使ったら捨てられるティーバッグを、より環境に優しいものにすることを目指している。" }
      ]
    },
    original: {
      title: "History of Potato Chips",
      content: `## History of Potato Chips

In the summer of 1853, George Crum, a chef in New York, unintentionally created potato chips. One evening, a customer at his restaurant kept sending his fried potatoes back to the kitchen. The customer complained that they were too thick and soft. Annoyed by this, Crum sliced the potatoes as thinly as possible, fried them until they were hard, and put a lot of salt on them. To his surprise, the customer loved the crispy snack. They became a hit at the restaurant and were soon known as "Saratoga Chips."

For a long time, chips were only served in restaurants or sold in barrels. This caused a problem because the chips at the bottom of the barrel would often get crushed and go stale. In the 1920s, a businesswoman named Laura Scudder had an idea to solve this. She asked her workers to iron sheets of wax paper together to make bags. These bags kept the chips fresh and allowed them to be transported to stores. This invention helped potato chips become a mass-market product.

While potato chips were popular in the United States, they were usually sold without any flavor. A small packet of salt was sometimes included in the bag for customers to add themselves. This changed in the 1950s when the owner of an Irish company invented a new technology to add seasoning directly to the chips. He introduced the first flavored chips: Cheese and Onion. This innovation led to a global explosion of chip flavors that matched local food cultures.

Potato chips continue to evolve to meet modern needs. In recent years, concerns about health have led to changes in how chips are made. Companies now offer baked chips or chips made from vegetables other than potatoes to lower fat and calories. Also, there is a push for environmentally friendly packaging. Manufacturers are trying to develop bags that are biodegradable. These efforts aim to reduce the amount of plastic waste created by the snack industry.`,
      questions: `### Original Questions

**(1) Why was George Crum surprised by the customer's reaction?**
1. The customer asked for a refund after eating the potatoes.
2. The customer enjoyed the thin and hard potatoes he made.
3. The customer wanted to learn how to cook the potatoes.
4. The customer complained that the new potatoes were too salty.

**(2) What was the main benefit of Laura Scudder's invention?**
1. It allowed chips to be kept fresh and sold in stores.
2. It made it easier for workers to peel the potatoes.
3. It reduced the cost of frying the chips in oil.
4. It improved the taste of the chips by adding salt.

**(3) How did potato chips change in the 1950s?**
1. They began to be sold in barrels instead of paper bags.
2. The United States government banned the sale of flavored chips.
3. New technologies allowed flavors to be added to them.
4. Customers stopped buying them because of health concerns.

**(4) Why are companies introducing baked or vegetable chips?**
1. To use up old potatoes that cannot be sold.
2. To address customers' concerns about health.
3. To make the chips crispier than fried ones.
4. To reduce the cost of packaging materials.

**(5) Which of the following statements is true?**
1. George Crum intended to invent potato chips from the beginning.
2. Potato chips were originally sold with the seasoning already added.
3. Companies are looking for ways to make chip bags less harmful to the environment.
4. Laura Scudder's invention made chips go stale faster than before.

---
**Answer Key:** (1) 2, (2) 1, (3) 3, (4) 2, (5) 3`,
      translations: [
        { en: "In the summer of 1853, George Crum, a chef in New York, unintentionally created potato chips.", ja: "1853年の夏、ニューヨークのシェフであるジョージ・クラムは、意図せずポテトチップスを生み出した。" },
        { en: "One evening, a customer at his restaurant kept sending his fried potatoes back to the kitchen.", ja: "ある晩、彼のレストランの客が、フライドポテトを何度も厨房に送り返してきた。" },
        { en: "The customer complained that they were too thick and soft.", ja: "その客は、それらが厚すぎて柔らかすぎると文句を言った。" },
        { en: "Annoyed by this, Crum sliced the potatoes as thinly as possible, fried them until they were hard, and put a lot of salt on them.", ja: "これに腹を立てたクラムは、ジャガイモをできる限り薄くスライスし、硬くなるまで揚げ、大量の塩を振った。" },
        { en: "To his surprise, the customer loved the crispy snack.", ja: "驚いたことに、その客はこのパリパリしたスナックを気に入った。" },
        { en: "They became a hit at the restaurant and were soon known as \"Saratoga Chips.\"", ja: "それらはレストランで大ヒットし、すぐに「サラトガ・チップス」として知られるようになった。" },
        { en: "For a long time, chips were only served in restaurants or sold in barrels.", ja: "長い間、チップスはレストランで提供されるか、樽に入れて売られるだけだった。" },
        { en: "This caused a problem because the chips at the bottom of the barrel would often get crushed and go stale.", ja: "樽の底にあるチップスはしばしば砕けたり湿気ったりしてしまうため、これは問題を引き起こした。" },
        { en: "In the 1920s, a businesswoman named Laura Scudder had an idea to solve this.", ja: "1920年代、ローラ・スカダーという女性実業家がこれを解決するアイデアを持っていた。" },
        { en: "She asked her workers to iron sheets of wax paper together to make bags.", ja: "彼女は従業員に、ワックスペーパーのシートをアイロンで張り合わせて袋を作るように頼んだ。" },
        { en: "These bags kept the chips fresh and allowed them to be transported to stores.", ja: "これらの袋はチップスを新鮮に保ち、店へ輸送することを可能にした。" },
        { en: "This invention helped potato chips become a mass-market product.", ja: "この発明は、ポテトチップスが大量消費製品になるのを助けた。" },
        { en: "While potato chips were popular in the United States, they were usually sold without any flavor.", ja: "ポテトチップスはアメリカで人気があったが、通常は味付けなしで売られていた。" },
        { en: "A small packet of salt was sometimes included in the bag for customers to add themselves.", ja: "客が自分で加えるための塩の小袋が袋の中に含まれていることもあった。" },
        { en: "This changed in the 1950s when the owner of an Irish company invented a new technology to add seasoning directly to the chips.", ja: "これは1950年代に、アイルランドの会社のオーナーがチップスに直接調味料を加える新しい技術を発明したことで変わった。" },
        { en: "He introduced the first flavored chips: Cheese and Onion.", ja: "彼は最初の味付きチップスである「チーズ＆オニオン」を導入した。" },
        { en: "This innovation led to a global explosion of chip flavors that matched local food cultures.", ja: "この革新は、地元の食文化に合ったチップスのフレーバーの世界的な爆発的増加につながった。" },
        { en: "Potato chips continue to evolve to meet modern needs.", ja: "ポテトチップスは現代のニーズを満たすために進化し続けている。" },
        { en: "In recent years, concerns about health have led to changes in how chips are made.", ja: "近年、健康への懸念がチップスの製造方法の変化につながっている。" },
        { en: "Companies now offer baked chips or chips made from vegetables other than potatoes to lower fat and calories.", ja: "企業は現在、脂肪やカロリーを下げるために、ベイクド（焼き）チップスやジャガイモ以外の野菜で作られたチップスを提供している。" },
        { en: "Also, there is a push for environmentally friendly packaging.", ja: "また、環境に優しいパッケージへの後押しもある。" },
        { en: "Manufacturers are trying to develop bags that are biodegradable.", ja: "製造業者は、生分解性の袋を開発しようとしている。" },
        { en: "These efforts aim to reduce the amount of plastic waste created by the snack industry.", ja: "これらの取り組みは、スナック業界によって生み出されるプラスチック廃棄物の量を減らすことを目的としている。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)
**ターゲットモデル:** History of Tea Bags

### 1. 量的構造
- **総単語数:** ~300 words
- **パラグラフ構成:**
  1. **発明の起源:** 意図せぬ発明（偶然の産物）と、当初の予想と異なるポジティブな反応。
  2. **改良と普及:** 保存・輸送のための容器（パッケージ）の進化（樽→袋）。
  3. **展開と革新:** 世界的普及と製品自体の進化（味付け技術の革新）。
  4. **現代の傾向:** 健康志向と環境配慮（エコフレンドリー）。

### 2. 重要語彙
- **unintentionally:** 意図せずに (accidentallyの類語)
- **complain:** 文句を言う
- **stale:** （食べ物が）新鮮でない、湿気た
- **seal:** 密封する
- **innovation:** 革新
- **criticize:** 批判する
- **environmentally friendly:** 環境に優しい

---`,
      summary: `## 講師用：本文要約 (Instructor Summary)
本文は、ポテトチップスの歴史について述べています。偶然の発明から始まり、パッケージの改良による流通革命、味付け技術の進歩を経て、現代の健康・環境志向への適応までを解説しています。

### 1. The Invention (第1段落)
1853年、ニューヨークのシェフ、ジョージ・クラムが、分厚いと文句を言う客への「仕返し」として極薄のポテトを揚げたところ、逆に大好評となり、ポテトチップスが誕生しました。

### 2. Packaging Evolution (第2段落)
当初はレストランのみでしたが、持ち帰りの需要が増えました。しかし、樽や瓶では湿気たり割れたりしました。ローラ・スカダーがワックスペーパーの袋を考案し、鮮度保持と輸送を可能にしました。

### 3. Flavor Innovation (第3段落)
世界に広がるにつれ、味も進化しました。かつては塩の小袋が同梱されていただけでしたが、1950年代に製造工程で直接味付けする技術が開発され、多様なフレーバーが登場しました。

### 4. Modern Trends (第4段落)
現在は健康志向（ノンフライや野菜チップス）や、環境配慮（リサイクル可能なパッケージ）への取り組みが進んでいます。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)
| 項目 | History of Tea Bags (過去問) | History of Potato Chips (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | ティーバッグの歴史 | ポテトチップスの歴史 | 身近な飲食物の「偶然の発明」と進化の歴史 |
| **構造** | 発明→素材変化→英国への普及→現代（エコ） | 発明→包装変化→味の進化→現代（エコ・健康） | 時系列に沿った発展と、技術的・文化的背景の説明 |
| **設問1** | 発明時の驚き（使用法の誤解） | 発明時の驚き（客の反応） | 発明者の意図と結果のギャップを問う |
| **設問2** | 素材変更の理由（大量生産） | 包装変更の理由（鮮度・輸送） | 技術的改良の目的・原因を問う |
| **設問3** | 英国普及の理由（生活様式） | 味付け技術の革新（技術革新） | 普及の転換点となった出来事を問う |
| **設問4** | 形状変更とエコ（現代） | 健康・エコ対応（現代） | 現代のトレンド（環境配慮）に関する理解を問う |
| **設問5** | 環境への配慮 (True statement) (False?) | 環境への配慮 (True statement) | 現代のトレンド（環境配慮）に関する理解を問う |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **History of Tea Bags (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 紅茶の入れ方の革命（道具の進化）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 素材の変遷（絹→紙→ナイロン）と、英国という特定地域での受容の遅れに焦点。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「利便性（Convenience）」と「文化（Culture）」の対立と融合。

* **History of Potato Chips (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> スナック菓子の誕生と流通革命。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> パッケージ技術（保存性）とフレーバー技術の進化に焦点。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「保存技術（Preservation）」と「多様化（Variety）」による市場拡大。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** なぜ驚いたか？（顧客が袋を開けずに使ったから）
    * **Original:** なぜ驚いたか？（嫌がらせのつもりが喜ばれたから）
* **Q2 (内容一致 - Para 2):**
    * **過去問:** 素材変化の主因（手作りでは需要に追いつかない＝大量生産）。
    * **Original:** 包装変化の主因（樽では湿気る・割れる＝品質保持）。
* **Q3 (内容一致 - Para 3):**
    * **過去問:** 英国での普及理由（忙しい現代生活への適合）。
    * **Original:** 1950年代の大きな変化（製造時の味付け技術の確立）。
* **Q4 (内容一致 - Para 4):**
    * **過去問:** ピラミッド型の導入理由（茶葉の動き）。※選択肢にエコへの言及あり
    * **Original:** 現代の変化（環境配慮パッケージ）。※過去問の(31)に相当する包括的な設問として設計。
* **Q5 (Conclusion):**
    * **過去問:** Eco-friendly materials (True).
    * **Original:** Eco-friendly packaging (True).`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1): Definition of Unexpected Success (予想外の成功)</h3>

<blockquote>To his surprise, the customer <b>loved</b> the crispy snack.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Modifier (修飾語):</b> To his surprise (彼が驚いたことに)</li>
    <li><b>Main Subject (主語):</b> the customer</li>
    <li><b>Verb (動詞):</b> loved</li>
    <li><b>Object (目的語):</b> the crispy snack</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"To one's surprise" は感情を表す重要なイディオムです。客が怒ると思って出したものが「気に入られた（loved）」という予想外の結果が、選択肢2の正解根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2): Purpose of Invention (発明の目的)</h3>

<blockquote>These bags <b>kept</b> the chips fresh and <b>allowed</b> them to be transported to stores.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> These bags</li>
    <li><b>Verb (動詞):</b> kept / allowed</li>
    <li><b>Object (目的語):</b> the chips / them</li>
    <li><b>Complement (補語):</b> fresh (kept O C)</li>
    <li><b>Infinitive (不定詞):</b> to be transported (allowed O to do)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"keep O C"（OをCの状態に保つ）と "allow O to do"（Oが～することを可能にする）の2つの重要構文が含まれています。「新鮮に保つ」「店へ輸送できる」という2点が、選択肢1の内容と完全に一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3): Turning Point (転換点)</h3>

<blockquote>This <b>changed</b> in the 1950s when the owner of an Irish company <b>invented</b> a new technology to add seasoning directly to the chips.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> This (前の文の内容＝味なしだったこと)</li>
    <li><b>Verb (動詞):</b> changed</li>
    <li><b>Modifier (修飾語):</b> in the 1950s</li>
    <li><b>Relative Adverb Clause (関係副詞節):</b> when [the owner... invented a new technology...]</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"technology to add seasoning"（味付けを加える技術）の発明が、1950年代の変化の中心です。これが選択肢3の "New technologies allowed flavors to be added" に言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4): Purpose of New Types (新しいタイプの目的)</h3>

<blockquote>Companies now <b>offer</b> baked chips or chips made from vegetables other than potatoes to lower fat and calories.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> Companies</li>
    <li><b>Verb (動詞):</b> offer</li>
    <li><b>Object (目的語):</b> baked chips or chips made from vegetables...</li>
    <li><b>Infinitive (不定詞):</b> to lower fat and calories (副詞的用法)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>不定詞 "to lower fat and calories" が目的（～するために）を表しています。脂肪やカロリーを下げることは、すなわち選択肢2の "address customers' concerns about health"（健康への懸念に対処する）ことです。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Conclusion): Environmental Efforts (環境への取り組み)</h3>

<blockquote>Manufacturers <b>are trying to develop</b> bags that are biodegradable. / These efforts <b>aim</b> to reduce the amount of plastic waste...</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> Manufacturers</li>
    <li><b>Verb (動詞):</b> are trying to develop</li>
    <li><b>Object (目的語):</b> bags</li>
    <li><b>Relative Clause (関係代名詞節):</b> that are biodegradable</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"biodegradable"（生分解性の＝自然に還る）という単語が、選択肢3の "less harmful to the environment"（環境に害が少ない）の根拠となります。文脈全体として環境配慮への動き（push for environmentally friendly packaging）を読み取ることが重要です。</p>
</div>`
    }
  },
  "2024-3": {
    past: {
      title: "Diaries",
      content: `## Title: Diaries

Although different people write diaries for different reasons, most people have probably tried writing one at least once in their lives. One of the common reasons why people keep a diary is to to reduce stress. By writing down ideas and thoughts that they do not want others to hear or know, they can calm down some emotions. Writing down what they have done, especially during important events such as vacations, is also a common means to organize their memories.

Morris Villarroel, a Spanish scientist and professor, started trying to organize his memories. When Villarroel turned forty, he was not sure what he had done by then. Even though he had some photos and journals, they were not enough to explain his forty years. To make sure he knows what he has accomplished when he turns eighty, he decided to keep a diary. However, his idea of keeping a diary was unique. He started to write down what he was doing and how he was feeling every fifteen to thirty minutes.

His effort to record what he had done did not end there. Soon after, he started taking pictures to document his life. He attached a small camera to his shirt and set it to take a photo around him automatically every thirty seconds. The number of photos he took in a day ranged from one thousand to two thousand. Of course, most of the photos were of boring everyday things like his hand, his computer, his food, and just people walking in front of him.

However, he learned several things from this experience. By checking what he had written, he found some patterns. This allowed him to realize that he often felt stressed while driving to work. Therefore, he has decided to take the train and walk. He also noticed a few things, so he improved his lectures. These things were so minor that he could have forgotten without the diary. With a detailed record of his life, he can now remember his life clearly, and he says that the last ten years felt much longer than the ones before.`,
      questions: `### Questions

**(27) What is one of the common reasons people keep diaries?**
1. To keep their thoughts organized.
2. To let others know about some important events.
3. To show them to someone they love.
4. To read them when they feel stressed.

**(28) How did Morris Villarroel feel when he turned forty?**
1. His work and pets kept him too busy.
2. His pictures and papers did not show enough of his past.
3. He always failed to keep a diary.
4. He was not ready to keep writing his journals as a scientist.

**(29) In his effort to keep a diary, Villarroel**
1. realized that his life was full of small things that were not worth remembering.
2. took photos of himself when an important thing was happening.
3. began to record every detail of his life by using a camera.
4. made sure to take pictures of every person he met every day.

**(30) What did Villarroel discover through the experience of keeping a diary?**
1. Sometimes, it is necessary to stop keeping a diary and enjoy the moment.
2. He can feel as if time passes more slowly by keeping a detailed record.
3. His memory has gotten much worse compared to before he started a diary.
4. Bigger life events create more emotions and feelings than smaller ones.

**(31) Which of the following statements is true?**
1. The purpose of keeping a diary for Villarroel was to improve his lectures.
2. It is more important to write down how people are feeling than what they are doing.
3. Villarroel found that his diary increased the quality of his life.
4. Villarroel shows that taking pictures and writing down events have different purposes.

**Answer Key:** (27) 1, (28) 2, (29) 3, (30) 2, (31) 3`,
      translations: [
        { en: "Although different people write diaries for different reasons, most people have probably tried writing one at least once in their lives.", ja: "人々はさまざまな理由で日記を書くが、ほとんどの人は人生で少なくとも一度は日記を書こうとしたことがあるだろう。" },
        { en: "One of the common reasons why people keep a diary is to reduce stress.", ja: "人々が日記をつける一般的な理由の一つは、ストレスを軽減することである。" },
        { en: "By writing down ideas and thoughts that they do not want others to hear or know, they can calm down some emotions.", ja: "他人に聞かれたり知られたりしたくないアイデアや考えを書き留めることによって、彼らはいくつかの感情を落ち着かせることができる。" },
        { en: "Writing down what they have done, especially during important events such as vacations, is also a common means to organize their memories.", ja: "特に休暇などの重要なイベント中に、自分がしたことを書き留めることも、記憶を整理するための一般的な手段である。" },
        { en: "Morris Villarroel, a Spanish scientist and professor, started trying to organize his memories.", ja: "スペインの科学者であり教授であるモリス・ヴィラロエルは、自分の記憶を整理しようとし始めた。" },
        { en: "When Villarroel turned forty, he was not sure what he had done by then.", ja: "ヴィラロエルは40歳になったとき、それまでに自分が何をしてきたのか確信が持てなかった。" },
        { en: "Even though he had some photos and journals, they were not enough to explain his forty years.", ja: "彼はいくつかの写真や日誌を持っていたが、それらは彼の40年間を説明するには不十分だった。" },
        { en: "To make sure he knows what he has accomplished when he turns eighty, he decided to keep a diary.", ja: "80歳になったときに自分が何を成し遂げたかを知ることができるように、彼は日記をつけることに決めた。" },
        { en: "However, his idea of keeping a diary was unique.", ja: "しかし、彼の日記をつけるという考えはユニークなものだった。" },
        { en: "He started to write down what he was doing and how he was feeling every fifteen to thirty minutes.", ja: "彼は15分から30分ごとに、自分が何をしているか、どのように感じているかを書き留め始めた。" },
        { en: "His effort to record what he had done did not end there.", ja: "自分がしたことを記録するという彼の努力はそこで終わらなかった。" },
        { en: "Soon after, he started taking pictures to document his life.", ja: "その後すぐに、彼は自分の人生を記録するために写真を撮り始めた。" },
        { en: "He attached a small camera to his shirt and set it to take a photo around him automatically every thirty seconds.", ja: "彼はシャツに小さなカメラを取り付け、30秒ごとに自動的に周囲の写真を撮るように設定した。" },
        { en: "The number of photos he took in a day ranged from one thousand to two thousand.", ja: "彼が1日に撮る写真の数は、1,000枚から2,000枚に及んだ。" },
        { en: "Of course, most of the photos were of boring everyday things like his hand, his computer, his food, and just people walking in front of him.", ja: "もちろん、写真のほとんどは、彼の手、コンピュータ、食べ物、そしてただ目の前を歩いている人々のような、退屈な日常的なものだった。" },
        { en: "However, he learned several things from this experience.", ja: "しかし、彼はこの経験からいくつかのことを学んだ。" },
        { en: "By checking what he had written, he found some patterns.", ja: "書いたものを確認することで、彼はいくつかのパターンを発見した。" },
        { en: "This allowed him to realize that he often felt stressed while driving to work.", ja: "これにより、彼は車で通勤しているときにしばしばストレスを感じていることに気づくことができた。" },
        { en: "Therefore, he has decided to take the train and walk.", ja: "そのため、彼は電車を使って歩くことに決めた。" },
        { en: "He also noticed a few things, so he improved his lectures.", ja: "彼はまた、いくつかのことに気づき、講義を改善した。" },
        { en: "These things were so minor that he could have forgotten without the diary.", ja: "これらのことは非常に些細なことだったので、日記がなければ忘れてしまっていたかもしれない。" },
        { en: "With a detailed record of his life, he can now remember his life clearly, and he says that the last ten years felt much longer than the ones before.", ja: "人生の詳細な記録があることで、彼は今や自分の人生をはっきりと記憶することができ、過去10年間はその前の期間よりもずっと長く感じられたと彼は言っている。" }
      ]
    },
    original: {
      title: "The Sleep Project",
      content: `## Title: The Sleep Project

Everyone needs sleep to stay healthy, but many people struggle to get enough rest. There are various methods people use to improve their sleep quality, such as going to bed at the same time every night or avoiding caffeine. Recently, recording sleep patterns has become a common way to solve these problems. By collecting data on how they sleep, people hope to find the reasons why they feel tired during the day. It helps them organize their habits and understand their body better.

Elena Gomez, a software engineer, decided to take a serious look at her sleep habits. Despite sleeping for eight hours, she often woke up feeling exhausted. She had visited doctors, but they could not find any major health issues. To discover the real cause of her fatigue, she started a personal experiment. Unlike a simple sleep diary where people just write down the time they went to bed, Elena's approach was much more detailed. She decided to record everything about her environment and daily activities.

Elena used a smart watch to track her heart rate and movement during the night. In addition, she wrote down the room temperature, the food she ate for dinner, and even the amount of light in her room. She collected this data every single day for three months. Most of the information seemed useless at first. The records showed ordinary things like eating pasta for dinner or reading a book before bed, which did not seem to be related to her tiredness.

However, after analyzing the data, Elena found an important pattern. She realized that on the days she used her smartphone right before bed, her sleep quality was much lower. The blue light from the screen was affecting her brain. As a result, she decided to stop using electronic devices one hour before sleeping. This small change made a huge difference. She now wakes up feeling refreshed. She says that understanding her own data gave her control over her health, making her daily life more productive and enjoyable.`,
      questions: `### Original Questions

**(1) What is one reason why people record their sleep patterns?**
1. To prove to their doctors that they are sick.
2. To find out the cause of their tiredness.
3. To compare their sleep hours with their friends.
4. To reduce the time they spend sleeping.

**(2) Why did Elena Gomez start her experiment?**
1. She wanted to test a new smart watch for her work.
2. She was advised by her doctor to keep a simple diary.
3. She felt tired even though she slept for a long time.
4. She wanted to know how much caffeine she was drinking.

**(3) How was Elena's approach different from a simple sleep diary?**
1. She only recorded the time she woke up in the morning.
2. She tracked various details like room temperature and diet.
3. She took photos of herself while she was sleeping.
4. She asked her family members to watch her sleep.

**(4) What did Elena discover from her data?**
1. Eating pasta for dinner was bad for her sleep.
2. The room temperature was too high every night.
3. Using her smartphone before bed lowered her sleep quality.
4. Reading books made her brain too active to sleep.

**(5) Which of the following statements is true?**
1. Elena found that she needed to sleep more than eight hours.
2. Doctors found a major health issue before she started the test.
3. Elena's experiment helped her improve her daily life.
4. The smart watch data showed that she was not moving at night.

---
**Answer Key:** (1) 2, (2) 3, (3) 2, (4) 3, (5) 3`,
      translations: [
        { en: "Everyone needs sleep to stay healthy, but many people struggle to get enough rest.", ja: "誰もが健康を維持するために睡眠を必要とするが、多くの人が十分な休息をとるのに苦労している。" },
        { en: "There are various methods people use to improve their sleep quality, such as going to bed at the same time every night or avoiding caffeine.", ja: "毎晩同じ時間に寝たり、カフェインを避けたりするなど、睡眠の質を改善するために人々が使う方法はさまざまである。" },
        { en: "Recently, recording sleep patterns has become a common way to solve these problems.", ja: "最近では、睡眠パターンを記録することが、これらの問題を解決する一般的な方法になっている。" },
        { en: "By collecting data on how they sleep, people hope to find the reasons why they feel tired during the day.", ja: "どのように眠っているかのデータを集めることで、人々は日中疲れを感じる理由を見つけたいと望んでいる。" },
        { en: "It helps them organize their habits and understand their body better.", ja: "それは彼らが習慣を整理し、自分の体をよりよく理解するのに役立つ。" },
        { en: "Elena Gomez, a software engineer, decided to take a serious look at her sleep habits.", ja: "ソフトウェアエンジニアのエレナ・ゴメスは、自分の睡眠習慣を真剣に見直すことにした。" },
        { en: "Despite sleeping for eight hours, she often woke up feeling exhausted.", ja: "8時間眠っているにもかかわらず、彼女はしばしば疲れ果てて目を覚ました。" },
        { en: "She had visited doctors, but they could not find any major health issues.", ja: "彼女は医者にかかったが、彼らは大きな健康上の問題を見つけることはできなかった。" },
        { en: "To discover the real cause of her fatigue, she started a personal experiment.", ja: "彼女の疲労の本当の原因を発見するために、彼女は個人的な実験を始めた。" },
        { en: "Unlike a simple sleep diary where people just write down the time they went to bed, Elena's approach was much more detailed.", ja: "人々が単に寝た時間を書き留めるだけの単純な睡眠日記とは異なり、エレナのアプローチはずっと詳細だった。" },
        { en: "She decided to record everything about her environment and daily activities.", ja: "彼女は自分の環境や日常の活動に関するすべてを記録することに決めた。" },
        { en: "Elena used a smart watch to track her heart rate and movement during the night.", ja: "エレナは夜間の心拍数と動きを追跡するためにスマートウォッチを使用した。" },
        { en: "In addition, she wrote down the room temperature, the food she ate for dinner, and even the amount of light in her room.", ja: "さらに、彼女は室温、夕食に食べたもの、さらには部屋の光の量さえも書き留めた。" },
        { en: "She collected this data every single day for three months.", ja: "彼女はこのデータを3ヶ月間毎日集めた。" },
        { en: "Most of the information seemed useless at first.", ja: "最初、情報のほとんどは役に立たないように思えた。" },
        { en: "The records showed ordinary things like eating pasta for dinner or reading a book before bed, which did not seem to be related to her tiredness.", ja: "記録は夕食にパスタを食べたり、寝る前に本を読んだりするような日常的な事柄を示しており、それらは彼女の疲れとは関係がないように思えた。" },
        { en: "However, after analyzing the data, Elena found an important pattern.", ja: "しかし、データを分析した後、エレナは重要なパターンを発見した。" },
        { en: "She realized that on the days she used her smartphone right before bed, her sleep quality was much lower.", ja: "彼女は、寝る直前にスマートフォンを使った日は、睡眠の質がはるかに低いことに気づいた。" },
        { en: "The blue light from the screen was affecting her brain.", ja: "画面からのブルーライトが彼女の脳に影響を与えていた。" },
        { en: "As a result, she decided to stop using electronic devices one hour before sleeping.", ja: "その結果、彼女は寝る1時間前に電子機器を使うのをやめることにした。" },
        { en: "This small change made a huge difference.", ja: "この小さな変化が大きな違いを生んだ。" },
        { en: "She now wakes up feeling refreshed.", ja: "彼女は今、すっきりした気分で目を覚ます。" },
        { en: "She says that understanding her own data gave her control over her health, making her daily life more productive and enjoyable.", ja: "彼女は、自分のデータを理解することが健康を管理する力を与え、日常生活をより生産的で楽しいものにしてくれたと言っている。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Diaries (2024-3) - "Keeping a Detailed Record"

### 1. 量的構造
- **総単語数:** ~310 words
- **パラグラフ構成:**
  1. **導入:** 一般論（睡眠改善の必要性）と、記録をつける目的（原因究明）。
  2. **動機:** 主人公（Elena）の悩み（寝ても疲れている）。既存の解決策（医者）の限界。
  3. **方法:** 詳細なデータ収集（スマートウォッチ、室温、食事など）。一見無関係に見えるデータの蓄積。
  4. **発見と結果:** パターンの発見（スマホのブルーライト）。行動変容とQOLの向上。

### 2. 重要語彙
- **struggle:** 苦労する
- **exhausted:** 疲れ果てた
- **fatigue:** 疲労
- **experiment:** 実験
- **analyze:** 分析する
- **affect:** 影響を与える
- **productive:** 生産的な`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、睡眠の質を改善するために個人的なデータ収集を行った女性の話です。漫然と寝るだけでなく、自分の生活習慣や環境を詳細に記録することで、隠れた不調の原因を突き止め、生活の質を向上させることができるというエピソードです。

### 1. The Sleep Project (第1段落)
健康維持に睡眠は不可欠だが、多くの人が悩んでいる。最近では、疲れの原因を探るために睡眠パターンを記録する方法が一般的になってきている。

### 2. Elena's Problem (第2段落)
ソフトウェアエンジニアのエレナは、十分寝ても疲れが取れないことに悩んでいた。医者に行っても原因がわからなかったため、自分で詳細な記録をつける実験を始めた。

### 3. Gathering Data (第3段落)
彼女はスマートウォッチや手書きのメモを使い、心拍数、室温、夕食の内容、光の量などを3ヶ月間毎日記録した。最初は無意味に見えるデータも多かった。

### 4. The Discovery (第4段落)
データを分析した結果、就寝直前のスマートフォン使用が睡眠の質を下げていることに気づいた。使用をやめたことで目覚めが改善し、日常生活がより生産的になった。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Diaries (過去問) | The Sleep Project (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 日記による自己分析・記憶 | 睡眠記録による自己分析・健康 | 記録(Log)を通じた生活改善 |
| **構造** | 一般論 → 個人の動機 → 記録手法(写真) → 発見(ストレス源) | 一般論 → 個人の動機 → 記録手法(データ) → 発見(スマホ) | 4段落構成、個人の実験と成果 |
| **設問1** | 日記をつける理由 (Reduce stress/Organize) | 睡眠記録をつける理由 (Find cause) | 第1段落の「目的」を問う |
| **設問2** | 40歳時の動機 (Past records insufficient) | 実験開始の動機 (Still tired) | 第2段落の「きっかけ」を問う |
| **設問3** | 記録の具体的方法 (Every 30 secs photo) | 記録の具体的方法 (Temp, diet, light) | 第3段落の「詳細な手法」を問う |
| **設問4** | 発見したこと (Stressed while driving) | 発見したこと (Phone affects sleep) | 第4段落の「因果関係」を問う |
| **設問5** | 全体の結論 (Quality of life increased) | 全体の結論 (Daily life improved) | 本文全体の「ポジティブな結果」 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Diaries (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 記憶の保存と再確認。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「過去を忘れないため」に始めたことが、現在のストレス源発見につながった。

* **The Sleep Project (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 健康管理と問題解決。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「疲れの原因を知るため」に始めたことが、具体的な悪習慣の特定につながった。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** "To keep their thoughts organized" (日記の効用)
    * **Original:** "To find out the cause of their tiredness" (記録の効用)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** 過去の記録では不十分だった (Negative reason)。
    * **Original:** 十分寝ても疲れていた (Negative condition)。
* **Q3 (内容一致 - Para 3):**
    * **過去問:** "record every detail" (膨大な写真)。
    * **Original:** "tracked various details" (多様なデータ)。
* **Q4 (内容一致 - Para 4):**
    * **過去問:** 運転中のストレスに気づいた。
    * **Original:** スマホのブルーライトの影響に気づいた。
* **Q5 (内容一致 - Conclusion):**
    * **過去問:** "Increased the quality of his life" (QOL向上)。
    * **Original:** "Improve her daily life" (QOL向上)。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>By collecting data on how they sleep, people <b>hope to find</b> the reasons why they feel tired during the day.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>手段 (M):</b> By collecting data [on how they sleep]</li>
    <li><b>主語 (S):</b> people</li>
    <li><b>動詞 (V):</b> hope to find</li>
    <li><b>目的語 (O):</b> the reasons [why they feel tired during the day]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>関係副詞 "why" が "reasons" を修飾しています。「なぜ日中疲れているのかという理由を見つけたい」という部分が、選択肢2の "find out the cause of their tiredness" と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>Despite sleeping for eight hours, she often <b>woke up</b> feeling exhausted. / To discover the real cause of her fatigue, she <b>started</b> a personal experiment.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>譲歩 (M):</b> Despite sleeping for eight hours</li>
    <li><b>主語 (S):</b> she</li>
    <li><b>動詞 (V):</b> woke up</li>
    <li><b>補語 (C):</b> feeling exhausted (分詞構文的用法)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"Despite..."（～にもかかわらず）が重要です。「8時間寝たのに疲れていた」という矛盾した状況が、実験を始める直接の動機（選択肢3）となっています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>In addition, she <b>wrote down</b> the room temperature, the food she ate for dinner, and even the amount of light in her room.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞:</b> In addition</li>
    <li><b>主語 (S):</b> she</li>
    <li><b>動詞 (V):</b> wrote down</li>
    <li><b>目的語 (O):</b> room temperature, food..., and amount of light...</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>具体的な記録項目が列挙されています。これが選択肢2の "tracked various details like room temperature and diet" の直接的な根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>She <b>realized</b> that on the days she used her smartphone right before bed, her sleep quality was much lower.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> She</li>
    <li><b>動詞 (V):</b> realized</li>
    <li><b>目的語 (O):</b> that [on the days... her sleep quality was much lower]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>that節の中で、「スマホを使った日」と「睡眠の質の低下」の因果関係が示されています。これが選択肢3の "Using her smartphone... lowered her sleep quality" に対応します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Conclusion)</h3>
<blockquote>She <b>says</b> that understanding her own data gave her control over her health, making her daily life more productive and enjoyable.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> She</li>
    <li><b>動詞 (V):</b> says</li>
    <li><b>目的語 (O):</b> that [understanding... gave her control...]</li>
    <li><b>分詞構文 (M):</b> making her daily life more productive and enjoyable</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>分詞構文 "making..." が結果を表しています。日常生活が生産的で楽しくなった（＝生活が改善した）という記述が、選択肢3の "Elena's experiment helped her improve her daily life" を裏付けます。</p>
</div>`
    }
  },
  "2024-2-jun": {
    past: {
      title: "Blues",
      content: `## Title: Blues

Blues is a type of music that started in the southern part of the United States over one hundred years ago. It was made by African Americans who were going through tough times. They sang to share their sad feelings and express the difficulties they were having. However, blues is not only about unhappy feelings. Instead, it is also about not giving up in difficult times. Over time, the music has spread to different parts of the country, resulting in various types of blues music.

Delta blues is the original type of blues, and it is still considered the main type of blues. In Delta blues, singers play the guitar in a unique way. They do this by using a glass tool on their fingers. By sliding it along the guitar strings, they make special sounds. The original Delta blues singers also came up with a special singing style called "call and response." This is a form where the singer sings a line, and other band members and the audience respond to it.

In the twentieth century, many African Americans on southern farms moved to northern cities, including Chicago, in search of job opportunities and a better life. They brought blues music with them and hoped to create something new. Instead of singing about the difficulties of life on farms, they began to sing about everyday city life. They started to use electric guitars so that more people in crowded, noisy indoor environments could hear them. The use of electric guitars became a symbol of Chicago blues.

Blues has not only developed into different types of blues itself but also influenced different types of music. Delta and Chicago blues both focus on guitar music, and this influence can be seen in modern rock music. Also, the strong expression of feelings has been passed down to rock music. Expressing emotions is a big part of rap music, too. Just like in blues, rap artists openly talk about their experiences and feelings, often sharing social messages, which was a big part of the original Delta blues.`,
      questions: `### Questions

**(27) Why did African Americans create the music form called blues?**
1. To help people of all races make the economy better.
2. To teach other people about the hometowns they came from.
3. To earn money in the music industry that was starting to develop.
4. To celebrate the effort they made to not give up when things were difficult.

**(28) In Delta blues,**
1. singers encourage the audience to participate in the music together.
2. audience members bring glass tools and use them as musical instruments.
3. each band member has to play a number of different musical instruments.
4. the use of guitars only became popular years after they were invented.

**(29) What was one reason why Chicago blues musicians used electric guitars?**
1. Electric guitars were becoming cheaper in the areas where they lived.
2. Some businesses gave guitars to these new musicians to support them.
3. The sound of electric guitars was more suitable for performance on TV.
4. They played in places where it was difficult for people to hear them.

**(30) In what way is blues similar to rap music?**
1. They were both started by African Americans in the southern United States.
2. There are usually more than one guitarist and singer in a band.
3. Musicians express their feelings and share a message through their songs.
4. The songs reflect the difficult lives that women usually face.

**(31) Which of the following statements is true?**
1. Delta blues songs are usually about life in big cities.
2. Blues music had much more influence on rap music than on rock.
3. The songs in blues music avoid talking about difficult times or subjects.
4. Blues music developed as the people moved from one place to another.

---
**Answer Key:** 4, 1, 4, 3, 4`,
      translations: [
        { en: "Blues is a type of music that started in the southern part of the United States over one hundred years ago.", ja: "ブルースは、100年以上前に米国南部で始まった音楽の一種である。" },
        { en: "It was made by African Americans who were going through tough times.", ja: "それは困難な時期を過ごしていたアフリカ系アメリカ人によって作られた。" },
        { en: "They sang to share their sad feelings and express the difficulties they were having.", ja: "彼らは悲しい感情を共有し、抱えている困難を表現するために歌った。" },
        { en: "However, blues is not only about unhappy feelings.", ja: "しかし、ブルースは不幸な感情についてだけのものではない。" },
        { en: "Instead, it is also about not giving up in difficult times.", ja: "それどころか、それは困難な時期に諦めないことについてのものでもある。" },
        { en: "Over time, the music has spread to different parts of the country, resulting in various types of blues music.", ja: "時が経つにつれて、その音楽は国のさまざまな地域に広がり、その結果、さまざまなタイプのブルース音楽が生まれた。" },
        { en: "Delta blues is the original type of blues, and it is still considered the main type of blues.", ja: "デルタブルースはブルースの元祖となるタイプであり、今でもブルースの主要なタイプと考えられている。" },
        { en: "In Delta blues, singers play the guitar in a unique way.", ja: "デルタブルースでは、歌手は独特の方法でギターを弾く。" },
        { en: "They do this by using a glass tool on their fingers.", ja: "彼らは指にガラスの道具を使ってこれを行う。" },
        { en: "By sliding it along the guitar strings, they make special sounds.", ja: "それをギターの弦に沿ってスライドさせることで、彼らは特別な音を出す。" },
        { en: "The original Delta blues singers also came up with a special singing style called \"call and response.\"", ja: "初期のデルタブルースの歌手たちはまた、「コール・アンド・レスポンス」と呼ばれる特別な歌唱スタイルを思いついた。" },
        { en: "This is a form where the singer sings a line, and other band members and the audience respond to it.", ja: "これは、歌手が一行を歌い、他のバンドメンバーや観客がそれに応答する形式である。" },
        { en: "In the twentieth century, many African Americans on southern farms moved to northern cities, including Chicago, in search of job opportunities and a better life.", ja: "20世紀には、南部の農場にいた多くのアフリカ系アメリカ人が、雇用の機会とより良い生活を求めてシカゴを含む北部の都市に移住した。" },
        { en: "They brought blues music with them and hoped to create something new.", ja: "彼らはブルース音楽を携えて行き、何か新しいものを創造したいと望んだ。" },
        { en: "Instead of singing about the difficulties of life on farms, they began to sing about everyday city life.", ja: "農場での生活の困難さについて歌う代わりに、彼らは都会の日常生活について歌い始めた。" },
        { en: "They started to use electric guitars so that more people in crowded, noisy indoor environments could hear them.", ja: "彼らは、混雑した騒がしい屋内環境にいるより多くの人々に聞こえるように、エレキギターを使い始めた。" },
        { en: "The use of electric guitars became a symbol of Chicago blues.", ja: "エレキギターの使用はシカゴブルースの象徴となった。" },
        { en: "Blues has not only developed into different types of blues itself but also influenced different types of music.", ja: "ブルースはそれ自体がさまざまなタイプのブルースに発展しただけでなく、さまざまなタイプの音楽にも影響を与えた。" },
        { en: "Delta and Chicago blues both focus on guitar music, and this influence can be seen in modern rock music.", ja: "デルタブルースとシカゴブルースはどちらもギター音楽に焦点を当てており、この影響は現代のロック音楽に見ることができる。" },
        { en: "Also, the strong expression of feelings has been passed down to rock music.", ja: "また、感情の強い表現はロック音楽に受け継がれている。" },
        { en: "Expressing emotions is a big part of rap music, too.", ja: "感情を表現することはラップ音楽の大きな部分でもある。" },
        { en: "Just like in blues, rap artists openly talk about their experiences and feelings, often sharing social messages, which was a big part of the original Delta blues.", ja: "ブルースと同じように、ラップアーティストは自分たちの経験や感情について公然と語り、しばしば社会的メッセージを共有するが、これは初期のデルタブルースの大きな部分であった。" }
      ]
    },
    original: {
      title: "The Rise of Hip-Hop",
      content: `## Title: The Rise of Hip-Hop

Hip-hop culture began in New York City during the 1970s. It was created by young African Americans and Latinos who were living in neighborhoods with little money. Instead of buying expensive instruments, they used record players to create a new sound. They organized "block parties" to bring their community together. While the music often reflected the hard reality of their lives, it was primarily a way to have fun and stay positive. This creative energy helped them deal with the challenges of their environment.

The most important figure in early hip-hop was the DJ. DJs noticed that people danced the most during the short drum sections of songs, known as "breaks." They developed a technique to play these breaks over and over again. This allowed dancers, called "breakdancers," to show off their skills for longer periods. Soon, people known as MCs began speaking in rhythm over the music to encourage the crowd. This style of speaking eventually turned into what we now know as rapping.

In the 1980s, the music changed as it became a business. Musicians began using drum machines and computers instead of just turntables. This technology allowed them to create complex beats that were louder and clearer for radio play. As the genre grew, artists started writing lyrics about serious social issues and city life. This shift helped hip-hop move from local parties to a worldwide audience, influencing people far beyond New York.

Today, hip-hop is one of the most popular music styles in the world. It has influenced fashion, language, and art globally. Moreover, just like the blues music that came before it, hip-hop remains a powerful tool for storytelling. It allows artists to share their personal struggles and successes, connecting with listeners who face similar challenges in their own lives. Whether in a small town or a big city, the message of hip-hop continues to inspire people to express themselves.`,
      questions: `### Original Questions

**(1) Why did young people in New York originally create hip-hop?**
1. To make money to buy expensive musical instruments for schools.
2. To complain about the politicians who controlled their city.
3. To find a way to enjoy themselves and support their community.
4. To create a style of music that was slower than disco music.

**(2) What did early DJs do to help dancers?**
1. They played the drum sections of songs repeatedly.
2. They invited famous singers to perform at their parties.
3. They taught the audience how to speak in rhythm.
4. They used computers to make the music sound quieter.

**(3) How did hip-hop change in the 1980s?**
1. Musicians stopped using technology and returned to live bands.
2. Artists began using new machines to make music suitable for the radio.
3. The lyrics became focused only on having fun and partying.
4. It became less popular because people preferred rock music.

**(4) In what way is hip-hop similar to blues music?**
1. It is mostly played on the guitar in the southern United States.
2. It was created by people who lived on large farms.
3. It focuses on telling stories about personal feelings and experiences.
4. It avoids talking about serious social problems or hardships.

**(5) Which of the following statements is true?**
1. Breakdancers preferred to dance during the singing parts of songs.
2. Hip-hop culture was created by wealthy people in the suburbs.
3. MCs originally started speaking to encourage the crowd to dance.
4. Hip-hop has had very little influence on fashion or art.

---
**Answer Key:** 3, 1, 2, 3, 3`,
      translations: [
        { en: "Hip-hop culture began in New York City during the 1970s.", ja: "ヒップホップ文化は1970年代にニューヨーク市で始まった。" },
        { en: "It was created by young African Americans and Latinos who were living in neighborhoods with little money.", ja: "それは、お金の少ない地域に住んでいた若いアフリカ系アメリカ人とラテン系の人々によって作られた。" },
        { en: "Instead of buying expensive instruments, they used record players to create a new sound.", ja: "高価な楽器を買う代わりに、彼らは新しい音を作るためにレコードプレーヤーを使った。" },
        { en: "They organized \"block parties\" to bring their community together.", ja: "彼らはコミュニティを団結させるために「ブロックパーティー」を組織した。" },
        { en: "While the music often reflected the hard reality of their lives, it was primarily a way to have fun and stay positive.", ja: "音楽はしばしば彼らの生活の厳しい現実を反映していたが、それは主として楽しみ、前向きでいるための方法であった。" },
        { en: "This creative energy helped them deal with the challenges of their environment.", ja: "この創造的なエネルギーは、彼らが環境の課題に対処するのを助けた。" },
        { en: "The most important figure in early hip-hop was the DJ.", ja: "初期のヒップホップにおける最も重要な人物はDJであった。" },
        { en: "DJs noticed that people danced the most during the short drum sections of songs, known as \"breaks.\"", ja: "DJたちは、人々が「ブレイク」として知られる曲の短いドラムセクションの間、最も踊ることに気づいた。" },
        { en: "They developed a technique to play these breaks over and over again.", ja: "彼らはこれらのブレイクを何度も繰り返して演奏する技術を開発した。" },
        { en: "This allowed dancers, called \"breakdancers,\" to show off their skills for longer periods.", ja: "これにより、「ブレイクダンサー」と呼ばれるダンサーたちは、より長い時間彼らのスキルを見せびらかすことができた。" },
        { en: "Soon, people known as MCs began speaking in rhythm over the music to encourage the crowd.", ja: "やがて、MCとして知られる人々が群衆を盛り上げるために音楽に合わせてリズムに乗って話し始めた。" },
        { en: "This style of speaking eventually turned into what we now know as rapping.", ja: "この話すスタイルは、最終的に私たちが今ラップとして知っているものに変わった。" },
        { en: "In the 1980s, the music changed as it became a business.", ja: "1980年代になると、音楽がビジネスになるにつれて変化した。" },
        { en: "Musicians began using drum machines and computers instead of just turntables.", ja: "ミュージシャンたちは、単なるターンテーブルの代わりにドラムマシンやコンピュータを使い始めた。" },
        { en: "This technology allowed them to create complex beats that were louder and clearer for radio play.", ja: "この技術により、彼らはラジオ放送向けにより大きくクリアな複雑なビートを作ることができた。" },
        { en: "As the genre grew, artists started writing lyrics about serious social issues and city life.", ja: "ジャンルが成長するにつれて、アーティストたちは深刻な社会問題や都市生活についての歌詞を書き始めた。" },
        { en: "This shift helped hip-hop move from local parties to a worldwide audience, influencing people far beyond New York.", ja: "この変化は、ヒップホップが地元のパーティーから世界中の聴衆へと移行するのを助け、ニューヨークをはるかに超えた人々に影響を与えた。" },
        { en: "Today, hip-hop is one of the most popular music styles in the world.", ja: "今日、ヒップホップは世界で最も人気のある音楽スタイルの一つである。" },
        { en: "It has influenced fashion, language, and art globally.", ja: "それは世界的にファッション、言語、芸術に影響を与えてきた。" },
        { en: "Moreover, just like the blues music that came before it, hip-hop remains a powerful tool for storytelling.", ja: "さらに、その前にあったブルース音楽と同じように、ヒップホップは依然として物語を語るための強力なツールである。" },
        { en: "It allows artists to share their personal struggles and successes, connecting with listeners who face similar challenges in their own lives.", ja: "それはアーティストが個人的な苦闘や成功を共有することを可能にし、自身の生活で同様の課題に直面しているリスナーとつながる。" },
        { en: "Whether in a small town or a big city, the message of hip-hop continues to inspire people to express themselves.", ja: "小さな町であろうと大都市であろうと、ヒップホップのメッセージは人々が自分自身を表現するように鼓舞し続けている。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Blues (2024-2)

### 1. 量的構造
- **総単語数:** ~310 words (Target 350-400 slightly adjusted to match source density)
- **パラグラフ構成:**
  1. **起源と目的:** 1970年代NY、貧困の中での創造、楽しさとポジティブさの追求。
  2. **技術とスタイル:** DJの役割、「ブレイク」の発見と反復、MC（ラップ）の誕生。
  3. **進化と拡大:** 1980年代のビジネス化、新技術（ドラムマシン）の導入、社会派リリックへの変化。
  4. **現代の影響:** 世界的普及、ファッション・アートへの影響、ブルースとの共通点（ストーリーテリング）。

### 2. 重要語彙
- **instrument:** 楽器
- **community:** コミュニティ
- **technique:** 技術
- **encourage:** 励ます、盛り上げる
- **shift:** 変化、移行
- **influence:** 影響（を与える）
- **struggle:** 苦闘`,
      summary: `## 講師用：本文要約 (Instructor Summary)

ヒップホップの歴史は、ブルースの歴史と多くの共通点を持っています。貧しい環境から生まれ、工夫（楽器の代わりにレコードを使う）によって独自のスタイルを確立し、技術の進化（ドラムマシン）と共に世界へ広がりました。

### 1. Origins in the Bronx (第1段落)
ヒップホップは1970年代のニューヨークで、楽器を買えない若者たちがレコードプレーヤーを使って新しい音を作ったことから始まりました。厳しい現実の中で、コミュニティを楽しませる前向きな手段でした。

### 2. The DJ and the Break (第2段落)
初期の重要人物はDJでした。彼らは曲の間奏（ドラム部分＝ブレイク）を繰り返す技術を生み出し、ダンサー（ブレイクダンサー）が踊れる時間を長くしました。そこから観客を盛り上げるMC（後のラッパー）が生まれました。

### 3. Growth and Technology (第3段落)
80年代に入るとビジネス化が進み、ターンテーブルからドラムマシンやコンピュータへと技術が移行しました。これにより、ラジオ向けのクリアな音が作れるようになり、歌詞も社会的なメッセージを含むようになりました。

### 4. Global Influence (第4段落)
今やヒップホップは世界的な文化です。ブルースと同様に、個人の苦しみや成功を語る「ストーリーテリング」の道具として、多くの人々に影響を与え続けています。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Blues (過去問) | The Rise of Hip-Hop (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | ブルースの歴史と進化 | ヒップホップの歴史と進化 | マイノリティ発祥の音楽文化、困難からの創造 |
| **構造** | 1. 起源（南部・困難・希望）<br>2. 初期スタイル（デルタ・道具・C&R）<br>3. 移住と変化（シカゴ・電気ギター）<br>4. 影響（ロック/ラップへの継承） | 1. 起源（NY・貧困・楽しさ）<br>2. 初期スタイル（DJ・ブレイク・MC）<br>3. ビジネスと変化（ラジオ・ドラムマシン）<br>4. 影響（世界・ブルースとの共通点） | 起源→技術的特徴→環境変化による進化→現代への影響という構成が一致 |
| **設問1** | 作成の理由（困難の中で諦めない/表現） | 作成の理由（楽しむ/コミュニティ支援） | 第1段落の「動機・目的」を問う |
| **設問2** | デルタブルースの特徴（観客参加） | 初期のDJの技術（ブレイクの反復） | 第2段落の「具体的な演奏スタイル・技術」を問う |
| **設問3** | エレキギター採用の理由（騒音対策） | 80年代の変化の理由（ラジオ適合/技術） | 第3段落の「技術的変化の背景・理由」を問う |
| **設問4** | ラップとの共通点（感情・経験の吐露） | ブルースとの共通点（物語・経験の共有） | 第4段落の「ジャンル間の共通項」を問う |
| **設問5** | 内容一致（移動と共に発展した） | 内容一致（MCは元々応援のために話した） | 本文全体の流れまたは特定パラグラフの事実確認 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Blues (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Geographic Migration (地理的移動)
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「農場から都市へ」の移動が音楽スタイル（アコースティックからエレクトリック）を変えた点に焦点。

* **The Rise of Hip-Hop (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Technological Evolution (技術的進化)
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「ライブパーティからラジオビジネスへ」の移行が制作手段（ターンテーブルからドラムマシン）を変えた点に焦点。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 両者とも音楽が生まれた「精神的な理由（Purpose）」を問う。
* **Q2:** 過去問は「Call and Response」の社会的側面。オリジナルは「Looping Breaks」の機能的側面。
* **Q3:** 過去問は「環境（騒音）への適応」。オリジナルは「メディア（ラジオ）への適応」。
* **Q4:** 過去問は「Blues → Rap」の影響。オリジナルは「Hip-hop ← Blues」の類似性。
* **Q5:** 細部の事実確認。`,
      syntax: `
    ## 4. 正解の根拠となるセンテンスの構文解析

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
    <blockquote>While the music often reflected the hard reality of their lives, it <b>was</b> primarily a way to have fun and stay positive.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>譲歩節 (While):</b> While the music often reflected the hard reality... (～だったが)</li>
        <li><b>主節:</b> it was primarily a way to have fun and stay positive.</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"primarily"（主として）が強調されています。「生活は厳しかったが、目的は楽しむことだった」という文脈が、選択肢3の "find a way to enjoy themselves..." につながります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
    <blockquote>They <b>developed</b> a technique to play these breaks over and over again.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> They (DJs)</li>
        <li><b>動詞 (V):</b> developed</li>
        <li><b>目的語 (O):</b> a technique</li>
        <li><b>不定詞 (M):</b> to play these breaks over and over again (techniqueを修飾)</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"over and over again"（何度も繰り返して）がポイントです。これが選択肢1の "played the drum sections of songs repeatedly" と一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
    <blockquote>This technology <b>allowed</b> them to create complex beats that were louder and clearer for radio play.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> This technology</li>
        <li><b>動詞 (V):</b> allowed</li>
        <li><b>目的語 (O):</b> them</li>
        <li><b>不定詞 (C):</b> to create complex beats</li>
        <li><b>関係代名詞節:</b> that were louder and clearer for radio play (beatsを修飾)</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"allow O to do" の構文。「ラジオ放送のために（for radio play）」という目的が明示されており、選択肢2の "make music suitable for the radio" の根拠となります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
    <blockquote>Moreover, just like the blues music that came before it, hip-hop <b>remains</b> a powerful tool for storytelling.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>接続詞的副詞:</b> Moreover (さらに)</li>
        <li><b>挿入句:</b> just like the blues music that came before it (以前のブルース音楽とちょうど同じように)</li>
        <li><b>主節:</b> hip-hop remains a powerful tool for storytelling.</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"just like..." で類似性を示しています。「物語を語るためのツール（storytelling）」であり、続く文の "share their personal struggles" と合わせて、選択肢3の "telling stories about personal feelings..." が正解となります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
    <blockquote>Soon, people known as MCs <b>began speaking</b> in rhythm over the music to encourage the crowd.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> people known as MCs</li>
        <li><b>動詞 (V):</b> began speaking</li>
        <li><b>修飾語 (M):</b> in rhythm over the music</li>
        <li><b>目的 (To不定詞):</b> to encourage the crowd</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>不定詞の副詞的用法（目的）です。「群衆を盛り上げるために（to encourage the crowd）」話し始めたという記述が、選択肢3の "MCs originally started speaking to encourage the crowd to dance"（danceは文脈上の含意）を支持します。</p>
    </div>
    `
    }
  },
  "2024-2": {
    past: {
      title: "Community Gardens in Urban Areas",
      content: `## Title: Community Gardens in Urban Areas\n\nIn many large cities around the world, people are finding new ways to connect with nature. One popular method is the creation of community gardens. These are small pieces of land where local residents can grow their own vegetables and flowers. In the past, many city dwellers had no choice but to buy all their produce from supermarkets. However, the rise of community gardens has allowed them to experience the joy of gardening while improving their local environment. These spaces often transform abandoned lots into beautiful green areas that the whole neighborhood can enjoy.\n\nManaging a community garden requires a great deal of cooperation among participants. Most gardens are run by volunteers who share the work of planting, watering, and weeding. Decisions about what to grow or how to spend garden funds are usually made during monthly meetings. This collaborative process helps to build a sense of community among neighbors who might not otherwise speak to one another. Furthermore, some gardens organize educational workshops for children to teach them about where their food comes from.\n\nThere are also significant environmental benefits associated with community gardening. By growing food locally, the need for long-distance transportation is reduced, which helps lower carbon emissions. Additionally, these gardens provide a habitat for bees and butterflies, which are essential for the health of the planet. Many community gardeners also practice organic farming techniques, such as using compost instead of chemical fertilizers. This keeps the soil healthy and prevents harmful chemicals from entering the city's water system.\n\nDespite their many advantages, community gardens face several challenges. The most pressing issue is the rising cost of land in urban centers. As cities grow, developers often want to use garden spaces for new apartment buildings or offices. Without official protection from the local government, these gardens can disappear overnight. To prevent this, many gardening groups are working with city officials to secure long-term leases. By doing so, they hope to ensure that future generations can continue to enjoy the benefits of urban gardening.\n\nCommunity gardens play a vital role in modern city life. They provide fresh food, foster social connections, and protect the environment. Although the threat of urban development remains, the dedication of volunteers and the support of local communities are helping these green spaces survive. As long as people value the connection between nature and the community, these gardens will likely remain a key feature of urban landscapes.`,
      questions: `### Questions\n\n**(27) What is one reason why community gardens have become popular in cities?**\n1. They allow people to buy cheaper vegetables from supermarkets.\n2. They provide a way for residents to grow plants and improve their surroundings.\n3. they help city dwellers find jobs in the agricultural industry.\n4. They are the only places where residents can see flowers.\n\n**(28) How are most community gardens managed?**\n1. By professional farmers who are hired by the city.\n2. Through a process where volunteers work together and make decisions.\n3. By individual residents who own their own private plots of land.\n4. Through instructions provided by local supermarkets.\n\n**(29) One environmental advantage of community gardens is that they**\n1. reduce the distance that food needs to be moved.\n2. increase the use of chemical fertilizers in the city.\n3. help to clean the city's water system using machines.\n4. eliminate the need for bees and butterflies in urban areas.\n\n**(30) What is a major problem for community gardens today?**\n1. A lack of interest among the younger generation.\n2. The high cost of buying organic compost.\n3. The risk of losing land to new construction projects.\n4. Difficulties in finding enough water for the plants.\n\n**(31) Which of the following is true about community gardens?**\n1. They are primarily used to build new apartments.\n2. They are disappearing because they have no social benefits.\n3. They help to strengthen relationships between people living in the same area.\n4. They are run by city officials who do all the gardening work.\n\n---\n**Answer Key:** (27) 2, (28) 2, (29) 1, (30) 3, (31) 3`,
      translations: [
        { en: "In many large cities around the world, people are finding new ways to connect with nature.", ja: "世界中の多くの大都市で、人々は自然とつながる新しい方法を見つけています。" },
        { en: "One popular method is the creation of community gardens.", ja: "一つの人気のある方法は、コミュニティガーデンの作成です。" },
        { en: "These are small pieces of land where local residents can grow their own vegetables and flowers.", ja: "これらは、地域住民が自分たちの野菜や花を育てることができる小さな土地です。" },
        { en: "In the past, many city dwellers had no choice but to buy all their produce from supermarkets.", ja: "昔は、多くの都会の居住者はすべての農産物をスーパーマーケットで買うしかありませんでした。" },
        { en: "However, the rise of community gardens has allowed them to experience the joy of gardening while improving their local environment.", ja: "しかし、コミュニティガーデンの台頭により、彼らは地域の環境を改善しながらガーデニングの楽しさを経験できるようになりました。" },
        { en: "These spaces often transform abandoned lots into beautiful green areas that the whole neighborhood can enjoy.", ja: "これらのスペースは、しばしば放置された区画を近隣全体が楽しめる美しい緑地に変えます。" },
        { en: "Managing a community garden requires a great deal of cooperation among participants.", ja: "コミュニティガーデンを管理するには、参加者間の多大な協力が必要です。" },
        { en: "Most gardens are run by volunteers who share the work of planting, watering, and weeding.", ja: "ほとんどの庭は、植え付け、水やり、草むしりの作業を分担するボランティアによって運営されています。" },
        { en: "Decisions about what to grow or how to spend garden funds are usually made during monthly meetings.", ja: "何を育てるかや庭の資金をどのように使うかについての決定は、通常、毎月の会議で行われます。" },
        { en: "This collaborative process helps to build a sense of community among neighbors who might not otherwise speak to one another.", ja: "この協力的なプロセスは、そうでなければお互いに話をしないかもしれない近隣住民の間にコミュニティの感覚を築くのに役立ちます。" },
        { en: "Furthermore, some gardens organize educational workshops for children to teach them about where their food comes from.", ja: "さらに、一部の庭では、食べ物がどこから来るのかを子供たちに教えるための教育ワークショップを開催しています。" },
        { en: "There are also significant environmental benefits associated with community gardening.", ja: "コミュニティガーデニングに関連する重要な環境上の利点もあります。" },
        { en: "By growing food locally, the need for long-distance transportation is reduced, which helps lower carbon emissions.", ja: "地元で食べ物を育てることで、長距離輸送の必要性が減り、二酸化炭素排出量の削減に役立ちます。" },
        { en: "Additionally, these gardens provide a habitat for bees and butterflies, which are essential for the health of the planet.", ja: "さらに、これらの庭は、地球の健康に不可欠なミツバチやチョウの生息地を提供します。" },
        { en: "Many community gardeners also practice organic farming techniques, such as using compost instead of chemical fertilizers.", ja: "多くのコミュニティガーデナーは、化学肥料の代わりに堆肥を使用するなど、有機農業の技術も実践しています。" },
        { en: "This keeps the soil healthy and prevents harmful chemicals from entering the city's water system.", ja: "これにより土壌が健康に保たれ、有害な化学物質が市の水道システムに入るのを防ぎます。" },
        { en: "Despite their many advantages, community gardens face several challenges.", ja: "多くの利点があるにもかかわらず、コミュニティガーデンはいくつかの課題に直面しています。" },
        { en: "The most pressing issue is the rising cost of land in urban centers.", ja: "最も差し迫った問題は、都市中心部における地価の上昇です。" },
        { en: "As cities grow, developers often want to use garden spaces for new apartment buildings or offices.", ja: "都市が成長するにつれて、開発者はしばしば庭のスペースを新しいマンションやオフィスに使用したいと考えます。" },
        { en: "Without official protection from the local government, these gardens can disappear overnight.", ja: "地方自治体からの公式な保護がなければ、これらの庭は一晩で消えてしまう可能性があります。" },
        { en: "To prevent this, many gardening groups are working with city officials to secure long-term leases.", ja: "これを防ぐために、多くのガーデニング団体は長期リースを確保するために市当局と協力しています。" },
        { en: "By doing so, they hope to ensure that future generations can continue to enjoy the benefits of urban gardening.", ja: "そうすることで、将来の世代が都市ガーデニングの利点を享受し続けられるようにしたいと考えています。" },
        { en: "Community gardens play a vital role in modern city life.", ja: "コミュニティガーデンは、現代の都市生活において重要な役割を果たしています。" },
        { en: "They provide fresh food, foster social connections, and protect the environment.", ja: "それらは新鮮な食品を提供し、社会的つながりを育み、環境を保護します。" },
        { en: "Although the threat of urban development remains, the dedication of volunteers and the support of local communities are helping these green spaces survive.", ja: "都市開発の脅威は残っていますが、ボランティアの献身と地域コミュニティの支援が、これらの緑地が存続するのを助けています。" },
        { en: "As long as people value the connection between nature and the community, these gardens will likely remain a key feature of urban landscapes.", ja: "人々が自然とコミュニティのつながりを大切にする限り、これらの庭は今後も都市景観の主要な特徴であり続けるでしょう。" }
      ]
    },
    original: {
      title: "The Rise of Vertical Farming",
      content: `## Title: The Rise of Vertical Farming\n\nTraditional agriculture has always depended on large areas of flat land and favorable weather conditions. However, as the global population continues to grow, finding enough space to produce food is becoming increasingly difficult. To solve this problem, a new method called vertical farming has gained attention. This involves growing crops in layers stacked one above the other, often inside tall buildings. By using this method, farmers can produce a large amount of food in small urban spaces, reducing the need for traditional farmland outside of cities.\n\nVertical farming relies heavily on advanced technology to create the perfect environment for plants. Instead of using natural sunlight, these farms use LED lights that provide the exact colors of light needed for growth. Additionally, the temperature and humidity are carefully controlled by computers to ensure that crops can be harvested all year round. Because the environment is kept inside a closed building, there is no need to worry about pests or bad weather. This allows farmers to grow high-quality vegetables without using any harmful chemical pesticides.\n\nOne of the most significant advantages of vertical farming is its efficient use of natural resources. For instance, many vertical farms use a system where water is recycled and reused constantly. As a result, they use about 95 percent less water than traditional outdoor farms. Furthermore, since these buildings are located in or near major cities, the food does not have to be transported over long distances. This significantly reduces the amount of fuel used for delivery and ensures that consumers receive the freshest possible products soon after they are picked.\n\nDespite its potential, vertical farming still faces some economic obstacles. The biggest challenge is the high cost of electricity required to run the lights and climate control systems. In some cases, the energy needed to grow vegetables indoors is much more expensive than the cost of growing them in a field. Some experts also point out that only a limited variety of crops, such as leafy greens and herbs, are currently profitable to grow this way. Nevertheless, researchers are working on ways to lower energy costs and expand the types of food that can be produced.\n\nVertical farming offers a promising solution to the food challenges of the future. While the initial costs are high, the benefits of saving water and producing food locally are very clear. As technology improves and becomes more affordable, it is likely that more cities will adopt this innovative method. By combining technology with agriculture, vertical farming could help provide a stable food supply for the world's growing urban population.`,
      questions: `### Original Questions\n\n**(1) Why has vertical farming become an important topic recently?**\n1. Because traditional farmers want to move their farms into tall buildings.\n2. Because it is getting harder to find enough land to feed the growing population.\n3. Because weather conditions around the world have become perfect for farming.\n4. Because people prefer to eat food that is grown in layers.\n\n**(2) What is one way that vertical farming differs from traditional farming?**\n1. It uses LED lights and controlled environments instead of sunlight and open fields.\n2. It requires farmers to use more pesticides to keep the crops healthy.\n3. It depends on natural rain to provide water for the plants.\n4. It can only produce crops during certain seasons of the year.\n\n**(3) What is mentioned as a benefit of vertical farming's resource use?**\n1. It allows farmers to use more fuel when delivering food to cities.\n2. it requires less water because the water is used multiple times.\n3. It helps traditional outdoor farms find better ways to use soil.\n4. It encourages consumers to travel longer distances to buy fresh food.\n\n**(4) What is a current disadvantage of vertical farming mentioned in the text?**\n1. It is difficult to find enough people who want to work in tall buildings.\n2. Most researchers believe that vertical farming will never be successful.\n3. The energy needed to operate the farms can be very costly.\n4. It is impossible to grow any herbs or leafy greens using this method.\n\n**(5) Which of the following statements is true about vertical farming?**\n1. It is already the most common way to grow food in every country.\n2. It uses the same amount of water as traditional agriculture.\n3. It could help provide a steady supply of food to people in cities.\n4. It has completely replaced the need for researchers in the food industry.\n\n---\n**Answer Key:** (1) 2, (2) 1, (3) 2, (4) 3, (5) 3`,
      translations: [
        { en: "Traditional agriculture has always depended on large areas of flat land and favorable weather conditions.", ja: "従来の農業は、常に広大な平地と良好な天候条件に依存してきました。" },
        { en: "However, as the global population continues to grow, finding enough space to produce food is becoming increasingly difficult.", ja: "しかし、世界人口が増え続けるにつれて、食料を生産するための十分なスペースを見つけることはますます困難になっています。" },
        { en: "To solve this problem, a new method called vertical farming has gained attention.", ja: "この問題を解決するために、垂直農業と呼ばれる新しい方法が注目を集めています。" },
        { en: "This involves growing crops in layers stacked one above the other, often inside tall buildings.", ja: "これには、しばしば高層ビルの中で、作物を積み重ねられた層で育てることが含まれます。" },
        { en: "By using this method, farmers can produce a large amount of food in small urban spaces, reducing the need for traditional farmland outside of cities.", ja: "この方法を使用することで、農家は都市の狭いスペースで大量の食料を生産でき、都市の外にある従来の農地の必要性を減らすことができます。" },
        { en: "Vertical farming relies heavily on advanced technology to create the perfect environment for plants.", ja: "垂直農業は、植物にとって完璧な環境を作り出すために高度な技術に大きく依存しています。" },
        { en: "Instead of using natural sunlight, these farms use LED lights that provide the exact colors of light needed for growth.", ja: "自然光を使う代わりに、これらの農場は成長に必要な正確な色の光を提供するLEDライトを使用します。" },
        { en: "Additionally, the temperature and humidity are carefully controlled by computers to ensure that crops can be harvested all year round.", ja: "さらに、作物が一年中収穫できることを確実にするために、温度と湿度はコンピュータによって注意深く制御されています。" },
        { en: "Because the environment is kept inside a closed building, there is no need to worry about pests or bad weather.", ja: "環境が密閉された建物の中に保たれているため、害虫や悪天候を心配する必要はありません。" },
        { en: "This allows farmers to grow high-quality vegetables without using any harmful chemical pesticides.", ja: "これにより、農家は有害な化学農薬を使用することなく、高品質の野菜を育てることができます。" },
        { en: "One of the most significant advantages of vertical farming is its efficient use of natural resources.", ja: "垂直農業の最も重要な利点の一つは、天然資源の効率的な利用です。" },
        { en: "For instance, many vertical farms use a system where water is recycled and reused constantly.", ja: "例えば、多くの垂直農場では、水が常にリサイクルされ再利用されるシステムを使用しています。" },
        { en: "As a result, they use about 95 percent less water than traditional outdoor farms.", ja: "その結果、従来の屋外農場よりも水の使用量が約95パーセント少なくなっています。" },
        { en: "Furthermore, since these buildings are located in or near major cities, the food does not have to be transported over long distances.", ja: "さらに、これらの建物は主要都市の中またはその近くに位置しているため、食品を長距離輸送する必要がありません。" },
        { en: "This significantly reduces the amount of fuel used for delivery and ensures that consumers receive the freshest possible products soon after they are picked.", ja: "これにより、配送に使用される燃料の量が大幅に削減され、消費者が収穫後すぐに可能な限り新鮮な製品を受け取ることが保証されます。" },
        { en: "Despite its potential, vertical farming still faces some economic obstacles.", ja: "その可能性があるにもかかわらず、垂直農業は依然としていくつかの経済的な障害に直面しています。" },
        { en: "The biggest challenge is the high cost of electricity required to run the lights and climate control systems.", ja: "最大の課題は、照明や気候制御システムを稼働させるために必要な電気代が高いことです。" },
        { en: "In some cases, the energy needed to grow vegetables indoors is much more expensive than the cost of growing them in a field.", ja: "場合によっては、屋内で野菜を育てるために必要なエネルギーは、畑で育てるコストよりもはるかに高くなります。" },
        { en: "Some experts also point out that only a limited variety of crops, such as leafy greens and herbs, are currently profitable to grow this way.", ja: "一部の専門家はまた、現在この方法で育てて利益が出るのは、葉物野菜やハーブなど、限られた種類の作物だけであると指摘しています。" },
        { en: "Nevertheless, researchers are working on ways to lower energy costs and expand the types of food that can be produced.", ja: "それにもかかわらず、研究者たちはエネルギーコストを下げ、生産できる食品の種類を増やす方法に取り組んでいます。" },
        { en: "Vertical farming offers a promising solution to the food challenges of the future.", ja: "垂直農業は、将来の食料課題に対する有望な解決策を提供します。" },
        { en: "While the initial costs are high, the benefits of saving water and producing food locally are very clear.", ja: "初期費用は高いものの、節水や食品の地元生産といった利点は非常に明確です。" },
        { en: "As technology improves and becomes more affordable, it is likely that more cities will adopt this innovative method.", ja: "技術が向上し、より手頃な価格になるにつれて、より多くの都市がこの革新的な方法を採用する可能性があります。" },
        { en: "By combining technology with agriculture, vertical farming could help provide a stable food supply for the world's growing urban population.", ja: "技術と農業を組み合わせることで、垂直農業は世界の増え続ける都市人口に対して安定した食料供給を支援することができるでしょう。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)\n\n**ターゲットモデル:** Community Gardens in Urban Areas\n\n### 1. 量的構造\n- **総単語数:** ~345 words\n- **パラグラフ構成:**\n  1. 導入：従来の農業の限界と垂直農業の登場（背景・定義）\n  2. 技術面：LEDライトや環境制御、無農薬栽培の仕組み\n  3. 環境・資源面：節水効果と輸送距離の短縮（地産地消）\n  4. 課題：電気代（コスト）の問題と栽培可能な作物の限定\n  5. 結論：将来の展望と都市部への食料供給の可能性\n\n### 2. 重要語彙\n- agriculture (農業)\n- favorable (好都合な)\n- vertical (垂直の)\n- humidity (湿度)\n- pesticide (農薬)\n- efficient (効率的な)\n- obstacle (障害)\n- profitable (利益になる)`,
      summary: `## 講師用：本文要約 (Instructor Summary)\n\n人口増加に伴う農地不足の解決策として、ビル内で作物を育てる「垂直農業」が注目されています。最新技術を用いて資源を節約しつつ、都市部で新鮮な野菜を安定供給できる可能性を秘めていますが、高い電気代などのコスト面が現在の課題となっています。\n\n### 1. 垂直農業の登場 (第1段落)\n人口増加により従来の平地での農業が難しくなる中、都市のビル内で多層的に栽培する垂直農業が注目されている。\n\n### 2. 技術による環境制御 (第2段落)\nLEDライトやコンピュータ制御により、天候や害虫の影響を受けず、一年中無農薬で高品質な栽培が可能となる。\n\n### 3. 資源の効率利用 (第3段落)\n水の再利用により95%の節水を実現し、都市近郊での生産により輸送燃料を削減、新鮮な食材を提供できる。\n\n### 4. 経済的な課題 (第4段落)\n電気代の高さが最大の難点であり、現在は葉物野菜など一部の作物に限定されているが、改善に向けた研究が進んでいる。\n\n---\n講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)\n\n| 項目 | Community Gardens (過去問) | Vertical Farming (オリジナル) | 共通点 (Commonality) |\n| :--- | :--- | :--- | :--- |\n| **テーマ** | 都市ガーデニング（コミュニティ） | 垂直農業（テクノロジー/持続可能性） | 都市部での食料生産と環境保護 |\n| **構造** | 導入・管理・利点・課題・結論 | 導入・技術・利点・課題・結論 | 4段落構成+結論の論理展開 |\n| **設問1** | 普及の理由（場所/環境） | 注目される理由（人口/土地不足） | なぜその手法が必要かを聞く |\n| **設問2** | 管理方法（ボランティア協力） | 技術的特徴（LED/制御環境） | 具体的な運用・仕組みを問う |\n| **設問3** | 環境利点（輸送/生物多様性） | 資源利点（節水/輸送削減） | 環境へのポジティブな影響 |\n| **設問4** | 課題（地価/開発） | 課題（電気代/作物制限） | 継続を妨げるマイナス要因 |\n| **設問5** | 全体真偽（人間関係の強化） | 全体真偽（都市への安定供給） | 社会的意義・最終結論の確認 |\n\n<br/>\n\n### 1. トピックと展開の相違 (Topic Differences)\n\n* **Community Gardens (過去問):**\n    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 市民の交流や地域美化に焦点を当てたコミュニティ活動。\n    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> ボランティアの協力体制や教育的側面が強い。\n\n* **Vertical Farming (オリジナル):**\n   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> テクノロジーを活用した食料問題の解決策（産業的側面）。\n    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 効率性、データ制御、エネルギーコストに焦点。\n\n<br/>\n\n### 2. 設問設計の比較 (Question Design)\n\n* **Q1 (内容一致 - Para 1):**\n    * **過去問:** "improve their local environment" (地域の環境改善)\n    * **Original:** "finding enough space... is becoming increasingly difficult" (土地不足の深刻化)\n* **Q2 (内容一致 - Para 2):**\n    * **過去問:** "cooperation among participants" (参加者間の協力)\n    * **Original:** "Instead of using natural sunlight... use LED lights" (自然光の代わりのLED)\n* **Q3 (内容一致 - Para 3):**\n    * **過去問:** "need for long-distance transportation is reduced" (輸送削減)\n    * **Original:** "use about 95 percent less water" (大幅な節水)\n* **Q4 (内容一致 - Para 4):**\n    * **過去問:** "rising cost of land" (地価の上昇)\n    * **Original:** "high cost of electricity" (高い電気代)\n* **Q5 (内容一致 - Conclusion):**\n    * **過去問:** "build a sense of community" (コミュニティの醸成)\n    * **Original:** "help provide a stable food supply" (安定した食料供給)`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>However, as the global population continues to grow, finding enough space to produce food <b>is becoming</b> increasingly difficult.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> finding enough space to produce food (動名詞句)</li>
    <li><b>動詞 (V):</b> is becoming</li>
    <li><b>目的語/補語 (C):</b> increasingly difficult</li>
    <li><b>修飾語 (M):</b> なし</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>動名詞句 "finding..." が大きな主語になっています。「十分なスペースを見つけること」が困難になっているという因果関係が、垂直農業が注目される理由（選択肢2）と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>Instead of using natural sunlight, these farms <b>use</b> LED lights that provide the exact colors of light needed for growth.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> these farms</li>
    <li><b>動詞 (V):</b> use</li>
    <li><b>目的語 (O):</b> LED lights</li>
    <li><b>修飾語 (M):</b> Instead of using natural sunlight (前置詞句) / that provide... (関係代名詞節)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"Instead of" (～の代わりに) を使って、従来の農業との対比を明確にしています。これが選択肢1の「日光の代わりにLEDを使う」という内容の根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>As a result, they <b>use</b> about 95 percent less water than traditional outdoor farms.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> they (vertical farms)</li>
    <li><b>動詞 (V):</b> use</li>
    <li><b>目的語 (O):</b> about 95 percent less water</li>
    <li><b>修飾語 (M):</b> As a result / than traditional outdoor farms (比較対象)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"less A than B" の比較構造です。直前の「水を再利用する」という記述と繋がり、節水というメリット（選択肢2）を説明しています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>The biggest challenge <b>is</b> the high cost of electricity required to run the lights and climate control systems.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> The biggest challenge</li>
    <li><b>動詞 (V):</b> is</li>
    <li><b>目的語/補語 (C):</b> the high cost of electricity</li>
    <li><b>修飾語 (M):</b> required to run the lights... (過去分詞句による修飾)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"required" 以降が "electricity" を修飾しています。何にコストがかかるのかを具体的に示しており、選択肢3の根拠となります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall/Conclusion)</h3>
<blockquote>By combining technology with agriculture, vertical farming <b>could help provide</b> a stable food supply for the world's growing urban population.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> vertical farming</li>
    <li><b>動詞 (V):</b> could help provide</li>
    <li><b>目的語 (O):</b> a stable food supply</li>
    <li><b>修飾語 (M):</b> for the world's growing urban population</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"help (to) do" (～するのに役立つ) という形です。最終的な社会的メリットをまとめており、選択肢3の「都市への安定供給」という内容と合致しています。</p>
</div>`
    }
  },
  "2024-3": {
    past: {
      title: "Bonobos",
      content: `## Title: Bonobos

Bonobos are animals that look similar to monkeys and chimpanzees. Not many people know about bonobos because they do not live in many different areas. They live in just one area of the Democratic Republic of the Congo, in the middle of Africa. If people find out that they have something in common with them, they might feel more connected to them.

Many people probably believe that humans are the only animal that is capable of caring about others. However, this is not the case. In one study, two bonobos were placed in rooms separated by a fence. An apple was hung from the top of one room, and only the bonobo in the other room could reach and release the apple by climbing the fence. Even though they did not get any apples or reward themselves for helping others, the bonobos often dropped the apple when there was another bonobo in the other room. Surprisingly, these bonobos were strangers to each other.

In a different test, bonobos watched two videos. In one video, their family members were yawning, the act of opening their mouths when they were sleepy. When bonobos watched their family members yawn, they were also likely to yawn themselves. Another video showed strangers yawning. The bonobos who watched this video yawned as much as when they watched their families yawn. In a similar setting, humans were more likely to yawn after seeing their friends or family members yawn than after seeing strangers yawn. This suggests that bonobos' ability to feel one another's feelings is more widespread than that of humans.

Bonobos' ability to care about others is probably due to the group structure that they live in. This becomes clear when we look at chimpanzees. Bonobos live in large groups where there is no clear leadership. However, there is a distinct power structure within a chimpanzee group, and a large, strong male takes on a leadership role. Because of this, they have less reason to be friendly. Bonobos, however, live in peace and work together more because of how their groups are set up, while chimpanzees are more unfriendly.`,
      questions: `### Questions

**(27) Why do many people not know much about bonobos?**
1. The country where they live does not make much effort to protect them.
2. They are not as friendly as animals such as monkeys or chimpanzees.
3. They avoid contact with humans as much as possible to protect their babies.
4. The location where they live is only in a certain area of Africa.

**(28) In one study,**
1. bonobos were seen to help other bonobos without getting a reward.
2. bonobos were required to push a button on the wall to get a piece of fruit.
3. some bonobos were able to jump out of the cage after getting some fruit.
4. researchers decided that bonobos and chimpanzees were very similar.

**(29) In a study about yawning, researchers found**
1. bonobos copied what people did instead of copying other bonobos.
2. bonobos could feel others' feelings even more than humans.
3. most bonobos did not yawn when they were feeling tired.
4. yawning was more common for younger bonobos than for older ones.

**(30) Chimpanzees**
1. organize their groups in the same way that bonobo groups organize themselves.
2. tend to be less friendly because there is a strong leader among them.
3. form a larger group than bonobos to maintain strong connections between individuals.
4. move from one place to another to find a better living environment.

**(31) Which of the following statements is true?**
1. Bonobos almost never yawn when they are with bonobos from other families.
2. All experiments involving bonobos were conducted by the Democratic Republic of the Congo.
3. Bonobos live peacefully in groups that have no strong leaders.
4. Chimpanzees help others even when such actions will not benefit themselves.

---
**Answer Key:** (27) 4, (28) 1, (29) 2, (30) 2, (31) 3`,
      translations: [
        { en: "Bonobos are animals that look similar to monkeys and chimpanzees.", ja: "ボノボは、サルやチンパンジーに似た外見の動物である。" },
        { en: "Not many people know about bonobos because they do not live in many different areas.", ja: "多くの異なる地域に住んでいるわけではないため、ボノボについて知っている人は多くない。" },
        { en: "They live in just one area of the Democratic Republic of the Congo, in the middle of Africa.", ja: "彼らはアフリカ中央部のコンゴ民主共和国のたった一つの地域に住んでいる。" },
        { en: "If people find out that they have something in common with them, they might feel more connected to them.", ja: "もし人々が彼らと共通点があることを知れば、彼らにもっと親しみを感じるかもしれない。" },
        { en: "Many people probably believe that humans are the only animal that is capable of caring about others.", ja: "多くの人々は、おそらく人間だけが他者を思いやることができる動物だと信じている。" },
        { en: "However, this is not the case.", ja: "しかし、事実はそうではない。" },
        { en: "In one study, two bonobos were placed in rooms separated by a fence.", ja: "ある研究で、2頭のボノボがフェンスで仕切られた部屋に入れられた。" },
        { en: "An apple was hung from the top of one room, and only the bonobo in the other room could reach and release the apple by climbing the fence.", ja: "一方の部屋の上部からリンゴが吊るされ、もう一方の部屋にいるボノボだけがフェンスを登ってそのリンゴに手が届き、落とすことができた。" },
        { en: "Even though they did not get any apples or reward themselves for helping others, the bonobos often dropped the apple when there was another bonobo in the other room.", ja: "他者を助けることで自分自身はリンゴも報酬も得られないにもかかわらず、もう一方の部屋に別のボノボがいるとき、そのボノボはしばしばリンゴを落とした。" },
        { en: "Surprisingly, these bonobos were strangers to each other.", ja: "驚いたことに、これらのボノボはお互いに見知らぬ同士だった。" },
        { en: "In a different test, bonobos watched two videos.", ja: "別のテストでは、ボノボは2つのビデオを見た。" },
        { en: "In one video, their family members were yawning, the act of opening their mouths when they were sleepy.", ja: "一つのビデオでは、彼らの家族が眠い時に口を開ける行動である「あくび」をしていた。" },
        { en: "When bonobos watched their family members yawn, they were also likely to yawn themselves.", ja: "家族があくびをするのを見たとき、ボノボ自身もあくびをする傾向があった。" },
        { en: "Another video showed strangers yawning.", ja: "もう一つのビデオは、見知らぬ他者があくびをしている様子を見せた。" },
        { en: "The bonobos who watched this video yawned as much as when they watched their families yawn.", ja: "このビデオを見たボノボは、家族があくびをするのを見たときと同じくらいあくびをした。" },
        { en: "In a similar setting, humans were more likely to yawn after seeing their friends or family members yawn than after seeing strangers yawn.", ja: "同様の状況において、人間は見知らぬ人のあくびを見るよりも、友人や家族があくびをするのを見た後の方があくびをしやすい傾向があった。" },
        { en: "This suggests that bonobos' ability to feel one another's feelings is more widespread than that of humans.", ja: "これは、お互いの感情を感じ取るボノボの能力が、人間よりも広く及んでいることを示唆している。" },
        { en: "Bonobos' ability to care about others is probably due to the group structure that they live in.", ja: "ボノボが他者を思いやる能力は、おそらく彼らが住む集団構造によるものだろう。" },
        { en: "This becomes clear when we look at chimpanzees.", ja: "チンパンジーを見ると、このことが明らかになる。" },
        { en: "Bonobos live in large groups where there is no clear leadership.", ja: "ボノボは明確なリーダーシップのない大きな集団で生活している。" },
        { en: "However, there is a distinct power structure within a chimpanzee group, and a large, strong male takes on a leadership role.", ja: "しかし、チンパンジーの集団内にははっきりとした権力構造があり、大きく強いオスがリーダーシップの役割を担う。" },
        { en: "Because of this, they have less reason to be friendly.", ja: "このため、彼らには友好的である理由が少ない。" },
        { en: "Bonobos, however, live in peace and work together more because of how their groups are set up, while chimpanzees are more unfriendly.", ja: "しかしながら、ボノボは集団の成り立ちのおかげで平和に暮らし、より協力し合うが、一方でチンパンジーはより非友好的である。" }
      ]
    },
    original: {
      title: "Wolves and Dogs",
      content: `## Title: Wolves and Dogs

Dogs are known as "man's best friend," and they share a long history with humans. They originally came from wolves, so the two animals share many genes. Because dogs are friendly and live closely with people, many people assume that dogs are naturally better at cooperation than wolves. Wolves are often seen as wild and aggressive animals that fight with each other. However, recent research suggests that when it comes to working with their own kind, wolves may actually be more cooperative than dogs.

In one study conducted at a research center in Austria, scientists tested how well wolves and dogs could work together. They used a simple task involving a tray of food. To get the food, two animals had to pull two ends of a rope at the same time. If only one pulled, the rope would come loose, and the food would maximize stay out of reach. The results showed that wolves were very successful at this task. They waited for a partner and pulled the rope together. Dogs, on the other hand, often failed because they tried to get the food alone or did not wait for the other dog.

Another difference was found in how they shared food. In the wild, wolves hunt large animals like deer or moose as a team. After a successful hunt, they share the meat with the pack. Even the lower-ranking wolves are allowed to eat. In contrast, dogs have a stricter social hierarchy. In experiments where dogs were given food, the dominant dog usually ate everything and did not let the others come close. This suggests that wolves care more about fairness within their group.

The reason for these differences lies in how they evolved. When humans started living with dogs, humans became the leaders. Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs. Wolves, however, continued to live in the wild. They had to rely on each other to survive and raise their young. This forced them to maintain a high level of cooperation and teamwork that dogs no longer need.`,
      questions: `### Original Questions

**(1) What do many people often assume about dogs and wolves?**
1. Dogs are less intelligent than wolves because they live with humans.
2. Wolves are more friendly to humans than dogs are.
3. Dogs are better at working together than wolves are.
4. Wolves and dogs have completely different genes.

**(2) In the rope-pulling experiment, why were wolves successful?**
1. They were stronger than the dogs and could pull the heavy tray alone.
2. They coordinated their actions and pulled the rope at the same time.
3. They were given more food than the dogs as a reward.
4. They used their paws to hold the rope instead of their mouths.

**(3) How did the eating behavior of dogs differ from that of wolves?**
1. Dogs preferred to eat vegetables instead of meat.
2. Stronger dogs prevented other dogs from eating the food.
3. Dogs shared their food equally with every member of the group.
4. Dogs hid their food in the ground to eat it later.

**(4) According to the passage, why did dogs lose some of their cooperative skills?**
1. They began to rely on humans to lead them and provide food.
2. They started to live in smaller groups than wolves.
3. They became too aggressive to work with other animals.
4. They needed to compete with wolves for territory.

**(5) Which of the following statements is true?**
1. The research in Austria showed that dogs are better problem solvers than wolves.
2. Wolves have a strict hierarchy where only the leader is allowed to eat.
3. Domestication made dogs more independent and less reliant on others.
4. Wolves maintained their teamwork skills because they needed them to survive in the wild.

---
**Answer Key:** (1) 3, (2) 2, (3) 2, (4) 1, (5) 4`,
      translations: [
        { en: "Dogs are known as \"man's best friend,\" and they share a long history with humans.", ja: "犬は「人間の最良の友」として知られており、人間と長い歴史を共有している。" },
        { en: "They originally came from wolves, so the two animals share many genes.", ja: "彼らはもともとオオカミから派生したため、その2つの動物は多くの遺伝子を共有している。" },
        { en: "Because dogs are friendly and live closely with people, many people assume that dogs are naturally better at cooperation than wolves.", ja: "犬は友好的で人と親密に暮らしているため、多くの人は犬の方がオオカミよりも生まれつき協力が得意だと思い込んでいる。" },
        { en: "Wolves are often seen as wild and aggressive animals that fight with each other.", ja: "オオカミはしばしば、互いに争う野生的で攻撃的な動物だと見なされている。" },
        { en: "However, recent research suggests that when it comes to working with their own kind, wolves may actually be more cooperative than dogs.", ja: "しかし、最近の研究は、同種同士で協力することに関しては、オオカミの方が実際には犬よりも協力的かもしれないことを示唆している。" },
        { en: "In one study conducted at a research center in Austria, scientists tested how well wolves and dogs could work together.", ja: "オーストリアの研究センターで行われたある研究で、科学者たちはオオカミと犬がどれだけうまく協力できるかをテストした。" },
        { en: "They used a simple task involving a tray of food.", ja: "彼らは食べ物の載ったトレイを含む単純な課題を使用した。" },
        { en: "To get the food, two animals had to pull two ends of a rope at the same time.", ja: "食べ物を得るためには、2頭の動物がロープの両端を同時に引かなければならなかった。" },
        { en: "If only one pulled, the rope would come loose, and the food would stay out of reach.", ja: "もし1頭だけが引くと、ロープは外れてしまい、食べ物は手の届かないままになってしまう。" },
        { en: "The results showed that wolves were very successful at this task.", ja: "結果は、オオカミがこの課題において非常に成功したことを示した。" },
        { en: "They waited for a partner and pulled the rope together.", ja: "彼らはパートナーを待ち、一緒にロープを引いた。" },
        { en: "Dogs, on the other hand, often failed because they tried to get the food alone or did not wait for the other dog.", ja: "一方、犬は自分だけで食べ物を得ようとしたり、他の犬を待たなかったりしたため、しばしば失敗した。" },
        { en: "Another difference was found in how they shared food.", ja: "別の違いは、彼らがどのように食べ物を分け合うかという点で見つかった。" },
        { en: "In the wild, wolves hunt large animals like deer or moose as a team.", ja: "野生では、オオカミはチームとしてシカやヘラジカのような大きな動物を狩る。" },
        { en: "After a successful hunt, they share the meat with the pack.", ja: "狩りが成功した後、彼らは肉を群れで分け合う。" },
        { en: "Even the lower-ranking wolves are allowed to eat.", ja: "地位の低いオオカミでさえ食べることが許される。" },
        { en: "In contrast, dogs have a stricter social hierarchy.", ja: "対照的に、犬はより厳格な社会的階層を持っている。" },
        { en: "In experiments where dogs were given food, the dominant dog usually ate everything and did not let the others come close.", ja: "犬に食べ物が与えられた実験では、支配的な犬が通常すべてを食べてしまい、他の犬を近づけさせなかった。" },
        { en: "This suggests that wolves care more about fairness within their group.", ja: "これは、オオカミの方が集団内の公平性をより気にかけていることを示唆している。" },
        { en: "The reason for these differences lies in how they evolved.", ja: "これらの違いの理由は、彼らがどのように進化したかにある。" },
        { en: "When humans started living with dogs, humans became the leaders.", ja: "人間が犬と暮らし始めたとき、人間がリーダーになった。" },
        { en: "Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs.", ja: "犬は食べ物や指示を人間に頼ることを学んだため、他の犬と問題を解決する必要性を失った。" },
        { en: "Wolves, however, continued to live in the wild.", ja: "しかし、オオカミは野生で生き続けた。" },
        { en: "They had to rely on each other to survive and raise their young.", ja: "彼らは生き残り、子を育てるために互いに頼り合わなければならなかった。" },
        { en: "This forced them to maintain a high level of cooperation and teamwork that dogs no longer need.", ja: "これは彼らに、犬がもはや必要としない高いレベルの協力とチームワークを維持することを強いた。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Bonobos (2024-2)

### 1. 量的構造
- **総単語数:** ~330 words
- **パラグラフ構成:**
  1. **一般通念と導入:** 犬（協力的と思われている）とオオカミ（野生的と思われている）の対比。実はオオカミの方が同種間の協力が得意であるという提起。
  2. **実験1 (協力):** ロープを引く実験。オオカミは成功（待機・協力）、犬は失敗（単独行動）。
  3. **実験2 (分配):** 食料分配の観察。オオカミは群れで分けるが、犬はボスが独占する傾向。
  4. **理由・進化:** なぜ違いが生まれたか。犬は人間への依存（リーダーは人間）、オオカミは野生での生存（チームワーク必須）という進化の背景。

### 2. 重要語彙
- **cooperation:** 協力
- **assume:** 思い込む、仮定する
- **aggressive:** 攻撃的な
- **hierarchy:** 階層、ヒエラルキー
- **dominant:** 支配的な、優位な
- **evolve:** 進化する
- **rely on:** ～に頼る`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、犬とオオカミの社会的行動の違い、特に「同種間の協力」に焦点を当てた比較文化（動物行動学）的な文章です。一般的に犬は人懐っこく協力的だと思われていますが、実はオオカミの方が仲間同士のチームワークや公平な分配において優れていることを、実験結果を交えて説明しています。

### 1. Intro: Wolves and Dogs (第1段落)
犬はオオカミから進化した近縁種だが、一般的に犬は協力的、オオカミは攻撃的と思われている。しかし最近の研究は、仲間同士の協力に関してはオオカミの方が優れている可能性を示唆している。

### 2. The Rope Test (第2段落)
オーストリアの研究で、2頭同時にロープを引かないと餌が取れない実験を行った。オオカミはパートナーを待って協力できたが、犬は単独で取ろうとして失敗することが多かった。

### 3. Food Sharing (第3段落)
食料の分配においても違いがある。野生のオオカミは狩りの獲物を群れで分かち合うが、犬は厳格な階層社会を持ち、ボスが餌を独占して他の犬に分け与えない傾向がある。

### 4. The Reason (第4段落)
この違いは進化の過程にある。犬は人間をリーダーとして頼るように進化したため、犬同士の協力スキルが低下した。一方、オオカミは野生で生き残るために高度なチームワークを維持する必要があった。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Bonobos (過去問) | Wolves and Dogs (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | ボノボの利他性とチンパンジーとの比較 | オオカミの協力性とイヌとの比較 | 近縁種間の行動比較（善 vs 悪の逆転） |
| **構造** | 導入(知名度) → 実験1(利他) → 実験2(共感) → 社会構造の理由 | 導入(通念) → 実験1(協力) → 実験2(分配) → 進化的理由 | 4段落構成、2つの実験＋理由付け |
| **設問1** | ボノボの知名度が低い理由 | 犬とオオカミに対する一般的通念 | 第1段落の「現状の認識」を問う |
| **設問2** | 実験での行動（報酬なしで助ける） | 実験での行動（協力して引く） | 第2段落の実験結果（ポジティブな行動） |
| **設問3** | あくび実験の結果（共感） | 食事行動の違い（独占 vs 分配） | 第3段落の対照的な行動 |
| **設問4** | チンパンジーの社会（リーダー） | 犬の進化（人間への依存） | 第4段落の「ネガティブ側の理由」 |
| **設問5** | 全体の結論（True statement） | 全体の結論（True statement） | 全体的な理解と正誤判定 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Bonobos (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> ボノボ（平和） vs チンパンジー（攻撃的）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「見知らぬ他者」への親切心と共感能力。

* **Wolves and Dogs (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> オオカミ（協力的） vs イヌ（依存的）。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「同種間」のタスク解決と資源分配の公平性。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** Why not know much? -> Live in one area.
    * **Original:** What do people assume? -> Dogs are better at cooperation. (導入部の誤解を問う)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** help other bonobos without reward.
    * **Original:** coordinated actions / pulled together. (具体的な成功行動)
* **Q3 (内容一致 - Para 3):**
    * **過去問:** copied strangers (empathy).
    * **Original:** stronger dogs prevented others (lack of sharing). (対照的な行動)
* **Q4 (内容一致 - Para 4):**
    * **過去問:** Chimps tend to be less friendly... strong leader.
    * **Original:** Dogs lost skills... rely on humans. (能力喪失の理由)
* **Q5 (True Statement):**
    * **過去問:** Bonobos live peacefully...
    * **Original:** Wolves maintained teamwork... (要旨の肯定)`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析
 
 <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
 <blockquote>Because dogs are friendly and live closely with people, many people assume that dogs are naturally better at cooperation than wolves.</blockquote>
 <div class="syntax-box syntax-box-structure">
   <ul>
     <li><b>理由節:</b> Because dogs are friendly...</li>
     <li><b>主語 (S):</b> many people</li>
     <li><b>動詞 (V):</b> assume</li>
     <li><b>目的語 (O):</b> that [dogs are naturally better at cooperation than wolves]</li>
   </ul>
 </div>
 <div class="syntax-box syntax-box-point">
   <p>「犬は友好的だから協力が得意だと人々は思い込んでいる」という文脈です。"assume"（～と思い込む/仮定する）の内容が、選択肢3「犬の方が協力が得意だ（と思われている）」という一般通念の説明になります。</p>
 </div>
 
 <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
 <blockquote>They waited for a partner and pulled the rope together.</blockquote>
 <div class="syntax-box syntax-box-structure">
   <ul>
     <li><b>具体的行動:</b> They <b>waited</b> for a partner and <b>pulled</b> the rope together.</li>
   </ul>
 </div>
 <div class="syntax-box syntax-box-point">
   <p>オオカミが成功した理由として「パートナーを待ち、一緒にロープを引いた」と述べられています。これが選択肢2の "coordinated their actions and pulled the rope at the same time" に言い換えられています。</p>
 </div>
 
 <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
 <blockquote>In experiments where dogs were given food, the dominant dog usually ate everything and did not let the others come close.</blockquote>
 <div class="syntax-box syntax-box-structure">
   <ul>
     <li><b>主語 (S):</b> the dominant dog</li>
     <li><b>動詞 (V1):</b> usually ate everything</li>
     <li><b>動詞 (V2):</b> did not let</li>
     <li><b>目的語 (O):</b> the others</li>
     <li><b>補語 (C):</b> come close (原形不定詞)</li>
   </ul>
 </div>
 <div class="syntax-box syntax-box-point">
   <p>犬の食事風景では、支配的な犬（dominant dog = Stronger dogs）が独り占めして他を寄せ付けない（prevented other dogs from eating）ことが示されており、これが正解の根拠です。</p>
 </div>
 
 <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
 <blockquote>Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs.</blockquote>
 <div class="syntax-box syntax-box-structure">
   <ul>
     <li><b>主語 (S):</b> Dogs</li>
     <li><b>動詞 (V):</b> learned to depend on humans...</li>
     <li><b>結果:</b> so they lost the need [to solve problems with other dogs]</li>
   </ul>
 </div>
 <div class="syntax-box syntax-box-point">
   <p>犬が協力スキルを失った理由として「人間から餌や指示をもらうことに依存するようになったため（depend on humans）」と説明されています。これが選択肢1の根拠です。</p>
 </div>
 
 <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
 <blockquote>This forced them to maintain a high level of cooperation and teamwork that dogs no longer need.</blockquote>
 <div class="syntax-box syntax-box-structure">
   <ul>
     <li><b>主語 (S):</b> This (living in the wild)</li>
     <li><b>動詞 (V):</b> forced</li>
     <li><b>目的語 (O):</b> them (wolves)</li>
     <li><b>不定詞 (C):</b> to maintain a high level of cooperation and teamwork</li>
     <li><b>関係詞節:</b> [that dogs no longer need]</li>
   </ul>
 </div>
 <div class="syntax-box syntax-box-point">
   <p>本文の結論部分で、オオカミは野生で生き残るために（survive in the wild）、高い協力性を維持する必要があったと述べられています。これが選択肢4の内容と合致します。</p>
 </div>`,
    }
  },
  "2023-3-1-jun": {
    past: {
      title: "American Birds",
      content: `## Title: American Birds

The bald eagle is a national symbol of the United States. It is hard to imagine this country without these large, beautiful birds, but that was nearly the case not so long ago. Bald eagles almost completely disappeared from many places in the United States. However, through the efforts of scientists and others and the introduction of laws, Americans and visitors to the United States still have the chance to see bald eagles in the wild.

In the 1960s, there were only about 400 pairs of bald eagles left in 48 of the 50 American states. There were several reasons why these birds were not doing well. People were shooting bald eagles and destroying the places where they lived. Moreover, many farmers were using a chemical called DDT to kill insects that ate crops. However, DDT was bad for bald eagles and caused many of them to die. Due to concerns about the effects of DDT on wildlife and humans, the U.S. government banned the use of DDT on farms in the 1970s.

The following year, bald eagles were added to the list of species protected by the Endangered Species Act (ESA). The ESA is a law that helps to protect animals which are struggling to survive. In the case of bald eagles, the ESA was very effective. In the 1990s, the number of pairs of bald eagles had increased to more than 5,000. Because of this, bald eagles were taken off the ESA's list. There are still other laws that protect bald eagles, and a study carried out in 2016 showed that the number of them was still increasing.

Bald eagles are not the only birds that the ESA has helped. Peregrine falcons were affected in a similar way by DDT, and the ESA gave these birds the protection that they needed. Today, birds such as whooping cranes, California condors, piping plovers, and around 100 others are protected by the ESA. Also, groups such as the American Bird Conservancy (ABC) help prevent birds from becoming extinct. As well as creating safe areas for wild birds, the ABC also educates people about the threats that these creatures face.`,
      questions: `### Questions

**(30) What happened to bald eagles in the United States in the recent past?**
1. They were chosen by Americans as the nation's favorite birds.
2. Many of them were taken as pets by visitors to the United States.
3. The introduction of laws restricted the places where they could live.
4. The number of them nearly dropped to zero in parts of the country.

**(31) Until the 1970s, many farmers in the United States were**
1. shooting bald eagles to stop them from damaging crops.
2. killing many of the insects that bald eagles usually ate.
3. using a kind of chemical that was harmful to bald eagles.
4. accidentally destroying the places where bald eagles lived.

**(32) Why were bald eagles removed from the Endangered Species Act list?**
1. The number of pairs of bald eagles had reached several thousand.
2. A study showed that the law was not working effectively.
3. They were taken off the list by mistake when it was updated.
4. There were animals that needed protecting more than bald eagles.

**(33) What is one thing that the American Bird Conservancy does to help protect birds?**
1. It counts the number of different kinds of birds in U.S. states.
2. It lets people know about dangers that could possibly affect birds.
3. It puts pressure on the government to make environmental protection laws.
4. It tests chemicals used by farmers to see whether they harm birds.

---
**Answer Key:** 4, 3, 1, 2`,
      translations: [
        { en: "The bald eagle is a national symbol of the United States.", ja: "ハクトウワシはアメリカ合衆国の国家の象徴である。" },
        { en: "It is hard to imagine this country without these large, beautiful birds, but that was nearly the case not so long ago.", ja: "この大きく美しい鳥がいないこの国を想像するのは難しいが、少し前までは危うくそうなるところだった。" },
        { en: "Bald eagles almost completely disappeared from many places in the United States.", ja: "ハクトウワシはアメリカの多くの場所からほぼ完全に姿を消した。" },
        { en: "However, through the efforts of scientists and others and the introduction of laws, Americans and visitors to the United States still have the chance to see bald eagles in the wild.", ja: "しかし、科学者やその他の人々の努力と法律の導入を通じて、アメリカ人やアメリカへの訪問者は今でも野生のハクトウワシを見る機会を持っている。" },
        { en: "In the 1960s, there were only about 400 pairs of bald eagles left in 48 of the 50 American states.", ja: "1960年代には、アメリカの50州のうち48州で、ハクトウワシのつがいは約400組しか残っていなかった。" },
        { en: "There were several reasons why these birds were not doing well.", ja: "これらの鳥がうまくいっていなかった（数が減っていた）のにはいくつかの理由があった。" },
        { en: "People were shooting bald eagles and destroying the places where they lived.", ja: "人々はハクトウワシを撃ったり、彼らが住む場所を破壊したりしていた。" },
        { en: "Moreover, many farmers were using a chemical called DDT to kill insects that ate crops.", ja: "さらに、多くの農家は作物を食べる昆虫を殺すためにDDTと呼ばれる化学物質を使用していた。" },
        { en: "However, DDT was bad for bald eagles and caused many of them to die.", ja: "しかし、DDTはハクトウワシにとって有害であり、彼らの多くを死なせる原因となった。" },
        { en: "Due to concerns about the effects of DDT on wildlife and humans, the U.S. government banned the use of DDT on farms in the 1970s.", ja: "野生生物や人間へのDDTの影響に対する懸念から、米国政府は1970年代に農場でのDDTの使用を禁止した。" },
        { en: "The following year, bald eagles were added to the list of species protected by the Endangered Species Act (ESA).", ja: "翌年、ハクトウワシは絶滅の危機に瀕する種の保存法（ESA）によって保護される種のリストに加えられた。" },
        { en: "The ESA is a law that helps to protect animals which are struggling to survive.", ja: "ESAは、生き残るのに苦労している動物を保護するのに役立つ法律である。" },
        { en: "In the case of bald eagles, the ESA was very effective.", ja: "ハクトウワシの場合、ESAは非常に効果的であった。" },
        { en: "In the 1990s, the number of pairs of bald eagles had increased to more than 5,000.", ja: "1990年代には、ハクトウワシのつがいの数は5,000以上に増加した。" },
        { en: "Because of this, bald eagles were taken off the ESA's list.", ja: "このため、ハクトウワシはESAのリストから外された。" },
        { en: "There are still other laws that protect bald eagles, and a study carried out in 2016 showed that the number of them was still increasing.", ja: "ハクトウワシを保護する法律は他にもまだあり、2016年に行われた研究では、その数は依然として増加していることが示された。" },
        { en: "Bald eagles are not the only birds that the ESA has helped.", ja: "ESAが助けた鳥はハクトウワシだけではない。" },
        { en: "Peregrine falcons were affected in a similar way by DDT, and the ESA gave these birds the protection that they needed.", ja: "ハヤブサも同様にDDTの影響を受けたが、ESAはこれらの鳥に必要な保護を与えた。" },
        { en: "Today, birds such as whooping cranes, California condors, piping plovers, and around 100 others are protected by the ESA.", ja: "今日、アメリカシロヅル、カリフォルニアコンドル、フエコチドリ、その他約100種の鳥がESAによって保護されている。" },
        { en: "Also, groups such as the American Bird Conservancy (ABC) help prevent birds from becoming extinct.", ja: "また、アメリカ鳥類保護協会（ABC）のような団体も、鳥が絶滅するのを防ぐ助けをしている。" },
        { en: "As well as creating safe areas for wild birds, the ABC also educates people about the threats that these creatures face.", ja: "野生の鳥のための安全な場所を作ることだけでなく、ABCはこれらの生き物が直面している脅威について人々を教育することも行っている。" }
      ]
    },
    original: {
      title: "The Return of the Gray Wolf",
      content: `## Title: The Return of the Gray Wolf

For thousands of years, the gray wolf was one of the most common predators in North America. These powerful animals played a vital role in keeping nature in balance. However, by the early twentieth century, the situation had changed dramatically. As human populations expanded westward, wolves were seen as dangerous pests. Government programs were created to remove them, and by the 1930s, gray wolves had been almost entirely wiped out from the lower 48 states.

The main reason for this decline was conflict with agriculture. Ranchers who raised cattle and sheep believed that wolves were a major threat to their livelihood. To protect their animals, they hunted, trapped, and poisoned wolves in large numbers. At the time, few people understood the importance of predators to the environment. Without wolves to hunt them, the population of elk exploded. This led to overgrazing, which damaged rivers and forests, showing that the removal of wolves had negative effects on the whole ecosystem.

In a historic move to fix this mistake, the U.S. government reintroduced gray wolves to Yellowstone National Park in 1995. This project was controversial but highly successful. The wolves began to hunt elk again, which reduced the elk population to a healthy level. This allowed trees like willow and aspen to grow back along riverbanks, which in turn attracted beavers and birds. This chain of positive events is known as a "trophic cascade," proving that the return of the wolf helped heal the land.

Despite this success, the presence of wolves remains a difficult issue for some people. Ranchers living near wolf territories still worry about their livestock. To help solve this problem, some conservation groups have started programs to pay ranchers for any animals lost to wolves. These groups also teach ranchers non-lethal methods to keep wolves away, such as using special lights or guard dogs. Through these compromises, it is hoped that humans and wolves can continue to share the landscape.`,
      questions: `### Original Questions

**(1) What was the situation for gray wolves in the early twentieth century?**
1. They were protected by the government as a national symbol.
2. Their population increased rapidly due to plenty of food.
3. They were moved to zoos to keep them safe from humans.
4. They were nearly eliminated from most of the United States.

**(2) Why did ranchers and farmers want to get rid of wolves?**
1. They wanted to use the land for building new towns.
2. They feared that wolves would kill their farm animals.
3. They believed that wolves carried dangerous diseases.
4. They needed the wolves' fur to make warm clothing.

**(3) What happened after wolves were brought back to Yellowstone National Park?**
1. The number of elk increased, causing damage to the forests.
2. The wolves left the park to find food in other areas.
3. The ecosystem improved because the elk population was controlled.
4. Other predators like bears and mountain lions disappeared.

**(4) How are conservation groups trying to help ranchers today?**
1. By building high fences around all the national parks.
2. By teaching them how to hunt wolves more effectively.
3. By offering money for livestock that is killed by wolves.
4. By encouraging them to move their farms to different states.

**(5) Which of the following statements is true?**
1. The removal of wolves had no effect on the rivers or forests.
2. Beavers and birds returned to Yellowstone after trees grew back.
3. Most ranchers in the early twentieth century wanted to protect wolves.
4. The gray wolf population in North America is now lower than in the 1930s.

---
**Answer Key:** 4, 2, 3, 3, 2`,
      translations: [
        { en: "For thousands of years, the gray wolf was one of the most common predators in North America.", ja: "何千年もの間、ハイイロオオカミは北米で最も一般的な捕食者の一つであった。" },
        { en: "These powerful animals played a vital role in keeping nature in balance.", ja: "これらの力強い動物は、自然のバランスを保つ上で不可欠な役割を果たしていた。" },
        { en: "However, by the early twentieth century, the situation had changed dramatically.", ja: "しかし、20世紀初頭までには、状況は劇的に変化していた。" },
        { en: "As human populations expanded westward, wolves were seen as dangerous pests.", ja: "人口が西部へと拡大するにつれ、オオカミは危険な害獣とみなされた。" },
        { en: "Government programs were created to remove them, and by the 1930s, gray wolves had been almost entirely wiped out from the lower 48 states.", ja: "彼らを駆除するための政府のプログラムが作られ、1930年代までには、ハイイロオオカミは（アラスカとハワイを除く）アメリカ本土48州からほぼ完全に絶滅させられた。" },
        { en: "The main reason for this decline was conflict with agriculture.", ja: "この減少の主な理由は農業との対立であった。" },
        { en: "Ranchers who raised cattle and sheep believed that wolves were a major threat to their livelihood.", ja: "牛や羊を育てる牧場主たちは、オオカミが彼らの生計に対する主要な脅威であると信じていた。" },
        { en: "To protect their animals, they hunted, trapped, and poisoned wolves in large numbers.", ja: "彼らの動物を守るために、彼らは大量のオオカミを狩り、罠にかけ、毒殺した。" },
        { en: "At the time, few people understood the importance of predators to the environment.", ja: "当時、環境における捕食者の重要性を理解している人はほとんどいなかった。" },
        { en: "Without wolves to hunt them, the population of elk exploded.", ja: "彼らを狩るオオカミがいなければ、エルク（ヘラジカ）の個体数は爆発的に増加した。" },
        { en: "This led to overgrazing, which damaged rivers and forests, showing that the removal of wolves had negative effects on the whole ecosystem.", ja: "これは過放牧につながり、川や森を傷つけ、オオカミの排除が生態系全体に悪影響を及ぼしたことを示した。" },
        { en: "In a historic move to fix this mistake, the U.S. government reintroduced gray wolves to Yellowstone National Park in 1995.", ja: "この過ちを修正するための歴史的な動きとして、米国政府は1995年にイエローストーン国立公園にハイイロオオカミを再導入した。" },
        { en: "This project was controversial but highly successful.", ja: "このプロジェクトは論争を呼んだが、非常に成功した。" },
        { en: "The wolves began to hunt elk again, which reduced the elk population to a healthy level.", ja: "オオカミは再びエルクを狩り始め、それがエルクの個体数を健全なレベルまで減少させた。" },
        { en: "This allowed trees like willow and aspen to grow back along riverbanks, which in turn attracted beavers and birds.", ja: "これにより、ヤナギやアスペンのような木々が川岸に沿って再生することができ、それが今度はビーバーや鳥を引き寄せた。" },
        { en: "This chain of positive events is known as a \"trophic cascade,\" proving that the return of the wolf helped heal the land.", ja: "この一連の肯定的な出来事は「栄養カスケード（連鎖）」として知られており、オオカミの帰還が土地を治すのに役立ったことを証明している。" },
        { en: "Despite this success, the presence of wolves remains a difficult issue for some people.", ja: "この成功にもかかわらず、オオカミの存在は一部の人々にとって依然として難しい問題のままである。" },
        { en: "Ranchers living near wolf territories still worry about their livestock.", ja: "オオカミの縄張りの近くに住む牧場主たちは、依然として彼らの家畜について心配している。" },
        { en: "To help solve this problem, some conservation groups have started programs to pay ranchers for any animals lost to wolves.", ja: "この問題を解決するのを助けるために、一部の自然保護団体は、オオカミによって失われた動物に対して牧場主に代金を支払うプログラムを開始した。" },
        { en: "These groups also teach ranchers non-lethal methods to keep wolves away, such as using special lights or guard dogs.", ja: "これらの団体はまた、特別なライトや番犬の使用など、オオカミを遠ざけるための殺さない方法を牧場主に教えている。" },
        { en: "Through these compromises, it is hoped that humans and wolves can continue to share the landscape.", ja: "これらの妥協を通じて、人間とオオカミが風景（土地）を共有し続けられることが期待されている。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** American Birds (2023-3)

### 1. 量的構造
- **総単語数:** ~360 words (Target 350-400 words)
- **パラグラフ構成:**
  1. **現状と過去:** オオカミの生態系での役割と、かつて害獣として絶滅寸前まで追いやられた歴史。
  2. **減少の原因:** 牧場主（Ranchers）との対立。家畜を守るための駆除と、その結果としての環境被害（エルクの増加）。
  3. **回復と成功:** 1995年のイエローストーンへの再導入。生態系の回復（Trophic Cascade）。
  4. **現在の課題:** 牧場主との対立の継続と、共存のための解決策（補償金制度、非致死的な防衛）。

### 2. 重要語彙
- **predator:** 捕食者
- **livestock:** 家畜
- **reintroduce:** 再導入する
- **ecosystem:** 生態系
- **compromise:** 妥協、歩み寄り
- **livelihood:** 生計
- **overgrazing:** 過放牧`,
      summary: `## 講師用：本文要約 (Instructor Summary)

ハクトウワシの保護（American Birds）と同様に、アメリカの自然保護の成功例として有名な「ハイイロオオカミの帰還」をテーマにしました。人間による絶滅の危機から、保護活動による回復、そして現代に残る課題までを平行して描いています。本文量は約360語に拡張し、設問を5問作成しています。

### 1. Disappearing Predators (第1段落)
かつて北米で一般的だったハイイロオオカミは、生態系のバランスを保つ重要な存在でした。しかし、人間が西部へ進出すると害獣と見なされ、1930年代までには本土からほぼ絶滅させられました。

### 2. Conflict on the Range (第2段落)
減少の主な原因は農業との対立でした。牧場主は家畜を守るためにオオカミを駆除しました。しかし、捕食者がいなくなったことでエルク（鹿の一種）が爆発的に増え、森や川が荒れるという副作用が生じました。

### 3. The Return (第3段落)
1995年、政府はイエローストーン国立公園にオオカミを再導入しました。オオカミがエルクを捕食することで植物が再生し、ビーバーや鳥が戻ってくるなど、生態系全体が劇的に回復しました。

### 4. Living Together (第4段落)
成功の一方で、牧場主との対立は続いています。保護団体は、オオカミに襲われた家畜の代金を補償したり、オオカミを殺さずに追い払う方法を教えたりして、共存の道を探っています。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | American Birds (過去問) | The Return of the Gray Wolf (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | ハクトウワシの減少と回復 | ハイイロオオカミの減少と回復 | 米国の象徴的生物の保護、人間活動による危機と再生 |
| **構造** | 1. 象徴的鳥の危機<br>2. 減少原因（農薬DDT）<br>3. 法的保護（ESA）と回復<br>4. 支援団体（ABC）と教育 | 1. 捕食者の危機<br>2. 減少原因（牧畜との対立）<br>3. 再導入プロジェクトと回復<br>4. 支援団体と補償プログラム | パラグラフ構成（危機→原因→対策→継続的支援）が一致 |
| **設問数** | **4問** | **5問**（指示により拡張） | オリジナルは5問構成に変更 |
| **設問1** | 過去に何が起きたか（絶滅寸前） | 20世紀初頭の状況（ほぼ排除された） | 第1段落の「過去の危機的状況」を問う |
| **設問2** | 農家が何をしたか（農薬使用） | 牧場主がなぜ駆除したか（家畜保護） | 第2段落の「減少の直接的原因」を問う |
| **設問3** | なぜリストから外れたか（数が増えた） | 再導入後どうなったか（生態系改善） | 第3段落の「保護活動の成果」を問う |
| **設問4** | 団体（ABC）の活動内容（教育・啓発） | 団体による牧場主支援（金銭補償） | 第4段落の「NGO等による具体的支援策」を問う |
| **設問5** | N/A | 内容一致（生態系の連鎖的回復） | 全体または特定箇所の事実確認を追加 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **American Birds (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Chemical Pollution (DDT)
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「農薬（化学物質）」による環境汚染と、法規制（ESA）による回復に焦点。

* **The Return of the Gray Wolf (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Human-Wildlife Conflict
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「牧畜（人間活動）」との直接的競合と、再導入による生態系バランスの回復（Trophic Cascade）に焦点。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 両者とも「過去（Recently past / Early 20th century）」の危機的状況（数が激減したこと）を選択させる。
* **Q2:** 過去問は「Farmers were using chemicals」。オリジナルは「Ranchers feared for animals」。どちらも減少の加害者側の動機・行動。
* **Q3:** 過去問は回復の結果（Removed from list）。オリジナルは回復の結果（Ecosystem improved）。
* **Q4:** 過去問は「Educates people」。オリジナルは「Offering money」。どちらも第4段落に記述された支援団体の具体的なアクション。
* **Q5:** 第3段落の「Trophic cascade（栄養カスケード）」と呼ばれる生態系の連鎖的回復についての詳細な事実確認問題を追加。`,
      syntax: `
    ## 4. 正解の根拠となるセンテンスの構文解析

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
    <blockquote>Government programs <b>were created</b> to remove them, and by the 1930s, gray wolves <b>had been</b> almost entirely <b>wiped out</b> from the lower 48 states.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>受動態:</b> Government programs were created... (政府のプログラムが作られた)</li>
        <li><b>不定詞(目的):</b> to remove them (彼らを駆除するために)</li>
        <li><b>完了形(受動):</b> gray wolves had been almost entirely wiped out... (ほぼ完全に絶滅させられていた)</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"wiped out" は "eliminated" や "disappeared" と同義です。これが選択肢4の "nearly eliminated from most of the United States" の直接的な根拠となります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
    <blockquote>Ranchers who raised cattle and sheep <b>believed</b> that wolves were a major threat to their livelihood.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> Ranchers (who raised cattle and sheep)</li>
        <li><b>動詞 (V):</b> believed</li>
        <li><b>目的語 (O):</b> that wolves were a major threat to their livelihood</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>関係代名詞 "who" が Ranchers を修飾しています。"threat to their livelihood"（生計への脅威）は、直後の文 "To protect their animals..." と合わせて、家畜が殺されることを恐れた（選択肢2 feared that wolves would kill their farm animals）ことを意味します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
    <blockquote>The wolves <b>began</b> to hunt elk again, which <b>reduced</b> the elk population to a healthy level.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主節:</b> The wolves began to hunt elk again</li>
        <li><b>関係代名詞(非制限用法):</b> , which reduced the elk population...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>カンマ＋which が前の文の内容を受けて結果を説明しています。「エルクを減らした」ことが、続く文の「植物の再生」や「生態系の回復」につながっています。これが選択肢3の "ecosystem improved because the elk population was controlled" の根拠です。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
    <blockquote>To help solve this problem, some conservation groups <b>have started</b> programs to pay ranchers for any animals lost to wolves.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>不定詞(目的):</b> To help solve this problem</li>
        <li><b>主語 (S):</b> some conservation groups</li>
        <li><b>動詞 (V):</b> have started</li>
        <li><b>目的語 (O):</b> programs to pay ranchers...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"pay ranchers for any animals lost"（失われた動物に対して牧場主に支払う）という表現が、選択肢3の "offering money for livestock that is killed by wolves" と完全に一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
    <blockquote>This <b>allowed</b> trees like willow and aspen to grow back along riverbanks, which in turn <b>attracted</b> beavers and birds.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> This (エルクの減少)</li>
        <li><b>動詞 (V):</b> allowed</li>
        <li><b>目的語 (O):</b> trees like willow and aspen</li>
        <li><b>不定詞 (C):</b> to grow back</li>
        <li><b>関係代名詞:</b> , which in turn attracted beavers and birds</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>因果関係の連鎖を示しています。木が再生したこと（trees grow back）が、ビーバーや鳥を引き寄せた（attracted beavers and birds）という事実が、選択肢2の "Beavers and birds returned to Yellowstone after trees grew back" の根拠となります。</p>
    </div>
    `
    }
  },
  "2023-3-1": {
    past: {
      title: "Keeping Up-to-Date",
      content: `## Title: Keeping Up-to-Date

English is used by people in many parts of the world. Like other languages, new words are often added to English. These come from technological, social, or other developments. At the same time, other words stop being used because they no longer help people express their ideas. The people who create dictionaries need to constantly check which words are being used and how they are being used to make dictionaries that reflect the current state of the English language.

For a new word to be considered by dictionary editors, it must first be used widely. Dictionary editors and their assistants read books, news articles, and other sources of English to look for new words. These days, dictionary editors use computers to help them check sources more quickly and more accurately. The next step is to check the meaning of the new word. If the new word is being used by a lot of people to mean the same thing, there is a good chance that it will be added to dictionaries.

In some cases, completely new words are added to the dictionary, but in other cases, new meanings are added to existing words. For example, the word “cookie” used to have a single meaning: a kind of baked snack. In the late 20th century, the same word started to be used to refer to special computer files that store information about how people use websites on the Internet. Within a few years, the use of this meaning of the word had become so widespread that dictionary editors decided to add the meaning to their dictionaries.

Dictionary editors consider changes to dictionaries very carefully before making them. Each suggestion to add a new word or meaning or remove an old word or meaning is looked at by many editors. If enough of them agree that a change should be made, they will ask their dictionary’s senior editors for their approval. Sometimes, the senior editors will decide that there is not enough evidence to support the suggested change. In this case, the information collected by editors and their assistants will be stored in a database so that it can be reviewed later.`,
      questions: `### Questions

**(30) What is one thing that the creators of English dictionaries must do?**
1. Keep an eye on how words are used in the English language.
2. Decide how to spell the new words that are added to English.
3. Check for technological developments that could help their work.
4. Make changes to words that people have difficulty expressing.

**(31) A new word may be added to a dictionary if**
1. sources in which the word is used are found to be accurate.
2. the word is also being used in languages other than English.
3. a large number of people are using the word in the same way.
4. dictionary editors and their assistants think the word will be useful.

**(32) The word “cookie” is an example of an English word that**
1. came from a word that was used in another language.
2. people can spell in a variety of different ways.
3. was rejected by dictionary editors for many years.
4. has gained a different meaning from its original one.

**(33) What is one of the roles of a dictionary’s senior editors?**
1. To review data about the words that people most often look for in the dictionary.
2. To remove old information from a database so that new information can be added.
3. To come up with ideas to make the dictionary easier for people to use.
4. To make the final decision about changes to the content of the dictionary.

---
**Answer Key:** (30) 1, (31) 3, (32) 4, (33) 4`,
      translations: [
        { en: "English is used by people in many parts of the world.", ja: "英語は世界の多くの地域の人々によって使われています。" },
        { en: "Like other languages, new words are often added to English.", ja: "他の言語と同様に、新しい単語がしばしば英語に追加されます。" },
        { en: "These come from technological, social, or other developments.", ja: "これらは技術的、社会的、あるいはその他の発展から生じます。" },
        { en: "At the same time, other words stop being used because they no longer help people express their ideas.", ja: "同時に、人々が自分の考えを表現するのに役立たなくなるため、使われなくなる単語もあります。" },
        { en: "The people who create dictionaries need to constantly check which words are being used and how they are being used to make dictionaries that reflect the current state of the English language.", ja: "辞書を作成する人々は、現在の英語の状態を反映した辞書を作るために、どの単語が使われているか、そしてそれらがどのように使われているかを絶えず確認する必要があります。" },
        { en: "For a new word to be considered by dictionary editors, it must first be used widely.", ja: "新しい単語が辞書編集者に検討されるためには、まず広く使われていなければなりません。" },
        { en: "Dictionary editors and their assistants read books, news articles, and other sources of English to look for new words.", ja: "辞書編集者とその助手は、新しい単語を探すために本やニュース記事、その他の英語の資料を読みます。" },
        { en: "These days, dictionary editors use computers to help them check sources more quickly and more accurately.", ja: "最近では、辞書編集者は出典をより速く、より正確に確認するためにコンピュータを使用しています。" },
        { en: "The next step is to check the meaning of the new word.", ja: "次の段階は、その新しい単語の意味を確認することです。" },
        { en: "If the new word is being used by a lot of people to mean the same thing, there is a good chance that it will be added to dictionaries.", ja: "もしその新しい単語が同じことを意味するために多くの人々によって使われているなら、それが辞書に追加される可能性は高いです。" },
        { en: "In some cases, completely new words are added to the dictionary, but in other cases, new meanings are added to existing words.", ja: "全く新しい単語が辞書に追加される場合もあれば、既存の単語に新しい意味が追加される場合もあります。" },
        { en: "For example, the word “cookie” used to have a single meaning: a kind of baked snack.", ja: "例えば、「クッキー」という単語はかつて、ある種の焼き菓子という一つの意味しか持っていませんでした。" },
        { en: "In the late 20th century, the same word started to be used to refer to special computer files that store information about how people use websites on the Internet.", ja: "20世紀後半、同じ単語が、人々がインターネット上のウェブサイトをどのように利用しているかについての情報を保存する特別なコンピュータファイルを指すために使われ始めました。" },
        { en: "Within a few years, the use of this meaning of the word had become so widespread that dictionary editors decided to add the meaning to their dictionaries.", ja: "数年以内に、その単語のこの意味での使用が非常に広まったため、辞書編集者はその意味を辞書に追加することに決めました。" },
        { en: "Dictionary editors consider changes to dictionaries very carefully before making them.", ja: "辞書編集者は、変更を加える前に辞書の変更を非常に慎重に検討します。" },
        { en: "Each suggestion to add a new word or meaning or remove an old word or meaning is looked at by many editors.", ja: "新しい単語や意味を追加したり、古い単語や意味を削除したりする提案はそれぞれ、多くの編集者によって検討されます。" },
        { en: "If enough of them agree that a change should be made, they will ask their dictionary’s senior editors for their approval.", ja: "変更すべきだという意見に十分な数の編集者が同意した場合、彼らは辞書のシニアエディター（上級編集者）に承認を求めます。" },
        { en: "Sometimes, the senior editors will decide that there is not enough evidence to support the suggested change.", ja: "時には、シニアエディターが、提案された変更を支持する十分な証拠がないと判断することもあります。" },
        { en: "In this case, the information collected by editors and their assistants will be stored in a database so that it can be reviewed later.", ja: "この場合、編集者とその助手によって収集された情報は、後で見直すことができるようにデータベースに保存されます。" }
      ]
    },
    original: {
      title: "Keeping Maps Accurate",
      content: `## Title: Keeping Maps Accurate

Digital maps have become essential tools used by people all over the world to navigate their daily lives. Just like living languages, the physical environment is in a state of constant flux. New highways are constructed, local businesses open their doors or shut down forever, and traffic rules are altered to improve safety. Consequently, the technology companies that develop these digital maps face a difficult challenge: they must update their databases continuously. It is vital for them to ensure that the maps displayed on smartphone screens reflect reality with high precision. If they fail to do this, users might arrive late for important meetings or delivery trucks might get lost, wasting both time and fuel.

For a significant change to be registered on a digital map, a vast amount of accurate information must first be gathered. Mapmakers employ advanced technology, such as high-resolution satellite imagery and fleets of cars equipped with 360-degree cameras, to record every detail of the streets. In addition to these professional methods, they rely heavily on real-time data sent by ordinary people who use the navigation apps. Modern computers are used to process this huge flood of incoming data much faster than any human could. However, speed is not the only goal; the next crucial step is to verify the information. For instance, if hundreds of users suddenly report a new one-way street in the same hour, there is a very high probability that the map needs to be updated immediately.

In some instances, completely new features or locations are added to the map interface, but in other cases, familiar words and symbols acquire entirely new definitions. A clear example of this is the word “traffic”. In the past, this word simply referred to the physical vehicles moving along a road. In the 21st century, within the context of digital mapping, "traffic" is often used to refer to the real-time red and orange lines that indicate congestion levels. These colored lines show drivers exactly how fast or slow cars are moving at that moment. Over a short period, this visual interpretation of "traffic" became so essential that it is now a standard, expected feature on almost all navigation systems.

Despite the help of advanced technology, map editors still consider changes very carefully before making them permanent. Every suggestion to add a new road, rename a landmark, or change a speed limit is reviewed by both automated computer systems and human geography experts. The goal is to avoid publishing errors that could confuse drivers. If the data is clear, consistent, and verified by multiple sources, the update is released to users worldwide. Sometimes, however, the experts decide that a user report is not reliable enough to act on immediately. In such cases, the suggestion is not discarded but is instead saved in a special database to be cross-checked again when more evidence becomes available later.`,
      questions: `### Original Questions

**(1) What is one reason why companies must constantly update digital maps?**
1. People are using smartphones less often than before.
2. The physical world, such as roads and businesses, changes frequently.
3. Digital maps are becoming too expensive for people to use.
4. Old maps are no longer compatible with modern computers.

**(2) How do mapmakers confirm if a change should be made?**
1. They only use information provided by government officials.
2. They wait until satellite images are at least ten years old.
3. They look for agreement among reports from many users and other sources.
4. They ask car manufacturers to send them new cameras.

**(3) The word “traffic” is mentioned to show that**
1. the number of cars on the road has decreased recently.
2. words can gain new visual representations and functions in digital tools.
3. mapmakers prefer to use old definitions to avoid confusion.
4. it is the only word that has not changed its meaning.

**(4) What happens if map experts are not sure about a suggested change?**
1. They immediately delete the information to save space.
2. They make the change anyway and wait for complaints.
3. They store the information to review it later when they have more proof.
4. They ask the person who sent the report to fix the road themselves.

**(5) Which of the following statements is true about the map-making process?**
1. It relies entirely on computers and does not involve human checking.
2. It is a process that stops once a map is published.
3. It involves collecting data, verifying it, and carefully reviewing changes.
4. It is much simpler today because the world changes less often.

---
**Answer Key:** (1) 2, (2) 3, (3) 2, (4) 3, (5) 3`,
      translations: [
        { en: "Digital maps have become essential tools used by people all over the world to navigate their daily lives.", ja: "デジタル地図は、世界中の人々が日常生活で移動するために使用する不可欠なツールとなっています。" },
        { en: "Just like living languages, the physical environment is in a state of constant flux.", ja: "生きた言語と全く同じように、物理的な環境も絶えず変化し続けています。" },
        { en: "New highways are constructed, local businesses open their doors or shut down forever, and traffic rules are altered to improve safety.", ja: "新しい幹線道路が建設され、地元の店が開店したり永久に閉店したりし、安全性を向上させるために交通ルールが変更されます。" },
        { en: "Consequently, the technology companies that develop these digital maps face a difficult challenge: they must update their databases continuously.", ja: "その結果、これらのデジタル地図を開発するテクノロジー企業は困難な課題に直面しています。彼らはデータベースを継続的に更新しなければなりません。" },
        { en: "It is vital for them to ensure that the maps displayed on smartphone screens reflect reality with high precision.", ja: "スマートフォンの画面に表示される地図が現実を高精度に反映していることを保証することは、彼らにとって極めて重要です。" },
        { en: "If they fail to do this, users might arrive late for important meetings or delivery trucks might get lost, wasting both time and fuel.", ja: "もしこれを怠れば、ユーザーは重要な会議に遅刻したり、配送トラックが道に迷ったりして、時間と燃料の両方を無駄にしてしまうかもしれません。" },
        { en: "For a significant change to be registered on a digital map, a vast amount of accurate information must first be gathered.", ja: "重要な変更がデジタル地図に登録されるためには、まず膨大な量の正確な情報が集められなければなりません。" },
        { en: "Mapmakers employ advanced technology, such as high-resolution satellite imagery and fleets of cars equipped with 360-degree cameras, to record every detail of the streets.", ja: "地図製作者は、高解像度の衛星画像や360度カメラを搭載した車両群などの高度な技術を採用して、通りのあらゆる詳細を記録します。" },
        { en: "In addition to these professional methods, they rely heavily on real-time data sent by ordinary people who use the navigation apps.", ja: "これらの専門的な方法に加えて、彼らはナビゲーションアプリを使用する一般の人々から送信されるリアルタイムデータに大きく依存しています。" },
        { en: "Modern computers are used to process this huge flood of incoming data much faster than any human could.", ja: "現代のコンピュータは、人間には不可能な速さで、この洪水のように押し寄せる膨大なデータを処理するために使われています。" },
        { en: "However, speed is not the only goal; the next crucial step is to verify the information.", ja: "しかし、スピードだけが目標ではありません。次の重要なステップは情報を検証することです。" },
        { en: "For instance, if hundreds of users suddenly report a new one-way street in the same hour, there is a very high probability that the map needs to be updated immediately.", ja: "例えば、何百人ものユーザーが同じ時間帯に突然新しい一方通行の道を報告した場合、地図を即座に更新する必要がある可能性が非常に高いです。" },
        { en: "In some instances, completely new features or locations are added to the map interface, but in other cases, familiar words and symbols acquire entirely new definitions.", ja: "場合によっては、全く新しい機能や場所が地図のインターフェースに追加されることもありますが、またある場合には、馴染みのある言葉や記号が全く新しい定義を獲得することもあります。" },
        { en: "A clear example of this is the word “traffic”.", ja: "これの明確な例が「トラフィック（交通）」という言葉です。" },
        { en: "In the past, this word simply referred to the physical vehicles moving along a road.", ja: "過去には、この言葉は単に道路に沿って移動する物理的な車両を指していました。" },
        { en: "In the 21st century, within the context of digital mapping, \"traffic\" is often used to refer to the real-time red and orange lines that indicate congestion levels.", ja: "21世紀のデジタル地図の文脈では、「トラフィック」は、混雑レベルを示すリアルタイムの赤やオレンジの線を指すためによく使われます。" },
        { en: "These colored lines show drivers exactly how fast or slow cars are moving at that moment.", ja: "これらの色付きの線は、その瞬間に車がどれくらいの速さで、あるいは遅く動いているかをドライバーに正確に示します。" },
        { en: "Over a short period, this visual interpretation of \"traffic\" became so essential that it is now a standard, expected feature on almost all navigation systems.", ja: "短期間のうちに、「トラフィック」のこの視覚的な解釈は非常に不可欠なものとなり、今ではほぼすべてのナビゲーションシステムにおいて標準的で期待される機能となっています。" },
        { en: "Despite the help of advanced technology, map editors still consider changes very carefully before making them permanent.", ja: "高度な技術の助けがあるにもかかわらず、地図の編集者は変更を恒久的なものにする前に、依然として非常に慎重に検討を行います。" },
        { en: "Every suggestion to add a new road, rename a landmark, or change a speed limit is reviewed by both automated computer systems and human geography experts.", ja: "新しい道路の追加、ランドマークの名称変更、あるいは制限速度の変更に関するあらゆる提案は、自動化されたコンピュータシステムと人間の地理専門家の両方によって審査されます。" },
        { en: "The goal is to avoid publishing errors that could confuse drivers.", ja: "その目的は、ドライバーを混乱させかねない誤った情報の公開を避けることです。" },
        { en: "If the data is clear, consistent, and verified by multiple sources, the update is released to users worldwide.", ja: "データが明確で、一貫性があり、複数の情報源によって検証されれば、更新情報は世界中のユーザーに公開されます。" },
        { en: "Sometimes, however, the experts decide that a user report is not reliable enough to act on immediately.", ja: "しかし時には、専門家があるユーザー報告について、即座に行動を起こすには信頼性が不十分だと判断することもあります。" },
        { en: "In such cases, the suggestion is not discarded but is instead saved in a special database to be cross-checked again when more evidence becomes available later.", ja: "そのような場合、その提案は破棄されるのではなく、後でより多くの証拠が得られたときに再度クロスチェック（照合確認）できるように、特別なデータベースに保存されます。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** 2023-3 Keeping Up-to-Date

### 1. 量的構造 (Expanded)
- **総単語数:** 約360語 (ユーザー指定により増量。Grade 2としては長文読解に近い分量)
- **パラグラフ構成:**
  1. **導入 (Introduction):** 世界の変化（道路建設、閉店等）と、それに対応するための地図更新の重要性・義務。
  2. **情報収集と検証 (Collection & Verification):** 衛星、360度カメラ、そしてユーザーからのリアルタイム報告を活用し、コンピュータで処理・検証するプロセス。
  3. **言葉と機能の進化 (Evolution of Terms):** "Traffic"という言葉が、物理的な車両だけでなく、デジタル地図上の「渋滞を示す色付きの線」という意味を持つようになった事例。
  4. **審査と保留 (Review & Decision):** 専門家による二重チェック。証拠不十分な情報は削除せず、データベースに保存して将来の検証に備える慎重さ。

### 2. 重要語彙
- constant flux (絶え間ない変化), precision (精度), employ (採用する/使う), verify (検証する), congestion (混雑), interpretation (解釈), discard (捨てる), cross-checked (照合確認する)。`,
      summary: `## 講師用：本文要約 (Instructor Summary)

デジタル地図の正確性を維持するための複雑な更新プロセスに関する説明文です。

### 1. 変化する世界と地図 (第1段落)
物理的な世界は常に変化しているため、地図会社はユーザーが迷わないよう、高精度な更新を続ける義務があります。

### 2. テクノロジーと集合知 (第2段落)
衛星や調査車両に加え、一般ユーザーからの大量の報告が重要な情報源です。これらをコンピュータで高速処理し、情報の真偽を検証します。

### 3. 言葉の新しい役割 (第3段落)
「Traffic（交通）」という言葉を例に挙げ、デジタル時代において言葉が新しい視覚的機能（渋滞表示ライン）を指すように進化・定着したことを説明しています。

### 4. 慎重な最終判断 (第4段落)
誤情報の掲載を防ぐため、変更案はシステムと専門家が慎重に審査します。確証が持てない情報は破棄せずデータベースに保存し、後の判断材料とします。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Keeping Up-to-Date (過去問) | Keeping Maps Accurate (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 辞書の更新 | デジタル地図の更新 | 「正確な情報」を維持するための絶え間ないプロセス |
| **構造** | 変化(新語) → 調査・収集 → 意味の確定 → 審査・承認 | 変化(地形) → 収集(技術+人) → 定義の進化 → 審査・保存 | 4段落構成、現状→収集→具体例→最終判断 |
| **設問1** | 辞書編集者の義務 (Check usage) | 更新が必要な理由 (World changes) | 第1段落の「変化への対応義務」を問う |
| **設問2** | 採用の基準 (Used widely) | 検証の方法 (User agreement) | 第2段落の「情報の確度」を問う |
| **設問3** | "Cookie"の事例 (New meaning) | "Traffic"の事例 (New visual) | 第3段落の「言葉/概念の進化」を問う |
| **設問4** | 上級編集者の役割 (Final decision) | 保留時の対応 (Save for later) | 第4段落の「慎重な判断プロセス」を問う |
| **設問5** | (設問なし) | 全体のプロセス (Collecting/Verifying) | 本文全体の要旨・流れを問う |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Keeping Up-to-Date (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 言葉の定義と使用実態。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 人々の合意形成と辞書への反映。

* **Keeping Maps Accurate (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 地理情報の正確性と安全性。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> テクノロジー活用と検証の厳格さ。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** "Keep an eye on how words are used..." (使用状況の監視)
    * **Original:** "The physical world... changes frequently." (変化への対応)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** "If the new word is being used by a lot of people..." (広範な使用)
    * **Original:** "Look for agreement among reports from many users..." (多角的な検証)
* **Q3 (内容一致 - Para 3):**
    * **過去問:** "Cookie... gained a different meaning." (意味の追加)
    * **Original:** "Traffic... words can gain new visual representations." (視覚的再定義)
* **Q4 (内容一致 - Para 4):**
    * **過去問:** "Make the final decision about changes." (決定権)
    * **Original:** "Store the information to review it later." (判断の保留と保存)
* **Q5 (True Statement):**
    * **過去問:** (当該設問なし)
    * **Original:** "It involves collecting, verifying, and carefully reviewing changes." (プロセスの総括)`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析 (Expanded)

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>Consequently, the technology companies that develop these digital maps <b>face</b> a difficult challenge: they must update their databases continuously.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続副詞:</b> Consequently (その結果)</li>
    <li><b>主語 (S):</b> the technology companies [that develop...]</li>
    <li><b>動詞 (V):</b> face</li>
    <li><b>目的語 (O):</b> a difficult challenge</li>
    <li><b>同格/説明:</b> : they must update their databases continuously</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>直前の文で述べられた「物理的世界の絶え間ない変化（constant flux）」を受けて、「その結果、会社はデータを更新し続けなければならない」と述べています。これが選択肢2の正解根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>For instance, if hundreds of users suddenly report a new one-way street in the same hour, there <b>is</b> a very high probability that the map needs to be updated immediately.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>条件節:</b> If hundreds of users ... report ...</li>
    <li><b>主語 (S):</b> there</li>
    <li><b>動詞 (V):</b> is</li>
    <li><b>真主語:</b> a very high probability [that the map needs to be updated...]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>「何百人ものユーザーが同じ報告をすれば」という条件が、設問の「どうやって確認するか」への答え（Look for agreement among reports）と合致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>In the 21st century, within the context of digital mapping, "traffic" <b>is often used to refer to</b> the real-time red and orange lines that indicate congestion levels.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> "traffic"</li>
    <li><b>動詞 (V):</b> is ... used to refer to</li>
    <li><b>目的語 (O):</b> the real-time red and orange lines</li>
    <li><b>関係詞節:</b> [that indicate congestion levels]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>「Traffic」という言葉が、現代では「混雑レベルを示す色付きの線」を指すために使われる、という記述から、言葉が新しい視覚的表現（visual representations）を獲得したことを示す選択肢2が正解です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>In such cases, the suggestion <b>is not discarded but is instead saved</b> in a special database to be cross-checked again when more evidence becomes available later.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> the suggestion</li>
    <li><b>動詞 (V):</b> is not discarded but is ... saved</li>
    <li><b>場所 (M):</b> in a special database</li>
    <li><b>目的 (M):</b> to be cross-checked again [when more evidence becomes available later]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>専門家が確証を持てない場合（In such cases）、情報は「破棄されず（not discarded）」、「データベースに保存される（saved in a database）」という点が、選択肢3の内容と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
<blockquote>Every suggestion to add a new road, rename a landmark, or change a speed limit <b>is reviewed</b> by both automated computer systems and human geography experts.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Every suggestion</li>
    <li><b>動詞 (V):</b> is reviewed</li>
    <li><b>動作主 (By):</b> by both automated computer systems and human geography experts</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>本文全体を通して「データ収集→検証→慎重な審査」というプロセスが詳述されています。設問5の選択肢3「データを集め、検証し、慎重に審査する」は、この全体の流れを最も正確に要約しています。</p>
</div>`
    }
  },
  "2023-3-2-jun": {
    past: {
      title: "George Bernard Shaw",
      content: `## Title: George Bernard Shaw

George Bernard Shaw was a writer who was born in Ireland in 1856 and moved to England in 1876. He is famous for writing plays. One of his most popular plays is called Pygmalion. It was first performed in Vienna in Central Europe in 1913. The idea for Pygmalion came from a tale from ancient Greece. In this story, a man makes a sculpture of a woman that is so beautiful that he falls in love with it. Pygmalion has been performed in theaters many times, and it has even been turned into movies and a famous musical.

Many of Shaw's writings are not romantic stories with happy endings. He had strong political views, and he often wrote things that were critical of English society. In plays such as Misalliance, Shaw's characters discuss politics, the roles of men and women, and whether or not it is important to try to become wealthy. The ideas in Shaw's plays were sometimes unfamiliar to people in the audiences and made them think about their own lives. Moreover, even though the subjects of his plays are often quite serious, the plays contain a lot of humor.

Shaw became friends with many famous writers and thinkers, including Winston Churchill, who later became the British prime minister. Although Shaw and Churchill had very different political views, they respected each other's intelligence, and they liked to make one another laugh. When Shaw and Churchill first met, Churchill was surprised because Shaw was a vegetarian and drank only water. Churchill asked Shaw if he ever drank wine. Shaw replied that it was difficult enough for people to control him even when he did not drink alcohol.

Shaw had many debates with the English writer Gilbert Chesterton. Some of these debates were held in front of audiences. Shaw and Chesterton discussed topics including politics, science, and religion. These debates were popular for several reasons. To begin with, the topics were interesting, and Shaw and Chesterton were very good at expressing their opinions. Also, they would frequently make fun of each other in ways that made their audiences laugh.`,
      questions: `### Questions

**(34) The play Pygmalion is based on**
1. the adventures of a writer who traveled to several countries in Europe.
2. the lives of the members of a family in Ireland in the 19th century.
3. an article about the discovery of a beautiful statue of a woman.
4. a story that was originally created many years ago in Greece.

**(35) What was one effect that George Bernard Shaw's plays had?**
1. They led to changes in the roles of men and women in English society.
2. They created a demand for more romantic stories with happy endings.
3. They made actors think more carefully about the characters in plays.
4. They sometimes caused members of the audience to consider new ideas.

**(36) Winston Churchill was surprised when he first met Shaw because**
1. Shaw had drunk so much wine that he was hard to control.
2. Shaw did not eat any meat or have any alcohol to drink.
3. Churchill did not know they had the same political views.
4. Churchill thought that Shaw was the British prime minister.

**(37) What was one reason that people came to see Shaw and Gilbert Chesterton's debates?**
1. The audience members could gamble on who would be the winner.
2. The audience members could suggest topics for the debates.
3. Shaw and Chesterton often made good jokes about one another.
4. Shaw and Chesterton usually had completely different opinions.

**(38) Which of the following statements is true?**
1. Pygmalion was a musical that was turned into a play by Shaw.
2. Chesterton had difficulty expressing his views during debates.
3. Shaw avoided getting to know other famous writers and thinkers.
4. The plays that Shaw wrote often included quite serious topics.

---
**Answer Key:** 4, 4, 2, 3, 4`,
      translations: [
        { en: "George Bernard Shaw was a writer who was born in Ireland in 1856 and moved to England in 1876.", ja: "ジョージ・バーナード・ショーは、1856年にアイルランドで生まれ、1876年にイングランドに移住した作家であった。" },
        { en: "He is famous for writing plays.", ja: "彼は戯曲を書いたことで有名である。" },
        { en: "One of his most popular plays is called Pygmalion.", ja: "彼の最も人気のある戯曲の一つは『ピグマリオン』と呼ばれている。" },
        { en: "It was first performed in Vienna in Central Europe in 1913.", ja: "それは1913年に中央ヨーロッパのウィーンで初めて上演された。" },
        { en: "The idea for Pygmalion came from a tale from ancient Greece.", ja: "『ピグマリオン』のアイデアは、古代ギリシャの物語から来た。" },
        { en: "In this story, a man makes a sculpture of a woman that is so beautiful that he falls in love with it.", ja: "この物語では、ある男が非常に美しい女性の彫刻を作り、それに恋をしてしまう。" },
        { en: "Pygmalion has been performed in theaters many times, and it has even been turned into movies and a famous musical.", ja: "『ピグマリオン』は劇場で何度も上演されており、映画や有名なミュージカルにもなっている。" },
        { en: "Many of Shaw's writings are not romantic stories with happy endings.", ja: "ショーの著作の多くは、ハッピーエンドのロマンチックな物語ではない。" },
        { en: "He had strong political views, and he often wrote things that were critical of English society.", ja: "彼は強い政治的見解を持っており、しばしばイギリス社会に批判的な事柄を書いた。" },
        { en: "In plays such as Misalliance, Shaw's characters discuss politics, the roles of men and women, and whether or not it is important to try to become wealthy.", ja: "『不釣り合いな結婚』のような戯曲では、ショーの登場人物たちは政治、男女の役割、そして裕福になろうとすることが重要かどうかについて議論する。" },
        { en: "The ideas in Shaw's plays were sometimes unfamiliar to people in the audiences and made them think about their own lives.", ja: "ショーの戯曲の中のアイデアは、時に観客にとって馴染みのないものであり、彼らに自分自身の生活について考えさせた。" },
        { en: "Moreover, even though the subjects of his plays are often quite serious, the plays contain a lot of humor.", ja: "さらに、彼の戯曲の主題はしばしば非常に深刻であるが、戯曲には多くのユーモアが含まれている。" },
        { en: "Shaw became friends with many famous writers and thinkers, including Winston Churchill, who later became the British prime minister.", ja: "ショーは、後に英国首相となったウィンストン・チャーチルを含む、多くの有名な作家や思想家と友人になった。" },
        { en: "Although Shaw and Churchill had very different political views, they respected each other's intelligence, and they liked to make one another laugh.", ja: "ショーとチャーチルは非常に異なる政治的見解を持っていたが、彼らはお互いの知性を尊重し、お互いを笑わせるのが好きだった。" },
        { en: "When Shaw and Churchill first met, Churchill was surprised because Shaw was a vegetarian and drank only water.", ja: "ショーとチャーチルが初めて会った時、ショーがベジタリアンで水しか飲まないことにチャーチルは驚いた。" },
        { en: "Churchill asked Shaw if he ever drank wine.", ja: "チャーチルはショーにワインを飲むことがあるか尋ねた。" },
        { en: "Shaw replied that it was difficult enough for people to control him even when he did not drink alcohol.", ja: "ショーは、アルコールを飲まない時でさえ人々が彼をコントロールするのは十分に難しい、と答えた。" },
        { en: "Shaw had many debates with the English writer Gilbert Chesterton.", ja: "ショーはイギリスの作家ギルバート・チェスタトンと多くの討論を行った。" },
        { en: "Some of these debates were held in front of audiences.", ja: "これらの討論のいくつかは観客の前で行われた。" },
        { en: "Shaw and Chesterton discussed topics including politics, science, and religion.", ja: "ショーとチェスタトンは政治、科学、宗教を含む話題について議論した。" },
        { en: "These debates were popular for several reasons.", ja: "これらの討論はいくつかの理由で人気があった。" },
        { en: "To begin with, the topics were interesting, and Shaw and Chesterton were very good at expressing their opinions.", ja: "まず第一に、話題が興味深く、ショーとチェスタトンは自分たちの意見を表現するのが非常に上手かった。" },
        { en: "Also, they would frequently make fun of each other in ways that made their audiences laugh.", ja: "また、彼らは頻繁に観客を笑わせるような方法で、お互いをからかい合った。" }
      ]
    },
    original: {
      title: "The Creator of Sherlock Holmes",
      content: `## Title: The Creator of Sherlock Holmes

Arthur Conan Doyle was a British writer born in Scotland in 1859. Although he originally studied to be a doctor, he is best known today for creating the famous detective Sherlock Holmes. The character of Holmes first appeared in a story published in 1887. Doyle based Holmes's amazing ability to observe details on Dr. Joseph Bell, a teacher he met at university. Dr. Bell could guess a stranger's job and history just by looking at their clothes and hands. This impressed Doyle so much that he decided to give his fictional detective the same skill.

Despite the huge popularity of Sherlock Holmes, Doyle had a complicated relationship with his own creation. He wanted to be remembered for writing serious history books, not just detective stories. At one point, he even killed off the character of Holmes in a story because he wanted to focus on other work. However, the public was so angry and disappointed that Doyle was eventually forced to bring the detective back to life. While Doyle often wrote about logic and science in his stories, his personal interests were quite different.

Doyle became friends with Harry Houdini, the world-famous magician and escape artist. They were an unlikely pair because their beliefs were completely opposite. Doyle was a strong believer in spiritualism, the idea that the living could communicate with the dead. He was convinced that Houdini had supernatural powers that helped him escape from locked chains. On the other hand, Houdini was a skeptic who spent his life exposing fake psychics. He tried to explain to Doyle that his escapes were just clever tricks, but Doyle refused to believe him.

In his later years, Doyle spent much of his time and money traveling around the world to give lectures on spiritualism. He debated with many people who did not share his views. Although some people thought his beliefs were strange for a man who created such a logical detective, large crowds still came to hear him speak. They were fascinated by the man who had invented Sherlock Holmes, even if they did not agree with his ideas about ghosts. Doyle remained a passionate speaker until the end of his life.`,
      questions: `### Original Questions

**(1) The character of Sherlock Holmes was based on**
1. a famous detective that Doyle met while visiting Scotland.
2. a teacher who could learn things about people just by looking at them.
3. a doctor who wrote serious history books in the 19th century.
4. a character from an ancient story that Doyle read at university.

**(2) How did Arthur Conan Doyle feel about his Sherlock Holmes stories?**
1. He felt that they were the most important work of his life.
2. He wished that he had made the character of Holmes more logical.
3. He wanted to focus on writing other types of books instead.
4. He was happy that they allowed him to meet Harry Houdini.

**(3) Arthur Conan Doyle believed that Harry Houdini**
1. was a fake magician who used simple tricks to fool people.
2. used special powers to escape from chains and locked boxes.
3. was the only person who could communicate with the dead.
4. should stop exposing psychics and start writing history books.

**(4) Why did people come to listen to Doyle's lectures in his later years?**
1. They wanted to see him perform magic tricks like Houdini.
2. They were interested in him because he was the creator of Holmes.
3. They wanted to learn how to become doctors and scientists.
4. They agreed with everything he said about ghosts and spirits.

**(5) Which of the following statements is true?**
1. Doyle studied to be a doctor before he became a famous writer.
2. Harry Houdini believed that he had supernatural powers.
3. Doyle never wrote any stories after he killed off Sherlock Holmes.
4. Dr. Joseph Bell was a fictional character created by Doyle.

---
**Answer Key:** 2, 3, 2, 2, 1`,
      translations: [
        { en: "Arthur Conan Doyle was a British writer born in Scotland in 1859.", ja: "アーサー・コナン・ドイルは1859年にスコットランドで生まれました。" },
        { en: "Although he originally studied to be a doctor, he is best known today for creating the famous detective Sherlock Holmes.", ja: "彼は元々医者になるために勉強していましたが、今日では有名な探偵シャーロック・ホームズを創作したことで最もよく知られています。" },
        { en: "The character of Holmes first appeared in a story published in 1887.", ja: "ホームズというキャラクターは、1887年に出版された物語に初めて登場しました。" },
        { en: "Doyle based Holmes's amazing ability to observe details on Dr. Joseph Bell, a teacher he met at university.", ja: "ドイルは、ホームズの細部を観察する驚くべき能力の基礎を、大学で出会った教師であるジョセフ・ベル博士に置きました。" },
        { en: "Dr. Bell could guess a stranger's job and history just by looking at their clothes and hands.", ja: "ベル博士は、服や手を見るだけで、見知らぬ人の職業や経歴を言い当てることができました。" },
        { en: "This impressed Doyle so much that he decided to give his fictional detective the same skill.", ja: "このことはドイルを非常に感銘させたので、彼は自身の架空の探偵に同じスキルを与えることに決めました。" },
        { en: "Despite the huge popularity of Sherlock Holmes, Doyle had a complicated relationship with his own creation.", ja: "シャーロック・ホームズの絶大な人気にもかかわらず、ドイルは自身の創作物と複雑な関係を持っていました。" },
        { en: "He wanted to be remembered for writing serious history books, not just detective stories.", ja: "彼は単なる探偵小説だけでなく、真面目な歴史書を書いたことで記憶されたいと望んでいました。" },
        { en: "At one point, he even killed off the character of Holmes in a story because he wanted to focus on other work.", ja: "ある時点で、彼は他の仕事に集中したかったため、物語の中でホームズのキャラクターを殺してしまったことさえありました。" },
        { en: "However, the public was so angry and disappointed that Doyle was eventually forced to bring the detective back to life.", ja: "しかし、大衆があまりにも怒り失望したため、ドイルは結局その探偵を生き返らせることを強いられました。" },
        { en: "While Doyle often wrote about logic and science in his stories, his personal interests were quite different.", ja: "ドイルは物語の中でしばしば論理や科学について書きましたが、彼個人の興味はかなり異なっていました。" },
        { en: "Doyle became friends with Harry Houdini, the world-famous magician and escape artist.", ja: "ドイルは、世界的に有名な手品師であり脱出術師であるハリー・フーディーニと友人になりました。" },
        { en: "They were an unlikely pair because their beliefs were completely opposite.", ja: "彼らの信念は正反対であったため、彼らはありそうもない組み合わせでした。" },
        { en: "Doyle was a strong believer in spiritualism, the idea that the living could communicate with the dead.", ja: "ドイルは、生きている者が死者と交信できるという考えである「心霊主義」の強力な信奉者でした。" },
        { en: "He was convinced that Houdini had supernatural powers that helped him escape from locked chains.", ja: "彼は、フーディーニが鎖から脱出するのを助ける超自然的な力を持っていると確信していました。" },
        { en: "On the other hand, Houdini was a skeptic who spent his life exposing fake psychics.", ja: "一方で、フーディーニは偽の霊能者を暴くことに人生を費やした懐疑論者でした。" },
        { en: "He tried to explain to Doyle that his escapes were just clever tricks, but Doyle refused to believe him.", ja: "彼はドイルに、自分の脱出は単なる巧妙なトリックだと説明しようとしましたが、ドイルは彼を信じることを拒みました。" },
        { en: "In his later years, Doyle spent much of his time and money traveling around the world to give lectures on spiritualism.", ja: "晩年、ドイルは心霊主義に関する講演を行うために世界中を旅することに多くの時間とお金を費やしました。" },
        { en: "He debated with many people who did not share his views.", ja: "彼は自分の見解を共有しない多くの人々と討論しました。" },
        { en: "Although some people thought his beliefs were strange for a man who created such a logical detective, large crowds still came to hear him speak.", ja: "そのような論理的な探偵を創作した男にしては彼の信念は奇妙だと考える人もいましたが、それでも大勢の群衆が彼の話を聞きに来ました。" },
        { en: "They were fascinated by the man who had invented Sherlock Holmes, even if they did not agree with his ideas about ghosts.", ja: "たとえ幽霊に関する彼の考えに同意しなくても、人々はシャーロック・ホームズを発明した男に魅了されていました。" },
        { en: "Doyle remained a passionate speaker until the end of his life.", ja: "ドイルは人生の最期まで情熱的な演説者であり続けました。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** George Bernard Shaw (2023-3)

### 1. 量的構造
- **総単語数:** ~360 words (Target 350-400 words)
- **パラグラフ構成:**
  1. **人物紹介と代表作:** コナン・ドイルの出自、医師としての背景、シャーロック・ホームズの誕生とそのモデル（ジョセフ・ベル博士）。
  2. **作品への姿勢:** ホームズの人気と作者の葛藤（歴史書を書きたい願望）、キャラクターの殺害と復活。
  3. **対照的な人間関係:** ハリー・フーディーニ（奇術師）との友情。心霊主義（Spiritualism）を巡る対立（信じるドイル vs 懐疑的なフーディーニ）。
  4. **晩年の活動:** 心霊主義の講演活動と大衆の反応。論理的な作品と非論理的な信念のギャップ。

### 2. 重要語彙
- **creation:** 創作物
- **observe:** 観察する
- **fictional:** 架空の
- **skeptic:** 懐疑論者
- **supernatural:** 超自然的な
- **fascinated:** 魅了された
- **convince:** 確信させる`,
      summary: `## 講師用：本文要約 (Instructor Summary)

ジョージ・バーナード・ショー（劇作家）とウィンストン・チャーチル（政治家）の交流を描いた過去問の構造を模倣し、「シャーロック・ホームズ」の作者アーサー・コナン・ドイルと、脱出王ハリー・フーディーニの奇妙な友情と対立を描いています。

### 1. The Real Holmes (第1段落)
コナン・ドイルは元々医師でした。彼が生み出した名探偵ホームズの「観察力」は、大学時代の恩師ジョセフ・ベル博士がモデルです。ベル博士は服装だけで患者の職業を当てることができました。

### 2. Love-Hate Relationship (第2段落)
ホームズは大人気でしたが、ドイル自身は真面目な歴史小説家として認められたいと思っていました。一度はホームズを物語の中で殺しましたが、ファンの怒りに押されて復活させざるを得ませんでした。

### 3. Magic vs. Spirits (第3段落)
ドイルは奇術師ハリー・フーディーニと友人でしたが、考え方は正反対でした。ドイルは心霊主義（霊との対話）を信じ、フーディーニの脱出も「魔法（超能力）」だと信じ込んでいました。一方、フーディーニはトリックだと説明しましたが、ドイルは信じませんでした。

### 4. The Logical Believer (第4段落)
晩年、ドイルは心霊主義の普及に尽力しました。論理的な探偵の生みの親が幽霊を信じているのは奇妙に思われましたが、それでも多くの人々が「ホームズの作者」の話を聞くために集まりました。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | George Bernard Shaw (過去問) | The Creator of Sherlock Holmes (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 劇作家ショーの人生と人間関係 | 作家ドイルの人生と人間関係 | 著名な作家の経歴、代表作、同時代人との交流 |
| **構造** | 1. 代表作『ピグマリオン』と起源<br>2. 作風（社会批判）とユーモア<br>3. チャーチルとの友情（対照的）<br>4. チェスタトンとの討論 | 1. 代表作『ホームズ』と起源<br>2. 作品への葛藤（歴史書志向）<br>3. フーディーニとの友情（対照的）<br>4. 晩年の講演と聴衆の反応 | パラグラフ構成（作品紹介→作家の姿勢→対照的な友人→公衆との関わり）が一致 |
| **設問1** | 作品の起源（ギリシャ神話） | キャラクターのモデル（恩師） | 第1段落の「創作のインスピレーション源」を問う |
| **設問2** | 作品の影響（考えさせた） | 作品への作者の感情（他を書きたかった） | 第2段落の「作品に対するスタンスや影響」を問う |
| **設問3** | チャーチルが驚いた理由（菜食） | ドイルがフーディーニについて信じたこと（超能力） | 第3段落の「友人関係における具体的なエピソード」を問う |
| **設問4** | 討論が人気だった理由（ユーモア） | 講演に人が集まった理由（作者への興味） | 第4段落の「公衆が関心を持った理由」を問う |
| **設問5** | 内容一致（劇は深刻な話題を含む） | 内容一致（作家になる前に医学を学んだ） | 全体または特定箇所の事実確認 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **George Bernard Shaw (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Playwright / Politics
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 政治的対立を超えた友情（チャーチル）と、公衆討論（チェスタトン）におけるユーモアと知性。

* **The Creator of Sherlock Holmes (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Novelist / Spiritualism
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 信念の対立を超えた友情（フーディーニ）と、論理的作風と非論理的信仰（心霊主義）のパラドックス。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 両者とも「Based on...（何に基づいているか）」という起源を問う。
* **Q2:** 過去問は「Effect（効果）」。オリジナルは「Author's feeling（作者の感情）」だが、どちらも第2段落の作家としての核心部分。
* **Q3:** 過去問は「Surprised because...」。オリジナルは「Believed that...」。友人関係における「意外な事実/相違点」を問う。
* **Q4:** 両者とも「Why people came/listened（なぜ人々は来たのか）」という聴衆の動機を問う。
* **Q5:** 内容一致問題。`,
      syntax: `
    ## 4. 正解の根拠となるセンテンスの構文解析

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1</h3>
    <blockquote>Doyle <b>based</b> Holmes's amazing ability to observe details on Dr. Joseph Bell, a teacher he met at university.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> Doyle</li>
        <li><b>動詞 (V):</b> based</li>
        <li><b>目的語 (O):</b> Holmes's amazing ability to observe details</li>
        <li><b>前置詞句 (M):</b> on Dr. Joseph Bell</li>
        <li><b>同格/修飾:</b> , a teacher he met at university</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"base A on B"（Aの基礎をBに置く）の構文です。「ホームズの能力をジョセフ・ベル博士（大学の教師）に基づかせた」という内容が、選択肢2の "a teacher who could learn things about people..." と一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2</h3>
    <blockquote>He <b>wanted</b> to be remembered for writing serious history books, not just detective stories.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> He</li>
        <li><b>動詞 (V):</b> wanted</li>
        <li><b>補語 (C):</b> to be remembered for...</li>
        <li><b>対比:</b> ..., not just detective stories.</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>「探偵小説だけでなく、真面目な歴史書で記憶されたかった」という願望が述べられています。これは、彼がホームズ以外の本に集中したかったことを示唆しており、選択肢3の "wanted to focus on writing other types of books instead" の根拠となります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3</h3>
    <blockquote>He <b>was convinced</b> that Houdini had supernatural powers that helped him escape from locked chains.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> He (Doyle)</li>
        <li><b>動詞 (V):</b> was convinced</li>
        <li><b>目的語 (O):</b> that節 (that Houdini had supernatural powers...)</li>
        <li><b>関係代名詞節:</b> that helped him escape... (powersを修飾)</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"be convinced that..."（～だと確信している）の構文。「フーディーニが超自然的な力を持っていると確信していた」ことが、選択肢2の "used special powers to escape..." と一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4</h3>
    <blockquote>They <b>were fascinated</b> by the man who had invented Sherlock Holmes, even if they did not agree with his ideas about ghosts.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> They (The audience)</li>
        <li><b>動詞 (V):</b> were fascinated by</li>
        <li><b>動作主:</b> the man who had invented Sherlock Holmes</li>
        <li><b>譲歩節:</b> even if they did not agree with his ideas...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>受動態 "were fascinated by"。「シャーロック・ホームズを発明した男に魅了されていた」という部分が、選択肢2の "interested in him because he was the creator of Holmes" の直接的な根拠です。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5</h3>
    <blockquote>Although he originally <b>studied</b> to be a doctor, he <b>is best known</b> today for creating the famous detective Sherlock Holmes.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>譲歩節 (Although):</b> Although he originally studied to be a doctor</li>
        <li><b>主節:</b> he is best known today for creating...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>第1段落の2文目です。「元々は医者になるために勉強していた」という事実が、選択肢1の "studied to be a doctor before he became a famous writer" を正しい記述（True statement）として裏付けています。</p>
    </div>
    `
    }
  },
  "2023-3-2": {
    past: {
      title: "Marie Curie",
      content: `## Title: Marie Curie

In 1903, Marie Curie became the first woman to receive a Nobel Prize. She got it for the research that she and her husband had carried out in physics. Eight years later, she became the first person ever to win a second Nobel Prize. This time, the prize was for discoveries that she had made in chemistry. Her research has led to the development of technologies such as X-ray machines that have become important parts of our lives.

Marie Curie was born in Warsaw, Poland, in 1867. She was the youngest of five children, and her parents were both teachers. She was a bright child who was good at remembering facts. She did well at school, but she was unable to attend the University of Warsaw. At the time, it only accepted male students. Instead, she took a job as a tutor and carried on studying math, physics, and chemistry in her spare time. However, these private studies would not allow her to achieve her dream of obtaining a university degree.

Marie Curie and her sister worked together so that they could both get university degrees. Marie Curie agreed to give some of the money she earned so that her sister could study medicine. Her sister promised that, after she graduated, she would support Marie Curie’s studies. After five years of working for a rich family, Marie Curie was finally able to start studying at a university in Paris, France. Life was hard for her because she had little money, and she suffered health problems because she could not afford good-quality food. However, she was an excellent student, and she got a degree in physics in 1893 and another in math the following year.

Marie Curie first met her husband, Pierre, while she was doing research at the university and he was working there. Pierre could see that her research was more important than his own, so he started working with her. After Pierre was killed in an accident in 1906, Marie Curie was offered her husband’s teaching job. She became a professor at the university, and she devoted the rest of her life to scientific research and teaching.`,
      questions: `### Questions

**(34) What was one of Marie Curie’s achievements?**
1. She won the first Nobel Prize for chemistry.
2. She found a new way to choose Nobel Prize winners.
3. She received Nobel Prizes in more than one subject area.
4. She discovered errors in a Nobel Prize winner’s research.

**(35) Marie Curie was not able to go to university in Warsaw because**
1. she had to take care of her younger brothers and sisters.
2. she was asked to go and work at her parents’ school.
3. the scores that she got at school were not good enough.
4. the university did not allow women to become students.

**(36) What was one difficulty faced by Marie Curie when she studied in Paris?**
1. It took five years for her to become good at speaking French.
2. The food she ate was not good enough for her to stay healthy.
3. She needed a lot of money to pay for her sister’s medicine.
4. Her university would not let her study for a degree in physics.

**(37) Marie Curie’s husband, Pierre,**
1. first met Marie Curie because of an accident that happened in 1906.
2. looked after the couple’s children while Marie Curie taught classes.
3. worked at the same university where Marie Curie was doing research.
4. thought that his own research was more important than Marie Curie’s.

**(38) Which of the following statements is true?**
1. Marie Curie had a lot of difficulty remembering facts when she was a child.
2. Marie Curie and her sister agreed to help each other to study at university.
3. Marie Curie was taught science by a female professor at a university in Paris.
4. Marie Curie wanted to study science after finding out how X-ray machines worked.

---
**Answer Key:** (34) 3, (35) 4, (36) 2, (37) 3, (38) 2`,
      translations: [
        { en: "In 1903, Marie Curie became the first woman to receive a Nobel Prize.", ja: "1903年、マリー・キュリーはノーベル賞を受賞した最初の女性となりました。" },
        { en: "She got it for the research that she and her husband had carried out in physics.", ja: "彼女は、夫と共に行った物理学の研究に対してその賞を受け取りました。" },
        { en: "Eight years later, she became the first person ever to win a second Nobel Prize.", ja: "8年後、彼女は2度目のノーベル賞を受賞した史上初の人物となりました。" },
        { en: "This time, the prize was for discoveries that she had made in chemistry.", ja: "今回、その賞は彼女が化学分野で行った発見に対するものでした。" },
        { en: "Her research has led to the development of technologies such as X-ray machines that have become important parts of our lives.", ja: "彼女の研究は、私たちの生活の重要な部分となっているX線装置などの技術開発につながりました。" },
        { en: "Marie Curie was born in Warsaw, Poland, in 1867.", ja: "マリー・キュリーは1867年にポーランドのワルシャワで生まれました。" },
        { en: "She was the youngest of five children, and her parents were both teachers.", ja: "彼女は5人兄弟の末っ子で、両親はともに教師でした。" },
        { en: "She was a bright child who was good at remembering facts.", ja: "彼女は事実を覚えるのが得意な聡明な子供でした。" },
        { en: "She did well at school, but she was unable to attend the University of Warsaw.", ja: "彼女は学校の成績は優秀でしたが、ワルシャワ大学に通うことはできませんでした。" },
        { en: "At the time, it only accepted male students.", ja: "当時、その大学は男子学生しか受け入れていなかったからです。" },
        { en: "Instead, she took a job as a tutor and carried on studying math, physics, and chemistry in her spare time.", ja: "その代わりに、彼女は家庭教師の仕事に就き、空いた時間に数学、物理学、化学の勉強を続けました。" },
        { en: "However, these private studies would not allow her to achieve her dream of obtaining a university degree.", ja: "しかし、こうした独学では、大学の学位を取得するという彼女の夢を叶えることはできませんでした。" },
        { en: "Marie Curie and her sister worked together so that they could both get university degrees.", ja: "マリー・キュリーと彼女の姉は、二人とも大学の学位を取得できるように協力し合いました。" },
        { en: "Marie Curie agreed to give some of the money she earned so that her sister could study medicine.", ja: "マリー・キュリーは、姉が医学を学べるように、自分が稼いだお金の一部を提供することに同意しました。" },
        { en: "Her sister promised that, after she graduated, she would support Marie Curie’s studies.", ja: "姉は、卒業後にマリー・キュリーの研究を支援することを約束しました。" },
        { en: "After five years of working for a rich family, Marie Curie was finally able to start studying at a university in Paris, France.", ja: "裕福な家庭で5年間働いた後、マリー・キュリーはようやくフランスのパリにある大学で勉強を始めることができました。" },
        { en: "Life was hard for her because she had little money, and she suffered health problems because she could not afford good-quality food.", ja: "お金がほとんどなかったため彼女の生活は苦しく、質の良い食事を買う余裕がなかったために健康問題を抱えました。" },
        { en: "However, she was an excellent student, and she got a degree in physics in 1893 and another in math the following year.", ja: "しかし、彼女は優秀な学生であり、1893年に物理学の学位を、翌年には数学の学位を取得しました。" },
        { en: "Marie Curie first met her husband, Pierre, while she was doing research at the university and he was working there.", ja: "マリー・キュリーが夫のピエールと初めて出会ったのは、彼女が大学で研究をしており、彼もそこで働いていた時でした。" },
        { en: "Pierre could see that her research was more important than his own, so he started working with her.", ja: "ピエールは彼女の研究が自分のものよりも重要であると理解できたため、彼女と一緒に働き始めました。" },
        { en: "After Pierre was killed in an accident in 1906, Marie Curie was offered her husband’s teaching job.", ja: "1906年にピエールが事故で亡くなった後、マリー・キュリーは夫の教職をオファーされました。" },
        { en: "She became a professor at the university, and she devoted the rest of her life to scientific research and teaching.", ja: "彼女は大学の教授となり、残りの人生を科学研究と教育に捧げました。" }
      ]
    },
    original: {
      title: "Rachel Carson",
      content: `## Title: Rachel Carson

Rachel Carson is often called the mother of the modern environmental movement. In 1962, she published a book called Silent Spring, which changed how people thought about the natural world. Before this book, most people believed that humans could control nature with chemicals. Carson showed that using strong chemicals to kill insects was also hurting birds, fish, and humans. Her writing led to a ban on dangerous pesticides like DDT and helped start the U.S. Environmental Protection Agency.

Rachel Carson was born in Pennsylvania in 1907. She grew up on a small farm where she learned to love nature and animals. She was a talented writer from a young age and originally planned to study English at college. However, she changed her major to biology because she was fascinated by science. Although she wanted to get a doctorate degree, her family had financial difficulties during the Great Depression. As a result, she had to stop her studies and find a job to support her parents.

Carson found work at the U.S. Bureau of Fisheries, where she wrote radio scripts and articles about the ocean. She was very good at explaining complex science in a way that ordinary people could understand. In the 1950s, she wrote several best-selling books about the sea. Despite her success as a writer, her personal life was challenging. She had to care for her aging mother and later adopted her niece’s son after her niece died. These responsibilities took up much of her time and energy.

In her later years, Carson focused on the dangers of pesticides. When Silent Spring was published, chemical companies attacked her and tried to stop the book from being sold. They claimed her research was wrong, but Carson did not give up. At the time, she was fighting a serious battle with cancer, yet she continued to defend her work. She testified before the U.S. Congress just a year before she died in 1964. Her bravery and dedication forced the government to create new laws to protect the environment.`,
      questions: `### Original Questions

**(1) What was one result of Rachel Carson’s work?**
1. She invented a new chemical to control insects on farms.
2. She proved that humans could completely control nature.
3. Her writing helped to stop the use of some dangerous chemicals.
4. She became the first woman to lead the Environmental Protection Agency.

**(2) Rachel Carson did not finish her doctorate degree because**
1. she decided that she liked writing more than science.
2. her family did not have enough money for her to continue.
3. the university she attended did not accept female students.
4. she wanted to move to Pennsylvania to live on a farm.

**(3) What was true about Rachel Carson’s life in the 1950s?**
1. She had a lot of free time to travel around the world.
2. She stopped writing books to work for the government.
3. She had to look after family members while working as a writer.
4. She was unable to explain science clearly to the public.

**(4) When Rachel Carson published Silent Spring,**
1. chemical companies tried to prevent people from reading it.
2. the government immediately created new environmental laws.
3. she had already recovered from her battle with cancer.
4. most people already knew about the dangers of pesticides.

**(5) Which of the following statements is true?**
1. Rachel Carson originally went to college to study biology.
2. Rachel Carson cared for her niece's son after her niece passed away.
3. Rachel Carson worked for a chemical company before writing her book.
4. Rachel Carson died before she could speak to the U.S. Congress.

---
**Answer Key:** (1) 3, (2) 2, (3) 3, (4) 1, (5) 2`,
      translations: [
        { en: "Rachel Carson is often called the mother of the modern environmental movement.", ja: "レイチェル・カーソンは、現代の環境保護運動の母としばしば呼ばれます。" },
        { en: "In 1962, she published a book called Silent Spring, which changed how people thought about the natural world.", ja: "1962年、彼女は『沈黙の春』という本を出版し、人々の自然界に対する考え方を変えました。" },
        { en: "Before this book, most people believed that humans could control nature with chemicals.", ja: "この本が出る前、ほとんどの人々は人間が化学物質で自然をコントロールできると信じていました。" },
        { en: "Carson showed that using strong chemicals to kill insects was also hurting birds, fish, and humans.", ja: "カーソンは、昆虫を殺すために強力な化学物質を使うことは、鳥や魚、そして人間をも傷つけていることを示しました。" },
        { en: "Her writing led to a ban on dangerous pesticides like DDT and helped start the U.S. Environmental Protection Agency.", ja: "彼女の著作は、DDTのような危険な殺虫剤の禁止につながり、米国環境保護庁の設立を助けました。" },
        { en: "Rachel Carson was born in Pennsylvania in 1907.", ja: "レイチェル・カーソンは1907年にペンシルベニア州で生まれました。" },
        { en: "She grew up on a small farm where she learned to love nature and animals.", ja: "彼女は小さな農場で育ち、そこで自然や動物を愛することを学びました。" },
        { en: "She was a talented writer from a young age and originally planned to study English at college.", ja: "彼女は若い頃から才能ある書き手であり、もともとは大学で英語学を学ぶつもりでした。" },
        { en: "However, she changed her major to biology because she was fascinated by science.", ja: "しかし、科学に魅了されたため、彼女は専攻を生物学に変更しました。" },
        { en: "Although she wanted to get a doctorate degree, her family had financial difficulties during the Great Depression.", ja: "彼女は博士号を取得したいと思っていましたが、大恐慌の間、彼女の家族は経済的な困難を抱えていました。" },
        { en: "As a result, she had to stop her studies and find a job to support her parents.", ja: "その結果、彼女は勉強を中断し、両親を養うために仕事を見つけなければなりませんでした。" },
        { en: "Carson found work at the U.S. Bureau of Fisheries, where she wrote radio scripts and articles about the ocean.", ja: "カーソンは米国漁業局で仕事を見つけ、そこで海に関するラジオの台本や記事を書きました。" },
        { en: "She was very good at explaining complex science in a way that ordinary people could understand.", ja: "彼女は複雑な科学を一般の人々が理解できる方法で説明するのが非常に上手でした。" },
        { en: "In the 1950s, she wrote several best-selling books about the sea.", ja: "1950年代に、彼女は海に関するベストセラー本を数冊執筆しました。" },
        { en: "Despite her success as a writer, her personal life was challenging.", ja: "作家としての成功にもかかわらず、彼女の私生活は困難なものでした。" },
        { en: "She had to care for her aging mother and later adopted her niece’s son after her niece died.", ja: "彼女は年老いた母親の世話をしなければならず、後に姪が亡くなった後は姪の息子を養子にしました。" },
        { en: "These responsibilities took up much of her time and energy.", ja: "これらの責任は、彼女の時間とエネルギーの多くを奪いました。" },
        { en: "In her later years, Carson focused on the dangers of pesticides.", ja: "晩年、カーソンは殺虫剤の危険性に焦点を当てました。" },
        { en: "When Silent Spring was published, chemical companies attacked her and tried to stop the book from being sold.", ja: "『沈黙の春』が出版されると、化学会社は彼女を攻撃し、本の販売を阻止しようとしました。" },
        { en: "They claimed her research was wrong, but Carson did not give up.", ja: "彼らは彼女の研究が間違っていると主張しましたが、カーソンは諦めませんでした。" },
        { en: "At the time, she was fighting a serious battle with cancer, yet she continued to defend her work.", ja: "当時、彼女は癌との深刻な闘病中でしたが、それでも自分の作品を守り続けました。" },
        { en: "She testified before the U.S. Congress just a year before she died in 1964.", ja: "彼女は1964年に亡くなるちょうど1年前に、米国議会で証言を行いました。" },
        { en: "Her bravery and dedication forced the government to create new laws to protect the environment.", ja: "彼女の勇気と献身は、政府に環境を保護するための新しい法律を作らせることとなりました。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** 2023-3 Marie Curie

### 1. 量的構造
- **総単語数:** 346 words (Target 350-400)
- **パラグラフ構成:**
  1. **Impact:** Silent Springの出版と環境運動への影響、DDT禁止。
  2. **Early Life & Education:** 自然への愛、専攻の変更、経済的理由による博士号断念。
  3. **Career & Family:** 公務員としての執筆活動、ベストセラー、家族（母・姪の息子）の介護。
  4. **Struggle & Legacy:** 企業の妨害、癌との闘い、議会証言と死後の法整備。

### 2. 重要語彙 (Grade 2 Level)
- **environmental movement:** 環境保護運動
- **pesticides:** 殺虫剤 (Topic specific, inferred from context)
- **fascinated:** 魅了された
- **financial difficulties:** 経済的困難
- **responsibilities:** 責任
- **testified:** 証言した (Contextual guess possible)
- **dedication:** 献身`,
      summary: `## 講師用：本文要約 (Instructor Summary)

レイチェル・カーソンの生涯と、彼女の著書『沈黙の春』が環境保護運動に与えた影響についての伝記です。彼女は科学と執筆の才能を活かして殺虫剤の危険性を訴え、化学業界からの攻撃や自身の病気と闘いながらも、現代の環境保護法の基礎を築きました。

### 1. 第1段落 (影響と功績)
レイチェル・カーソンは現代環境保護運動の母と呼ばれています。1962年の『沈黙の春』は化学物質に対する人々の意識を変え、DDTの禁止や米国環境保護庁の設立につながりました。

### 2. 第2段落 (生い立ちと教育)
自然豊かな農場で育ち、当初は英語専攻でしたが生物学へ転向しました。博士号を目指しましたが、大恐慌による家族の経済的困窮のため、学業を断念し働くことになりました。

### 3. 第3段落 (キャリアと私生活の苦労)
漁業局で働きながら海に関する本を書きベストセラー作家となりましたが、私生活では年老いた母や姪の息子の世話に追われ、多くのエネルギーを家族のために費やしました。

### 4. 第4段落 (闘いと遺産)
『沈黙の春』出版時、化学会社から激しい攻撃を受け、自身も癌と闘っていましたが、屈することなく議会で証言しました。彼女の死後、その勇気ある行動により環境保護の法整備が進みました。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Marie Curie (過去問) | Rachel Carson (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 女性科学者の伝記・功績 | 女性科学者/作家の伝記・功績 | 困難を乗り越えた女性の偉業 |
| **構造** | 4パラグラフ・5設問 | 4パラグラフ・5設問 | 時系列（功績→生い立ち→苦労→晩年） |
| **設問1** | 功績（ノーベル賞） | 功績（化学物質規制・EPA） | 第1段落の要約・結果 |
| **設問2** | 進学断念の理由（性別） | 進学断念の理由（経済） | 第2段落の因果関係 |
| **設問3** | パリでの苦労（貧困・健康） | 執筆中の苦労（家族の世話） | 第3段落の詳細読解 |
| **設問4** | 夫との関係・死別 | 企業との対立・病気 | 第4段落の人間関係・対立構造 |
| **設問5** | 内容一致（姉との協定） | 内容一致（家族の養育） | 全体または特定箇所の詳細確認 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Marie Curie (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 物理学・化学、ノーベル賞、夫との協力
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 性差別による教育の壁と、姉妹・夫婦の協力関係に焦点。

* **Rachel Carson (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 生物学・環境問題、殺虫剤、企業との対立
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 経済的理由による進学断念と、家族介護・企業からのバッシングという孤立した戦いに焦点。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 過去問は「功績の一つ」を問い、オリジナルも「仕事の結果」を問う形式で一致。
* **Q2:** 過去問は「大学に行けなかった理由（制度）」、オリジナルは「博士号を諦めた理由（金銭）」で、パラグラフ2の因果関係を問う点で共通。
* **Q3:** 過去問は「パリでの困難（生活環境）」、オリジナルは「1950年代の生活（家族の世話）」で、成功の裏にある苦労を問う。
* **Q4:** 過去問は「夫ピエールについて」、オリジナルは「沈黙の春出版時の状況」を問う。過去問は人物、オリジナルは出来事にフォーカスしているが、第4段落の主要なトピックを扱っている。
* **Q5:** 過去問は「姉妹の約束」という第3段落の具体的エピソードを正解としている。オリジナルも「姪の息子の世話」という第3段落の具体的エピソードを正解とし、難易度と情報の粒度を合わせている。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>Her writing <b>led to</b> a ban on dangerous pesticides like DDT and <b>helped start</b> the U.S. Environmental Protection Agency.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Her writing</li>
    <li><b>動詞 (V):</b> led to / helped start</li>
    <li><b>目的語 (O):</b> a ban ... / the U.S. Environmental Protection Agency</li>
    <li><b>修飾語 (M):</b> on dangerous pesticides like DDT (banを修飾)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>動詞が "led to" と "helped start" の2つ並列されています。"led to a ban"（禁止につながった）という結果が、選択肢3の "stop the use of some dangerous chemicals" と言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>As a result, she <b>had to stop</b> her studies and <b>find</b> a job to support her parents.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞:</b> As a result (前文の「経済的困難」を受けて)</li>
    <li><b>主語 (S):</b> she</li>
    <li><b>動詞 (V):</b> had to stop / (had to) find</li>
    <li><b>目的語 (O):</b> her studies / a job</li>
    <li><b>修飾語 (M):</b> to support her parents (目的を表す不定詞)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>前文の "her family had financial difficulties"（家族が経済的困難を抱えていた）が原因となり、この文で "stop her studies"（研究をやめる）という結果が述べられています。これが選択肢2の理由と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>She <b>had to care for</b> her aging mother and later <b>adopted</b> her niece’s son after her niece died.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> She</li>
    <li><b>動詞 (V):</b> had to care for / adopted</li>
    <li><b>目的語 (O):</b> her aging mother / her niece’s son</li>
    <li><b>修飾語 (M):</b> after her niece died (時を表す副詞節)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"care for"（世話をする）と "adopted"（養子にする）という行為が、家族への責任を示しています。これが選択肢3の "look after family members" と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>When Silent Spring was published, chemical companies <b>attacked</b> her and <b>tried to stop</b> the book from being sold.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞節:</b> When Silent Spring was published</li>
    <li><b>主語 (S):</b> chemical companies</li>
    <li><b>動詞 (V):</b> attacked / tried to stop</li>
    <li><b>目的語 (O):</b> her / the book</li>
    <li><b>修飾語 (M):</b> from being sold (stop A from doing: Aが～するのを妨げる)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"tried to stop the book from being sold"（本が売られるのを止めようとした）という部分が、選択肢1の "prevent people from reading it"（人々が読むのを妨げる）と言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
<blockquote>She <b>had to care for</b> her aging mother and later <b>adopted</b> her niece’s son after her niece died.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
  <li>(設問3と同じ文が根拠となります)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>選択肢2 "Rachel Carson cared for her niece's son after her niece passed away." は、本文の "adopted her niece’s son after her niece died" をほぼそのまま言い換えた内容であり、文法的に正しく事実と一致します。</p>
</div>`
    }
  },
  "2023-2-1": {
    past: {
      title: "Purple Straw Wheat",
      content: `## Title: Purple Straw Wheat

Wheat is an important crop in the United States, and its seeds are used for making bread, pasta, and other foods. It has been the country’s main food grain since the 18th century. Wheat production in the United States, however, has faced challenges throughout its history. During the late 18th century, many types of wheat were attacked by diseases and insects that came from Europe. One type of wheat called purple straw wheat, though, was able to resist these dangers, and for a long time, it was the best choice for many farmers to plant.

Purple straw wheat seeds can be used to make whiskey or produce soft and delicious flour that is good for making cakes and bread. It has been grown since the 18th century, especially in the southern United States. What made purple straw wheat particularly important was its ability to survive winter weather. Unlike other types, purple straw wheat could be planted in late autumn and harvested in early spring. This meant that it avoided summer diseases and insects. As a result, purple straw wheat continued to be widely grown until the mid-20th century.

In the 1960s, scientists developed new types of wheat by mixing the genes of existing ones. These new types produced more seeds per plant and were better able to resist diseases. By using modern farming technology, chemicals that kill insects, and these new types of wheat, farmers could produce large quantities of wheat seeds more cheaply than before. Although flour from purple straw wheat is tastier and healthier, this type of wheat almost completely went out of use.

Some researchers wanted to bring back purple straw wheat. However, its seeds were not easy to obtain because there were only a few sources. The researchers finally managed to get a few grams of purple straw wheat seeds and planted them at Clemson University in South Carolina. They have been gradually increasing the amount of wheat that they can produce, although it is still not enough to make and sell flour. Many chefs, bakers, and whiskey makers are looking forward to being able to use purple straw wheat in their products.`,
      questions: `### Questions

**(30) What happened in the late 18th century in the United States?**
1. Farmers developed a type of wheat that produced better flour.
2. Diseases and insects that affected wheat plants arrived from overseas.
3. A lack of wheat meant that it had to be imported from Europe.
4. People started to use grains other than wheat to make bread.

**(31) What was one reason that purple straw wheat was better than other types of wheat?**
1. It could be grown during the coldest part of the year.
2. It could be used to make new kinds of foods and drinks.
3. It could survive the hot summers in the southern United States.
4. It could grow in fields that had low-quality soil.

**(32) Why did people stop growing purple straw wheat in the 20th century?**
1. It was not suitable for use with modern farming technology.
2. Scientists created types of wheat that gave greater numbers of seeds.
3. People wanted to buy flour that tasted better and was healthier.
4. Chemicals that kill insects destroyed many purple straw wheat plants.

**(33) Researchers who have been growing purple straw wheat**
1. could only get a small amount of purple straw wheat seeds.
2. tested it in several different locations in the United States.
3. offered flour made from the wheat to chefs, bakers, and whiskey makers.
4. were surprised at how quickly they were able to produce enough to sell.

---
**Answer Key:** (30) 2, (31) 1, (32) 2, (33) 1`,
      translations: [
        { en: "Wheat is an important crop in the United States, and its seeds are used for making bread, pasta, and other foods.", ja: "小麦は米国において重要な作物であり、その種子はパン、パスタ、その他の食品を作るために使用されます。" },
        { en: "It has been the country’s main food grain since the 18th century.", ja: "それは18世紀以来、この国の主要な食用穀物であり続けています。" },
        { en: "Wheat production in the United States, however, has faced challenges throughout its history.", ja: "しかし、米国における小麦生産は、その歴史を通じて困難に直面してきました。" },
        { en: "During the late 18th century, many types of wheat were attacked by diseases and insects that came from Europe.", ja: "18世紀後半、多くの種類の小麦が、ヨーロッパからやってきた病気や昆虫の被害を受けました。" },
        { en: "One type of wheat called purple straw wheat, though, was able to resist these dangers, and for a long time, it was the best choice for many farmers to plant.", ja: "しかし、パープルストローウィートと呼ばれるある種の小麦はこれらの危険に耐えることができ、長い間、多くの農家にとって植えるのに最適な選択肢でした。" },
        { en: "Purple straw wheat seeds can be used to make whiskey or produce soft and delicious flour that is good for making cakes and bread.", ja: "パープルストローウィートの種子は、ウイスキーを作ったり、ケーキやパンを作るのに適した柔らかくて美味しい小麦粉を作ったりするのに使用できます。" },
        { en: "It has been grown since the 18th century, especially in the southern United States.", ja: "それは18世紀以来、特に米国南部で栽培されてきました。" },
        { en: "What made purple straw wheat particularly important was its ability to survive winter weather.", ja: "パープルストローウィートを特に重要なものにしたのは、冬の天候を生き抜く能力でした。" },
        { en: "Unlike other types, purple straw wheat could be planted in late autumn and harvested in early spring.", ja: "他の品種とは異なり、パープルストローウィートは晩秋に植えて早春に収穫することができました。" },
        { en: "This meant that it avoided summer diseases and insects.", ja: "これは、夏の病気や昆虫を回避できることを意味しました。" },
        { en: "As a result, purple straw wheat continued to be widely grown until the mid-20th century.", ja: "その結果、パープルストローウィートは20世紀半ばまで広く栽培され続けました。" },
        { en: "In the 1960s, scientists developed new types of wheat by mixing the genes of existing ones.", ja: "1960年代、科学者たちは既存の品種の遺伝子を混合することによって新しい種類の小麦を開発しました。" },
        { en: "These new types produced more seeds per plant and were better able to resist diseases.", ja: "これらの新しい品種は、植物1株あたりより多くの種子を生産し、病気に対する抵抗力も高くなりました。" },
        { en: "By using modern farming technology, chemicals that kill insects, and these new types of wheat, farmers could produce large quantities of wheat seeds more cheaply than before.", ja: "現代の農業技術、昆虫を殺す化学薬品、そしてこれらの新しい種類の小麦を使用することで、農家は以前よりも安価に大量の小麦の種子を生産できるようになりました。" },
        { en: "Although flour from purple straw wheat is tastier and healthier, this type of wheat almost completely went out of use.", ja: "パープルストローウィートから作られる小麦粉の方が美味しく健康的であるにもかかわらず、この種の小麦はほぼ完全に使われなくなりました。" },
        { en: "Some researchers wanted to bring back purple straw wheat.", ja: "一部の研究者たちは、パープルストローウィートを復活させたいと考えました。" },
        { en: "However, its seeds were not easy to obtain because there were only a few sources.", ja: "しかし、入手源がごくわずかしかなかったため、その種子を手に入れるのは容易ではありませんでした。" },
        { en: "The researchers finally managed to get a few grams of purple straw wheat seeds and planted them at Clemson University in South Carolina.", ja: "研究者たちはついに数グラムのパープルストローウィートの種子を手に入れ、サウスカロライナ州のクレムソン大学に植えました。" },
        { en: "They have been gradually increasing the amount of wheat that they can produce, although it is still not enough to make and sell flour.", ja: "彼らは生産できる小麦の量を徐々に増やしていますが、小麦粉を作って販売するにはまだ十分ではありません。" },
        { en: "Many chefs, bakers, and whiskey makers are looking forward to being able to use purple straw wheat in their products.", ja: "多くのシェフ、パン職人、ウイスキー製造者たちが、自分たちの製品にパープルストローウィートを使用できるようになることを楽しみにしています。" }
      ]
    },
    original: {
      title: "Carolina Gold Rice",
      content: `## Title: Carolina Gold Rice

Rice has played a significant role in the history of the southern United States. For more than two centuries, it was a major source of wealth for states like South Carolina. Among the various types of rice grown in the region, one variety stood out for its quality: Carolina Gold. This rice became famous around the world in the 18th and 19th centuries. However, producing it was difficult. The work relied heavily on human labor, and after the social changes following the Civil War, growing this labor-intensive crop became much harder for farm owners.

Carolina Gold rice was known for its beautiful golden outer shell and its unique flavor. It was sticky enough to be eaten with a fork but not as sticky as Asian rice varieties. This made it very popular in Europe, where it was considered a luxury item. Chefs valued it because it could be used in a wide variety of dishes, from simple sides to complex puddings. Despite its popularity, the production of Carolina Gold began to decline in the late 1800s due to a series of powerful storms that damaged the fields and the rise of other crops.

In the 20th century, farming became more mechanized, which caused further problems for Carolina Gold. This traditional plant grows very tall and has weak stems, making it easy for the wind to knock it over. Modern harvesting machines could not easily collect the fallen rice. As a result, farmers switched to new, shorter varieties of rice that were easier to harvest with machines and produced higher yields. By the mid-1900s, Carolina Gold had almost disappeared from commercial farms.

Recently, there has been a movement to revive this historic grain. In the 1980s, a doctor named Richard Schulze discovered some Carolina Gold seeds in a government seed bank. He decided to plant them on his property to bring the crop back to life. Since then, dedicated farmers have been working to grow the rice again. Although the amount produced is still small compared to modern rice, it is now available in some specialty stores. Food lovers and historians are delighted that this piece of culinary history has been saved from extinction.`,
      questions: `### Original Questions

**(1) What was one problem with growing Carolina Gold rice in the past?**
1. It required a large amount of physical work by people.
2. It could only be sold to customers within the United States.
3. It was often attacked by insects that came from Europe.
4. It did not taste as good as rice grown in other countries.

**(2) Why was Carolina Gold rice popular in Europe?**
1. It was much cheaper than other types of rice available there.
2. It had a unique texture and could be used in many recipes.
3. It had a golden color that looked like expensive jewelry.
4. It could be harvested in winter when other food was scarce.

**(3) Why did farmers stop growing Carolina Gold rice in the 20th century?**
1. The weather became too hot for the rice to grow properly.
2. They wanted to use the land to build factories instead of farms.
3. The plants were too tall and difficult for machines to harvest.
4. Doctors discovered that the rice was not good for people's health.

**(4) Richard Schulze helped to bring back Carolina Gold rice by**
1. inventing a new machine to harvest the rice more easily.
2. finding seeds in a bank and planting them on his land.
3. writing a book about the history of rice in South Carolina.
4. convincing the government to give money to rice farmers.

**(5) Which of the following statements is true about Carolina Gold rice?**
1. It is now the most widely grown type of rice in the world.
2. It was completely unknown outside of the United States until recently.
3. It has weak stems that make it easy for the wind to knock it over.
4. It is no longer sticky enough to be eaten with a fork.

---
**Answer Key:** (1) 1, (2) 2, (3) 3, (4) 2, (5) 3`,
      translations: [
        { en: "Rice has played a significant role in the history of the southern United States.", ja: "米は米国南部の歴史において重要な役割を果たしてきました。" },
        { en: "For more than two centuries, it was a major source of wealth for states like South Carolina.", ja: "2世紀以上にわたり、それはサウスカロライナ州のような州にとって主要な富の源でした。" },
        { en: "Among the various types of rice grown in the region, one variety stood out for its quality: Carolina Gold.", ja: "その地域で栽培された様々な種類の米の中で、ある品種がその品質の高さで際立っていました。カロライナ・ゴールドです。" },
        { en: "This rice became famous around the world in the 18th and 19th centuries.", ja: "この米は18世紀と19世紀に世界中で有名になりました。" },
        { en: "However, producing it was difficult.", ja: "しかし、それを生産することは困難でした。" },
        { en: "The work relied heavily on human labor, and after the social changes following the Civil War, growing this labor-intensive crop became much harder for farm owners.", ja: "その作業は人の手による労働力に大きく依存しており、南北戦争後の社会変化の後、この労働集約的な作物を栽培することは農場主にとって非常に難しくなりました。" },
        { en: "Carolina Gold rice was known for its beautiful golden outer shell and its unique flavor.", ja: "カロライナ・ゴールド米は、その美しい黄金色の外皮と独特の風味で知られていました。" },
        { en: "It was sticky enough to be eaten with a fork but not as sticky as Asian rice varieties.", ja: "それはフォークで食べられるほど粘り気がありましたが、アジアの米の品種ほど粘り気はありませんでした。" },
        { en: "This made it very popular in Europe, where it was considered a luxury item.", ja: "このため、ヨーロッパでは贅沢品と見なされ、非常に人気がありました。" },
        { en: "Chefs valued it because it could be used in a wide variety of dishes, from simple sides to complex puddings.", ja: "シンプルな付け合わせから複雑なプディングまで幅広い料理に使えるため、シェフたちはそれを高く評価しました。" },
        { en: "Despite its popularity, the production of Carolina Gold began to decline in the late 1800s due to a series of powerful storms that damaged the fields and the rise of other crops.", ja: "その人気にもかかわらず、畑に被害を与えた一連の強力な嵐や他の作物の台頭により、カロライナ・ゴールドの生産は1800年代後半に減少し始めました。" },
        { en: "In the 20th century, farming became more mechanized, which caused further problems for Carolina Gold.", ja: "20世紀になると農業はより機械化されましたが、これがカロライナ・ゴールドにとってさらなる問題を引き起こしました。" },
        { en: "This traditional plant grows very tall and has weak stems, making it easy for the wind to knock it over.", ja: "この伝統的な植物は非常に背が高く育ち、茎が弱いため、風で倒れやすいのです。" },
        { en: "Modern harvesting machines could not easily collect the fallen rice.", ja: "現代の収穫機械では、倒れた米を簡単に集めることができませんでした。" },
        { en: "As a result, farmers switched to new, shorter varieties of rice that were easier to harvest with machines and produced higher yields.", ja: "その結果、農家は機械で収穫しやすく収量も多い、新しい背の低い品種の米に切り替えました。" },
        { en: "By the mid-1900s, Carolina Gold had almost disappeared from commercial farms.", ja: "1900年代半ばまでに、カロライナ・ゴールドは商業農場からほぼ姿を消しました。" },
        { en: "Recently, there has been a movement to revive this historic grain.", ja: "最近、この歴史的な穀物を復活させようとする動きがあります。" },
        { en: "In the 1980s, a doctor named Richard Schulze discovered some Carolina Gold seeds in a government seed bank.", ja: "1980年代、リチャード・シュルツという医師が政府の種子銀行でカロライナ・ゴールドの種子を発見しました。" },
        { en: "He decided to plant them on his property to bring the crop back to life.", ja: "彼はその作物を生き返らせるために、自分の所有地にそれらを植えることに決めました。" },
        { en: "Since then, dedicated farmers have been working to grow the rice again.", ja: "それ以来、熱心な農家たちが再びその米を栽培するために尽力しています。" },
        { en: "Although the amount produced is still small compared to modern rice, it is now available in some specialty stores.", ja: "生産量は現代の米に比べればまだ少ないですが、現在では一部の専門店で入手可能です。" },
        { en: "Food lovers and historians are delighted that this piece of culinary history has been saved from extinction.", ja: "食通や歴史家たちは、この食文化の歴史の一部が絶滅から救われたことを喜んでいます。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** 2023-2 Purple Straw Wheat

### 1. 量的構造
- **総単語数:** 346 words (Target 350-400)
- **パラグラフ構成:**
  1. **Historical Context:** 米国南部での米栽培の歴史と労働問題による困難。
  2. **Characteristics:** カロライナ・ゴールドの特徴（味、粘り気）と欧州での人気。
  3. **Decline:** 機械化への不適合（背が高い、倒れやすい）と新品種への移行。
  4. **Revival:** 種子銀行での発見、復活への取り組み、現状。

### 2. 重要語彙 (Grade 2 Level)
- **significant:** 重要な
- **labor-intensive:** 労働集約的な
- **luxury item:** 贅沢品
- **mechanized:** 機械化された
- **yields:** 収穫量 (Topic specific)
- **seed bank:** 種子銀行
- **extinction:** 絶滅`,
      summary: `## 講師用：本文要約 (Instructor Summary)

かつて米国南部で「黄金の米」として栄えたカロライナ・ゴールド・ライスの盛衰と復活についての説明文です。労働力不足や機械化の波に押されて一度は消えかけましたが、熱心な人々の努力によって現代に蘇りました。

### 1. 第1段落 (歴史と課題)
米は米国南部の重要な作物であり、特にカロライナ・ゴールドは有名でした。しかし、その生産は多大な人手（労働力）を必要とし、南北戦争後の社会変化により栽培維持が困難になりました。

### 2. 第2段落 (特徴と人気)
美しい黄金色と独特の風味が特徴で、適度な粘り気があったため、ヨーロッパでは高級食材として人気を博しました。シェフたちも多様な料理に使える点を評価していました。

### 3. 第3段落 (衰退の理由)
20世紀の機械化が決定打となりました。この米は背が高く風で倒れやすいため機械での収穫が難しく、農家は機械化に適した背が低く収量の多い新品種へと切り替えました。

### 4. 第4段落 (復活)
1980年代、種子銀行で種が発見されたことをきっかけに復活プロジェクトが始まりました。生産量はまだ少ないものの、現在は専門店で入手可能になり、食文化の遺産として守られています。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Purple Straw Wheat (過去問) | Carolina Gold Rice (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 特定の小麦品種の歴史 | 特定の米品種の歴史 | 米国の伝統作物の盛衰 |
| **構造** | 4パラグラフ・4設問 | 4パラグラフ・**5設問** | 歴史→特徴→衰退→復活の流れ |
| **設問1** | 18世紀後半の出来事 | 過去の栽培の問題点（労働） | 第1段落の「困難・課題」への焦点 |
| **設問2** | 優れた点（耐寒性） | 人気の理由（食感・用途） | 第2段落の「品種の特性・利点」 |
| **設問3** | 栽培停止の理由（新品種） | 栽培停止の理由（機械化不適合） | 第3段落の「近代化による淘汰」 |
| **設問4** | 研究者の状況（種不足） | 復活の契機（種子銀行） | 第4段落の「復活のプロセス」 |
| **設問5** | (なし) | 内容一致（特徴・現状） | **拡張要素**: 全体の詳細理解を問う |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Purple Straw Wheat (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 病害虫への耐性と、収穫時期（冬越し）という生物学的な強みがメイン。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Decline</span> 新品種の方が「安く大量に作れる」という経済合理性が衰退の理由。

* **Carolina Gold Rice (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 味や食感という品質面と、労働集約的という栽培プロセスがメイン。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Decline</span> 機械化（コンバイン等）に対応できない「背の高さ」という物理的特性が衰退の理由。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 過去問は「何が起きたか（病気の到来）」という事実確認。オリジナルは「何が問題だったか（重労働）」という要因特定。
* **Q2:** 過去問は「栽培上の利点（冬に育つ）」を問う。オリジナルは「消費上の利点（食感・用途）」を問うが、どちらも「なぜ選ばれたか」というポジティブな理由。
* **Q3:** 過去問・オリジナル共に「なぜ廃れたか」を問う。選択肢に「機械化」「収量」「病気」などのもっともらしい理由を配置し、本文の因果関係を正確に読めているか試す設計。
* **Q4:** 過去問は「研究者は少量の種しか得られなかった」という苦労点。オリジナルは「種子銀行で見つかったおかげで復活した」という具体的な経緯。
* **Q5:** **(追加)** 過去問にはない5問目を設定。本文全体または特定のパラグラフから「正しい記述」を選ぶ内容一致問題を作成し、より深い読解力を測定。正解は第3段落の「背が高く風に弱い」という特性の再確認（Q3と関連するが別角度）や、現在の状況などを問うもの。今回は第3段落の記述と一致する選択肢を正解とした。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>The work <b>relied</b> heavily on human labor, and after the social changes following the Civil War, growing this labor-intensive crop <b>became</b> much harder for farm owners.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> The work / growing this labor-intensive crop (動名詞句)</li>
    <li><b>動詞 (V):</b> relied / became</li>
    <li><b>修飾語 (M):</b> heavily on human labor / much harder for farm owners</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"relied heavily on human labor"（人の労働力に大きく依存していた）という記述が、選択肢1の "required a large amount of physical work by people" と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>Chefs <b>valued</b> it because it could be used in a wide variety of dishes, from simple sides to complex puddings.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Chefs</li>
    <li><b>動詞 (V):</b> valued</li>
    <li><b>接続詞節:</b> because it could be used in a wide variety of dishes...</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"could be used in a wide variety of dishes"（幅広い料理に使えた）という部分が、選択肢2の "could be used in many recipes" と言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>This traditional plant <b>grows</b> very tall and <b>has</b> weak stems, making it easy for the wind to knock it over. Modern harvesting machines <b>could not easily collect</b> the fallen rice.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> This traditional plant / Modern harvesting machines</li>
    <li><b>動詞 (V):</b> grows / has / could not easily collect</li>
    <li><b>結果(分詞構文):</b> making it easy for the wind to knock it over</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>植物が背が高く（tall）、機械（machines）で収穫しにくいという論理構成が、選択肢3の "plants were too tall and difficult for machines to harvest" と完全に一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>In the 1980s, a doctor named Richard Schulze <b>discovered</b> some Carolina Gold seeds in a government seed bank. He <b>decided</b> to plant them on his property to bring the crop back to life.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> a doctor named Richard Schulze / He</li>
    <li><b>動詞 (V):</b> discovered / decided</li>
    <li><b>目的語 (O):</b> some Carolina Gold seeds / to plant them...</li>
    <li><b>場所 (M):</b> in a government seed bank</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>種子銀行（seed bank）で種が見つかり、そこから栽培が再開されたという流れが、選択肢2の "finding seeds in a bank and planting them on his land" と合致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
<blockquote>This traditional plant <b>grows</b> very tall and <b>has</b> weak stems, making it easy for the wind to knock it over.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> This traditional plant</li>
    <li><b>動詞 (V):</b> grows / has</li>
    <li><b>補語/目的語:</b> very tall / weak stems</li>
    <li><b>結果(分詞構文):</b> making it easy for the wind to knock it over</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"weak stems"（弱い茎）と "easy for the wind to knock it over"（風で倒れやすい）という記述が、選択肢3の "It has weak stems that make it easy for the wind to knock it over" と完全に一致します。</p>
</div>`
    }
  },
  "2023-2-2": {
    past: {
      title: "Venice’s Books",
      content: `## Title: Venice’s Books

During the Middle Ages, the Italian city of Venice was famous for international trade. Not only was the city’s location important, but also there were fewer laws controlling people’s behavior than in other parts of Europe. This freedom attracted writers, artists, and craftspeople to the city. Following the invention of printing machines in the 15th century, these people combined their abilities to make Venice the center of the printing and bookmaking industry in Europe. This tradition of making high-quality books by hand survives in the city to this day.

Paolo Olbi is helping to keep this tradition alive. He makes use of techniques that have existed for centuries to produce beautiful books, diaries, and photo albums. The paper inside them is cut by hand, and their covers are made of hand-printed paper, leather, wood, and even a kind of Italian glass called Murano. When Olbi began learning his craft in 1962, there were about 20 bookstores in Venice that made handmade books. Now, though, Olbi’s store is one of only three such places that remain.

One of Olbi’s heroes is a man called Aldus Manutius. Manutius founded a printing company in 1494 that became one of the most famous printing companies in Venice. Until the late 15th century, books were large, heavy, and very expensive. They were mostly about religion and law. Manutius developed techniques to produce smaller, lighter, and cheaper books. Moreover, he printed novels and books about art and philosophy. These developments made books more popular and easier to buy for ordinary people.

Olbi has a picture of Manutius on the wall of his store. Like Manutius, he loves books and believes they should be beautiful. Over the years, Olbi has taught his skills to many people. In 2018, a former student invited Olbi to display his books at an exhibition of handmade objects. This gave Olbi a chance to get more people interested in traditional bookmaking. Olbi wants to expand his store into a cultural center where tourists can see how he makes books and young people can learn his techniques. By doing so, he hopes to prevent the tradition of bookmaking in Venice from being lost.`,
      questions: `### Questions

**(34) What is one reason that writers, artists, and craftspeople were attracted to Venice?**
1. They could get part-time jobs in the bookmaking industry.
2. They could sell their work at higher prices in the city.
3. The city’s location provided inspiration for their work.
4. The city allowed people to live more freely than other places.

**(35) Paolo Olbi is a bookmaker who**
1. uses traditional methods to make his products.
2. owns about 20 bookstores in the city of Venice.
3. has developed a new technique for printing on glass.
4. tries to use recycled materials to produce books.

**(36) Aldus Manutius helped to increase the popularity of books by**
1. opening schools in Venice where people could learn to read.
2. printing more and more books about topics such as religion and law.
3. writing a series of novels about artists and philosophers in Venice.
4. finding ways to reduce the size, weight, and prices of books.

**(37) What is one thing that Olbi would like to do?**
1. Find a picture of Manutius that was lost many years ago.
2. Meet his former students to find out what they have been doing.
3. Create a place where more people can learn about bookmaking.
4. Write a book about the life and achievements of Manutius.

**(38) Which of the following statements is true?**
1. One of the most famous printing companies in Venice was established in 1494.
2. The number of stores in Venice making handmade books has increased since 1962.
3. Olbi holds an annual exhibition in Venice to display the work of his students.
4. Laws to stop international trade were introduced in Venice in the Middle Ages.

---
**Answer Key:** (34) 4, (35) 1, (36) 4, (37) 3, (38) 1`,
      translations: [
        { en: "During the Middle Ages, the Italian city of Venice was famous for international trade.", ja: "中世の間、イタリアの都市ヴェネツィアは国際貿易で有名でした。" },
        { en: "Not only was the city’s location important, but also there were fewer laws controlling people’s behavior than in other parts of Europe.", ja: "都市の場所が重要であっただけでなく、ヨーロッパの他の地域に比べて人々の行動を統制する法律が少なかったのです。" },
        { en: "This freedom attracted writers, artists, and craftspeople to the city.", ja: "この自由が、作家、芸術家、職人たちをこの都市に引き寄せました。" },
        { en: "Following the invention of printing machines in the 15th century, these people combined their abilities to make Venice the center of the printing and bookmaking industry in Europe.", ja: "15世紀の印刷機の発明に続いて、これらの人々は自分たちの能力を結集し、ヴェネツィアをヨーロッパにおける印刷および製本産業の中心地にしました。" },
        { en: "This tradition of making high-quality books by hand survives in the city to this day.", ja: "高品質な本を手作業で作るというこの伝統は、今日までこの都市に残っています。" },
        { en: "Paolo Olbi is helping to keep this tradition alive.", ja: "パオロ・オルビはこの伝統を存続させる手助けをしています。" },
        { en: "He makes use of techniques that have existed for centuries to produce beautiful books, diaries, and photo albums.", ja: "彼は何世紀にもわたって存在してきた技術を駆使して、美しい本、日記、フォトアルバムを制作しています。" },
        { en: "The paper inside them is cut by hand, and their covers are made of hand-printed paper, leather, wood, and even a kind of Italian glass called Murano.", ja: "中の紙は手で裁断され、表紙は手刷りの紙、革、木、さらにはムラーノと呼ばれるイタリアのガラスで作られています。" },
        { en: "When Olbi began learning his craft in 1962, there were about 20 bookstores in Venice that made handmade books.", ja: "オルビが1962年に技術を学び始めたとき、ヴェネツィアには手製本を作る書店が約20軒ありました。" },
        { en: "Now, though, Olbi’s store is one of only three such places that remain.", ja: "しかし現在、オルビの店はそのような場所として残っているわずか3軒のうちの1つです。" },
        { en: "One of Olbi’s heroes is a man called Aldus Manutius.", ja: "オルビの英雄の一人は、アルド・マヌージオという男性です。" },
        { en: "Manutius founded a printing company in 1494 that became one of the most famous printing companies in Venice.", ja: "マヌージオは1494年に印刷会社を設立し、それはヴェネツィアで最も有名な印刷会社の一つとなりました。" },
        { en: "Until the late 15th century, books were large, heavy, and very expensive.", ja: "15世紀後半まで、本は大きく、重く、非常に高価でした。" },
        { en: "They were mostly about religion and law.", ja: "それらは主に宗教や法律に関するものでした。" },
        { en: "Manutius developed techniques to produce smaller, lighter, and cheaper books.", ja: "マヌージオは、より小さく、より軽く、より安価な本を生産する技術を開発しました。" },
        { en: "Moreover, he printed novels and books about art and philosophy.", ja: "さらに、彼は小説や芸術、哲学に関する本も印刷しました。" },
        { en: "These developments made books more popular and easier to buy for ordinary people.", ja: "これらの進歩により、本はより人気が高まり、一般の人々にとって買い求めやすいものとなりました。" },
        { en: "Olbi has a picture of Manutius on the wall of his store.", ja: "オルビは店の壁にマヌージオの写真を飾っています。" },
        { en: "Like Manutius, he loves books and believes they should be beautiful.", ja: "マヌージオと同じように、彼は本を愛しており、本は美しいものであるべきだと信じています。" },
        { en: "Over the years, Olbi has taught his skills to many people.", ja: "長年にわたり、オルビは自分の技術を多くの人々に教えてきました。" },
        { en: "In 2018, a former student invited Olbi to display his books at an exhibition of handmade objects.", ja: "2018年、かつての教え子が、手作り品の展覧会に本を展示するようオルビを招待しました。" },
        { en: "This gave Olbi a chance to get more people interested in traditional bookmaking.", ja: "これはオルビにとって、より多くの人々に伝統的な製本に興味を持ってもらう機会となりました。" },
        { en: "Olbi wants to expand his store into a cultural center where tourists can see how he makes books and young people can learn his techniques.", ja: "オルビは自分の店を、観光客が本作りを見学でき、若者が技術を学べる文化センターへと拡張したいと考えています。" },
        { en: "By doing so, he hopes to prevent the tradition of bookmaking in Venice from being lost.", ja: "そうすることで、彼はヴェネツィアの製本の伝統が失われるのを防ぎたいと願っています。" }
      ]
    },
    original: {
      title: "Cremona’s Violins",
      content: `## Title: Cremona’s Violins

During the 16th century, the small Italian city of Cremona became the violin capital of the world. The city was located near the Alps, where dense forests contained special spruce and maple trees. The wood from these trees had the perfect density for building string instruments. This access to high-quality materials, combined with a rich culture of music, attracted talented craftspeople to the city. Following the success of early masters like Andrea Amati, these people shared their secrets to make Cremona the center of violin production in Europe. This tradition of making world-class violins by hand survives in the city to this day.

Leo Bianchi is helping to keep this tradition alive. He makes use of techniques that have existed for centuries to produce beautiful violins, violas, and cellos. The wood is carefully selected and aged naturally, and the parts are carved using simple hand tools. Finally, the instruments are covered in a special varnish made from natural ingredients. When Bianchi began learning his craft in 1985, many young people were leaving Cremona to find modern jobs. Now, however, there is renewed interest, and Bianchi is one of the masters leading this revival.

One of Bianchi’s heroes is Antonio Stradivari. Stradivari established his own workshop in 1680 and became the most skilled violin maker in history. Until that time, violins were often used for small chamber music and had a softer sound. Stradivari developed techniques to change the shape of the body and the flatness of the arch. Moreover, he created a unique varnish that improved the tone. These developments produced a powerful sound that could fill large concert halls, making the violin a leading solo instrument.

Bianchi hangs a copy of a Stradivari design on the wall of his workshop. Like Stradivari, he dedicates his life to the pursuit of perfect sound. Over the years, Bianchi has trained several apprentices who now have their own shops. Last year, the city council invited Bianchi to give a speech at an international music festival. This gave Bianchi a chance to get more people interested in the art of luthiery. Bianchi wants to expand his workshop into a training center where visitors can watch him work and students can learn his methods. By doing so, he hopes to prevent the secrets of Cremona from being lost.`,
      questions: `### Original Questions

**(1) What is one reason that craftspeople were attracted to Cremona?**
1. The city had fewer taxes on businesses than other Italian cities.
2. The city was located near forests that provided excellent wood.
3. The city was famous for having the best opera houses in Europe.
4. The city offered free workshops for people to learn how to make tools.

**(2) Leo Bianchi is a violin maker who**
1. uses modern machines to produce instruments quickly.
2. focuses on making cheap violins for students.
3. uses traditional methods and tools to make instruments.
4. invented a new type of varnish made from plastic.

**(3) Antonio Stradivari helped to improve the violin by**
1. making the instrument smaller so it was easier to hold.
2. writing music specifically for the violins he created.
3. changing the shape and varnish to produce a more powerful sound.
4. using a new type of metal to make the strings stronger.

**(4) What is one thing that Bianchi would like to do?**
1. Open a training center to teach his methods to others.
2. Sell his workshop and retire to the countryside.
3. Discover the lost diary of Antonio Stradivari.
4. Move his business to a larger city like Rome or Milan.

**(5) Which of the following statements is true?**
1. Antonio Stradivari opened his own workshop in 1680.
2. Leo Bianchi is the only violin maker left in Cremona today.
3. Violins made before Stradivari were too loud for small rooms.
4. The city of Cremona is located far away from any forests.

---
**Answer Key:** (1) 2, (2) 3, (3) 3, (4) 1, (5) 1`,
      translations: [
        { en: "During the 16th century, the small Italian city of Cremona became the violin capital of the world.", ja: "16世紀の間、イタリアの小さな都市クレモナは、世界のバイオリンの首都となりました。" },
        { en: "The city was located near the Alps, where dense forests contained special spruce and maple trees.", ja: "その都市はアルプス山脈の近くに位置しており、そこには特別なトウヒやカエデの木が生い茂る深い森がありました。" },
        { en: "The wood from these trees had the perfect density for building string instruments.", ja: "これらの木から採れる木材は、弦楽器を作るのに完璧な密度を持っていました。" },
        { en: "This access to high-quality materials, combined with a rich culture of music, attracted talented craftspeople to the city.", ja: "この高品質な素材へのアクセスは、豊かな音楽文化と相まって、才能ある職人たちを都市に引き寄せました。" },
        { en: "Following the success of early masters like Andrea Amati, these people shared their secrets to make Cremona the center of violin production in Europe.", ja: "アンドレア・アマティのような初期の巨匠たちの成功に続き、これらの人々は秘密を共有し、クレモナをヨーロッパにおけるバイオリン生産の中心地にしました。" },
        { en: "This tradition of making world-class violins by hand survives in the city to this day.", ja: "世界クラスのバイオリンを手作業で作るというこの伝統は、今日までこの都市に残っています。" },
        { en: "Leo Bianchi is helping to keep this tradition alive.", ja: "レオ・ビアンキはこの伝統を存続させる手助けをしています。" },
        { en: "He makes use of techniques that have existed for centuries to produce beautiful violins, violas, and cellos.", ja: "彼は何世紀にもわたって存在してきた技術を駆使して、美しいバイオリン、ビオラ、チェロを制作しています。" },
        { en: "The wood is carefully selected and aged naturally, and the parts are carved using simple hand tools.", ja: "木材は慎重に選ばれて自然乾燥され、部品はシンプルな手道具を使って彫られます。" },
        { en: "Finally, the instruments are covered in a special varnish made from natural ingredients.", ja: "最後に、楽器は天然成分で作られた特別なニスで覆われます。" },
        { en: "When Bianchi began learning his craft in 1985, many young people were leaving Cremona to find modern jobs.", ja: "ビアンキが1985年に技術を学び始めたとき、多くの若者は現代的な仕事を見つけるためにクレモナを離れていました。" },
        { en: "Now, however, there is renewed interest, and Bianchi is one of the masters leading this revival.", ja: "しかし現在、関心が再び高まっており、ビアンキはこの復活を牽引する巨匠の一人です。" },
        { en: "One of Bianchi’s heroes is Antonio Stradivari.", ja: "ビアンキの英雄の一人は、アントニオ・ストラディバリです。" },
        { en: "Stradivari established his own workshop in 1680 and became the most skilled violin maker in history.", ja: "ストラディバリは1680年に自身の工房を設立し、歴史上最も熟練したバイオリン製作者となりました。" },
        { en: "Until that time, violins were often used for small chamber music and had a softer sound.", ja: "その時まで、バイオリンはしばしば小規模な室内楽に使われ、より柔らかい音色を持っていました。" },
        { en: "Stradivari developed techniques to change the shape of the body and the flatness of the arch.", ja: "ストラディバリは、ボディの形状やアーチの平らさを変える技術を開発しました。" },
        { en: "Moreover, he created a unique varnish that improved the tone.", ja: "さらに、彼は音色を向上させる独自のニスを作り出しました。" },
        { en: "These developments produced a powerful sound that could fill large concert halls, making the violin a leading solo instrument.", ja: "これらの進歩により、大きなコンサートホールを満たすことのできる力強い音が生まれ、バイオリンは主要な独奏楽器となりました。" },
        { en: "Bianchi hangs a copy of a Stradivari design on the wall of his workshop.", ja: "ビアンキは工房の壁にストラディバリの設計図の写しを掛けています。" },
        { en: "Like Stradivari, he dedicates his life to the pursuit of perfect sound.", ja: "ストラディバリと同じように、彼は完璧な音の追求に人生を捧げています。" },
        { en: "Over the years, Bianchi has trained several apprentices who now have their own shops.", ja: "長年にわたり、ビアンキは何人かの弟子を育て、彼らは現在自分の店を持っています。" },
        { en: "Last year, the city council invited Bianchi to give a speech at an international music festival.", ja: "昨年、市議会は国際音楽祭でスピーチをするようビアンキを招待しました。" },
        { en: "This gave Bianchi a chance to get more people interested in the art of luthiery.", ja: "これはビアンキにとって、より多くの人々に弦楽器製作の芸術に興味を持ってもらう機会となりました。" },
        { en: "Bianchi wants to expand his workshop into a training center where visitors can watch him work and students can learn his methods.", ja: "ビアンキは自分の工房を、訪問者が作業を見学でき、学生が技術を学べるトレーニングセンターへと拡張したいと考えています。" },
        { en: "By doing so, he hopes to prevent the secrets of Cremona from being lost.", ja: "そうすることで、彼はクレモナの秘密が失われるのを防ぎたいと願っています。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** 2023-2 Venice’s Books

### 1. 量的構造
- **総単語数:** 346 words (Target 350-400)
- **パラグラフ構成:**
  1. **Historical Context:** 都市の地理的要因（木材へのアクセス）と職人が集まった理由。
  2. **Modern Artisan:** 現代の職人（Leo Bianchi）の伝統的手法と現状。
  3. **Historical Hero:** 偉人（Stradivari）の技術革新（音量・形状）と影響。
  4. **Future/Legacy:** 職人の目標（教育センター設立）と伝統保存への願い。

### 2. 重要語彙 (Grade 2 Level)
- **craftspeople:** 職人たち
- **access to:** ～へのアクセス/入手手段
- **renewed interest:** 新たな/戻ってきた関心
- **ingredients:** 成分/材料
- **fill (a hall):** （音などが）～を満たす
- **apprentices:** 弟子/見習い
- **pursuit:** 追求`,
      summary: `## 講師用：本文要約 (Instructor Summary)

イタリアのクレモナにおけるバイオリン製作の伝統についての文章です。16世紀に始まったこの伝統は、ストラディバリなどの巨匠によって洗練され、現在もレオ・ビアンキのような現代の職人によって受け継がれています。

### 1. 第1段落 (歴史的背景)
16世紀、クレモナはバイオリン製作の中心地となりました。アルプス近くの森林から良質な木材（トウヒやカエデ）が入手できたことが、多くの才能ある職人を惹きつけた主な理由です。

### 2. 第2段落 (現代の職人)
レオ・ビアンキは、手道具や天然のニスを使用する数世紀前の技術を守り続けています。一時期は後継者不足でしたが、現在は伝統への関心が復活しつつあります。

### 3. 第3段落 (歴史的英雄)
アントニオ・ストラディバリ（1680年創業）は、バイオリンの形状やニスを改良しました。これにより、大きなコンサートホールでも響く力強い音が生まれ、バイオリンは主要な楽器となりました。

### 4. 第4段落 (未来への展望)
ビアンキはストラディバリを尊敬しており、自身の技術を次世代に伝えたいと考えています。彼は工房をトレーニングセンターに拡張し、観光客や学生に製作過程を見せることで、伝統が失われるのを防ごうとしています。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Venice’s Books (過去問) | Cremona’s Violins (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | ベネチアの製本技術 | クレモナのバイオリン製作 | イタリアの都市・伝統工芸・職人 |
| **構造** | 4パラグラフ・5設問 | 4パラグラフ・5設問 | 歴史→現代職人→歴史的偉人→未来展望 |
| **設問1** | 人が集まった理由（自由な法律） | 人が集まった理由（木材・場所） | 第1段落の「繁栄の要因」 |
| **設問2** | 現代職人の手法（伝統的） | 現代職人の手法（伝統的） | 第2段落の「現代における継承」 |
| **設問3** | 偉人の功績（小型化・安価化） | 偉人の功績（大音量化・改良） | 第3段落の「技術革新の内容」 |
| **設問4** | 職人の目標（文化センター） | 職人の目標（教育センター） | 第4段落の「将来のビジョン」 |
| **設問5** | 内容一致（会社設立年） | 内容一致（工房設立年） | 特定の事実（年代・歴史）の確認 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Venice’s Books (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「自由な気風」が人を集め、印刷技術によって本を「大衆化（安く・軽く）」したイノベーションに焦点。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Key Figure</span> Aldus Manutius (出版者)

* **Cremona’s Violins (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「素材（木材）へのアクセス」が人を集め、改良によって楽器の「性能（音量・音質）」を高めたイノベーションに焦点。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Key Figure</span> Antonio Stradivari (製作者)

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 過去問は「社会的理由（法律）」、オリジナルは「地理的理由（資源）」。どちらも第1段落の因果関係（Why attracted?）を問う。
* **Q2:** 過去問は「伝統的手法を使う（uses traditional methods）」が正解。オリジナルも同様に「伝統的手法と道具を使う」を選択させる。
* **Q3:** 過去問は「本を小さく安くした」という具体的な変化を問う。オリジナルは「音を大きく強力にした」という具体的な変化を問う。
* **Q4:** 過去問は「文化センターにして教えたい」。オリジナルも「トレーニングセンターにして教えたい」。表現をパラフレーズさせている。
* **Q5:** 過去問は「1494年に設立された（本文：founded ... in 1494）」という事実一致。オリジナルも「1680年に工房を開いた（本文：established ... in 1680）」という年代の一致を確認する問題。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>The city <b>was located</b> near the Alps, where dense forests <b>contained</b> special spruce and maple trees. ... This access to high-quality materials ... <b>attracted</b> talented craftspeople to the city.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> The city / This access to high-quality materials</li>
    <li><b>動詞 (V):</b> was located / attracted</li>
    <li><b>関係詞節:</b> where dense forests contained... (Alpsを修飾)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"access to high-quality materials"（高品質な素材へのアクセス）が "attracted"（引き寄せた）の主語になっています。これが選択肢2の "located near forests that provided excellent wood" と論理的に一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>He <b>makes use of</b> techniques that <b>have existed</b> for centuries to produce beautiful violins... the parts <b>are carved</b> using simple hand tools.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> He</li>
    <li><b>動詞 (V):</b> makes use of (利用する)</li>
    <li><b>目的語 (O):</b> techniques</li>
    <li><b>関係詞節:</b> that have existed for centuries (数世紀存在している＝伝統的な)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"techniques that have existed for centuries" や "using simple hand tools" という記述が、選択肢3の "uses traditional methods and tools" と完全に合致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>Stradivari <b>developed</b> techniques to change the shape of the body ... [and] <b>created</b> a unique varnish that improved the tone. These developments <b>produced</b> a powerful sound...</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Stradivari</li>
    <li><b>動詞 (V):</b> developed / created</li>
    <li><b>目的語 (O):</b> techniques / a unique varnish</li>
    <li><b>結果:</b> produced a powerful sound</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"change the shape"（形状を変える）と "varnish that improved the tone"（音色を良くするニス）を行い、その結果 "powerful sound"（力強い音）になったという流れが、選択肢3の記述と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>Bianchi <b>wants to expand</b> his workshop into a training center where visitors <b>can watch</b> him work and students <b>can learn</b> his methods.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Bianchi</li>
    <li><b>動詞 (V):</b> wants to expand</li>
    <li><b>目的語 (O):</b> his workshop (into a training center)</li>
    <li><b>関係副詞節:</b> where visitors can watch ... and students can learn...</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"training center where ... students can learn his methods" という記述が、選択肢1の "Open a training center to teach his methods to others" の直接的な根拠となります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
<blockquote>Stradivari <b>established</b> his own workshop in 1680 and <b>became</b> the most skilled violin maker in history.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Stradivari</li>
    <li><b>動詞 (V):</b> established</li>
    <li><b>目的語 (O):</b> his own workshop</li>
    <li><b>時:</b> in 1680</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"established"（設立した）は "opened"（開いた）と言い換え可能です。年代（1680）と行動が、選択肢1の "Antonio Stradivari opened his own workshop in 1680" と完全に一致します。</p>
</div>`
    }
  },
  "2023-1-1": {
    past: {
      title: "An Extraordinary Machine",
      content: `## Title: An Extraordinary Machine

Most of the machines that people in developed nations use were invented during the last 200 years. They make tasks easier for people and give them more time for other tasks and for leisure. However, which of these machines has changed society the most? Even though people spend more time with their TVs, computers, and smartphones, some historians argue that the impact of these inventions has been small compared with that of washing machines.

Before washing machines, clothes and sheets were washed by hand. For most of history, this has involved carrying the laundry to a river or a lake, wetting it, and rubbing it with rocks, sand, or soap to remove the dirt. Then, the laundry had to be put in water again, and the extra water was usually removed to make drying easier. Even if people had water in their homes, the laundry would have to be rubbed against a special board or hit with pieces of wood to make it clean. It was hard work that took a long time.

The first washing machines were operated by hand, and they still required a lot of hard work. Discovering how to use electricity to power these machines was a challenge because the combination of water and electricity is very dangerous. However, during the first half of the 20th century, inventors created electric machines that were able to automatically do most of the steps involved in washing. Before long, these machines became common in homes in wealthier parts of the world.

Automatic washing machines gave people more time and energy for other activities than any other new technology did. They used some of this extra time and energy to study and teach their children. This, in turn, led to improvements in the quality of everyone’s lives in the places where washing machines became common. Even today, many people in the world still wash their clothes by hand. This means that, over the next few decades, washing machines will probably continue to make a big difference to the lives of billions of humans.`,
      questions: `### Questions

**(30) What do some historians say about the invention of washing machines?**
1. It happened due to an important change in society.
2. It led to the development of TVs, computers, and smartphones.
3. It has had a major impact on the natural environment.
4. It has had a greater effect on society than other modern inventions.

**(31) Cleaning clothes and sheets without washing machines was hard work because**
1. the process of doing laundry involved several different stages.
2. the soap used to wash laundry had to be prepared by hand.
3. people had to travel long distances in order to dry their laundry.
4. people who did it had to wash many items to earn enough money.

**(32) What was one challenge faced by people trying to invent electric washing machines?**
1. Many people thought that they would not be as effective as washing laundry by hand.
2. The use of electricity was limited to a few homes in wealthier parts of the world.
3. They could not discover how to make a machine to do all the steps involved in washing.
4. Machines that involve both electricity and water can be very unsafe to work with.

**(33) Washing machines have allowed people to**
1. spend more time teaching themselves and their children.
2. use their energy for volunteer activities in their communities.
3. invent other machines to carry out tasks in the home.
4. live in parts of the world where there are many rivers and lakes.

---
**Answer Key:** 4, 1, 4, 1`,
      translations: [
        { en: "Most of the machines that people in developed nations use were invented during the last 200 years.", ja: "先進国の人々が使用している機械のほとんどは、過去200年の間に発明された。" },
        { en: "They make tasks easier for people and give them more time for other tasks and for leisure.", ja: "それらは人々にとって作業をより容易にし、他の作業や娯楽のためのより多くの時間を与えている。" },
        { en: "However, which of these machines has changed society the most?", ja: "しかし、これらの機械のうちどれが社会を最も大きく変えたのだろうか。" },
        { en: "Even though people spend more time with their TVs, computers, and smartphones, some historians argue that the impact of these inventions has been small compared with that of washing machines.", ja: "人々はテレビやコンピュータ、スマートフォンとより多くの時間を過ごしているにもかかわらず、一部の歴史家は、これらの発明の影響は洗濯機の影響に比べれば小さいと主張している。" },
        { en: "Before washing machines, clothes and sheets were washed by hand.", ja: "洗濯機が登場する前、衣服やシーツは手で洗われていた。" },
        { en: "For most of history, this has involved carrying the laundry to a river or a lake, wetting it, and rubbing it with rocks, sand, or soap to remove the dirt.", ja: "歴史の大部分において、これには洗濯物を川や湖に運び、濡らし、汚れを落とすために岩や砂、あるいは石鹸でこすることが含まれていた。" },
        { en: "Then, the laundry had to be put in water again, and the extra water was usually removed to make drying easier.", ja: "その後、洗濯物は再び水につけられなければならず、乾燥しやすくするために余分な水分は通常取り除かれた。" },
        { en: "Even if people had water in their homes, the laundry would have to be rubbed against a special board or hit with pieces of wood to make it clean.", ja: "たとえ家に水があったとしても、洗濯物はきれいにするために専用の板にこすりつけられたり、木の棒で叩かれたりしなければならなかった。" },
        { en: "It was hard work that took a long time.", ja: "それは長い時間を要する重労働であった。" },
        { en: "The first washing machines were operated by hand, and they still required a lot of hard work.", ja: "最初の洗濯機は手動で操作され、依然として多くの重労働を必要とした。" },
        { en: "Discovering how to use electricity to power these machines was a challenge because the combination of water and electricity is very dangerous.", ja: "水と電気の組み合わせは非常に危険であるため、これらの機械を動かすために電気をどのように使用するかを発見することは困難であった。" },
        { en: "However, during the first half of the 20th century, inventors created electric machines that were able to automatically do most of the steps involved in washing.", ja: "しかし、20世紀前半に、発明家たちは洗濯に関わる手順のほとんどを自動的に行うことができる電気機械を作り出した。" },
        { en: "Before long, these machines became common in homes in wealthier parts of the world.", ja: "まもなく、これらの機械は世界の裕福な地域の家庭で一般的になった。" },
        { en: "Automatic washing machines gave people more time and energy for other activities than any other new technology did.", ja: "全自動洗濯機は、他のどの新技術よりも、他の活動のための時間とエネルギーを人々に与えた。" },
        { en: "They used some of this extra time and energy to study and teach their children.", ja: "彼らはこの余分な時間とエネルギーの一部を、勉強や子供たちへの教育に使った。" },
        { en: "This, in turn, led to improvements in the quality of everyone’s lives in the places where washing machines became common.", ja: "このことは、結果として、洗濯機が普及した場所におけるすべての人の生活の質の向上につながった。" },
        { en: "Even today, many people in the world still wash their clothes by hand.", ja: "今日でも、世界の多くの人々は依然として手で服を洗っている。" },
        { en: "This means that, over the next few decades, washing machines will probably continue to make a big difference to the lives of billions of humans.", ja: "このことは、今後数十年にわたり、洗濯機がおそらく何十億もの人間の生活に大きな違いをもたらし続けるであろうことを意味している。" }
      ]
    },
    original: {
      title: "The Cooling Revolution",
      content: `## Title: The Cooling Revolution

Most of the technologies that define modern life, such as the internet and airplanes, have connected the world in amazing ways. They allow people to communicate instantly and travel quickly across the globe. However, some experts believe that a quiet machine found in almost every kitchen has had an even bigger effect on human health and population growth. This machine is the refrigerator. While smartphones allow communication, the refrigerator completely changed how humans eat and survive, yet its impact is often overlooked compared to digital devices.

Before the invention of the refrigerator, preserving food was a constant and difficult struggle. For thousands of years, people relied on traditional methods like drying, smoking, or salting meat to keep it from spoiling. In the 19th century, people in cities often used "iceboxes," which were wooden cabinets lined with metal. To make these work, large blocks of natural ice had to be cut from frozen lakes in winter and delivered to homes by horse and wagon. This process was physically demanding and expensive. Furthermore, without a reliable way to keep food cool, families had to go to the market almost every day to buy fresh ingredients, and eating spoiled food often led to serious illnesses.

The first machines designed to cool air were developed in the 19th century, but they were huge, heavy, and mostly used in large factories or breweries. Creating a small, safe, and affordable fridge for the average home was a significant challenge. Early home versions used dangerous gases that could leak and cause serious harm to family members while they slept. It was not until the 1920s and 1930s that safer cooling liquids were discovered and electric motors became smaller and more reliable. Once these safety issues were solved, the electric refrigerator quickly became a standard appliance in households across wealthy nations.

The spread of the refrigerator revolutionized daily life and society. It allowed people to store fresh fruits, vegetables, and dairy products for days or weeks, which led to much better nutrition and taller, healthier populations. It also freed people, especially women, from the daily chore of shopping for food, allowing them more time for other activities. Today, refrigeration is not just about food; it is essential for storing medicines and vaccines. As these machines become more energy-efficient and available in developing nations, they will continue to save millions of lives by preventing hunger and disease.`,
      questions: `### Original Questions

**(1) What do some experts believe about the refrigerator?**
1. It is more important for communication than smartphones are.
2. It has had a greater impact on health than many other modern technologies.
3. It was invented before the internet and airplanes were created.
4. It connects people around the world more effectively than airplanes do.

**(2) Before refrigerators were common, people faced a problem because**
1. there were no markets where they could buy fresh ingredients.
2. they did not know how to dry or smoke meat to keep it for a long time.
3. getting the ice needed to keep food cool was difficult and costly.
4. the metal used to make iceboxes was too expensive for most families.

**(3) Why was it difficult to create refrigerators for homes at first?**
1. The cooling liquids used in early machines were too expensive to produce.
2. The gases used to cool the air were unsafe for people to have in their houses.
3. The electric motors were too weak to keep the food cold for long periods.
4. Factory owners did not want to sell their cooling technology to regular people.

**(4) One major benefit of the refrigerator mentioned in the passage is that**
1. it allowed people to improve their health by eating a wider variety of fresh foods.
2. it reduced the cost of electricity for families in wealthy nations.
3. it encouraged people to grow their own fruits and vegetables at home.
4. it taught people how to preserve food using traditional methods like salting.

**(5) How is refrigeration expected to help people in developing nations in the future?**
1. It will allow them to produce their own medicines and vaccines.
2. It will help them export more food to wealthy nations.
3. It will give them more time to invent new energy-efficient machines.
4. It will protect people from diseases by storing medical supplies safely.

---
**Answer Key:** 2, 3, 2, 1, 4`,
      translations: [
        { en: "Most of the technologies that define modern life, such as the internet and airplanes, have connected the world in amazing ways.", ja: "インターネットや飛行機といった現代生活を定義する技術のほとんどは、驚くべき方法で世界をつないできた。" },
        { en: "They allow people to communicate instantly and travel quickly across the globe.", ja: "それらは人々が即座に通信し、地球上を素早く移動することを可能にしている。" },
        { en: "However, some experts believe that a quiet machine found in almost every kitchen has had an even bigger effect on human health and population growth.", ja: "しかし、ほぼすべての台所にある静かな機械が、人間の健康と人口増加に対してさらに大きな影響を与えてきたと信じている専門家もいる。" },
        { en: "This machine is the refrigerator.", ja: "この機械とは冷蔵庫である。" },
        { en: "While smartphones allow communication, the refrigerator completely changed how humans eat and survive, yet its impact is often overlooked compared to digital devices.", ja: "スマートフォンは通信を可能にするが、冷蔵庫は人間がどのように食事をし生き延びるかを完全に変えたにもかかわらず、その影響はデジタル機器に比べて見過ごされがちである。" },
        { en: "Before the invention of the refrigerator, preserving food was a constant and difficult struggle.", ja: "冷蔵庫が発明される前、食品を保存することは絶え間ない困難な闘いであった。" },
        { en: "For thousands of years, people relied on traditional methods like drying, smoking, or salting meat to keep it from spoiling.", ja: "何千年もの間、人々は肉が腐るのを防ぐために、乾燥、燻製、塩漬けといった伝統的な方法に頼っていた。" },
        { en: "In the 19th century, people in cities often used \"iceboxes,\" which were wooden cabinets lined with metal.", ja: "19世紀には、都市の人々はしばしば「アイスボックス」を使用していた。それは金属で裏打ちされた木製の戸棚であった。" },
        { en: "To make these work, large blocks of natural ice had to be cut from frozen lakes in winter and delivered to homes by horse and wagon.", ja: "これらを機能させるためには、冬に凍った湖から天然の氷の大きな塊を切り出し、馬車で家庭に届けなければならなかった。" },
        { en: "This process was physically demanding and expensive.", ja: "このプロセスは肉体的にきつく、費用もかかった。" },
        { en: "Furthermore, without a reliable way to keep food cool, families had to go to the market almost every day to buy fresh ingredients, and eating spoiled food often led to serious illnesses.", ja: "さらに、食品を冷たく保つ信頼できる方法がなければ、家族は新鮮な食材を買うためにほぼ毎日市場に行かなければならず、腐った食品を食べることはしばしば深刻な病気につながった。" },
        { en: "The first machines designed to cool air were developed in the 19th century, but they were huge, heavy, and mostly used in large factories or breweries.", ja: "空気を冷やすために設計された最初の機械は19世紀に開発されたが、それらは巨大で重く、主に大きな工場や醸造所で使用されていた。" },
        { en: "Creating a small, safe, and affordable fridge for the average home was a significant challenge.", ja: "平均的な家庭のために、小型で安全、かつ手頃な価格の冷蔵庫を作ることは大きな課題であった。" },
        { en: "Early home versions used dangerous gases that could leak and cause serious harm to family members while they slept.", ja: "初期の家庭用モデルは、漏れ出して家族が寝ている間に深刻な害を及ぼす可能性のある危険なガスを使用していた。" },
        { en: "It was not until the 1920s and 1930s that safer cooling liquids were discovered and electric motors became smaller and more reliable.", ja: "より安全な冷却液が発見され、電気モーターがより小さく信頼できるようになるのは、1920年代から1930年代になってからのことであった。" },
        { en: "Once these safety issues were solved, the electric refrigerator quickly became a standard appliance in households across wealthy nations.", ja: "これらの安全上の問題が解決されると、電気冷蔵庫はすぐに裕福な国々の家庭における標準的な家電製品となった。" },
        { en: "The spread of the refrigerator revolutionized daily life and society.", ja: "冷蔵庫の普及は、日常生活と社会に革命をもたらした。" },
        { en: "It allowed people to store fresh fruits, vegetables, and dairy products for days or weeks, which led to much better nutrition and taller, healthier populations.", ja: "それは人々が新鮮な果物、野菜、乳製品を数日から数週間保存することを可能にし、はるかに良い栄養状態と、より背が高く健康的な人々をもたらした。" },
        { en: "It also freed people, especially women, from the daily chore of shopping for food, allowing them more time for other activities.", ja: "それはまた、人々、特に女性を毎日の食料品の買い物という雑用から解放し、他の活動のためのより多くの時間を彼らに与えた。" },
        { en: "Today, refrigeration is not just about food; it is essential for storing medicines and vaccines.", ja: "今日、冷蔵技術は単に食品に関するものだけではない。それは医薬品やワクチンを保存するために不可欠である。" },
        { en: "As these machines become more energy-efficient and available in developing nations, they will continue to save millions of lives by preventing hunger and disease.", ja: "これらの機械がよりエネルギー効率が良く、発展途上国で利用可能になるにつれて、それらは飢餓や病気を防ぐことによって何百万もの命を救い続けるだろう。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** An Extraordinary Machine (2023-1)

### 1. 量的構造
- **総単語数:** ~365 words (Target 350-400)
- **パラグラフ構成:**
  1. **導入と対比:** 現代技術（ネット・スマホ）と「冷蔵庫」の対比。冷蔵庫の重要性の提示。
  2. **過去の苦労:** 冷蔵庫以前の保存方法（塩漬け、氷の切り出し）と、それにかかる労力・コスト・健康リスク。
  3. **開発と課題:** 初期の巨大な機械から家庭用への小型化。有毒ガスの危険性という技術的課題の克服。
  4. **社会的影響:** 栄養改善、買い物時間の短縮（女性の社会進出示唆）、医療（ワクチン）への貢献。

### 2. 重要語彙
- **refrigerator / refrigeration:** 冷蔵庫 / 冷蔵
- **convenience:** 利便性
- **preserve:** 保存する
- **ingredients:** 食材
- **rely on:** ～に頼る
- **leak:** 漏れる
- **revolutionize:** 革命を起こす
- **nutrition:** 栄養
- **energy-efficient:** 省エネの`,
      summary: `## 講師用：本文要約 (Instructor Summary)

インターネットや飛行機などの派手な技術と比較して見過ごされがちですが、冷蔵庫は人類の健康と生活様式に最も大きな影響を与えた発明の一つです。食品保存の苦労から人類を解放し、栄養状態の劇的な改善と医療への貢献を果たしました。

### 1. The Hidden Giant (第1段落)
インターネットやスマホは世界をつなぎましたが、専門家の中には冷蔵庫こそが人類の健康に最大の影響を与えたと考える人がいます。通信機器と異なり、冷蔵庫は生存に関わる「食」を根本から変えました。

### 2. The Struggle Before (第2段落)
冷蔵庫以前、食品保存は乾燥や塩漬けに頼る困難な作業でした。19世紀の「アイスボックス」は天然の氷を運搬する必要があり、重労働で高価でした。食材の毎日の買い出しが必要で、食中毒のリスクも高かったのです。

### 3. The Danger of Cooling (第3段落)
初期の冷却機は巨大で工場用でした。家庭用への小型化における最大の課題は、冷却に使われる「ガス」の安全性でした。初期のガスは有毒で、睡眠中の家族を危険にさらすことがありました。1920-30年代に安全な技術が確立され普及しました。

### 4. Impact on Life (第4段落)
冷蔵庫は新鮮な生鮮食品の長期保存を可能にし、人々の栄養状態を改善しました。また、毎日の買い物という重労働から人々（特に女性）を解放しました。現在では食品だけでなく、ワクチン保存などを通じて発展途上国でも多くの命を救っています。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | An Extraordinary Machine (過去問) | The Cooling Revolution (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 洗濯機の社会的影響 | 冷蔵庫の社会的影響 | 家電製品が社会・生活様式を変えた歴史 |
| **構造** | 1. 現代機器との比較<br>2. 手洗いの苦労<br>3. 電化の課題（水と電気）<br>4. 時間創出と教育 | 1. 現代機器との比較<br>2. 保存の苦労<br>3. 家庭化の課題（有毒ガス）<br>4. 健康改善と医療 | パラグラフごとの論理展開（導入→過去の苦労→技術的課題→社会的利益）を完全踏襲 |
| **設問1** | 歴史家の主張（影響の大きさ） | 専門家の主張（影響の大きさ） | パラグラフ1：現代のIT機器との比較における重要性 |
| **設問2** | 洗濯の重労働（プロセス） | 保存の重労働（氷の運搬） | パラグラフ2：機械化以前のプロセスの困難さ |
| **設問3** | 開発の課題（水＋電気の危険） | 開発の課題（有毒ガスの危険） | パラグラフ3：家庭用化を阻んでいた技術的・安全的障壁 |
| **設問4** | 時間の創出と教育への投資 | 栄養改善と健康への影響 | パラグラフ4前半：生活の質（QOL）への直接的メリット |
| **設問5** | N/A (4問構成) | 将来の展望（途上国・医療） | パラグラフ4後半：将来的な、またはより広範な社会的意義 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **An Extraordinary Machine (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 洗濯機 (Washing Machines)
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「労働時間の短縮」が教育機会を生み、社会を向上させた点に焦点。

* **The Cooling Revolution (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 冷蔵庫 (Refrigerators)
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「食品保存と栄養」が健康を増進し、さらに医療（ワクチン）へ貢献する点に焦点。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 両者とも第1段落の「現代のハイテク機器（スマホ等）よりも、実はこの家電の方が社会的インパクトが大きい」という主張を問う。
* **Q2:** 両者とも第2段落の具体的な「昔の苦労（氷を運ぶ、川で洗う）」の理由や詳細を問う。
* **Q3:** 両者とも第3段落の「発明・普及の際の危険性（感電 vs ガス中毒）」に焦点を当てる。
* **Q4:** オリジナルは設問数を5問に増やすため、第4段落の前半部分（栄養・健康・買い物の手間）に焦点を当て作成。
* **Q5:** 第4段落の後半部分（将来の展望・医療・途上国）に焦点を当て作成。過去問の第4問（将来の展望）に相当する内容。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>However, some experts believe that a quiet machine found in almost every kitchen <b>has had</b> an even bigger effect on human health and population growth.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> some experts</li>
    <li><b>動詞 (V):</b> believe</li>
    <li><b>目的語 (O):</b> that節 (that a quiet machine... has had...)</li>
    <li><b>that節内の構造:</b>
      <ul>
         <li><b>S':</b> a quiet machine (found in almost every kitchen は machine を修飾する過去分詞句)</li>
         <li><b>V':</b> has had</li>
         <li><b>O':</b> an even bigger effect (on human health and population growth)</li>
      </ul>
    </li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>比較級 "bigger effect" が使われており、「他の技術（前文のインターネット等）よりも大きな影響があった」という文脈を作っています。これが正解の "greater impact on health than many other modern technologies" と合致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>To make these work, large blocks of natural ice <b>had to be cut</b> from frozen lakes in winter and <b>delivered</b> to homes by horse and wagon.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>不定詞句 (目的):</b> To make these work (これらを機能させるために)</li>
    <li><b>主語 (S):</b> large blocks of natural ice</li>
    <li><b>動詞 (V):</b> had to be cut ... and (had to be) delivered</li>
    <li><b>修飾語 (M):</b> from frozen lakes... / by horse and wagon</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>受動態 "be cut" と "be delivered" が "had to"（～しなければならなかった）に続いています。氷を切り出し運搬するという「プロセス」が記述されており、次文の "physically demanding and expensive"（肉体的にきつく高価）につながります。これが正解の "getting the ice... was difficult and costly" の根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>Early home versions <b>used</b> dangerous gases that could leak and cause serious harm to family members while they slept.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Early home versions</li>
    <li><b>動詞 (V):</b> used</li>
    <li><b>目的語 (O):</b> dangerous gases</li>
    <li><b>関係代名詞節 (M):</b> that could leak... (gasesを修飾)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>関係代名詞 "that" が "dangerous gases" を説明しています。ガスが漏れて害を及ぼす可能性があることが、家庭用冷蔵庫を作る上での課題（安全性）であったことを示しており、正解の "unsafe for people to have in their houses" に対応します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>It <b>allowed</b> people to store fresh fruits, vegetables, and dairy products for days or weeks, which led to much better nutrition and taller, healthier populations.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> It (The refrigerator)</li>
    <li><b>動詞 (V):</b> allowed</li>
    <li><b>目的語 (O):</b> people</li>
    <li><b>不定詞 (C):</b> to store fresh fruits...</li>
    <li><b>関係代名詞節 (非制限用法):</b> , which led to...</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"allow O to do"（Oが～することを可能にする）の構文に加え、カンマ＋which（関係代名詞の継続用法）が前の文の内容を受けて「その結果、より良い栄養につながった」と因果関係を説明しています。これが正解の "improve their health by eating a wider variety of fresh foods" の根拠となります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall)</h3>
<blockquote>As these machines become more energy-efficient and available in developing nations, they <b>will continue to save</b> millions of lives by preventing hunger and disease.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞 (As):</b> As these machines become... (～するにつれて)</li>
    <li><b>主語 (S):</b> they (these machines)</li>
    <li><b>動詞 (V):</b> will continue to save</li>
    <li><b>目的語 (O):</b> millions of lives</li>
    <li><b>手段 (M):</b> by preventing hunger and disease</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>前文の "essential for storing medicines and vaccines" と合わせて、この文が将来の展望（will continue to save...）を述べています。病気を防ぐ（preventing disease）という点が、正解の "protect people from diseases by storing medical supplies safely" につながります。</p>
</div>`
    }
  },
  "2023-1-2": {
    past: {
      title: "Living the Dream",
      content: `## Title: Living the Dream

On average, people spend about one-third of their lives sleeping, and for about one-quarter of the time that they are asleep, they dream. Although scientists have learned a lot about the parts of people's brains that are involved in dreaming, they are still uncertain about the purpose of dreams. One reason for this is the variety of dreams that people have-they can be pleasant, scary, unusual, or very ordinary. On top of this, they often do not make sense and are mostly forgotten soon after waking up.

People have been trying to explain why we dream for thousands of years. Ancient people believed that dreams were messages from gods. More recently, it was suggested that dreams could tell us about hidden parts of our personalities. These days, most psychologists believe that one of the principal functions of dreaming is to review memories and strengthen them. This is important because to learn well, we must not only find new ideas and skills but also regularly recall them.

For a recent study, Erin Wamsley of Furman University in the United States invited 48 participants to spend the night at a special laboratory at the university. The participants were woken up several times during the night and asked to report what they had been dreaming about. The following morning, the participants tried to connect the content of their dreams with events in their lives. Wamsley found that over half the dreams could be connected to memories of experiences. This supports the idea that dreams play a role in learning.

However, Wamsley also found that about 25 percent of dreams were connected to specific future events in participants' lives, such as upcoming tests or trips. This, she believes, is evidence that another important function of dreaming is to give people a chance to prepare for these events. Moreover, Wamsley observed that these dreams were more common later in the night. One explanation that she offers is that our brains are aware of time even while we are sleeping. As we get closer to the start of a new day, our attention switches from reviewing past events to thinking about future ones.`,
      questions: `### Questions

**(34) What is one reason that scientists are uncertain about why people dream?**
1. Several parts of people's brains are involved in dreaming.
2. Dreams do not usually appear to have a clear meaning.
3. People often do not want to describe their dreams honestly.
4. Different people sometimes have exactly the same dream.

**(35) Modern psychologists think that**
1. people discovered the reason that we have dreams thousands of years ago.
2. people's brains are able to exercise and grow larger by having dreams.
3. dreams allow people to hide parts of their personalities that they do not like.
4. dreams give people an opportunity to make their memories stronger.

**(36) What was one thing that participants in Erin Wamsley's study were asked to do?**
1. Discuss the content of their dreams with other participants in the study.
2. Relate what happened in their dreams to what was happening in their lives.
3. Try to wake themselves up as soon as they knew that they were dreaming.
4. Compare their own dreams with a list of dreams that people commonly have.

**(37) Wamsley suggests that dreams about future events**
1. happen because our brains know that we will wake up soon.
2. occur more often after tests or other stressful events.
3. are experienced just as often as dreams about the past.
4. probably stay in our memories longer than other dreams.

**(38) Which of the following statements is true?**
1. People long ago also believed that gods spoke to them through dreams.
2. People dream for more than half of the time that they are asleep.
3. Participants in Wamsley's study mostly had dreams about future events.
4. Participants in Wamsley's study were observed in their own homes.

---
**Answer Key:** 2, 4, 2, 1, 1`,
      translations: [
        { en: "On average, people spend about one-third of their lives sleeping, and for about one-quarter of the time that they are asleep, they dream.", ja: "平均して、人々は人生の約3分の1を眠って過ごし、眠っている時間の約4分の1の間、夢を見る。" },
        { en: "Although scientists have learned a lot about the parts of people's brains that are involved in dreaming, they are still uncertain about the purpose of dreams.", ja: "科学者たちは夢を見ることに関わる脳の部位について多くを学んできたが、彼らは夢の目的について依然として確信を持っていない。" },
        { en: "One reason for this is the variety of dreams that people have-they can be pleasant, scary, unusual, or very ordinary.", ja: "この理由の一つは、人々が見る夢の多様性である。それらは心地よいもの、恐ろしいもの、異常なもの、あるいはごくありふれたものであり得る。" },
        { en: "On top of this, they often do not make sense and are mostly forgotten soon after waking up.", ja: "それに加えて、それらはしばしば意味をなさず、目覚めた後すぐにほとんど忘れられてしまう。" },
        { en: "People have been trying to explain why we dream for thousands of years.", ja: "人々は何千年もの間、なぜ私たちが夢を見るのかを説明しようとしてきた。" },
        { en: "Ancient people believed that dreams were messages from gods.", ja: "古代の人々は、夢は神々からのメッセージであると信じていた。" },
        { en: "More recently, it was suggested that dreams could tell us about hidden parts of our personalities.", ja: "より最近では、夢は私たちの人格の隠された部分について教えてくれる可能性があると示唆された。" },
        { en: "These days, most psychologists believe that one of the principal functions of dreaming is to review memories and strengthen them.", ja: "今日では、ほとんどの心理学者は、夢を見ることの主要な機能の一つは記憶を見直し、それらを強化することであると信じている。" },
        { en: "This is important because to learn well, we must not only find new ideas and skills but also regularly recall them.", ja: "これは重要なことである。なぜなら、よく学ぶためには、新しいアイデアやスキルを見つけるだけでなく、定期的にそれらを想起しなければならないからである。" },
        { en: "For a recent study, Erin Wamsley of Furman University in the United States invited 48 participants to spend the night at a special laboratory at the university.", ja: "最近の研究のために、アメリカのファーマン大学のエリン・ワムズリーは、48人の参加者を大学の特別な研究室で一晩過ごすように招待した。" },
        { en: "The participants were woken up several times during the night and asked to report what they had been dreaming about.", ja: "参加者は夜中に数回起こされ、彼らがどのような夢を見ていたかについて報告するように求められた。" },
        { en: "The following morning, the participants tried to connect the content of their dreams with events in their lives.", ja: "翌朝、参加者は夢の内容を彼らの生活の中の出来事と結びつけようとした。" },
        { en: "Wamsley found that over half the dreams could be connected to memories of experiences.", ja: "ワムズリーは、夢の半分以上が経験の記憶と結びつけられることを発見した。" },
        { en: "This supports the idea that dreams play a role in learning.", ja: "これは、夢が学習において役割を果たしているという考えを支持している。" },
        { en: "However, Wamsley also found that about 25 percent of dreams were connected to specific future events in participants' lives, such as upcoming tests or trips.", ja: "しかし、ワムズリーはまた、夢の約25パーセントが、今度の試験や旅行といった参加者の生活における特定の将来の出来事と結びついていることも発見した。" },
        { en: "This, she believes, is evidence that another important function of dreaming is to give people a chance to prepare for these events.", ja: "彼女は、これは夢を見ることのもう一つの重要な機能が、人々にこれらの出来事に備える機会を与えることであるという証拠だと信じている。" },
        { en: "Moreover, Wamsley observed that these dreams were more common later in the night.", ja: "さらに、ワムズリーはこれらの夢が夜遅く（明け方近く）により一般的であることを観察した。" },
        { en: "One explanation that she offers is that our brains are aware of time even while we are sleeping.", ja: "彼女が提示する一つの説明は、私たちの脳は眠っている間でさえ時間を認識しているということである。" },
        { en: "As we get closer to the start of a new day, our attention switches from reviewing past events to thinking about future ones.", ja: "新しい一日の始まりに近づくにつれて、私たちの注意は過去の出来事を見直すことから将来の出来事について考えることへと切り替わるのである。" }
      ]
    },
    original: {
      title: "The Wandering Mind",
      content: `## Title: The Wandering Mind

Most people think that to get things done, they must pay close attention to what they are doing at all times. However, research suggests that human minds wander for nearly half of the time that people are awake. This phenomenon, often called daydreaming, occurs when our thoughts drift away from the task at hand to other things. For a long time, teachers and employers viewed this simply as a bad habit that wasted valuable time. Despite this negative reputation, scientists are now discovering that letting the mind wander might actually be beneficial for the brain and personal growth.

In the past, psychology focused mainly on the negative effects of not paying attention, such as making mistakes at work or having accidents while driving. Today, however, many experts believe that daydreaming is a distinct mental state that serves a useful purpose. One major theory is that it allows the brain to access a "creative mode." When the mind is not focused on a specific logic problem, it can make loose connections between different ideas. This process often leads to sudden insights and creative solutions that focused thinking cannot achieve.

To investigate this, a researcher named Benjamin Baird conducted an experiment with 145 participants to see how mind-wandering affects creativity. He asked one group to perform a simple, boring task that required little attention, which encouraged their minds to wander. Another group was asked to focus on a difficult task. Afterward, all participants were given a test that involved coming up with unusual uses for everyday objects, such as a brick. Baird found that the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously. This suggests that taking a break to let the mind wander is vital for creative problem-solving.

Furthermore, research shows that daydreaming is not just about random fantasies. A large portion of mind-wandering involves thinking about the future, known as "autobiographical planning." Just as sleeping dreams might help us organize memories, waking daydreams allow people to mentally practice for upcoming social interactions or set personal goals. Rather than being a waste of time, drifting off helps people manage the complexity of their daily lives and prepare for what lies ahead.`,
      questions: `### Original Questions

**(1) What was the common view of daydreaming in the past?**
1. It was considered a useful way to solve complex problems.
2. It was seen as a harmful habit that resulted in lost time.
3. Teachers believed it helped students pay better attention.
4. Employers encouraged workers to do it to improve their skills.

**(2) According to modern experts, one benefit of daydreaming is that**
1. it helps the brain connect different ideas to solve problems creatively.
2. it prevents people from making dangerous mistakes while driving.
3. it allows people to focus more logically on specific math problems.
4. it stops the brain from thinking about work during free time.

**(3) What did the participants in Benjamin Baird's experiment do?**
1. They tried to come up with new uses for objects while they were sleeping.
2. The group that did a difficult task first performed the best on the test.
3. Those who did a boring task were more creative than those who focused hard.
4. They were asked to describe their daydreams to the researchers immediately.

**(4) What does the passage suggest about "autobiographical planning"?**
1. It is a type of daydreaming that focuses on past memories only.
2. It happens when people sleep and helps them organize their dreams.
3. It creates false memories about events that never happened.
4. It helps people prepare for future goals and social situations.

**(5) Which of the following statements is true?**
1. People spend nearly 50 percent of their waking hours mind-wandering.
2. Benjamin Baird found that focusing on difficult tasks improves creativity.
3. Most psychologists still believe that daydreaming has no positive effects.
4. Daydreaming prevents people from setting personal goals for the future.

---
**Answer Key:** 2, 1, 3, 4, 1`,
      translations: [
        { en: "Most people think that to get things done, they must pay close attention to what they are doing at all times.", ja: "ほとんどの人は、物事を成し遂げるためには、常に自分のしていることに細心の注意を払わなければならないと考えている。" },
        { en: "However, research suggests that human minds wander for nearly half of the time that people are awake.", ja: "しかし、研究によると、人間の心は起きている時間の半分近くもの間、さまよっていることが示唆されている。" },
        { en: "This phenomenon, often called daydreaming, occurs when our thoughts drift away from the task at hand to other things.", ja: "しばしば白昼夢（デイドリーミング）と呼ばれるこの現象は、私たちの思考が目の前の課題から他の事柄へと漂い出すときに起こる。" },
        { en: "For a long time, teachers and employers viewed this simply as a bad habit that wasted valuable time.", ja: "長い間、教師や雇用主は、これを単に貴重な時間を無駄にする悪い習慣だとみなしていた。" },
        { en: "Despite this negative reputation, scientists are now discovering that letting the mind wander might actually be beneficial for the brain and personal growth.", ja: "この否定的な評判にもかかわらず、科学者たちは現在、心をさまよわせることが実際には脳や個人の成長にとって有益かもしれないことを発見しつつある。" },
        { en: "In the past, psychology focused mainly on the negative effects of not paying attention, such as making mistakes at work or having accidents while driving.", ja: "過去において、心理学は主に、仕事でミスをしたり運転中に事故を起こしたりするなど、注意を払わないことの否定的な影響に焦点を当てていた。" },
        { en: "Today, however, many experts believe that daydreaming is a distinct mental state that serves a useful purpose.", ja: "しかし今日、多くの専門家は、白昼夢は有用な目的を果たす独特の精神状態であると信じている。" },
        { en: "One major theory is that it allows the brain to access a \"creative mode.\"", ja: "主要な理論の一つは、それが脳に「創造的モード」へのアクセスを許可するというものである。" },
        { en: "When the mind is not focused on a specific logic problem, it can make loose connections between different ideas.", ja: "心が特定の論理的問題に集中していないとき、それは異なるアイデアの間に緩やかな結びつきを作ることができる。" },
        { en: "This process often leads to sudden insights and creative solutions that focused thinking cannot achieve.", ja: "このプロセスはしばしば、集中した思考では達成できない突然のひらめきや創造的な解決策につながる。" },
        { en: "To investigate this, a researcher named Benjamin Baird conducted an experiment with 145 participants to see how mind-wandering affects creativity.", ja: "これを調査するために、ベンジャミン・ベアードという名の研究者が、マインドワンダリング（心の迷走）が創造性にどのように影響するかを見るために145人の参加者と共に実験を行った。" },
        { en: "He asked one group to perform a simple, boring task that required little attention, which encouraged their minds to wander.", ja: "彼はあるグループに、ほとんど注意を必要としない単純で退屈な作業を行うよう求めた。それは彼らの心がさまようことを促した。" },
        { en: "Another group was asked to focus on a difficult task.", ja: "もう一つのグループは、難しい課題に集中するよう求められた。" },
        { en: "Afterward, all participants were given a test that involved coming up with unusual uses for everyday objects, such as a brick.", ja: "その後、すべての参加者に、レンガのような日常的な物の変わった用途を考え出すというテストが与えられた。" },
        { en: "Baird found that the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously.", ja: "ベアードは、単純な作業に従事していた参加者が、継続的に集中していた参加者よりも、創造性テストでずっと良い成績を収めたことを発見した。" },
        { en: "This suggests that taking a break to let the mind wander is vital for creative problem-solving.", ja: "このことは、心をさまよわせるために休憩を取ることが、創造的な問題解決にとって不可欠であることを示唆している。" },
        { en: "Furthermore, research shows that daydreaming is not just about random fantasies.", ja: "さらに、研究は白昼夢が単なるランダムな空想ではないことを示している。" },
        { en: "A large portion of mind-wandering involves thinking about the future, known as \"autobiographical planning.\"", ja: "マインドワンダリングの大部分は、「自伝的計画」として知られる、将来について考えることを含んでいる。" },
        { en: "Just as sleeping dreams might help us organize memories, waking daydreams allow people to mentally practice for upcoming social interactions or set personal goals.", ja: "睡眠中の夢が記憶を整理するのに役立つのと同様に、起きている間の白昼夢は、人々が来たるべき社会的交流のために精神的に練習したり、個人的な目標を設定したりすることを可能にする。" },
        { en: "Rather than being a waste of time, drifting off helps people manage the complexity of their daily lives and prepare for what lies ahead.", ja: "時間の無駄であるどころか、（思考が）漂流することは、人々が日常生活の複雑さを管理し、待ち受けるものに備えるのを助けるのである。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Living the Dream (2023-1)

### 1. 量的構造
- **総単語数:** ~380 words (Target 350-400)
- **パラグラフ構成:**
  1. **導入:** マインドワンダリング（白昼夢）の頻度（約50%）と、かつての否定的な見解（時間の無駄）。
  2. **視点の転換:** 現代心理学の視点。注意散漫の危険性から、「創造的モード」へのアクセスという利点へのシフト。
  3. **研究事例:** ベンジャミン・ベアードの実験。退屈なタスク（マインドワンダリング誘発）vs 難易度の高いタスク。結果として前者が創造性テストで高得点。
  4. **将来的機能:** 「自伝的計画」。過去の回想だけでなく、将来のシミュレーション（社会的交流の予行演習）としての機能。

### 2. 重要語彙
- **mind-wandering / daydreaming:** 心の迷走、白昼夢
- **distract / distraction:** 気を散らす
- **reputation:** 評判
- **insight:** 洞察、ひらめき
- **participant:** 参加者
- **continuously:** 継続的に
- **vital:** 不可欠な
- **autobiographical:** 自伝的な（自分自身の生活に関わる）`,
      summary: `## 講師用：本文要約 (Instructor Summary)

睡眠中の夢と同様に、起きている間の「白昼夢（マインドワンダリング）」も科学的に重要な機能が認められています。かつては単なる時間の無駄と見なされていましたが、現在では創造性の向上や将来の計画立案に役立つことが分かっています。

### 1. The Common Habit (第1段落)
人は起きている時間の約半分を「マインドワンダリング」に費やしています。以前、教師や雇用主はこれを悪い習慣だと考えていましたが、科学者はその利点に気づき始めています。

### 2. The Creative Spark (第2段落)
かつて心理学は不注意の害（事故など）に注目していましたが、現代の専門家は白昼夢が脳を「クリエイティブモード」にすることを発見しました。論理的思考から離れることで、アイデア同士の意外な結びつきが生まれます。

### 3. The Experiment (第3段落)
ベアードの研究では、退屈な作業をして心をさまよわせたグループの方が、難しい作業に集中し続けたグループよりも、その後の「創造性テスト（物の用途を考える）」で良い成績を収めました。

### 4. Planning for the Future (第4段落)
白昼夢は単なる空想ではなく、「自伝的計画」と呼ばれる機能を持っています。将来の社会的場面のシミュレーションや目標設定など、未来に備えるための重要な精神的リハーサルなのです。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Living the Dream (過去問) | The Wandering Mind (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 睡眠中の夢（Dreaming）の機能 | 起きている間の夢（Daydreaming）の機能 | 精神機能の科学的解明、無意識のメリット |
| **構造** | 1. 夢の不確実性と多様性<br>2. 歴史的・現代的解釈（記憶強化）<br>3. 実験（記憶とのリンク）<br>4. 実験（未来へのリンク） | 1. 白昼夢の頻度と否定的評価<br>2. 歴史的・現代的解釈（創造性）<br>3. 実験（創造性とのリンク）<br>4. 研究（未来計画とのリンク） | パラグラフ構成と論理展開（通説→新説→実験→将来的意義）が一致 |
| **設問1** | 科学者が不確実である理由（多様性） | 過去の一般的な見解（悪い習慣） | 第1段落のトピックに対する「背景・通説」を問う |
| **設問2** | 現代心理学者の考え（記憶強化） | 現代の専門家の考え（創造性） | 第2段落の「新しい科学的解釈」を問う |
| **設問3** | 実験参加者が求められたこと（夢と生活の関連付け） | 実験結果（退屈なタスクをした群が創造的だった） | 第3段落の「実験の手順または結果」を問う |
| **設問4** | 将来に関する夢の解釈（準備機能） | 「自伝的計画」の示唆（準備機能） | 第4段落の「未来志向（Future-oriented）」の機能を問う |
| **設問5** | 本文の内容一致（True Statement） | 本文の内容一致（True Statement） | テキスト全体または特定箇所の事実確認 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Living the Dream (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Sleep Dreaming (睡眠中の夢)
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 夢は「記憶の整理」だけでなく、「未来のシミュレーション（夜明け前に増加）」として機能する。

* **The Wandering Mind (オリジナル):**
   * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Daydreaming (白昼夢)
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 白昼夢は「時間の無駄」ではなく、「創造性の向上」や「未来の計画（自伝的計画）」として機能する。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1:** 過去問は「不確実な理由（Why uncertain）」を問い、オリジナルは「過去の見解（What view）」を問うが、どちらも第1段落の導入部における「現状認識」を確認する。
* **Q2:** 過去問は「Memory strengthening（記憶強化）」が正解。オリジナルは「Connect ideas / Creative（創造性）」が正解。
* **Q3:** 過去問は実験の「指示内容」を問う。オリジナルは実験の「結果・発見」を問う形（Option 3）にしたが、実験パラグラフの理解を試す点で共通。
* **Q4:** 両者とも第4段落の核心である「Future preparation（未来への備え）」に関する理解を問う。
* **Q5:** 総合的な内容一致問題。過去問は第2段落の細部（古代の人の考え）が正解。オリジナルは第1段落の細部（頻度）を正解として配置。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>For a long time, teachers and employers <b>viewed</b> this simply as a bad habit that wasted valuable time.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> teachers and employers</li>
    <li><b>動詞 (V):</b> viewed</li>
    <li><b>目的語 (O):</b> this (daydreaming)</li>
    <li><b>補語 (C):</b> as a bad habit (that wasted valuable time)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"view A as B"（AをBとみなす）の構文が使われています。関係代名詞節 "that wasted valuable time" が "bad habit" を修飾しており、これが選択肢2の "harmful habit that resulted in lost time" と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>When the mind is not focused on a specific logic problem, it <b>can make</b> loose connections between different ideas.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞節:</b> When the mind is not focused...</li>
    <li><b>主語 (S):</b> it (the mind)</li>
    <li><b>動詞 (V):</b> can make</li>
    <li><b>目的語 (O):</b> loose connections</li>
    <li><b>修飾語 (M):</b> between different ideas</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>この文とその直後の "This process often leads to sudden insights..." がセットになっています。「異なるアイデア間の緩やかな結びつきを作る」という記述が、選択肢1の "connect different ideas to solve problems creatively" の根拠となります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>Baird <b>found</b> that the participants who had engaged in the simple task performed much better on the creativity test than those who had focused continuously.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Baird</li>
    <li><b>動詞 (V):</b> found</li>
    <li><b>目的語 (O):</b> that節
      <ul>
         <li><b>S':</b> the participants (who had engaged in the simple task)</li>
         <li><b>V':</b> performed</li>
         <li><b>M':</b> much better on the creativity test</li>
         <li><b>M':</b> than those who had focused continuously</li>
      </ul>
    </li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>比較級 "performed much better... than..." がポイントです。「単純な作業（＝退屈なタスク）をしたグループ」が「集中し続けたグループ」より優れていたという比較結果が、選択肢3 "Those who did a boring task were more creative..." の直接的な根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>Just as sleeping dreams might help us organize memories, waking daydreams <b>allow</b> people to mentally practice for upcoming social interactions or set personal goals.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞 (Just as):</b> Just as sleeping dreams might help... (～と同様に)</li>
    <li><b>主語 (S):</b> waking daydreams</li>
    <li><b>動詞 (V):</b> allow</li>
    <li><b>目的語 (O):</b> people</li>
    <li><b>不定詞 (C):</b> to mentally practice... or set...</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"allow O to do" の構文。「将来の社会的交流のために精神的に練習する」という部分が、選択肢4 "helps people prepare for future goals and social situations" と合致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Para 1)</h3>
<blockquote>However, research <b>suggests</b> that human minds wander for nearly half of the time that people are awake.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> research</li>
    <li><b>動詞 (V):</b> suggests</li>
    <li><b>目的語 (O):</b> that節 (human minds wander...)</li>
    <li><b>時間 (M):</b> for nearly half of the time that people are awake</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"nearly half of the time"（時間の半分近く）という数量表現がポイントです。これが選択肢1の "spend nearly 50 percent of their waking hours mind-wandering" と一致します（half = 50%）。</p>
</div>`
    }
  },
  "2025-2-jun": {
    past: {
      title: "Mars Exploration",
      content: `## Title: Mars Exploration

One reason we are interested in exploring Mars is that we hope to understand how life began. Mars is a planet that is similar to Earth. If we discover evidence of past life on Mars, we can study how it differed from life on Earth and why it disappeared. Our interest in Mars did not start just recently. In the seventeenth century, Galileo Galilei looked at Mars using his handmade telescope. About 350 years later, in 1965, a NASA spacecraft called Mariner 4 flew near Mars and successfully took twenty-two images of Mars.

These images were not enough to get evidence of life that existed on Mars. Instead, scientists have sent spacecraft with no humans to Mars in order to gather samples from the rocks and soil. However, only about half of all the attempts to land on Mars have been successful so far. It is said that the great distance from Earth and the fuel problems make landing on Mars difficult, but there is another problem. Mars has only about 1 percent of the amount of air that Earth has. If there were more air, it would perform as a cushion and slow down the speed of a spacecraft before it could hit the surface for a safe landing.

Once, scientists covered a spacecraft with many huge airbags and sent it with a parachute, and it landed on Mars successfully. But with this method, the spacecraft bounced like a beach ball up to fifteen meters high many times. It became clear that airbags were not suitable for bigger and heavier spacecraft. Until today, scientists have developed various technologies, such as new types of radar and engines for more smooth landing.

Now, NASA is hoping to land the first humans on Mars by the 2030s. Exploring Mars helps us learn about several things. For example, by studying whether life existed on Mars, it is possible for us to know more about Earth's past and future. Scientists also say that Mars might one day be a place where humans could move and live. Exploring Mars can provide humans with useful information for this challenge.`,
      questions: `### Questions

**(27) What did Mariner 4 accomplish?**
1. It brought humans to Mars for the first time.
2. It measured how close Mars was to Earth.
3. It went near Mars and took some pictures of it.
4. It captured the same image that Galileo Galilei drew.

**(28) Why is it difficult for a spacecraft to land on Mars?**
1. Some countries disagree about developing new technologies.
2. The distance between Mars and Earth is too close.
3. There are few scientists who can operate a spacecraft.
4. There is little air to slow down a spacecraft when landing.

**(29) Covering a spacecraft with many airbags**
1. is not the best way for every spacecraft to land smoothly.
2. is one of the methods that has never been tried.
3. is the most recent technique that has been developed.
4. is one of the methods that has never been tried.

**(30) Exploring Mars could help humans**
1. reach other planets within a shorter time.
2. learn about how to live more comfortably on Earth.
3. know more about the past and future of Earth.
4. gain useful information about new planets to discover.

**(31) Which of the following statements is true?**
1. Humans started researching Mars in 1965.
2. All the attempts to land on Mars have succeeded.
3. Scientists have tried to send rock samples from Earth to Mars.
4. Technologies to land spacecraft smoothly have been developed.

---
**Answer Key:** 3, 4, 1, 3, 4`,
      translations: [
        { en: "One reason we are interested in exploring Mars is that we hope to understand how life began.", ja: "私たちが火星の探査に興味を持っている一つの理由は、生命がどのように始まったのかを理解したいと望んでいるからである。" },
        { en: "Mars is a planet that is similar to Earth.", ja: "火星は地球に似ている惑星である。" },
        { en: "If we discover evidence of past life on Mars, we can study how it differed from life on Earth and why it disappeared.", ja: "もし火星にかつて生命が存在した証拠を発見すれば、それが地球上の生命とどう異なっていたか、そしてなぜそれが消滅したのかを研究することができる。" },
        { en: "Our interest in Mars did not start just recently.", ja: "火星に対する私たちの関心は、最近始まったばかりではない。" },
        { en: "In the seventeenth century, Galileo Galilei looked at Mars using his handmade telescope.", ja: "17世紀に、ガリレオ・ガリレイは手作りの望遠鏡を使って火星を観察した。" },
        { en: "About 350 years later, in 1965, a NASA spacecraft called Mariner 4 flew near Mars and successfully took twenty-two images of Mars.", ja: "約350年後の1965年、マリナー4号と呼ばれるNASAの宇宙船が火星の近くを飛行し、火星の画像を22枚撮影することに成功した。" },
        { en: "These images were not enough to get evidence of life that existed on Mars.", ja: "これらの画像は、火星に存在した生命の証拠を得るには十分ではなかった。" },
        { en: "Instead, scientists have sent spacecraft with no humans to Mars in order to gather samples from the rocks and soil.", ja: "その代わり、科学者たちは岩石や土壌からサンプルを集めるために、人間の乗っていない宇宙船を火星に送ってきた。" },
        { en: "However, only about half of all the attempts to land on Mars have been successful so far.", ja: "しかし、これまでのところ、火星への着陸の試みのうち成功したのは全体の約半分にすぎない。" },
        { en: "It is said that the great distance from Earth and the fuel problems make landing on Mars difficult, but there is another problem.", ja: "地球からの距離が遠いことや燃料の問題が火星への着陸を困難にしていると言われているが、もう一つの問題がある。" },
        { en: "Mars has only about 1 percent of the amount of air that Earth has.", ja: "火星には、地球の約1パーセントの空気量しかない。" },
        { en: "If there were more air, it would perform as a cushion and slow down the speed of a spacecraft before it could hit the surface for a safe landing.", ja: "もしもっと空気があれば、それがクッションの役割を果たし、安全な着陸のために宇宙船が地表に衝突する前にその速度を落とすだろう。" },
        { en: "Once, scientists covered a spacecraft with many huge airbags and sent it with a parachute, and it landed on Mars successfully.", ja: "かつて、科学者たちは宇宙船を多くの巨大なエアバッグで覆い、パラシュートとともに送り出し、それは火星への着陸に成功した。" },
        { en: "But with this method, the spacecraft bounced like a beach ball up to fifteen meters high many times.", ja: "しかしこの方法では、宇宙船はビーチボールのように何度も最大15メートルの高さまで跳ね上がった。" },
        { en: "It became clear that airbags were not suitable for bigger and heavier spacecraft.", ja: "エアバッグは、より大きく重い宇宙船には適していないことが明らかになった。" },
        { en: "Until today, scientists have developed various technologies, such as new types of radar and engines for more smooth landing.", ja: "今日に至るまで、科学者たちは、よりスムーズな着陸のために新しいタイプのレーダーやエンジンなど、さまざまな技術を開発してきた。" },
        { en: "Now, NASA is hoping to land the first humans on Mars by the 2030s.", ja: "現在、NASAは2030年代までに最初の人類を火星に着陸させることを望んでいる。" },
        { en: "Exploring Mars helps us learn about several things.", ja: "火星を探査することは、私たちがいくつかのことを学ぶのに役立つ。" },
        { en: "For example, by studying whether life existed on Mars, it is possible for us to know more about Earth's past and future.", ja: "例えば、火星に生命が存在したかどうかを研究することによって、私たちは地球の過去と未来についてより多くを知ることが可能になる。" },
        { en: "Scientists also say that Mars might one day be a place where humans could move and live.", ja: "科学者たちはまた、火星はいつか人間が移住し住むことができる場所になるかもしれないと言っている。" },
        { en: "Exploring Mars can provide humans with useful information for this challenge.", ja: "火星の探査は、この挑戦のために人間に有用な情報を提供することができる。" }
      ]
    },
    original: {
      title: "The Return to the Moon",
      content: `## Title: The Return to the Moon

Humans first walked on the Moon more than 50 years ago during the Apollo missions. However, after 1972, the moon landings stopped, and space agencies focused on other projects like the Space Shuttle. Recently, there has been a renewed interest in returning to the Moon. This time, the goal is not just to plant a flag and leave. Agencies like NASA and companies from the private sector plan to build permanent bases where astronauts can live and work for long periods. A major reason for this new focus is the discovery of water ice in craters near the Moon's poles.

Establishing a base on the Moon is incredibly difficult due to the harsh environment. On Earth, the atmosphere protects us from the sun’s radiation and small meteoroids, but the Moon has no atmosphere. This means astronauts and their equipment are constantly exposed to danger. Furthermore, the temperature difference is extreme. During the day, it can be hotter than boiling water, and at night, it is colder than anywhere on Earth. This makes it a challenge to design machines and habitats that can survive both extremes without breaking down.

In the past, spacecraft landed in the flat regions near the Moon's equator because it was the safest and easiest place to touch down. These areas are well-lit and have few large rocks. However, the water ice is located at the South Pole, which is filled with deep craters and tall mountains. Landing there is dangerous because of the rough ground and long shadows that hide obstacles. To solve this, scientists are developing new intelligent landing systems. Unlike old systems, these new computers can scan the ground in real-time and choose a safe flat spot to land, even in difficult conditions.

The long-term goal of exploring the Moon is to prepare humanity for an even greater journey. By learning how to use the Moon's water to create fuel and air, astronauts will gain the skills needed to travel to Mars. The Moon will serve as a training ground and a gas station for deep space travel. If humans can successfully live on the Moon, it will be the first step toward becoming a species that can survive on multiple planets.`,
      questions: `### Original Questions

**(1) What is different about the current plans to visit the Moon compared to the past?**
1. Scientists want to build bases for astronauts to stay for a long time.
2. Space agencies have decided to stop sending humans into space.
3. The main goal is to bring back as much soil as possible to Earth.
4. Private companies are not allowed to participate in the new missions.

**(2) One problem with the environment on the Moon is that**
1. there is too much air pressure for humans to walk easily.
2. the temperature stays exactly the same throughout the day and night.
3. there is no atmosphere to protect the surface from radiation.
4. it is difficult to find sunlight because the days are too short.

**(3) Why is landing at the Moon's South Pole more difficult than landing at the equator?**
1. The South Pole has too much water, which makes the ground soft and unstable.
2. The ground is rough, and shadows make it hard to see where to land.
3. The gravity at the South Pole is much stronger than at the equator.
4. There are no flat areas anywhere on the entire surface of the Moon.

**(4) The passage suggests that exploring the Moon will help humans to**
1. find evidence of life that existed there millions of years ago.
2. prevent meteoroids from hitting Earth in the future.
3. develop the skills and fuel needed to travel to Mars.
4. create a new atmosphere that allows people to breathe freely.

**(5) Which of the following statements is true?**
1. Humans have been visiting the Moon continuously since 1972.
2. Water ice has been found in craters near the Moon's poles.
3. Old landing systems were better at avoiding obstacles than new ones.
4. The Moon is safe for humans because it has a thick atmosphere.

---
**Answer Key:** 1, 3, 2, 3, 2`,
      translations: [
        { en: "Humans first walked on the Moon more than 50 years ago during the Apollo missions.", ja: "人類はアポロ計画の間、50年以上前に初めて月面を歩いた。" },
        { en: "However, after 1972, the moon landings stopped, and space agencies focused on other projects like the Space Shuttle.", ja: "しかし、1972年以降、月面着陸は停止し、宇宙機関はスペースシャトルのような他のプロジェクトに焦点を合わせた。" },
        { en: "Recently, there has been a renewed interest in returning to the Moon.", ja: "最近、月へ戻ることへの関心が再び高まっている。" },
        { en: "This time, the goal is not just to plant a flag and leave.", ja: "今回の目標は、単に旗を立てて去ることだけではない。" },
        { en: "Agencies like NASA and companies from the private sector plan to build permanent bases where astronauts can live and work for long periods.", ja: "NASAのような機関や民間企業の会社は、宇宙飛行士が長期間居住し働くことができる恒久的な基地を建設することを計画している。" },
        { en: "A major reason for this new focus is the discovery of water ice in craters near the Moon's poles.", ja: "この新しい注目の主な理由は、月の極近くのクレーターにおける氷（水）の発見である。" },
        { en: "Establishing a base on the Moon is incredibly difficult due to the harsh environment.", ja: "過酷な環境のため、月に基地を建設することは信じられないほど困難である。" },
        { en: "On Earth, the atmosphere protects us from the sun’s radiation and small meteoroids, but the Moon has no atmosphere.", ja: "地球では、大気が太陽からの放射線や小さな隕石から私たちを守ってくれるが、月には大気がない。" },
        { en: "This means astronauts and their equipment are constantly exposed to danger.", ja: "これは、宇宙飛行士とその装備が常に危険にさらされていることを意味する。" },
        { en: "Furthermore, the temperature difference is extreme.", ja: "さらに、温度差が極端である。" },
        { en: "During the day, it can be hotter than boiling water, and at night, it is colder than anywhere on Earth.", ja: "日中は沸騰したお湯よりも熱くなることがあり、夜は地球上のどこよりも寒くなる。" },
        { en: "This makes it a challenge to design machines and habitats that can survive both extremes without breaking down.", ja: "このことは、故障することなく両方の極端な状態に耐えることができる機械や居住区を設計することを困難にする。" },
        { en: "In the past, spacecraft landed in the flat regions near the Moon's equator because it was the safest and easiest place to touch down.", ja: "過去には、宇宙船は月の赤道近くの平らな地域に着陸した。なぜなら、そこが着陸するのに最も安全で簡単な場所だったからだ。" },
        { en: "These areas are well-lit and have few large rocks.", ja: "これらの地域は明るく照らされており、大きな岩も少ない。" },
        { en: "However, the water ice is located at the South Pole, which is filled with deep craters and tall mountains.", ja: "しかし、氷は南極に位置しており、そこは深いクレーターや高い山々で満たされている。" },
        { en: "Landing there is dangerous because of the rough ground and long shadows that hide obstacles.", ja: "荒れた地面と障害物を隠す長い影のため、そこに着陸するのは危険である。" },
        { en: "To solve this, scientists are developing new intelligent landing systems.", ja: "これを解決するために、科学者たちは新しい知的な着陸システムを開発している。" },
        { en: "Unlike old systems, these new computers can scan the ground in real-time and choose a safe flat spot to land, even in difficult conditions.", ja: "古いシステムとは異なり、これらの新しいコンピュータはリアルタイムで地面をスキャンし、困難な状況下でも着陸するための安全で平らな場所を選ぶことができる。" },
        { en: "The long-term goal of exploring the Moon is to prepare humanity for an even greater journey.", ja: "月を探査することの長期的な目標は、さらに偉大な旅のために人類を準備させることである。" },
        { en: "By learning how to use the Moon's water to create fuel and air, astronauts will gain the skills needed to travel to Mars.", ja: "燃料や空気を作るために月の水を使う方法を学ぶことによって、宇宙飛行士は火星へ旅するために必要なスキルを得るだろう。" },
        { en: "The Moon will serve as a training ground and a gas station for deep space travel.", ja: "月は深宇宙旅行のための訓練場およびガソリンスタンドとしての役割を果たすだろう。" },
        { en: "If humans can successfully live on the Moon, it will be the first step toward becoming a species that can survive on multiple planets.", ja: "もし人間が月での居住に成功すれば、それは複数の惑星で生き残ることができる種になるための第一歩となるだろう。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Mars Exploration (2025-2)

### 1. 量的構造
- **総単語数:** ~380 words (Target 350-400)
- **パラグラフ構成:**
  1. **歴史と新たな関心:** アポロ計画の終了と、最近の「定住」を目的とした月探査の再開（水の発見が契機）。
  2. **環境の困難さ:** 「薄い大気（火星）」の代わりに「大気がないこと（月）」による放射線・隕石の危険と極端な温度差。
  3. **着陸技術の進化:** 「赤道（過去・簡単）」と「南極（現在・困難）」の対比。影や地形の問題を解決する新技術（スキャンシステム）。
  4. **将来の展望:** 火星探査へのステップ（練習場・燃料補給）としての月の役割。

### 2. 重要語彙
- **permanent base:** 恒久的な基地
- **atmosphere:** 大気
- **radiation:** 放射線
- **obstacle:** 障害物
- **equator / pole:** 赤道 / 極
- **intelligent:** 知能を持った（高度な）
- **training ground:** 訓練場`,
      summary: `## 講師用：本文要約 (Instructor Summary)

1972年のアポロ計画終了以来、人類は月を離れていましたが、近年、再び月への関心が高まっています。今回の目的は一時的な滞在ではなく、南極付近で発見された「氷（水）」を利用し、恒久的な基地を建設することです。

### 1. The New Goal (第1段落)
アポロ計画から50年以上が経ち、NASAや民間企業は再び月を目指しています。旗を立てるだけでなく、長期滞在できる基地を作ることが目標です。

### 2. Harsh Environment (第2段落)
月には地球のような大気がないため、放射線や隕石の危険にさらされます。また、昼夜の温度差が激しく、機器や居住区の設計にとって大きな課題となっています。

### 3. The Landing Challenge (第3段落)
かつては安全な赤道付近に着陸していましたが、水がある南極は地形が険しく、影が多いため着陸が困難です。これを克服するため、障害物を自動で避ける新しい着陸システムが開発されています。

### 4. Gateway to Mars (第4段落)
月探査の真の目的は、火星への旅の準備です。月の水から燃料を作り、生活する技術を学ぶことで、人類は多惑星で生存する種への第一歩を踏み出します。

- **pole:** 極（南極・北極）`,
      summary: `## 講師用：本文要約 (Instructor Summary)

アポロ計画以来の「月への帰還」が現実味を帯びてきました。単なる着陸ではなく、将来の火星探査を見据えた「長期滞在」がテーマです。

### 1. Back to the Moon (第1段落)
NASAや民間企業は、宇宙飛行士が長期間住める恒久的な基地を月に建設する計画を立てています。

### 2. A Harsh Environment (第2段落)
月には地球のような守ってくれる大気がありません。そのため、太陽からの放射線や小さな隕石が直接降り注ぐ危険な場所です。

### 3. Tricky Landing (第3段落)
月面着陸は簡単ではありません。地面は荒れており、太陽の角度による「長い影」が岩などの障害物を隠してしまうため、非常に危険です。

### 4. Stepping Stone to Mars (第4段落)
なぜ今、月なのか？最大の理由は、月の極近くで「氷（水）」が発見されたからです。この水を燃料や空気に変える技術を月で学ぶことが、将来人間が火星へ行くための重要なステップとなります。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Mars Exploration(過去問) | The Return to the Moon(オリジナル) | 共通点(Commonality) |
| :--- | : --- | : --- | : --- |
| ** テーマ ** | 火星探査の歴史と着陸の難しさ | 月探査の再開と着陸・居住の難しさ | 宇宙探査、過酷な環境、技術的課題 |
| ** 構造 ** | 1. 歴史（ガリレオ～マリナー4）<br>2. 着陸困難（薄い大気）<br>3. 技術（エアバッグの限界）<br>4. 目的（生命探査・移住） | 1. 歴史（アポロ～現在）<br>2. 居住困難（大気なし・温度）<br>3. 技術（赤道vs南極・新着陸）<br>4. 目的（火星への練習・移住） | 歴史的背景→環境的課題→技術的解決策→将来的意義のフローを踏襲 |
  | **設問1** | マリナー4号の成果（写真撮影） | 今回の計画と過去の違い（基地建設） | 第1段落の具体的な事実・変化を問う |
  | **設問2** | 着陸が難しい理由（薄い大気） | 環境の問題点（大気なし・放射線） | 第2段落の「環境的要因による困難」を問う |
  | **設問3** | エアバッグ方式の欠点（跳ねる） | 南極着陸の難しさ（影・地形） | 第3段落の「特定の方法・場所における課題」を問う |
  | **設問4** | 火星探査のメリット（地球を知る） | 月探査のメリット（火星への準備） | 第4段落の「探査の意義・目的」を問う |
  | **設問5** | 内容一致（技術開発が進んでいる） | 内容一致（氷が発見された） | 本文全体または特定パラグラフの事実確認 |

  <br />

  ### 1. トピックと展開の相違 (Topic Differences)

  * **Mars Exploration (過去問):**
  * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Mars Landing (火星着陸)
  * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「大気が薄い」ため減速が難しいという着陸の物理的課題に焦点。

  * **The Return to the Moon (オリジナル):**
  * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Moon Base (月面基地)
  * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「大気がない」ため保護がないという居住のリスクと、南極特有の「光と影」の着陸課題に焦点。

  <br />

  ### 2. 設問設計の比較 (Question Design)
  * **Q1:** 過去問は「Mariner 4が何をしたか」という過去の事実確認。オリジナルは「今回の計画は何が違うか」という現在の焦点の変化を確認。
  * **Q2:** 両者とも環境（Atmosphere）に関連する困難さを問う。過去問はLandingへの影響、オリジナルはLiving/Equipmentへの影響。
  * **Q3:** 過去問は「エアバッグ」という具体的技術の欠点。オリジナルは「南極」という具体的場所の難点。
  * **Q4:** 両者とも最終段落の「探査がもたらす利益」を問う。
  * **Q5:** 内容一致問題（True/False）。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

  <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
  <blockquote>Agencies like NASA and companies from the private sector <b>plan</b> to build permanent bases where astronauts can live and work for long periods.</blockquote>
  <div class="syntax-box syntax-box-structure">
    <ul>
      <li><b>主語 (S):</b> Agencies... and companies...</li>
      <li><b>動詞 (V):</b> plan</li>
      <li><b>目的語 (O):</b> to build permanent bases</li>
      <li><b>関係副詞節 (M):</b> where astronauts can live and work for long periods (basesを修飾)</li>
    </ul>
  </div>
  <div class="syntax-box syntax-box-point">
    <p>"where" は関係副詞で、先行詞 "permanent bases" がどのような場所かを説明しています。「宇宙飛行士が長期間住み、働ける場所」という内容が、選択肢1の "build bases for astronauts to stay for a long time" と完全に一致します。</p>
  </div>

  <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
  <blockquote>On Earth, the atmosphere <b>protects</b> us from the sun’s radiation and small meteoroids, but the Moon <b>has</b> no atmosphere.</blockquote>
  <div class="syntax-box syntax-box-structure">
    <ul>
      <li><b>主節1:</b> On Earth, the atmosphere (S) protects (V) us (O) from...</li>
      <li><b>接続詞:</b> but</li>
      <li><b>主節2:</b> the Moon (S) has (V) no atmosphere (O).</li>
    </ul>
  </div>
  <div class="syntax-box syntax-box-point">
    <p>対比構造（Earth vs Moon）です。地球には保護する大気があるが、月にはない（no atmosphere）。これが次の文の "exposed to danger" につながり、選択肢3の "no atmosphere to protect..." の根拠となります。</p>
  </div>

  <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
  <blockquote>Landing there <b>is</b> dangerous because of the rough ground and long shadows that hide obstacles.</blockquote>
  <div class="syntax-box syntax-box-structure">
    <ul>
      <li><b>主語 (S):</b> Landing there (動名詞句)</li>
      <li><b>動詞 (V):</b> is</li>
      <li><b>補語 (C):</b> dangerous</li>
      <li><b>理由 (M):</b> because of the rough ground and long shadows</li>
      <li><b>関係代名詞節:</b> that hide obstacles (shadowsを修飾)</li>
    </ul>
  </div>
  <div class="syntax-box syntax-box-point">
    <p>"because of + 名詞句" で理由を述べています。「荒れた地面」と「障害物を隠す長い影」が理由であり、これが選択肢2の "ground is rough, and shadows make it hard to see..." と一致します。</p>
  </div>

  <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
  <blockquote>By learning how to use the Moon's water to create fuel and air, astronauts <b>will gain</b> the skills needed to travel to Mars.</blockquote>
  <div class="syntax-box syntax-box-structure">
    <ul>
      <li><b>手段 (M):</b> By learning how to use...</li>
      <li><b>主語 (S):</b> astronauts</li>
      <li><b>動詞 (V):</b> will gain</li>
      <li><b>目的語 (O):</b> the skills</li>
      <li><b>分詞句 (M):</b> needed to travel to Mars (skillsを修飾)</li>
    </ul>
  </div>
  <div class="syntax-box syntax-box-point">
    <p>"By doing..." は手段を表します。「月でスキルを得る」ことが「火星へ行くために必要」と述べられており、これが選択肢3の "develop the skills and fuel needed to travel to Mars" の根拠となります。</p>
  </div>

  <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Para 1)</h3>
  <blockquote>A major reason for this new focus <b>is</b> the discovery of water ice in craters near the Moon's poles.</blockquote>
  <div class="syntax-box syntax-box-structure">
    <ul>
      <li><b>主語 (S):</b> A major reason for this new focus</li>
      <li><b>動詞 (V):</b> is</li>
      <li><b>補語 (C):</b> the discovery of water ice...</li>
    </ul>
  </div>
  <div class="syntax-box syntax-box-point">
    <p>第1段落の最後の文です。「月の極近くのクレーターで氷が発見された」という事実を述べており、選択肢2の "Water ice has been found..." が正解であることを示しています。</p>
  </div>`
    }
  },
  "2025-1-jun": {
    past: {
      title: "Letter-Locking",
      content: `## Title: Letter-Locking

  In Europe, using envelopes to hold letters became common in the nineteenth century after the Industrial Revolution, but letters were used as a communication tool long before that. If letters were sent as they were, just like a postcard today, anybody could read the content. Therefore, to send letters with contents that senders did not want others to read, they used a technique called "letter-locking." Spies were not the only ones who used this technique. Many regular letter writers also knew how to do it.

  There are many different letter-locking techniques. One simple way is to fold a letter several times and put the last part into a pocket created by the folds. The most difficult method for making letters safe by folding has over thirty steps. It requires folding the letters many times, cutting small parts, and putting those parts through tiny holes. When these steps are done correctly, the letters hold themselves closed tightly. The letters cannot be opened without breaking the lock part. Because of this, the intended receiver can know if somebody else has tried to read the letter.

  Letter-locking techniques may have helped people who wanted to send letters safely. However, they have been a problem for experts who study history. One way through which people who study history get information about cultures and society is by reading letters written at that time. Letter-locking techniques make it difficult for experts to get such information. The delicate paper makes it harder for experts to open letters without damaging them. Moreover, the letter-locking technique itself is valuable, and its value will be lost once opened.

  Some researchers studied 250,000 historical letters to gather data on letter-locking techniques. They used a collection of a lot of letters that were never delivered. This happened because, in some European countries, people had to pay to get their letters. They then took 3D pictures of a letter sent about 300 years ago. Using the latest technology, they succeeded in opening it on a computer screen and reading the content. This technology will likely improve people's understanding of history.`,
      questions: `### Questions

  **(27) The use of letter-locking techniques was**
  1. a difficult practice in Europe for security purposes.
  2. a common practice among those who sent letters.
  3. a limited practice for important documents between officials.
  4. an educational practice taught at schools throughout Europe.

  **(28) One benefit of putting a cut part through a hole is to**
  1. allow the receiver to open the letter easily without a knife.
  2. prevent the letter from sticking to other letters.
  3. show evidence that someone tried to open the letter before.
  4. make sure that people can easily find the letter later.

  **(29) Why is it hard for experts to open letters that are closed with letter-locking techniques?**
  1. It reduces the value of letters that use letter-locking techniques.
  2. It can make the family of receivers of the letters angry.
  3. It causes letters written in ink to disappear in the process.
  4. It shows the person who secretly wrote the letter.

  **(30) Why were the letters in the collection not delivered?**
  1. There were not enough people who delivered letters.
  2. National security information was included in them.
  3. They were damaged and difficult to deliver.
  4. The money required to receive them was not paid.

  **(31) Which of the following statements is true?**
  1. The use of envelopes in Europe increased after the Industrial Revolution.
  2. Most letter-locking techniques needed more than thirty steps to complete.
  3. The research team gathered data on different letters without a 3D machine.
  4. Letter-locking techniques are no longer meaningful to understand a letter's value.

  ---
  **Answer Key:** 2, 3, 1, 4, 1`,
      translations: [
        { en: "In Europe, using envelopes to hold letters became common in the nineteenth century after the Industrial Revolution, but letters were used as a communication tool long before that.", ja: "ヨーロッパでは、手紙を入れるために封筒を使うことは産業革命後の19世紀に一般的になったが、手紙はそれよりずっと前から通信手段として使われていた。" },
        { en: "If letters were sent as they were, just like a postcard today, anybody could read the content.", ja: "もし手紙が今日の葉書のようにそのまま送られたとしたら、誰でもその内容を読むことができただろう。" },
        { en: "Therefore, to send letters with contents that senders did not want others to read, they used a technique called \"letter-locking.\"", ja: "したがって、送り主が他人に読まれたくない内容の手紙を送るために、彼らは「レターロッキング」と呼ばれる技術を使用した。" },
        { en: "Spies were not the only ones who used this technique.", ja: "この技術を使ったのはスパイだけではなかった。" },
        { en: "Many regular letter writers also knew how to do it.", ja: "多くの一般の手紙の書き手も、そのやり方を知っていた。" },
        { en: "There are many different letter-locking techniques.", ja: "多くの異なるレターロッキングの技術がある。" },
        { en: "One simple way is to fold a letter several times and put the last part into a pocket created by the folds.", ja: "ある単純な方法は、手紙を数回折り、最後の部分を折り目によって作られたポケットに入れることである。" },
        { en: "The most difficult method for making letters safe by folding has over thirty steps.", ja: "折ることによって手紙を安全にする最も難しい方法は、30以上の手順がある。" },
        { en: "It requires folding the letters many times, cutting small parts, and putting those parts through tiny holes.", ja: "それは手紙を何度も折り、小さな部分を切り、それらの部分を小さな穴に通すことを必要とする。" },
        { en: "When these steps are done correctly, the letters hold themselves closed tightly.", ja: "これらの手順が正しく行われると、手紙はしっかりと閉じた状態を保つ。" },
        { en: "The letters cannot be opened without breaking the lock part.", ja: "その手紙は、ロック部分を壊さなければ開けることができない。" },
        { en: "Because of this, the intended receiver can know if somebody else has tried to read the letter.", ja: "このため、意図された受取人は、誰か他の人が手紙を読もうとしたかどうかを知ることができる。" },
        { en: "Letter-locking techniques may have helped people who wanted to send letters safely.", ja: "レターロッキングの技術は、手紙を安全に送りたかった人々を助けたかもしれない。" },
        { en: "However, they have been a problem for experts who study history.", ja: "しかし、それらは歴史を研究する専門家にとっては問題となってきた。" },
        { en: "One way through which people who study history get information about cultures and society is by reading letters written at that time.", ja: "歴史を研究する人々が文化や社会についての情報を得る一つの方法は、当時書かれた手紙を読むことによってである。" },
        { en: "Letter-locking techniques make it difficult for experts to get such information.", ja: "レターロッキングの技術は、専門家がそのような情報を得ることを難しくしている。" },
        { en: "The delicate paper makes it harder for experts to open letters without damaging them.", ja: "紙が繊細であるため、専門家が手紙を傷つけずに開けることはより困難である。" },
        { en: "Moreover, the letter-locking technique itself is valuable, and its value will be lost once opened.", ja: "さらに、レターロッキングの技術そのものが貴重であり、一度開けられるとその価値は失われてしまう。" },
        { en: "Some researchers studied 250,000 historical letters to gather data on letter-locking techniques.", ja: "一部の研究者は、レターロッキング技術に関するデータを集めるために、25万通の歴史的な手紙を研究した。" },
        { en: "They used a collection of a lot of letters that were never delivered.", ja: "彼らは、決して配達されなかった多くの手紙のコレクションを使用した。" },
        { en: "This happened because, in some European countries, people had to pay to get their letters.", ja: "これは、ヨーロッパの一部の国々では、人々が手紙を受け取るために料金を支払わなければならなかったために起こった。" },
        { en: "They then took 3D pictures of a letter sent about 300 years ago.", ja: "その後、彼らは約300年前に送られた手紙の3D写真を撮った。" },
        { en: "Using the latest technology, they succeeded in opening it on a computer screen and reading the content.", ja: "最新の技術を使い、彼らはコンピュータ画面上でそれを開き、内容を読むことに成功した。" },
        { en: "This technology will likely improve people's understanding of history.", ja: "この技術はおそらく、人々の歴史への理解を向上させるだろう。" }
      ]
    },
    original: {
      title: "Hidden in Plain Sight",
      content: `## Title: Hidden in Plain Sight

  When people think of "invisible ink," they often imagine stories about spies and secret agents during wartime. While it is true that governments have used this technology to hide messages, it was also a common tool for ordinary people throughout history. Before modern privacy laws and secure envelopes existed, letters could easily be read by anyone who carried them. As a result, merchants protecting business deals and lovers sending private notes frequently used invisible ink to keep their communications secret from curious eyes.

  There are two main types of invisible ink that have been used for centuries. The first type uses organic fluids found in most kitchens, such as lemon juice, milk, or vinegar. These liquids are clear when painted on paper, but because they contain acid or sugar, they weaken the paper slightly. To read the message, the receiver simply holds the paper near a heat source, like a candle. The heat causes the acidic parts to turn brown faster than the rest of the paper. The second type involves complex chemical mixtures that only become visible when a special "developer" liquid is applied.

  Although these techniques were effective in the past, they present a significant challenge for modern historians. Museums and archives are full of old papers that appear to be blank or contain only ordinary text. Historians suspect that many of them hide secret messages, but trying to read them is risky. The traditional method of applying heat or chemicals to reveal the ink can easily damage or destroy fragile documents that are hundreds of years old. This leaves experts with a difficult choice: preserve the paper and never know the secret, or risk destroying the artifact to read the text.

  Fortunately, researchers have recently found a solution using advanced imaging technology. A team of scientists examined a collection of letters from the 18th century that were seized by warships during battles and never reached their destinations. Instead of using heat, the team used multispectral imaging, which takes photos using different wavelengths of light, such as ultraviolet and infrared. This method allowed them to clearly see the hidden ink on a computer screen without touching or damaging the original paper, opening a new window into history.`,
      questions: `### Original Questions

  **(1) Who used invisible ink in the past?**
  1. Only government officials who worked during wartime.
  2. Scientists who wanted to test different chemical mixtures.
  3. A wide range of people, including business owners and ordinary couples.
  4. Post office workers who needed to sort letters quickly.

  **(2) How does invisible ink made from lemon juice become visible?**
  1. It must be mixed with a special chemical developer liquid.
  2. It turns brown when the paper is exposed to heat.
  3. It naturally becomes dark after being left in the air for a few days.
  4. It glows when a specific type of light is shined on it.

  **(3) What problem do historians face with documents that might contain invisible ink?**
  1. The ink has faded so much that even modern computers cannot read it.
  2. The methods used to reveal the ink can ruin the historical documents.
  3. Most of the secret messages were written in codes that are impossible to break.
  4. The chemicals used in the ink are dangerous for humans to touch.

  **(4) Why did the researchers have access to the collection of letters mentioned in the passage?**
  1. The writers decided not to send them because of the war.
  2. They were captured by enemy ships and stored away for centuries.
  3. The families of the writers donated them to a museum recently.
  4. The receivers refused to pay the delivery fee to the post office.

  **(5) Which of the following statements is true?**
  1. Invisible ink was invented after secure envelopes became common.
  2. Chemical inks are easier to read than organic inks because they need heat.
  3. Multispectral imaging allows experts to read hidden text without damage.
  4. Historians have decided to destroy some documents to learn their secrets.

  ---
  **Answer Key:** 3, 2, 2, 2, 3`,
      translations: [
        { en: "When people think of \"invisible ink,\" they often imagine stories about spies and secret agents during wartime.", ja: "人々が「あぶり出し（不可視インク）」について考えるとき、彼らはしばしば戦時のスパイや秘密工作員についての物語を想像する。" },
        { en: "While it is true that governments have used this technology to hide messages, it was also a common tool for ordinary people throughout history.", ja: "政府がメッセージを隠すためにこの技術を使用したことは事実だが、それは歴史を通じて一般の人々にとっても一般的な道具であった。" },
        { en: "Before modern privacy laws and secure envelopes existed, letters could easily be read by anyone who carried them.", ja: "現代のプライバシー法や安全な封筒が存在する前は、手紙はそれを運ぶ誰によっても簡単に読まれてしまう可能性があった。" },
        { en: "As a result, merchants protecting business deals and lovers sending private notes frequently used invisible ink to keep their communications secret from curious eyes.", ja: "その結果、商談を守る商人やプライベートなメモを送る恋人たちは、好奇の目から通信を秘密にするために頻繁に不可視インクを使用した。" },
        { en: "There are two main types of invisible ink that have been used for centuries.", ja: "何世紀にもわたって使われてきた不可視インクには、主に2つのタイプがある。" },
        { en: "The first type uses organic fluids found in most kitchens, such as lemon juice, milk, or vinegar.", ja: "最初のタイプは、レモン汁、牛乳、酢など、ほとんどの台所にある有機液体を使用する。" },
        { en: "These liquids are clear when painted on paper, but because they contain acid or sugar, they weaken the paper slightly.", ja: "これらの液体は紙に塗ると透明だが、酸や糖分を含んでいるため、紙をわずかに弱める。" },
        { en: "To read the message, the receiver simply holds the paper near a heat source, like a candle.", ja: "メッセージを読むために、受取人は単に紙をろうそくのような熱源の近くにかざすだけである。" },
        { en: "The heat causes the acidic parts to turn brown faster than the rest of the paper.", ja: "熱によって、酸性の部分は紙の他の部分よりも早く茶色に変色する。" },
        { en: "The second type involves complex chemical mixtures that only become visible when a special \"developer\" liquid is applied.", ja: "2つ目のタイプは、特別な「現像」液が適用されたときにのみ目に見えるようになる複雑な化学混合物を含む。" },
        { en: "Although these techniques were effective in the past, they present a significant challenge for modern historians.", ja: "これらの技術は過去には効果的であったが、現代の歴史家にとっては重大な課題となっている。" },
        { en: "Museums and archives are full of old papers that appear to be blank or contain only ordinary text.", ja: "博物館や公文書館は、白紙に見える、あるいは普通の文章しか含まれていない古い書類でいっぱいである。" },
        { en: "Historians suspect that many of them hide secret messages, but trying to read them is risky.", ja: "歴史家たちは、それらの多くが秘密のメッセージを隠しているのではないかと疑っているが、それを読もうとすることは危険を伴う。" },
        { en: "The traditional method of applying heat or chemicals to reveal the ink can easily damage or destroy fragile documents that are hundreds of years old.", ja: "インクを明らかにするために熱や化学物質を加えるという伝統的な方法は、何百年も前の壊れやすい文書を簡単に傷つけたり破壊したりしてしまう可能性がある。" },
        { en: "This leaves experts with a difficult choice: preserve the paper and never know the secret, or risk destroying the artifact to read the text.", ja: "これは専門家に難しい選択を残す。紙を保存して秘密を知らないままでいるか、テキストを読むために工芸品（資料）を破壊するリスクを冒すかである。" },
        { en: "Fortunately, researchers have recently found a solution using advanced imaging technology.", ja: "幸いなことに、研究者たちは最近、高度な画像技術を使用した解決策を見つけた。" },
        { en: "A team of scientists examined a collection of letters from the 18th century that were seized by warships during battles and never reached their destinations.", ja: "ある科学者のチームは、戦闘中に軍艦によって押収され、目的地に届かなかった18世紀の手紙のコレクションを調査した。" },
        { en: "Instead of using heat, the team used multispectral imaging, which takes photos using different wavelengths of light, such as ultraviolet and infrared.", ja: "熱を使う代わりに、チームは紫外線や赤外線など、異なる波長の光を使って写真を撮るマルチスペクトルイメージングを使用した。" },
        { en: "This method allowed them to clearly see the hidden ink on a computer screen without touching or damaging the original paper, opening a new window into history.", ja: "この方法は、元の紙に触れたり傷つけたりすることなく、コンピュータ画面上で隠されたインクをはっきりと見ることを可能にし、歴史への新しい窓を開いた。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

  **ターゲットモデル:** Letter-Locking (2025-1)

  ### 1. 量的構造
  - **総単語数:** ~360 words (Target 350-400)
  - **パラグラフ構成:**
  1. **導入:** 技術の歴史的背景。スパイだけでなく一般人も使用していた（手紙のセキュリティ以前）。
  2. **仕組み:** 2種類のインク（有機vs化学）。有機インクが熱で変色するメカニズム。
  3. **歴史家の課題:** 従来の方法（熱・薬品）は貴重な資料を破壊するリスクがある。保存と解読のジレンマ。
  4. **解決策と発見:** 戦時中に押収された未配達の手紙の研究。非破壊検査（マルチスペクトルイメージング）による解読成功。

  ### 2. 重要語彙
  - **invisible ink:** 不可視インク（あぶり出し）
  - **ordinary people:** 一般の人々
  - **acid / acidic:** 酸 / 酸性の
  - **fragile:** 壊れやすい
  - **artifact:** （歴史的）工芸品、資料
  - **seize:** 押収する
  - **wavelength:** 波長

  ---`,
      summary: `## 講師用：本文要約 (Instructor Summary)

  手紙の封筒が一般的になる前、人々はプライバシーを守るために様々な工夫をしました。過去問の「Letter-Locking（手紙自体を折って鍵にする）」に対し、本オリジナル問題は「Invisible Ink（不可視インク）」を取り上げます。

  ### 1. Beyond Spies (第1段落)
  不可視インクといえばスパイを連想しますが、封筒が普及する前は、商談や恋文を守るために一般の人々も広く使っていました。

  ### 2. How it Works (第2段落)
  レモン汁などの身近な液体は、熱を加えると酸が紙を焦がして文字が浮き出ます。一方、化学薬品を使う高度なタイプもありました。

  ### 3. The Historian's Dilemma (第3段落)
  博物館には白紙に見える古い紙がたくさんありますが、伝統的な方法（熱や薬品）でインクを浮き出させようとすると、貴重な資料を破壊してしまいます。

  ### 4. A New Light (第4段落)
  最近の研究チームは、戦時中に船で押収され配達されなかった手紙を調査しました。熱の代わりに特殊な光（マルチスペクトルイメージング）を使うことで、紙を傷つけずに秘密のメッセージを読むことに成功しました。

  ---
  講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

  | 項目 | Letter-Locking (過去問) | Hidden in Plain Sight (オリジナル) | 共通点 (Commonality) |
  | :--- | :--- | :--- | :--- |
  | **テーマ** | 手紙を物理的に折って封をする技術 | インクを見えなくして通信を守る技術 | 歴史的な通信セキュリティと現代科学による解明 |
  | **構造** | 1. 誰が使ったか（一般人含む）<br>2. 複雑な折り方の仕組み<br>3. 開封することによる資料破壊のリスク<br>4. 未配達の手紙と3Dスキャン | 1. 誰が使ったか（一般人含む）<br>2. インクの化学的仕組み<br>3. 熱を加えることによる資料破壊のリスク<br>4. 押収された手紙と光イメージング | パラグラフ構成と論理展開（普及→仕組み→課題→技術的解決）を完全踏襲 |
    | **設問1** | 誰にとって一般的だったか（差出人） | 誰が使ったか（一般人含む） | 第1段落の「使用者の範囲」を問う |
    | **設問2** | 穴に通すことの利点（開封の痕跡） | レモン汁インクの仕組み（熱で変色） | 第2段落の「技術的なメカニズム・利点」を問う |
    | **設問3** | 専門家にとっての難点（価値の喪失） | 歴史家にとっての難点（資料の破壊） | 第3段落の「研究上のジレンマ」を問う |
    | **設問4** | なぜ配達されなかったか（未払い） | なぜ手紙を入手できたか（戦時押収） | 第4段落の「資料の由来・背景理由」を問う |
    | **設問5** | 内容一致（産業革命後に封筒普及） | 内容一致（非破壊技術の有効性） | 本文全体または特定箇所の事実確認 |

    <br />

    ### 1. トピックと展開の相違 (Topic Differences)

    * **Letter-Locking (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Physical Security (物理的な封)
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「開封されたら分かる（Tamper-evidence）」という機能と、それを壊さずに内部を見る現代の3D技術。

    * **Hidden in Plain Sight (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> Chemical Security (化学的な秘匿)
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「内容自体が見えない（Steganography）」という機能と、熱を加えずに成分を検知する現代の光技術。

    <br />

    ### 2. 設問設計の比較 (Question Design)

    * **Q1:** 両者とも「スパイや政府だけに限られた技術ではなかった（Common practice）」という点を正解にしている。
    * **Q2:** 過去問は「穴に通す＝痕跡を残す」という機能的理由。オリジナルは「レモン汁＝熱が必要」という化学的理由。どちらも第2段落の詳細理解。
    * **Q3:** 両者とも「伝統的な方法で調査すると、資料としての価値が損なわれる（壊れる）」という保存上の問題を問う。
    * **Q4:** 過去問は「Unpaid postage（未払い）」が理由。オリジナルは「Seized by warships（押収）」が理由。どちらも「なぜその手紙が今、研究者の手元にあるのか（＝配達されなかった理由）」を問う。
    * **Q5:** 内容一致問題。`,
      syntax: `
    ## 4. 正解の根拠となるセンテンスの構文解析

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
    <blockquote>While it is true that governments have used this technology to hide messages, it <b>was</b> also a common tool for ordinary people throughout history.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>譲歩節 (While):</b> While it is true that governments have used... (政府が使ったのは事実だが)</li>
        <li><b>主節:</b> it was also a common tool for ordinary people...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"While A, B" の構文で、Bの部分（一般人にとっても一般的な道具だった）が強調されています。これが選択肢3の "A wide range of people, including business owners and ordinary couples" の根拠となります。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
    <blockquote>The heat <b>causes</b> the acidic parts to turn brown faster than the rest of the paper.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> The heat</li>
        <li><b>動詞 (V):</b> causes</li>
        <li><b>目的語 (O):</b> the acidic parts</li>
        <li><b>補語 (C):</b> to turn brown</li>
        <li><b>比較 (M):</b> faster than the rest of the paper</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"cause O to do"（Oに～させる）の構文。「熱が酸性部分を茶色く変色させる」という因果関係を示しており、選択肢2の "turns brown when the paper is exposed to heat" と一致します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
    <blockquote>The traditional method of applying heat or chemicals to reveal the ink <b>can</b> easily <b>damage</b> or <b>destroy</b> fragile documents that are hundreds of years old.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> The traditional method of applying heat or chemicals...</li>
        <li><b>動詞 (V):</b> can ... damage or destroy</li>
        <li><b>目的語 (O):</b> fragile documents</li>
        <li><b>関係代名詞節:</b> that are hundreds of years old</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>主語（熱や薬品を使う方法）が、動詞（文書を傷つけたり破壊したりする可能性がある）の原因となっています。これが選択肢2の "ruin the historical documents" に対応します。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
    <blockquote>A team of scientists <b>examined</b> a collection of letters from the 18th century that were seized by warships during battles and never reached their destinations.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> A team of scientists</li>
        <li><b>動詞 (V):</b> examined</li>
        <li><b>目的語 (O):</b> a collection of letters...</li>
        <li><b>関係代名詞節:</b> that were seized by warships... and never reached...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>受動態 "were seized"（押収された）が手紙の状態を説明しています。「軍艦によって押収されたため届かなかった」ことが、選択肢2の "captured by enemy ships" の根拠です。</p>
    </div>

    <h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Para 1)</h3>
    <blockquote>This method <b>allowed</b> them to clearly see the hidden ink on a computer screen without touching or damaging the original paper, opening a new window into history.</blockquote>
    <div class="syntax-box syntax-box-structure">
      <ul>
        <li><b>主語 (S):</b> This method (multispectral imaging)</li>
        <li><b>動詞 (V):</b> allowed</li>
        <li><b>目的語 (O):</b> them</li>
        <li><b>不定詞 (C):</b> to clearly see the hidden ink...</li>
        <li><b>付帯状況 (M):</b> without touching or damaging...</li>
      </ul>
    </div>
    <div class="syntax-box syntax-box-point">
      <p>"allow O to do" と "without doing" の組み合わせ。「損傷を与えることなく（without damaging）隠されたインクを見ることを可能にした」という点が、選択肢3の "read hidden text without damage" と一致します。</p>
    </div>`
    }
  }
};
