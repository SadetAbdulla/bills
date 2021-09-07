import { Button } from 'bootstrap';
import React from 'react';
export class BillsTable extends React.Component {

    
    render() {
        return <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 2 3 4 5</td>
                        <td>12345 den</td>
                        <td><button className="btn btn-danger">Pay</button></td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}