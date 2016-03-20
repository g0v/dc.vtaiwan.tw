require! <[ fs path gitbook-markdown ]>

function type-of (txt)
  return \gitbook if txt is /^http.*gitbook/
  return \slideshare if txt is /^http.*slideshare/
  return \image if txt is /\.(?:png|jpg)$/
  return \markdown if txt is /\.(?:md|mkdn)$/
  return \email if txt is /^mailto:/
  return \url if txt is /^https?:/
  console.log "==> Unknown type: #txt"

# pathless title denotes stage
const cwd = path.join(__dirname, '..')
const src = fs.readFileSync("#cwd/SUMMARY.md", 'utf8')

out = {StageIntro: {}, Stages: [], Site: gitbook-markdown.readme src}
{parts: [idx]} = gitbook-markdown.summary src
for {title, path, articles} in idx.articles | path
  typ = type-of path
  out.Site[typ] = path if typ isnt \markdown
  console.log "#title #typ - #path"

i = 0
for {title, path, articles} in idx.articles | not path
  [title, intro] = title.split /\s*[：:]\s*/
  console.log title
  out.Stages.push { title, stage: "#{ ++i }" }
  out.StageIntro["#i"] = [intro]
  for {title, path} in articles | path
    console.log "> #title - #path"

fs.write-file-sync "#cwd/src/SUMMARY.json", JSON.stringify(out,,2)
