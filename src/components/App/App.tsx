import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import { type Votes, type VoteType } from '../../types/votes';
import VoteOption from '../VoteOptions/VoteOptions';
import { useState } from "react";
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';


export default function App(){

    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    }
    )
    
    function handleVote(type: VoteType){
        setVotes((prevVotes) =>({
            ...prevVotes,
            [type]: prevVotes[type] + 1,
        }));
    }
    
    function resetVotes(){
        setVotes({good: 0, neutral: 0, bad: 0});
    
    }

const total:number = (votes.bad + votes.good + votes.neutral);

    return(
        <div className={css.app}>
            <CafeInfo />
            <VoteOption onVote={handleVote} onReset={resetVotes} canReset={total
                                                                            ? total >= 1
                                                                            : false
            }/>
            
            {total >= 1
            ? <VoteStats votes={votes} totalVotes={total} positiveRate={total
                                                                            ? Math.round((votes.good / total * 100))
                                                                            :0   
            }/>
            : <Notification />
            }
            
        </div>
    )
}


