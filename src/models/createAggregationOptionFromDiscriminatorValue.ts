import {AggregationOptionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAggregationOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AggregationOptionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AggregationOptionImpl();
}
