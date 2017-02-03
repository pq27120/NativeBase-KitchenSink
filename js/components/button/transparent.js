
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    popRoute,
  } = actions;

class Transparent extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="arrow-back" />
          </Button>
          </Left>
          <Body>
            <Title>Transparent</Title>
          </Body>
          <Right />

        </Header>

        <Content padder style={{ backgroundColor: '#fff' }}>
          <Button transparent light style={styles.mb15}><Text>Light</Text></Button>
          <Button transparent style={styles.mb15}><Text>Primary</Text></Button>
          <Button transparent danger style={styles.mb15}><Text>Danger</Text></Button>
          <Button transparent success style={styles.mb15}><Text>Success</Text></Button>
          <Button info transparent style={styles.mb15}><Text>Info</Text></Button>
          <Button warning transparent style={styles.mb15}><Text>Warning</Text></Button>
          <Button dark transparent style={styles.mb15}><Text>Dark</Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Transparent);