"use strict"
import React from 'react'
import { Link } from "react-router"
import Transmit from 'react-transmit'
import './ProposalList.css'
import {img, figure} from 'react'
import {StageIntro} from '../SUMMARY.json'

import proposalData from '../Proposal/data/Proposals.json'

class ProposalList extends React.Component {
    render() {
        let proposalList = Object.keys(proposalData).map((k) => proposalData[k])
        
        if (this.props.stage) {
            proposalList = proposalList.filter((item, key) =>
              new RegExp("^" + this.props.stage).test(item.stages[0].category))
        }
        if (!proposalList.length) { return <section className="ProposalList" /> }
        

       
        proposalList = proposalList.map((item, key)=>
            <Link to="proposal" key={key}
                params={{proposalName: item.title_eng}}
                className="ProposalList-item"
                onClick={(e) => {
                // TODO: Stage 0, during the survey period, e.g.:
                if (item.title_eng === 'eliquor') {
                    e.stopPropagation();
                    location.href = '/eliquor/';
                }
                }}>
                <div className="ProposalList-item-outer">
                <div className="ProposalList-item-inner">
                <div className="ProposalList-item-innermost">
                <img className="ProposalList-item-image"
                    src={item.slides_image} /></div></div></div>
                <div className="ProposalList-item-info">
                    <span className="ProposalList-item-title">
                        {item.title_cht}
                    </span>
                    <span className="ProposalList-item-proposer">
                        @{item.proposer_abbr_cht}
                    </span>
                </div>
            </Link>
        )
       
        return <section className="ProposalList">
            <h2 className="ProposalList-title">
                <img className="ProposalList-stage-image"
                    src={require(`./images/${this.props.stage}.png`)} />
                {this.props.title || ''}
            </h2>
            <div className="ProposalList-sectionIntro">
                <ul>{StageIntro[this.props.stage].map((value, k)=>
                    <li key={k}>{value}</li>
                )}</ul>
            </div>
            {proposalList}
        </section>
    }
}
export default Transmit.createContainer(ProposalList, {})
