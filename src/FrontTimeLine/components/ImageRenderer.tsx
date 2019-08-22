import React from "react";
import { Image, Platform, View } from "react-native";
import "../../styles.css";
import Card from "./Card/Card";

const isIOS = Platform.OS === "ios";

export class ImageRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl;
  }
  componentWillUpdate() {
    //On iOS while recycling till the new image is loaded the old one remains visible. This forcefully hides the old image.
    //It is then made visible onLoad
    //Will not be invoked on Android and Web
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 0
      });
    }
  }
  handleOnLoad = () => {
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 1
      });
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          margin: 10
        }}
      >
        <Image
          ref={ref => {
            this.imageRef = ref;
          }}
          style={{
            height: 350
          }}
          onLoad={this.handleOnLoad}
          source={{ uri: this.props.imageUrl }}
        />

        <Card />
      </View>
    );
  }
}
