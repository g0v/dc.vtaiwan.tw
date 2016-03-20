"use strict"
import React from 'react'
import {Link} from 'react-router'
import Transmit from 'react-transmit'
import './ProposalBoard.css'
import ProposalList from '../ProposalList/ProposalList.jsx'
import proposalData from '../Proposal/data/Proposals.json'
import {Site, Stages} from '../SUMMARY.json'

class ProposalBoard extends React.Component {
  render () { return (
      <div>
            <div className="App-cover">
                <div className="App-intro">
                    <p>{Site.description}</p>
                </div>
            </div>
        <div className="ProposalBoard">
        {
            Stages.map(({stage, title}) =>
                <ProposalList title={title} stage={stage} />
            )
        }</div>
        </div>
  ) }
  componentWillMount() {
    this.props.setQueryParams({})
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.proposalList) { return; }
    const items = Stages.map(({stage, title})=>[{ label: title }].concat(
        nextProps.proposalList.filter(({stages})=>
            new RegExp("^" + stage).test(stages[0].category)
        ).map(({title_eng, title_cht, proposer_abbr_eng})=>{ return {
            path: `/${title_eng}/`,
            label: title_cht,
            icon: proposer_abbr_eng + '.png',
            type: 'sub',
        } })
    )).reduce(((a, b)=>a.concat(b)), [])
    this.props.setNavList(items.concat([
         { path: '/about/', label: '關於本站', type: 'section' },
         { path: '/how/', label: '如何發言', type: 'sub' },
         { path: '/tutorial/', label: '使用手冊', type: 'sub' },
    ]))
  }
}

export default Transmit.createContainer(ProposalBoard, {
    queries: {
        proposalList() {
            return new Promise((cb)=>cb(
                Object.keys(proposalData).map((k) => proposalData[k])
            ))
        }
    }
})
