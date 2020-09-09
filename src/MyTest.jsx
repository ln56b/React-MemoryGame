import React from 'react';

const MyTest = ({ component }) => {

  return (
    <div>
      <component title="Bonjour" />
    </div>
  )
}
export default MyTest;

export const Demo = ({ title }) => {
  return <h1>{title}</h1>
}