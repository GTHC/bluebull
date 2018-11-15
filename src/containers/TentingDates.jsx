import React from 'react'
import { Table } from 'semantic-ui-react'

const TentingDates2018 = () => (
  <Table celled inverted selectable unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Color</Table.HeaderCell>
        <Table.HeaderCell>Start Date</Table.HeaderCell>
        <Table.HeaderCell>End Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Black</Table.Cell>
        <Table.Cell>January 12th, 2018 at 11PM</Table.Cell>
        <Table.Cell textAlign='right'>January 23rd, 2018 at 11PM</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Blue</Table.Cell>
        <Table.Cell>January 23rd, 2018 at 11PM</Table.Cell>
        <Table.Cell textAlign='right'>February 3rd, 2018 at 11PM </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>White</Table.Cell>
        <Table.Cell>February 3rd, 2018 at 11PM </Table.Cell>
        <Table.Cell textAlign='right'>February 14th, 2018 at 12PM</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TentingDates2018
