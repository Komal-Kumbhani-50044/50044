import React from 'react';
import _ from 'lodash';
import ProductCount from './product-count';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

    // Create List
    
    renderTodoItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <ProductListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <div className="list form-horizontal">
                <ProductCount todos={ this.props.todos }/>
                { this.renderTodoItems() }
            </div>
        )
    }
}