import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        tags:['tag1','tag2','tag3']
    };

    style = {
        frontSize: '10px',
        fontWeight: 'bold'
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    }
    render() {
        let classes = this.getBadgeClasses();

        return (
            <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.foramtCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            {this.state.tags.length === 0 && "Please create a new tag!"}
            {this.renderTags()}
            </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    foramtCount(){
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
export default Counter;