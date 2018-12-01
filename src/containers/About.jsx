import React from 'react'
import { Card, Icon, Image, Message} from 'semantic-ui-react'

const AboutPage = () => (
  <div>
  <Message size='massive' centered> Meet the Team </Message>
  <Card.Group centered>
  <Card>
    <Image src='https://avatars3.githubusercontent.com/u/13587407?s=400&v=4' />
    <Card.Content>
      <Card.Header>Aman Ibrahim</Card.Header>
      <Card.Meta>First of the Three Amigos</Card.Meta>
      <Card.Description>A North Carolina native, and sick coder. </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Admin
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/17390690_1287621711329761_1734721323901598994_o.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=9dcb42be2d19103f7e46cf93c25f37a7&oe=5C72FEED' />
    <Card.Content>
      <Card.Header> Vinit Parekh </Card.Header>
      <Card.Meta> Second of the Three Amigos </Card.Meta>
      <Card.Description> Sick dude. </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Admin
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/34142086_1929385717113887_2009316225124925440_o.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=bf70c8fdb9f2af69ac2ff6b874f8b591&oe=5C638327' />
    <Card.Content>
      <Card.Header> Rikki Kendall </Card.Header>
      <Card.Meta> Third of the Three Amigos </Card.Meta>
      <Card.Description> Born on a US Military Installation in Sasebo, Japan. </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Admin
      </a>
    </Card.Content>
  </Card>
  </Card.Group>
  <Message
    centered
    size = 'Massive'
    success
    header='Our Mission'
    content='Build a task management /scheduling application that can help support the K-Ville Tenters' />

  </div>
)

export default AboutPage
