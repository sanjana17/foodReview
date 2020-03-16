import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchRestaurantDetails} from '../../duck/foodReview/actions';




class foodReview extends React.Component{
    componentDidMount(){
        this.props.fetchRestaurantDetails();
    }
    render(){
        return(
            <div>
                <Form>
                    <Form.Group controlId="cityName">
                        <Form.Label>City Name</Form.Label>
                        <Form.Control type="text" placeholder="city name" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    restaurants: state.foodReviewReducer.restaurants,
})
export default connect(mapStateToProps,{fetchRestaurantDetails})(foodReview);