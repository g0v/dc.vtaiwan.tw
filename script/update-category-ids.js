import superagent from 'superagent-bluebird-promise'
import fs from 'mz/fs'
import co from 'co'

const proposalDataFile = './src/Proposal/data/Proposals.json';

co(function* () {
  const data = JSON.parse(fs.readFileSync(proposalDataFile))
  yield Object.keys(data).map(function (name) {
    return superagent.get(data[name].stages[0].url + '.json')
      .then(function ({body}) {
        data[name].stages[0].category_num = body.topic_list.topics[0].category_id
      })
  })
  fs.writeFileSync(proposalDataFile, JSON.stringify(data, null, 2))
}).catch(console.log)
