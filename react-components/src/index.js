import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          time="Today at 4:45PM"
          text="Hello there!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          time="Today at 2:00PM"
          text="Hiiii"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          time="Yesterday at 5:00PM"
          text="Nice"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);