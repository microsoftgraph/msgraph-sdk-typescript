import {SearchHitCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchHitCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchHitCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchHitCollectionResponse();
}
