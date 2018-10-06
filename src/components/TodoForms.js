import React from 'react';

class TodoForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };

        this.handleInput =  this.handleInput.bind(this);
        this.handelSubmit =  this.handelSubmit.bind(this);
        
    }

    handleInput(e)
    {
        const {value, name} = e.target;
        this.setState({
           [name] : value      
        });

        console.log(this.state);
    }

    handelSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        })
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handelSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="responsible"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            name="priority" 
                            className="form-control"
                            onChange={this.handleInput}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="form-group">
                       <input type="submit" value="Guardar" className="btn btn-info"/>
                    </div>
                </form>
            </div>
        );
    }
}

TodoForms.propTypes = {};

export default TodoForms;
