import { deserializeIntoAggregationOption } from './deserializeIntoAggregationOption';
import { type AggregationOption } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAggregationOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAggregationOption;
}
