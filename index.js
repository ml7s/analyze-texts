function analyzetext(text) {
    const stopWords = {
        en: ["a", "an", "the", "and", "or", "but", "if", "then", "else", "when", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"],
        ar: ["في", "من", "على", "إلى", "عن", "مع", "كان", "هو", "هي", "هذا", "هذه", "ذاك", "تلك", "ما", "ماذا", "لماذا", "كيف", "متى", "أين", "الذي", "التي", "الذين", "اللاتي", "اللواتي", "كل", "بعض", "أي", "أحد", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة", "ألف", "مليون", "مليار", "أول", "ثاني", "ثالث", "رابع", "خامس", "سادس", "سابع", "ثامن", "تاسع", "عاشر", "أمام", "خلف", "فوق", "تحت", "يمين", "يسار", "داخل", "خارج", "بين", "عند", "إلى", "من", "عن", "مع", "في", "لى", "إلى", "عن", "مع", "كان", "هو", "هي", "هذا", "هذه", "ذلك", "تلك", "ما", "ماذا", "لماذا", "كيف", "متى", "أين", "الذي", "التي", "الذين", "اللاتي", "اللواتي", "كل", "بعض", "أي", "أحد", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة", "ألف", "مليون", "مليار", "أول", "ثاني", "ثالث", "رابع", "خامس", "سادس", "سابع", "ثامن", "تاسع", "عاشر", "أمام", "خلف", "فوق", "تحت", "يمين", "يسار", "داخل", "خارج", "بين", "عند"]
    };
    function removeStopWords(text, lang) {
        const words = text.split(/\s+/);
        return words.filter(word => !stopWords[lang].includes(word.toLowerCase())).join(' ');
    }
    function detectlanguage(text) {
        const arabicPattern = /[\u0600-\u06FF]/;
        return arabicPattern.test(text) ? 'ar' : 'en';
    }
    function extractkeywords(text, lang) {
        const cleanedText = removeStopWords(text, lang);
        const words = cleanedText.split(/\s+/);
        const frequency = {};
        words.forEach(word => {
            frequency[word] = (frequency[word] || 0) + 1;
        });
        return Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
    }
    function analyzesentiment(text, lang) {
        const posword = {
            en: ["good", "happy", "joy", "excellent", "great", "positive", "love", "like"],
            ar: ["جيد", "سعيد", "فرح", "ممتاز", "رائع", "إيجابي", "حب", "يحب","أحب"]
        };
        const negword = {
            en: ["bad", "sad", "angry", "terrible", "horrible", "negative", "hate", "dislike"],
            ar: ["سيء", "حزين", "غاضب", "فظيع", "رهيب", "سلبي", "يكره", "لا يحب" , "أكره" , "لا أحب",]
        };
        const words = text.split(/\s+/);
        let score = 0;
        words.forEach(word => {
            if (posword[lang].includes(word.toLowerCase())) {
                score++;
            } else if (negword[lang].includes(word.toLowerCase())) {
                score--;
            }
        });

        return score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral';
    }
    const lang = detectlanguage(text);
    const keywords = extractkeywords(text, lang);
    const sentiment = analyzesentiment(text, lang);
    return {
        language: lang,
        keywords: keywords,
        sentiment: sentiment
    };
}
module.exports = analyzetext;