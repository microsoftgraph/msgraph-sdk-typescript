import {SearchAggregationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchAggregationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchAggregationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchAggregationCollectionResponse();
}
