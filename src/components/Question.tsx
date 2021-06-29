import '../styles/question.scss';

import { ReactNode } from 'react';
type QuestionProps = {
    content:string;
    author:{
        name:string;
        avatar:string;
    }
    children?: ReactNode;
    isHighlighted?: boolean;
    isAnswered?: boolean;
}
export function Question({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false,
}:QuestionProps){
    return(
        <div 
        className={`question ${isAnswered ? 'aswered': ''} ${(isHighlighted && !isAnswered) ? 'highlighted': '' }`}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>
    );
}