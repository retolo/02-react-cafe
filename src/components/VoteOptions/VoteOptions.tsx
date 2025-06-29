import css from './VoteOptions.module.css'
import { type VoteType } from '../../types/votes';

interface VoteOptionsProps{
    onVote: (option: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

export default function VoteSection({onVote, onReset, canReset}: VoteOptionsProps){
    return(
        <div className={css.container}>
            <button onClick={() => onVote('good')} className={css.button}>Good</button>
            <button onClick={() => onVote('neutral')} className={css.button}>Neutral</button>
            <button onClick={() => onVote('bad')} className={css.button}>Bad</button>
            <button hidden={!canReset} onClick={() => onReset()} className={`${css.button} ${css.reset}`}>Reset</button>
        </div>
    )
}

