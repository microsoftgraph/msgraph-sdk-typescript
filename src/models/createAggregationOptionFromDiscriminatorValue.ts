import {deserializeIntoAggregationOption} from './deserializeIntoAggregationOption';
import {AggregationOption} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAggregationOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAggregationOption;
}
