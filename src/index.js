import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard> 
           <CommentDetail 
                author="Sam" 
                time="Today at 7:45PM" 
                text="Nice blog post!" 
                avatar={faker.image.avatar()}
            />
         </ApprovalCard>
         <ApprovalCard> 
           <CommentDetail 
                author="Alex" 
                time="Today at 4:15PM" 
                text="Interesting.."
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard> 
           <CommentDetail 
                author="Jane" 
                time="Yesterday at 1:30PM" 
                text="I had no idea!"
                avatar={faker.image.avatar()}
            />
         </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));