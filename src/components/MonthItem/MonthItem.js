import React, { Component } from 'react';



class MonthItem extends Component {

    addMonth = () => {
        console.log('axios');
        axios({
            method: 'PUT',
            url: `/calendar${this.props.month.id}`,
        }).then((response) => {
            this.props.getCalendar();
        }).catch((error) => {
            alert('could not Put Month!');
            console.log('could add put an MOnth', error);

        })//end Catch
    };//end addLike

    render() {
        console.log( 'this.state.calendarList' );

        return (
            <div >

                <ul>
                    { this.state.list.map( id => ( <MonthItem
                        key = {id.name}
                        getCalendar = {this.getCalendar}
                    /> ) ) },
                </ul>

            </div>
        );
    }
}//emd class component

export default MonthItem;
