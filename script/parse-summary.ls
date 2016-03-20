require! <[ fs path gitbook-markdown ]>
CONTENT = fs.readFileSync(path.join(__dirname, '../SUMMARY.md'), 'utf8')
readme = gitbook-markdown.readme
console.log readme CONTENT
summary = gitbook-markdown.summary
console.log JSON.stringify summary(CONTENT),,2

