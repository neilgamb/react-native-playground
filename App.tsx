import React, { Component } from "react";
// import { Button, Container, Content, Text, StyleProvider } from "native-base";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  H1,
  Body,
  StyleProvider,
  Icon,
  Text
} from "native-base";
import { PixelRatio } from "react-native";
import getTheme from "./native-base-theme/components";
import sdc from "./native-base-theme/variables/sdc";

import * as Font from "expo-font";

export default class AnatomyExample extends Component {
  state = {
    isReady: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      SofiaProRegular: require("./assets/fonts/SophiaPro/SofiaProRegular.otf"),
      SofiaProBlack: require("./assets/fonts/SophiaPro/SofiaProBlack.otf")
    });
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;

    let foo = PixelRatio.get();
    console.log(foo);

    return (
      isReady && (
        <StyleProvider style={getTheme(sdc)}>
          <Container>
            <Header transparent>
              <Title>SmileDirectClub</Title>
            </Header>
            <Content>
              <Text>This is Content Section</Text>
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </StyleProvider>
      )
    );
  }
}
