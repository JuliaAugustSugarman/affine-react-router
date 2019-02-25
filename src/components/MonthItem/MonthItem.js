import React, { Component } from 'react';



class MonthItem extends Component {





    render() {
        console.log('this.state.calendarList');

        return (
            <div >

                <ul>
                    {this.state.list.map(id => (<MonthItem
                        key={id.name}
                        getCalendar={this.getCalendar}
                    />))},
                </ul>

            </div>
        );
    }
}//emd class component

export default MonthItem;
