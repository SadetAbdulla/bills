import React from 'react';
import  {BillsTable}from '../BillsTable/BillsTable'
export class BillsSection  extends React.Component {
    constructor(props){
        super(props);
        this.state = {data : this.props.data}
        console.log(this.props)
    }
    render() { 
        return <div>
            
            Before Table
        <BillsTable />

        </div>;
    }
}