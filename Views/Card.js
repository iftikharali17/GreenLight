import React, {useState} from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import "./card.css"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardGroup, CardColumns } from 'reactstrap';

const DoctorDetails = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    console.log(show);
  };

  const showDatepicker = () => {
    console;
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  }

  return (
    <View>
      <div className="color-text bg-color">
        <Card className="bg-color">
          <img width="100%" src="https://azbigmedia.com/wp-content/uploads/2017/11/doctor-shortage.jpg" alt="Card image" />
          <CardBody>
            <CardTitle className="font-weight-bold">DOCTOR NAME</CardTitle>
            <CardText>
              <Entypo name="mobile" size={24} className="color-text"/>  0341-1234567
            </CardText>
            <CardText>
            <Entypo name="location" size={24} className="color-text" />  Abc Street 123
            </CardText>
        <div>         
           <FontAwesome5 name="business-time" size={24} className="color-text" />  Monday: 9am to 6pm
        </div>
        <div className="left-margin">
          Tuesday: 9am to 6pm
        </div>
        <div className="left-margin">
          Wednesday: 9am to 6pm
        </div>
        <div className="left-margin">
          Thursday: 9am to 6pm
        </div>
        <div className="left-margin">
          Friday: 9am to 6pm
        </div>
        <div className="left-margin">
          Saturday: Closed
        </div>
        <div className="left-margin">
          Sunday: Closed
        </div>
        <CardLink href="#">
          <MaterialCommunityIcons name="web" size={24} className="color-text" /><span className="link-margin"></span>www.abc.com</CardLink>
        </CardBody>
        </Card>
      </div>
      
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DoctorDetails;
