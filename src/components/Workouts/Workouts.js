import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import Filters from "./WorkoutFilters";
import { Button, Grid, Header, Table } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import "../Animations.css";

class Workouts extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hideFilters: true,
      filterIcon: "caret down"
    };
  }

  toggleFilters = () => {
    const { hideFilters, filterIcon } = this.state;
    const icon = filterIcon === "caret up" ? "caret down" : "caret up";

    this.setState({
      hideFilters: !hideFilters,
      filterIcon: icon
    });
  };

  render() {
    const { hideFilters, filterIcon } = this.state;
    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon={filterIcon}
          labelPosition="right"
          color="teal"
          size="small"
          onClick={this.toggleFilters}
        />

        <Button content="Search" color="pink" size="small" />
        <br />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {!hideFilters ? <Filters /> : null}
        </CSSTransitionGroup>
        <br />
        <Grid columns={3} divided stackable>
          <Grid.Column>
            <Header
              as="h3"
              content="Goddamn electric"
              subheader="Mika Laaksonen"
              dividing
              textAlign="center"
            />
            <Table color="purple" inverted unstackable="true">
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Dip</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Pull up</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Push up</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default connectContext(Context)(Workouts);
