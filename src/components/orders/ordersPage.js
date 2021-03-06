"use strict";

var React = require('react');
var HeaderActions = require('../../actions/headerActions');

const PAGE_TITLE = 'Orders';

var OrdersPage = React.createClass({
    componentWillMount: function () {
        HeaderActions.updatePageTitle(PAGE_TITLE);
    },
    render: function () {
        return (
            <div>
                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                    <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">Material</th>
                        <th>Quantity</th>
                        <th>Unit price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                        <td>25</td>
                        <td>$2.90</td>
                    </tr>
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                        <td>50</td>
                        <td>$1.25</td>
                    </tr>
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                        <td>10</td>
                        <td>$2.35</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});


module.exports = OrdersPage;
