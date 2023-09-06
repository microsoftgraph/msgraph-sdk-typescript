import { deserializeIntoSearchAggregation } from './deserializeIntoSearchAggregation';
import { type SearchAggregation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchAggregationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchAggregation;
}
