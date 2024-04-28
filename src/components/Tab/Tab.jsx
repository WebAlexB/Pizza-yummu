import React, {Component} from 'react';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'Піца',
        }
    }

    handleCategoryChange = (category) => {
        this.setState({currentCategory: category});
        this.props.onCategoryChange(category);
    }

    render() {
        return (
            <div className="tab">
                <button onClick={() => this.handleCategoryChange('Піца')}>Піца</button>
                <button onClick={() => this.handleCategoryChange('Кава')}>Кава</button>
            </div>
        )
    }
}

export default Tab;
