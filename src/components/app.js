import React from 'react';
import _ from 'lodash';
import ProductCreate from './product-create';
import ProductList from './product-list';

const todos = [
    {
        task: 'Product 1',
        isCompleted: false
    },
    {
        task: 'Product 2',
        isCompleted: false
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        }
    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
                <div className="td-list-con">

                    <ProductCreate
                        todos={ this.state.todos }
                        createTask={ this.createTask.bind(this) }
                        />

                    <ProductList
                        todos={ this.state.todos }
                        saveTask={ this.saveTask.bind(this) }
                        deleteTask={ this.deleteTask.bind(this) }
                        toggleTask={ this.toggleTask.bind(this) }
                        />
                </div>
            </div>
        )
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }


    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }
}