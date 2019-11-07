import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import {} from '../../public/don_wally.jpg'

class Landing extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: '18rem' }} variant="top" src="images/don_face.png"/>
            <Card.Body>
              <Card.Title>Where's Don Gon?</Card.Title>
              <Card.Text>
                Click on Don to Win!
              </Card.Text>
              <Button variant="primary">Start Game!</Button>
            </Card.Body>
          </Card>
        </div>

      </React.Fragment>
    )
  }
}

export default Landing
