import { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            units: 0,
            packs: 0
        };
    }

    doAdd = event => this.setState({ units: this.state.units + 1 });
    doRemove = event => this.setState({ units: this.state.units - 1 });

    render() {
        let { units, packs } = this.state;

        return (
            <section className='col-sm-8 p-4 m-4 fw-bold'>
                <h3> {packs} packs {units} units </h3>
                <button type="button" className='btn btn-sm btn-primary me-2' onClick={this.doAdd}> ADD (+)</button>
                <button type="button" className='btn btn-sm btn-danger' onClick={this.doRemove}> REMOVE (-)</button>
            </section>
        );
    }

    componentDidUpdate() {
        let { units, packs } = this.state;

        setTimeout(
            () => {
                if (units < 0 && packs === 0) {
                    this.setState({ units: 0 });
                } else if (units < 0 && packs > 0) {
                    this.setState({ units: 9, packs: packs - 1 });
                } else if (units === 10) {
                    this.setState({ units: 0, packs: packs + 1 });
                }
            },
            1000
        );
    }
    
    componentDidMount() {
        setTimeout(
            () => {
                this.setState({ units: 1});
            },
            1000
        );
    }
}

export default Counter;