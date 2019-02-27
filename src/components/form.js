import React, { Component } from 'react';
import styled from 'styled-components';

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
      externalCustomer: false,

    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleNameChange(name) {
    this.setState({
      name: name.target.value
    });
  }
  handleNumberChange(number) {
    this.setState({
      number: number.target.value
    });
  }
  handleCheckboxChange() {
    const { externalCustomer } = this.state;
    this.setState({
      externalCustomer: !externalCustomer
    });
  }
  handleSubmit(e) {
    console.log(e.target.checkValidity());
  }

  //entry.395002384 external cust
  //&entry.395002384=extcust&entry.1922675186=2019-02-27&entry.1720502080=10:23
  render() {
    const times = [
      '9:00AM',
      '9:30AM',
      '10:00AM',
      '10:30AM',
      '11:00AM',
      '11:30AM',
      '12:00PM',
      '12:30PM',
      '1:00PM',
      '1:30PM',
      '2:00PM',
      '2:30PM',
      '3:00PM',
      '3:30PM',
      '4:00PM',
      '4:30PM',
      '5:00PM',
    ];
    const options = times.map((time) => {
      return (
        <option
          value={time}
        >
          {time}
        </option>
      )
    })

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    const now = yyyy + '-' + mm + '-' + dd;
    console.log(now)
    return (
      <FormWrapper>
        <Header>DDAO Tour Request</Header>
        <form
          action=' https://docs.google.com/forms/d/e/1FAIpQLScX5YkC5wqWQ778aLBpzWGYQWs62TYNAI-vSoLmjbi5SD3xLA/formResponse?usp=pp_url&'
          target='hidden_iframe'>
          <ItemWrapper>
            <label>
              Name:
            </label>
            <Input
              type='text'
              name='entry.988151643'
              id='entry.988151643'
              placeholder='Name'
              onChange={this.handleNameChange}
              required
            />
          </ItemWrapper>
          <ItemWrapper>
            <label>
              Email:
            </label>
            <Input
              type='text'
              name='entry.988151643'
              id='entry.988151643'
              placeholder='Email'
              onChange={this.handleNameChange}
            />
          </ItemWrapper>
          <ItemWrapper>
            <label>
              Phone Number:
            </label>
            <Input
              type='text'
              name='entry.988151643'
              id='entry.988151643'
              placeholder='Phone Number'
              onChange={this.handleNameChange}
            />
          </ItemWrapper>
          <ItemWrapper>
            <label>
              Number of Visitors:
            </label>
            <Input
              type='number'
              name='entry.1790580931'
              id='entry.1790580931'
              onChange={this.handleNumberChange}
              required
              placeholder='Number of Visitors'
            />
          </ItemWrapper>
          <ItemWrapper>
            <div>
              <label>
                External Customer:
        </label>
              <Input
                type='checkbox'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div>
              <Input
                type='text'
                name='entry.395002384'
                id='entry.395002384'
                placeholder='External Customer'
                style={this.state.externalCustomer ? { display: 'block' } : { display: 'none' }}
              />

            </div>
          </ItemWrapper>
          <DateWrapper>
            <div>
              <label>
                Select Date:
              </label>
            </div>
            <div>
              <Input
                type='date'
                name='entry.1922675186'
                id='entry.1922675186'
                min={now}
                required
              />
              <select
                name='entry.1720502080'
                id='entry.1720502080'>
                {options}
              </select>
            </div>
          </DateWrapper>
          <ButtonWrapper>
            <Button
              type='submit'
            >
              submit
          </Button>
          </ButtonWrapper>
        </form>
        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
      </FormWrapper>
    )
  }
}

const FormWrapper = styled.div`
  display: flex;
  padding: 2.5%;
  height: 50%;
  width: 400px;
  border: 2px rgba(0, 0, 0, .15) solid;
  border-radius: 25px
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  @media(max-width: 450px) {
    width:90%;
  }
  @media(max-width: 375px) {
    height:75%
    align-items: space-between;
  }
`;

const ItemWrapper = styled.div`
  height: 25px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: .75em
  @media( min-width:300px) {
    flex-direction: row;
  }
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px
  @media( min-width:300px) {
    flex-direction: row;
  }
    :focus {
      outline:none;
    border:2px rgba(254, 4, 4, .5) solid;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px
  @media( min-width:300px) {
    flex-direction: row;
  }
`;


const Button = styled.button`
  background-color: rgba(254, 4, 4, .25);
  margin: auto;
  width: 50%;
  align-self: center;
  padding: 10px;
  cursor: pointer;
  border: 1px rgba(0, 0, 0, .15) solid;
  border-radius: 10px;
  :focus {
      outline:none;
    border:2px rgba(254, 4, 4, .5) solid;
  }
`;

export const Input = styled.input`
  padding: 5px;
  :focus {
      outline:none;
    border:2px rgba(254, 4, 4, .5) solid;
  }
`;

export const Header = styled.h1`
color: rgba(254, 4, 4);
  padding: 5px;
  text-align: center;
`;
