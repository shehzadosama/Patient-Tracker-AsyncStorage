import React, { Component } from 'react';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon, View, List, ListItem } from 'native-base';
import DatePicker from 'react-native-datepicker';
export default class PatientsDetails_Container extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
     input: "",
     date: "",
    };
    
  }
  componentWillMount() {
    // var list = this.props.patientList;
    // console.log(list);
    console.log("Rendering");
    this.props.getList();


    // list = this.props.patientList;
    // console.log(list);

  }
  
  searchByName = (obj) => { 
// console.log(this.state.date);
console.log("All objects",obj)
    // var list = this.props.patientList;
    return ((obj.name.search(this.state.input) >= 0)   && (obj.date.search(this.state.date) >= 0) ) ? true : false
}

  remove(key) {
    this.props.removePatient(key);
    // alert("Patient deleted");
  }
  cancel(){
    this.setState({date : ''})
  }
  

  render() {
    var list = this.props.patientList;
    console.log(list);
    // this.props.getList();


    // list = this.props.patientList;
    // console.log(list);
    var listItems = this.props.patientList.filter(this.searchByName).map((data,index) => {
      //  onClick={() => this.filterMyPosts()}
      // var btn = <button onClick={this.remove.bind(this,key)} >REMOVE{key}</button>;

      return (
        // <ListItem >
        <ListItem key={index}>
          <Text>Patient name: {data.name}{"\n"}
            Disease: {data.disease}{"\n"}
            Medication: {data.medication}{"\n"}
            Cost:  {data.cost}{"\n"}
            Date:   {data.date}</Text>
          <Button iconButton light onPress={this.remove.bind(this, index)} >
            <Text>Remove</Text>
            <Icon name='trash' />
          </Button>


        </ListItem >

        // </li>
      )
    })



    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChange={ev => this.setState({ input: ev.nativeEvent.text })}/>

            {this.state.date ? <Icon name="arrow-back" onPress={this.cancel.bind(this)} /> : <Icon name="ios-people"  /> } 
            <DatePicker
              style={{ width: 30 }}

              mode="date"
            //  date={this.state.date}
             // placeholder="Date of arrival"
              // format="YYYY-MM-DD"
              format="M/D/YYYY"
              // minDate="2016-05-01" 
              //maxDate="2016-06-01" 
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              //  onDateChange={ev => this.setState(payload.date= date)} 
              onDateChange={(date) => this.setState({ date: date })}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
          </Header>
          <Content>
            <List>
              {listItems}
            </List>
          </Content>
      </Container>
        );
  }
}