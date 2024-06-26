# analyze-texts

`analyze-texts` هي مكتبة لتحليل النصوص تدعم كل من اللغتين العربية والإنجليزية. توفر المكتبة ميزات مثل استخراج الكلمات المفتاحية، تحليل المشاعر، وتحديد لغة النص باستخدام تقنيات التعلم الآلي.

## التثبيت

يمكنك تثبيت المكتبة باستخدام npm:

```bash
npm install analyze-texts
```
الاستخدام
-----

### CommonJS
 طريقة استخدام المكتبة لتحليل النصوص:

```js
const analyzetext = require('analyze-texts');

const text = "أنا أحب البرمجة. إنه أمر عظيم ويسعدني.";
const analysis = analyzetext(text);

console.log("language:", analysis.language);
console.log("keywords:", analysis.keywords);
console.log("sentiment:", analysis.sentiment);
```

### مثال لتحليل نص باللغة الإنجليزية:

```js
const analyzetext = require('analyze-texts');

const text = "I love programming. It is amazing and makes me happy.";
const analysis = analyzetext(text);

console.log("language:", analysis.language);
console.log("Keywords:", analysis.keywords);
console.log("sentiment:", analysis.sentiment);

```

### مخرجات المثال باللغة العربية:

```js
language: ar
Keywords: [ 'أنا', 'أحب', 'البرمجة.', 'إنه', 'أمر', 'عظيم', 'ويسعدني.' ]
sentiment: positive
```
### مخرجات المثال باللغة الإنجليزية:

```js
language: en
Keywords: [
  'I',          'love',
  'programming.', 'It',
  'is',         'amazing',
  'and',        'makes',
  'me',         'happy.'
]
sentiment: positive

```