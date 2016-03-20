require! <[ fs path gitbook-markdown ]>

function type-of (txt)
  return \gitbook if txt is /^http.*gitbook/
  return \slideshare if txt is /^http.*slideshare/
  return \image if txt is /\.(?:png|jpg)$/
  return \markdown if txt is /\.(?:md|mkdn)$/
  return \email if txt is /^mailto:/
  return \url if txt is /^https?:/
  console.log "==> Unknown type: #txt"

CONTENT = fs.readFileSync(path.join(__dirname, '../SUMMARY.md'), 'utf8')
readme = gitbook-markdown.readme
console.log readme CONTENT
summary = gitbook-markdown.summary
console.log JSON.stringify summary(CONTENT),,2

