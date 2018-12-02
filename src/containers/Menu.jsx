import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='Tent Specifications' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='Recommendations' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item
              name='Resources'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment active={activeItem === 'bio'}>
            Get Palletes!
          </Segment>
          <Segment active={activeItem === 'pics'}>
            List: 
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
