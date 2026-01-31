const XLSX = require('xlsx');

// Array of all 37 test cases
const testCases = [
  // ---------------- Positive Functional Test Cases ----------------
  {
    "TC ID": "Pos_Fun_0001",
    "Test case name": "Convert a short daily greeting phrase",
    "Input length type": "S",
    "Input": "suBha udhaeesanak",
    "Expected output": "සුභ උදෑසනක්",
    "Actual output": "සුභ උදෑසනක්",
    "Status": "Pass",
    "Accuracy justification / Description": "Word segmentation is correct; Greeting meaning is preserved.",
    "What is covered by the test": "Daily language usage; Simple sentence; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0002",
    "Test case name": "Long mixed-language input with slang + typo causes incorrect conversion",
    "Input length type": "M",
    "Input": "mata dhinuusha gaava thiyena photos tika document karalaa evanna puLuvandha? Apee gedhara ayata ee photos tika pennanna oonee. Please send it today.",
    "Expected output": "මට දිනූශ ගාව තියෙන photos ටික document කරලා එවන්න පුළුවන්ද? අපේ ගෙදර අයට ඒ photos ටික පෙන්නන්න ඕනේ. Please send it today.",
    "Actual output": "මට දිනූශ ගාව තියෙන photos ටික document කරලා එවන්න පුළුවන්ද? අපේ ගෙදර අයට ඒ photos ටික පෙන්නන්න ඕනේ. Please send it today.",
    "Status": "Pass",
    "Accuracy justification / Description": "Meaning is preserved; Singlish content is correctly converted into Sinhala while preserving meaning.",
    "What is covered by the test": "Mixed (Singlish + English); compound structure; medium (31-299 characters); Robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0003",
    "Test case name": "Convert a short request phrase",
    "Input length type": "S",
    "Input": "mata vathura tikak dhenna puLuvandha?",
    "Expected output": "මට වතුර ටිකක් දෙන්න පුළුවන්ද?",
    "Actual output": "මට වතුර ටිකක් දෙන්න පුළුවන්ද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Interrogative (question); S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0004",
    "Test case name": "Convert an answer to a call",
    "Input length type": "S",
    "Input": "mama eyaata call ekak ganna kiyannam",
    "Expected output": "මම එයාට call එකක් ගන්න කියන්නම්",
    "Actual output": "මම එයාට call එකක් ගන්න කියන්නම්",
    "Status": "Pass",
    "Accuracy justification / Description": "call meaning is preserved; Sinhala output is correct; English word is remained the same.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0005",
    "Test case name": "Convert a conversation between friends",
    "Input length type": "M",
    "Input": "Oyaa ara potha kiyevvadha? eeka nam maru potha needha eeka? Mata kiyavanna kiyavanna aasa hithunaa.",
    "Expected output": "ඔයා අර පොත කියෙව්වද? ඒක නම් මරු පොත නේද ඒක? මට කියවන්න කියවන්න ආස හිතුනා.",
    "Actual output": "ඔයා අර පොත කියෙව්වද? ඒක නම් මරු පොත නේද ඒක? මට කියවන්න කියවන්න ආස හිතුනා.",
    "Status": "Pass",
    "Accuracy justification / Description": "meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; interrogative (question) and dialogue; medium (31-299 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0005_2", // Identified duplicate ID in CSV, renamed for uniqueness
    "Test case name": "Convert a question asked by a student which doesn't know the correct answer",
    "Input length type": "S",
    "Input": "Miss mee prashneta gaelapena uththaree mokakdha?",
    "Expected output": "Miss මේ ප්‍රශ්නෙට ගැලපෙන උත්තරේ මොකක්ද?",
    "Actual output": "Miss මේ ප්‍රශ්නෙට ගැලපෙන උත්තරේ මොකක්ද?",
    "Status": "Pass",
    "Accuracy justification / Description": "meaning is preserved; English word is remained the same; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Interrogative (question); s (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0006",
    "Test case name": "Simple statement",
    "Input length type": "S",
    "Input": "mama gedhara yanavaa",
    "Expected output": "මම ගෙදර යනවා",
    "Actual output": "මම ගෙදර යනවා",
    "Status": "Pass",
    "Accuracy justification / Description": "meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_fun_0007",
    "Test case name": "Time reference",
    "Input length type": "S",
    "Input": "mata adha loku vaedak thiyenavaa",
    "Expected output": "මට අද ලොකු වැඩක් තියෙනවා",
    "Actual output": "මට අද ලොකු වැඩක් තියෙනවා",
    "Status": "Pass",
    "Accuracy justification / Description": "Meaning is preserved; Sinhala output is correct; Time is accurately converted.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0008",
    "Test case name": "Question word",
    "Input length type": "S",
    "Input": "mee mokakdha thiyennee?",
    "Expected output": "මේ මොකක්ද තියෙන්නේ?",
    "Actual output": "මේ මොකක්ද තියෙන්නේ?",
    "Status": "Pass",
    "Accuracy justification / Description": "Question meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0009",
    "Test case name": "Informal slang",
    "Input length type": "M",
    "Input": "machan mokoo venne mee dhavas vala?",
    "Expected output": "මචන් මොකෝ වෙන්නෙ මේ දවස් වල?",
    "Actual output": "මචන් මොකෝ වෙන්නෙ මේ දවස් වල?",
    "Status": "Pass",
    "Accuracy justification / Description": "Question meaning is preserved; Sinhala output is correct; Slang is accurately converted.",
    "What is covered by the test": "Daily language usage; Interrogative (question); medium (31-299 characters); robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0010",
    "Test case name": "Sentence with name",
    "Input length type": "M",
    "Input": "nimal adha enne naee kivvaa",
    "Expected output": "නිමල් අද එන්නෙ නෑ කිව්වා",
    "Actual output": "නිමල් අද එන්නෙ නෑ කිව්වා",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence meaning is preserved; Sinhala output is correct; Name is accurately converted.",
    "What is covered by the test": "Daily language usage; medium (31-299 characters); robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0011",
    "Test case name": "Units of measurement preserved",
    "Input length type": "S",
    "Input": "mata piti 3kg ganna oone karanavaa",
    "Expected output": "මට පිටි 3kg ගන්න ඕනෙ කරනවා",
    "Actual output": "මට පිටි 3kg ගන්න ඕනෙ කරනවා",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence meaning is preserved; Sinhala output is correct; Measurement has remained the same.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0012",
    "Test case name": "convert a command, giving direction",
    "Input length type": "S",
    "Input": "othanin vam paeththata haerenna",
    "Expected output": "ඔතනින් වම් පැත්තට හැරෙන්න",
    "Actual output": "ඔතනින් වම් පැත්තට හැරෙන්න",
    "Status": "pass",
    "Accuracy justification / Description": "Command meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0013",
    "Test case name": "Compound sentence",
    "Input length type": "M",
    "Input": "mama call kalaa nam hoDHAyi, haebaeyi eyaa answer karayidha dhanne naehae",
    "Expected output": "මම call කලා නම් හොඳයි, හැබැයි එයා answer කරයිද දන්නෙ නැහැ",
    "Actual output": "මම call කලා නම් හොඳයි, හැබැයි එයා answer කරයිද දන්නෙ නැහැ",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence meaning is preserved; comma is preserved; Both clauses are converted correctly.",
    "What is covered by the test": "Daily language usage; medium (31-299 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0014",
    "Test case name": "Instruction",
    "Input length type": "S",
    "Input": "meeka hariyata kiyavalaa balanna",
    "Expected output": "මේක හරියට කියවලා බලන්න",
    "Actual output": "මේක හරියට කියවලා බලන්න",
    "Status": "Pass",
    "Accuracy justification / Description": "Instruction meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0015",
    "Test case name": "Convert long paragraphs",
    "Input length type": "L",
    "Input": "adha udhee vaedata yanakota mama giyapu bus eka loku traffic ekak maedha hira velaa hitiyaa. kondhosthara bus eken baehaela gihin balanakota vaahana dhekak haeppila thiyenavaa dhaekkaa. eeka nisaa mata vaedata yanna parakku unaa.",
    "Expected output": "අද උදේ වැඩට යනකොට මම ගියපු bus එක ලොකු traffic එකක් මැද හිර වෙලා හිටියා. කොන්දොස්තර bus එකෙන් බැහැල ගිහින් බලනකොට වාහන දෙකක් හැප්පිල තියෙනවා දැක්කා. ඒක නිසා මට වැඩට යන්න පරක්කු උනා.",
    "Actual output": "අද උදේ වැඩට යනකොට මම ගියපු bus එක ලොකු traffic එකක් මැද හිර වෙලා හිටියා. කොන්දොස්තර bus එකෙන් බැහැල ගිහින් බලනකොට වාහන දෙකක් හැප්පිල තියෙනවා දැක්කා. ඒක නිසා මට වැඩට යන්න පරක්කු උනා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Paragraph is converted without any hindrance; English words remained the same.",
    "What is covered by the test": "Daily language usage; Long ( =>300 characters); robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0016",
    "Test case name": "convert Question + English",
    "Input length type": "S",
    "Input": "payment eka complete dha?",
    "Expected output": "payment එක complete ද?",
    "Actual output": "payment එක complete ද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Question meaning is preserved; English words remained the same; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0017",
    "Test case name": "Convert negation",
    "Input length type": "S",
    "Input": "mama adha campus enne naee",
    "Expected output": "මම අද campus එන්නෙ නෑ",
    "Actual output": "මම අද campus එන්නෙ නෑ",
    "Status": "Pass",
    "Accuracy justification / Description": "Negation meaning is preserved; English words remained the same; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Negation; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0018",
    "Test case name": "Convert future plans/schedules",
    "Input length type": "M",
    "Input": "api labana sathiyee anuraaDhapura yanna balaaporoththuven innava",
    "Expected output": "අපි ලබන සතියේ අනුරාධපුර යන්න බලාපොරොත්තුවෙන් ඉන්නවා",
    "Actual output": "අපි ලබන සතියේ අනුරාධපුර යන්න බලාපොරොත්තුවෙන් ඉන්නවා",
    "Status": "Pass",
    "Accuracy justification / Description": "Meaning is preserved; verbs are accurate according to the tense; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Future tense; medium (31-299 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0019",
    "Test case name": "Convert Informal plural sentences",
    "Input length type": "S",
    "Input": "api okkoma yaqq",
    "Expected output": "අපි ඔක්කොම යං",
    "Actual output": "අපි ඔක්කොම යං",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence is readable; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0020",
    "Test case name": "Emotion expression",
    "Input length type": "S",
    "Input": "mata harima sathutak dhaenennee",
    "Expected output": "මට හරිම සතුටක් දැනෙන්නේ",
    "Actual output": "මට හරිම සතුටක් දැනෙන්නේ",
    "Status": "Pass",
    "Accuracy justification / Description": "Emotion is expressed correctly; Meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Emotion express; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0021",
    "Test case name": "Convert past tense sentences",
    "Input length type": "S",
    "Input": "eyaa ee kenaava kalin dhaekalaa thibunaa",
    "Expected output": "එයා ඒ කෙනාව කලින් දැකලා තිබුනා",
    "Actual output": "එයා ඒ කෙනාව කලින් දැකලා තිබුනා",
    "Status": "Pass",
    "Accuracy justification / Description": "verbs are accurate according to the tense; Sentence is readable; Meaning is preserved.",
    "What is covered by the test": "Daily language usage; Past tense; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0022",
    "Test case name": "Convert future tense sentences",
    "Input length type": "S",
    "Input": "Anidhdhaa nangigee upandhinaya yedhilaa thiyenavaa",
    "Expected output": "අනිද්දා නන්ගිගේ උපන්දිනය යෙදිලා තියෙනවා",
    "Actual output": "අනිද්දා නන්ගිගේ උපන්දිනය යෙදිලා තියෙනවා",
    "Status": "Pass",
    "Accuracy justification / Description": "verbs are accurate according to the tense; Meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Future tense; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0023",
    "Test case name": "preserve quoted warnings",
    "Input length type": "S",
    "Input": "\"\"avavaadhayayi!\"\"",
    "Expected output": "\"\"අවවාදයයි!\"\"",
    "Actual output": "\"\"අවවාදයයි!\"\"",
    "Status": "Pass",
    "Accuracy justification / Description": "Meaning is preserved; Warning is correctly converted; Quotation marks remain intact; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Quote; S (<=30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0024",
    "Test case name": "Handle multiple abbreviations",
    "Input length type": "M",
    "Input": "oyaagee NIC card ekayi SLIIT ID ekayi thiyenavadha?",
    "Expected output": "ඔයාගේ NIC card එකයි SLIIT ID එකයි තියෙනවද?",
    "Actual output": "ඔයාගේ NIC card එකයි SLIIT ID එකයි තියෙනවද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Abbreviations remained the same; Question meaning is preserved.",
    "What is covered by the test": "Singlish + English; Interrogative (question); medium (31-299 characters); robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0025",
    "Test case name": "Correct Multiple spaces handling",
    "Input length type": "S",
    "Input": "oyaa kaeema kaeevadha?",
    "Expected output": "ඔයා කෑම කෑවද?",
    "Actual output": "ඔයා කෑම කෑවද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Question meaning is preserved; Sinhala output is correct.",
    "What is covered by the test": "Daily language usage; Interrogative (question); S (<=30 characters); Accuracy validation"
  },

  // ---------------- Negative Functional Test Cases ----------------
  {
    "TC ID": "Neg_Fun_0001",
    "Test case name": "Output break due to mixed casing",
    "Input length type": "S",
    "Input": "api BhaNa ahannavaaDhi uNa",
    "Expected output": "අපි බණ අහන්න වාඩි උණා",
    "Actual output": "අපි බ්හණ අහන්න වාධි උණ",
    "Status": "Fail",
    "Accuracy justification / Description": "Incorrect(or additional) Sinhala letters are generated; Disrupts transliterational rules.",
    "What is covered by the test": "Typographicall error handling; Past tense; S (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0002",
    "Test case name": "Incorrect segmentation due to combined words",
    "Input length type": "S",
    "Input": "siyaludhenatamaaayuboovan",
    "Expected output": "සියලු දෙනාටම ආයුබෝවන්",
    "Actual output": "සියලුදෙනාටමාඅයුබෝවන්",
    "Status": "Fail",
    "Accuracy justification / Description": "Incorrect word segmentations due to lack of space between words; Output does not interpret the intended phrase.",
    "What is covered by the test": "Typographicall error handling; Simple sentence; S (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0003",
    "Test case name": "Incorrect transliterations due to repeated letters",
    "Input length type": "S",
    "Input": "ammoooo mee balannako",
    "Expected output": "අම්මෝ මේ බලන්නකෝ",
    "Actual output": "අම්මෝඕ මේ බලන්නකෝ",
    "Status": "Fail",
    "Accuracy justification / Description": "Repeated letters make sinhala letters corrupted; Hardly readable.",
    "What is covered by the test": "Informal language; Simple sentence; S (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0004",
    "Test case name": "output break due to symbols",
    "Input length type": "M",
    "Input": "Eyaa gaava Rs%# 500 thibila mata dhunnaa",
    "Expected output": "එයා ගාව Rs.500 තිබිල මට දුන්නා",
    "Actual output": "එයා ගාව Rs%#500 තිබිල මට දුන්නා",
    "Status": "Fail",
    "Accuracy justification / Description": "Special symbols interrupt the conversion; Output contains noisy symbols.",
    "What is covered by the test": "Punctuatuion/Numbers; Simple sentence; medium (31-299 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0005",
    "Test case name": "Mixing of letters due to misspelling",
    "Input length type": "M",
    "Input": "Mata aniwaarenma goda yanna puluwan",
    "Expected output": "මට අනිවාරෙන්ම ගොඩ යන්න පුළුවන්",
    "Actual output": "මට අනිwආරෙන්ම ගොඩ යන්න පුලුwඅන්",
    "Status": "Fail",
    "Accuracy justification / Description": "English and Sinhala letters are mixed; Hardly readable.",
    "What is covered by the test": "Typographicall error handling; Simple sentence; medium (31-299 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0006",
    "Test case name": "Output break due to numbers",
    "Input length type": "M",
    "Input": "aepal gedi 10n 3k kunu velaa thibunaa",
    "Expected output": "ඇපල් ගෙඩි දහයෙන් තුනක් කුනු වෙලා තිබුනා",
    "Actual output": "ඇපල් ගෙඩි 10n 3ක් කුනු වෙලා තිබුනා",
    "Status": "Fail",
    "Accuracy justification / Description": "Numbers are tangled with words; Hardly readable.",
    "What is covered by the test": "Numbers; Past tense; medium (31-299 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0007",
    "Test case name": "Output break due to shorthands",
    "Input length type": "S",
    "Input": "mma oya pththata ennm",
    "Expected output": "මම ඔය පැත්තට එන්නම්",
    "Actual output": "ම්ම ඔය ප්ත්තට එන්න්ම්",
    "Status": "Fail",
    "Accuracy justification / Description": "Hardly readable; meaning is not preserved.",
    "What is covered by the test": "Typographicall error handling; Simple sentence; S (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0008",
    "Test case name": "Over-segmented input",
    "Input length type": "S",
    "Input": "ma ta va th ura th iba ha yi",
    "Expected output": "මට වතුර තිබහයි",
    "Actual output": "ම ට ව ත් උර ත් ඉබ හ යි",
    "Status": "Fail",
    "Accuracy justification / Description": "disrupts character mappings; meaning is not preserved.",
    "What is covered by the test": "Formatting (line breaks/spaces); Simple sentence; S (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0009",
    "Test case name": "sentence mixed with english words",
    "Input length type": "S",
    "Input": "my nangi yesterday Colombo giya",
    "Expected output": "මගේ නංගි ඊයේ කොළඹ ගියා",
    "Actual output": "my නංගි yesterday Colombo ගියා",
    "Status": "Fail",
    "Accuracy justification / Description": "Mixed English words disrupts conversion; meaning is not preserved.",
    "What is covered by the test": "Mixed (Singlish + English); Past tense; S (<=30 characters); robustness validation"
  },
  {
    "TC ID": "Neg_Fun_0010",
    "Test case name": "Accuracy reduction due to line breaking",
    "Input length type": "S",
    "Input": "magee\\nge\\ndhara\\nlassa\\nnay",
    "Expected output": "මගේ ගෙදර ලස්සනයි",
    "Actual output": "මගේ\\nගෙ\\nදර\\nලස්ස\\nනයි",
    "Status": "Fail",
    "Accuracy justification / Description": "Interrupts word mapping; fragmented Output.",
    "What is covered by the test": "Formatting (line breaks/spaces); Simple sentence; S (<=30 characters); robustness validation"
  }
];

// Create workbook
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(testCases);
XLSX.utils.book_append_sheet(wb, ws, "TestCases");

// Write the Excel file
XLSX.writeFile(wb, "IT3040_TestCases.xlsx");
console.log("Excel file generated successfully!");
