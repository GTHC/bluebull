import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PolicyCard = () => (
  <Card>
    <Image src='http://image.cdnllnwnl.xosnetwork.com/pics33/800/WG/WGZQTQPKJDOPJNU.20181113151101.jpg' />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>K-Ville Policy.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default PolicyCard
