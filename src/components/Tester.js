import React from 'react'
import * as d3 from 'd3';

export default function Tester() {

  var csvFilePath = "test.csv";
  d3.csv(csvFilePath).then(function (csvFile) {
    console.log(csvFile);
  })

  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  )
} 