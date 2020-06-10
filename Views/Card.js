import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import "./card.css"
import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardGroup, CardColumns } from 'reactstrap';

const DoctorDetails = () => {
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
    </View>
  );
};

export default DoctorDetails;
