// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’


const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

for (const s of strings) {
    console.log(s.length);
}

strings.forEach(s => {
    console.log(s.length);
})
