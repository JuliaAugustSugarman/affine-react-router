import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem'


class MonthList extends Component {

    render() {
        console.log('getting props', this.props.list);
        return (
            <div>
                {
                    this.props.list.map(item =>
                        <MonthItem item={item} />
                    )
                }

                
            </div>
        )

        export default MonthList;