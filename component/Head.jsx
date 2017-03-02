import React from 'react';

class Head extends React.Component {
   render() {
      return (
         <div>
            This is head { this.props.name }
         </div>
      );
   }
}
export default Head;
