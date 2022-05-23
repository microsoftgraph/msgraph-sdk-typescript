import {SearchAggregationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchAggregationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchAggregationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchAggregationImpl();
}
