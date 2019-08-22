import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { DataCall } from "./utils/DataCall";
import { LayoutUtil } from "./utils/LayoutUtil";
import { ImageRenderer } from "./components/ImageRenderer";
import { RecyclerListView, DataProvider } from "recyclerlistview/web";
import { Dimensions } from "react-native";
import ReactResizeDetector from 'react-resize-detector';

import "../styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      layoutProvider: LayoutUtil.getLayoutProvider(1),
      images: [],
      count: 0,
      viewType: 1
    };
    this.inProgressNetworkReq = false;
  }
  componentWillMount() {
    this.fetchMoreData();
  }

  componentDidMount() {
    const width = window.innerWidth;
    console.log (width);  

    if (width < 800 && width >700) {
    
      this.viewChangeHandler(2)
    }
    else if (width < 550) {
    
      this.viewChangeHandler(3)
    }

  }
  
  async fetchMoreData() {
    if (!this.inProgressNetworkReq) {
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      this.inProgressNetworkReq = true;
      const images = await DataCall.get(this.state.count, 20);
      this.inProgressNetworkReq = false;
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.state.images.concat(images)
        ),
        images: this.state.images.concat(images),
        count: this.state.count + 20
      });
    }
  }
  rowRenderer = (type, data) => {
    //We have only one view type so not checks are needed here
    return <ImageRenderer imageUrl={data} />;
  };
  viewChangeHandler = viewType => {
    //We will create a new layout provider which will trigger context preservation maintaining the first visible index
    this.setState({
      layoutProvider: LayoutUtil.getLayoutProvider(viewType),
      viewType: viewType
    });
  };
  handleListEnd = () => {
    this.fetchMoreData();

    //This is necessary to ensure that activity indicator inside footer gets rendered. This is required given the implementation I have done in this sample
    this.setState({});
  };
  renderFooter = () => {
    //Second view makes sure we don't unnecessarily change height of the list on this event. That might cause indicator to remain invisible
    //The empty view can be removed once you've fetched all the data
    return this.inProgressNetworkReq ? (
      <ActivityIndicator style={{ margin: 10 }} size="large" color={"black"} />
    ) : (
      <View style={{ height: 60 }} />
    );
  };

  onResize = () => {
    console.log ("on resize function")
    const width = window.innerWidth;
    console.log (width)

    if (width < 1000 && width >650) {
      console.log ("change the size")
      this.viewChangeHandler(2)
    }
    else if (width < 650) {
      console.log ("back to old size")
      this.viewChangeHandler(3)
    }
    else {
      this.viewChangeHandler(1)
    }
  }

  render() {
    //Only render RLV once you have the data
    return (
<div>

  
      <View style={styles.container}>
      <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />

        {this.state.count > 0 ? (
          <RecyclerListView
            style={{ flex: 1 }}
            contentContainerStyle={{ margin: 3 }}
            onEndReached={this.handleListEnd}
            dataProvider={this.state.dataProvider}
            layoutProvider={this.state.layoutProvider}
            rowRenderer={this.rowRenderer}
            renderFooter={this.renderFooter}
            canChangeSize={true}
            useWindowScroll={true}
          />
        ) : null}
      </View>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between"
  }
});
