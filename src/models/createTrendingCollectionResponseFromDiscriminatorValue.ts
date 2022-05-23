import {TrendingCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrendingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TrendingCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TrendingCollectionResponseImpl();
}
