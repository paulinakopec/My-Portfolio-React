import React from 'react';
import TagCloud from 'react3dtagcloud';
import './tagCloud.css';


class MyTagCloud extends React.Component {
  render() {
    const tagName = ['JavaScript', 'HTML', 'CSS', 'VS Code', 'React', 'Git',  'Excel', 'SAP']
	  return (
		<div style={{position: 'absolute', left: '45%', top: '25%'}}>
		  <TagCloud tagName={tagName}></TagCloud>
		</div>
	  )
   }
}
export {MyTagCloud}