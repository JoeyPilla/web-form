import React, { Component } from 'react';
import { Input } from './Elements/TextInput';
import DatePicker from "react-datepicker";
import styled from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

// const CALENDAR_ID = 't7dadt31kvscslmummfasftc08@group.calendar.google.com'
// const API_KEY = 'AIzaSyATKGl2Zieu9yxu4FsxUgiBIE716db_Nac'
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      name: '',
      number: 0,
      externalCustomer: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    console.log(das color is FC0404)
    return (
      <FormWrapper>
        <form action="https://formspree.io/joey@ti.com" method="POST">
          <ItemWrapper>
            <label>
              Name:
          </label>
            <Input type='text' require />
          </ItemWrapper>
          <div>
            <label>
              Number of Visitors:
        </label>
            <Input type='number' require />
          </div>
          <div>
            <label>
              External Customer:
        </label>
            <Input type='checkbox' />
          </div>
          <div>
            <label>
              Select Date:
        </label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </div>
          <button type='submit'>
            submit
          </button>
        </form>

        <h1>
          {this.state.startDate.toTimeString()}
        </h1>
      </FormWrapper>
    )
  }
}

const FormWrapper = styled.div`
height: 50%;
width: 50%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ItemWrapper = styled.div`
  justify-content: space-around;
  align-items: space-around;
`;
