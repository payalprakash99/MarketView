import React, { Component } from 'react'
  import ReactSearchBox from 'react-search-box'

const  data1 = [
      {
        key: 'icici',
        value: 'ICICI Prudential Focused Bluechip Equity Fund.',
      },
      {
        key: 'aditya',
        value: 'Aditya Birla Sun Life Small & Midcap Fund.',
      },
      {
        key: 'tata',
        value: 'Tata Equity PE Fund',
      },
      {
        key: 'hdfc',
        value: 'HDFC Monthly Income Plan – MTP.',
      },
      {
        key: 'kotak',
        value: 'Kotak Corporate Bond Fund.',
      },
    ]
    function SearchBox() {

      return (
        <ReactSearchBox
          placeholder="Search the name of Mutual fund"
          data={data1}
          onSelect={record => console.log(record)}
          onFocus={() => {
            console.log('This function is called when is focussed')
          }}
          onChange={value => console.log(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value=""
        />
      )
        }

export default SearchBox
    
  