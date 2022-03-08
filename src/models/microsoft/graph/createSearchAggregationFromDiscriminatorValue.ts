import {SearchAggregation} from './searchAggregation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchAggregationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchAggregation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchAggregation();
}
