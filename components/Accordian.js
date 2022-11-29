import * as React from "react";
import AccordianContent from './AccordianContent';

export const ComplexAccordian = () => {
    return (
        <div>
            <AccordianContent id={1} />
            <AccordianContent id={2} />
            <AccordianContent id={3} />
        </div>
    );
};
