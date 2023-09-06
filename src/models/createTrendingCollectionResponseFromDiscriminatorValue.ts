import { deserializeIntoTrendingCollectionResponse } from './deserializeIntoTrendingCollectionResponse';
import { type TrendingCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTrendingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTrendingCollectionResponse;
}
