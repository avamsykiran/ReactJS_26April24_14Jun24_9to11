import { useEffect, useState } from "react";

const CounterFn = () => {

    let [units,setUnits] = useState(0);
    let [packs,setPacks] = useState(0);

    const doAdd = event => setUnits(units+1);
    const doRemove = event => setUnits(units-1);

    useEffect(() => {
        setTimeout(
            () => {
               setUnits(1);
            },
            1000
        );
    },[]); //equivlent to componentDidMount

    useEffect(() => {
        setTimeout(
            () => {
                if (units < 0 && packs === 0) {
                    setUnits(0);
                } else if (units < 0 && packs > 0) {
                    setUnits(9);
                    setPacks(packs-1)
                } else if (units === 10) {
                    setUnits(0);
                    setPacks(packs+1)
                }
            },
            1000
        );
    },[units]); //equivlent to componentDidUpdate

    return (
        <section className='col-sm-8 p-4 m-4 fw-bold'>
            <h3> {packs} packs {units} units </h3>
            <button type="button" className='btn btn-sm btn-primary me-2' onClick={doAdd}> ADD (+)</button>
            <button type="button" className='btn btn-sm btn-danger' onClick={doRemove}> REMOVE (-)</button>
        </section>
    );
};

export default CounterFn;