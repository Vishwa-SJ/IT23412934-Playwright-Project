import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - 37 Test Cases', () => {

  const testCases = [
    // ---------------- Positive Functional Test Cases ----------------
    {
      "TC ID": "Pos_Fun_0001",
      "Test case name": "Convert a short daily greeting phrase",
      "Input": "suBha udhaeesanak",
      "Expected output": "සුභ උදෑසනක්"
    },
    {
      "TC ID": "Pos_Fun_0002",
      "Test case name": "Long mixed-language input with slang",
      "Input": "mata dhinuusha gaava thiyena photos tika document karalaa evanna puLuvandha? Apee gedhara ayata ee photos tika pennanna oonee. Please send it today.",
      "Expected output": "මට දිනූශ ගාව තියෙන photos ටික document කරලා එවන්න පුළුවන්ද? අපේ ගෙදර අයට ඒ photos ටික පෙන්නන්න ඕනේ. Please send it today."
    },
    {
      "TC ID": "Pos_Fun_0003",
      "Test case name": "Convert a short request phrase",
      "Input": "mata vathura tikak dhenna puLuvandha?",
      "Expected output": "මට වතුර ටිකක් දෙන්න පුළුවන්ද?"
    },
    {
      "TC ID": "Pos_Fun_0004",
      "Test case name": "Convert an answer to a call",
      "Input": "mama eyaata call ekak ganna kiyannam",
      "Expected output": "මම එයාට call එකක් ගන්න කියන්නම්"
    },
    {
      "TC ID": "Pos_Fun_0005",
      "Test case name": "Convert a conversation between friends",
      "Input": "Oyaa ara potha kiyevvadha? eeka nam maru potha needha eeka? Mata kiyavanna kiyavanna aasa hithunaa.",
      "Expected output": "ඔයා අර පොත කියෙව්වද? ඒක නම් මරු පොත නේද ඒක? මට කියවන්න කියවන්න ආස හිතුනා."
    },
    {
      "TC ID": "Pos_Fun_0005_2",
      "Test case name": "Convert a question asked by a student",
      "Input": "Miss mee prashneta gaelapena uththaree mokakdha?",
      "Expected output": "Miss මේ ප්‍රශ්නෙට ගැලපෙන උත්තරේ මොකක්ද?"
    },
    {
      "TC ID": "Pos_Fun_0006",
      "Test case name": "Simple statement",
      "Input": "mama gedhara yanavaa",
      "Expected output": "මම ගෙදර යනවා"
    },
    {
      "TC ID": "Pos_Fun_0007",
      "Test case name": "Time reference",
      "Input": "mata adha loku vaedak thiyenavaa",
      "Expected output": "මට අද ලොකු වැඩක් තියෙනවා"
    },
    {
      "TC ID": "Pos_Fun_0008",
      "Test case name": "Question word",
      "Input": "mee mokakdha thiyennee?",
      "Expected output": "මේ මොකක්ද තියෙන්නේ?"
    },
    {
      "TC ID": "Pos_Fun_0009",
      "Test case name": "Informal slang",
      "Input": "machan mokoo venne mee dhavas vala?",
      "Expected output": "මචන් මොකෝ වෙන්නෙ මේ දවස් වල?"
    },
    {
      "TC ID": "Pos_Fun_0010",
      "Test case name": "Sentence with name",
      "Input": "nimal adha enne naee kivvaa",
      "Expected output": "නිමල් අද එන්නෙ නෑ කිව්වා"
    },
    {
      "TC ID": "Pos_Fun_0011",
      "Test case name": "Units of measurement preserved",
      "Input": "mata piti 3kg ganna oone karanavaa",
      "Expected output": "මට පිටි 3kg ගන්න ඕනෙ කරනවා"
    },
    {
      "TC ID": "Pos_Fun_0012",
      "Test case name": "Convert a command, giving direction",
      "Input": "othanin vam paeththata haerenna",
      "Expected output": "ඔතනින් වම් පැත්තට හැරෙන්න"
    },
    {
      "TC ID": "Pos_Fun_0013",
      "Test case name": "Compound sentence",
      "Input": "mama call kalaa nam hoDHAyi, haebaeyi eyaa answer karayidha dhanne naehae",
      "Expected output": "මම call කලා නම් හොඳයි, හැබැයි එයා answer කරයිද දන්නෙ නැහැ"
    },
    {
      "TC ID": "Pos_Fun_0014",
      "Test case name": "Instruction",
      "Input": "meeka hariyata kiyavalaa balanna",
      "Expected output": "මේක හරියට කියවලා බලන්න"
    },
    {
      "TC ID": "Pos_Fun_0015",
      "Test case name": "Convert long paragraphs",
      "Input": "adha udhee vaedata yanakota mama giyapu bus eka loku traffic ekak maedha hira velaa hitiyaa. kondhosthara bus eken baehaela gihin balanakota vaahana dhekak haeppila thiyenavaa dhaekkaa. eeka nisaa mata vaedata yanna parakku unaa.",
      "Expected output": "අද උදේ වැඩට යනකොට මම ගියපු bus එක ලොකු traffic එකක් මැද හිර වෙලා හිටියා. කොන්දොස්තර bus එකෙන් බැහැල ගිහින් බලනකොට වාහන දෙකක් හැප්පිල තියෙනවා දැක්කා. ඒක නිසා මට වැඩට යන්න පරක්කු උනා."
    },
    {
      "TC ID": "Pos_Fun_0016",
      "Test case name": "Convert Question + English",
      "Input": "payment eka complete dha?",
      "Expected output": "payment එක complete ද?"
    },
    {
      "TC ID": "Pos_Fun_0017",
      "Test case name": "Convert negation",
      "Input": "mama adha campus enne naee",
      "Expected output": "මම අද campus එන්නෙ නෑ"
    },
    {
      "TC ID": "Pos_Fun_0018",
      "Test case name": "Convert future plans",
      "Input": "api labana sathiyee anuraaDhapura yanna balaaporoththuven innava",
      "Expected output": "අපි ලබන සතියේ අනුරාධපුර යන්න බලාපොරොත්තුවෙන් ඉන්නවා"
    },
    {
      "TC ID": "Pos_Fun_0019",
      "Test case name": "Convert Informal plural sentences",
      "Input": "api okkoma yaqq",
      "Expected output": "අපි ඔක්කොම යං"
    },
    {
      "TC ID": "Pos_Fun_0020",
      "Test case name": "Emotion expression",
      "Input": "mata harima sathutak dhaenennee",
      "Expected output": "මට හරිම සතුටක් දැනෙන්නේ"
    },
    {
      "TC ID": "Pos_Fun_0021",
      "Test case name": "Convert past tense sentences",
      "Input": "eyaa ee kenaava kalin dhaekalaa thibunaa",
      "Expected output": "එයා ඒ කෙනාව කලින් දැකලා තිබුනා"
    },
    {
      "TC ID": "Pos_Fun_0022",
      "Test case name": "Convert future tense sentences",
      "Input": "Anidhdhaa nangigee upandhinaya yedhilaa thiyenavaa",
      "Expected output": "අනිද්දා නන්ගිගේ උපන්දිනය යෙදිලා තියෙනවා"
    },
    {
      "TC ID": "Pos_Fun_0023",
      "Test case name": "Preserve quoted warnings",
      "Input": "\"\"avavaadhayayi!\"\"",
      "Expected output": "\"\"අවවාදයයි!\"\""
    },
    {
      "TC ID": "Pos_Fun_0024",
      "Test case name": "Handle multiple abbreviations",
      "Input": "oyaagee NIC card ekayi SLIIT ID ekayi thiyenavadha?",
      "Expected output": "ඔයාගේ NIC card එකයි SLIIT ID එකයි තියෙනවද?"
    },
    {
      "TC ID": "Pos_Fun_0025",
      "Test case name": "Correct Multiple spaces handling",
      "Input": "oyaa kaeema kaeevadha?",
      "Expected output": "ඔයා කෑම කෑවද?"
    },

    // ---------------- Negative Functional Test Cases ----------------
    {
      "TC ID": "Neg_Fun_0001",
      "Test case name": "Output break due to mixed casing",
      "Input": "api BhaNa ahannavaaDhi uNa",
      "Expected output": "අපි බණ අහන්න වාඩි උණා"
    },
    {
      "TC ID": "Neg_Fun_0002",
      "Test case name": "Incorrect segmentation",
      "Input": "siyaludhenatamaaayuboovan",
      "Expected output": "සියලු දෙනාටම ආයුබෝවන්"
    },
    {
      "TC ID": "Neg_Fun_0003",
      "Test case name": "Repeated letters corruption",
      "Input": "ammoooo mee balannako",
      "Expected output": "අම්මෝ මේ බලන්නකෝ"
    },
    {
      "TC ID": "Neg_Fun_0004",
      "Test case name": "Output break due to symbols",
      "Input": "Eyaa gaava Rs%# 500 thibila mata dhunnaa",
      "Expected output": "එයා ගාව Rs.500 තිබිල මට දුන්නා"
    },
    {
      "TC ID": "Neg_Fun_0005",
      "Test case name": "Misspelling mixing letters",
      "Input": "Mata aniwaarenma goda yanna puluwan",
      "Expected output": "මට අනිවාරෙන්ම ගොඩ යන්න පුළුවන්"
    },
    {
      "TC ID": "Neg_Fun_0006",
      "Test case name": "Output break due to numbers",
      "Input": "aepal gedi 10n 3k kunu velaa thibunaa",
      "Expected output": "ඇපල් ගෙඩි දහයෙන් තුනක් කුනු වෙලා තිබුනා"
    },
    {
      "TC ID": "Neg_Fun_0007",
      "Test case name": "Output break due to shorthands",
      "Input": "mma oya pththata ennm",
      "Expected output": "මම ඔය පැත්තට එන්නම්"
    },
    {
      "TC ID": "Neg_Fun_0008",
      "Test case name": "Over-segmented input",
      "Input": "ma ta va th ura th iba ha yi",
      "Expected output": "මට වතුර තිබහයි"
    },
    {
      "TC ID": "Neg_Fun_0009",
      "Test case name": "Mixed with English words",
      "Input": "my nangi yesterday Colombo giya",
      "Expected output": "මගේ නංගි ඊයේ කොළඹ ගියා"
    },
    {
      "TC ID": "Neg_Fun_0010",
      "Test case name": "Accuracy reduction due to line breaking",
      "Input": "magee\\nge\\ndhara\\nlassa\\nnay",
      "Expected output": "මගේ ගෙදර ලස්සනයි"
    }
  ];

  for (const tc of testCases) {
    // tc["TC ID"] සහ tc["Test case name"] භාවිතා කර ඇති නිසා duplicate title error එක මග හැරේ
    test(`${tc["TC ID"]} - ${tc["Test case name"]}`, async ({ page }) => {

      await page.goto('https://www.swifttranslator.com/');

      const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
      const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

      // ක්ෂේත්‍රය හිස් කර ක්ලික් කරන්න
      await page.fill(inputSelector, '');
      await inputArea.click();
      
      const text = tc["Input"];
      const CHUNK = 200; 

      if (text && text.length > 0) {
        if (text.length <= CHUNK) {
          await inputArea.type(text, { delay: 35 });
        } else {
          for (let i = 0; i < text.length; i += CHUNK) {
            const chunk = text.slice(i, i + CHUNK);
            await inputArea.type(chunk, { delay: 25 });
            await page.waitForTimeout(100);
          }
        }
      }

      // Input event එක trigger කරන්න (transliteration එක සිදු වීමට)
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, data: el.value }));
        el.dispatchEvent(new Event('input', { bubbles: true }));
      }, inputSelector);

      // UI Clear කිරීමේ පරීක්ෂණය සඳහා (අවශ්‍ය නම් පමණි)
      if (tc["TC ID"] === 'Pos_UI_0002') {
        const clearLocator = page.getByRole('button', { name: /clear/i });
        try {
          await clearLocator.first().click();
        } catch (err) {
          await inputArea.click();
          const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';
          await page.keyboard.press(`${modifier}+A`);
          await page.keyboard.press('Backspace');
        }
      }

      // ප්‍රතිදානය (Output) සහිත div එක තෝරා ගැනීම
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

      // පරිවර්තනය අවසන් වන තෙක් බලා සිටීම සහ තහවුරු කිරීම (Assertion)
      const expectedText = tc["Expected output"];
      
      // තත්පර 15ක උපරිම කාලයක් ලබා දී ඇත
      await expect(outputBox).toContainText(expectedText, { timeout: 15000 });

      const output = await outputBox.textContent();
      console.log(`Running: ${tc["TC ID"]} | Result: ${output}`);

      expect(output).toContain(expectedText);
    });
  }
});