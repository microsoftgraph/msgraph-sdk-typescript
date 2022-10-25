import {SearchHitsContainerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchHitsContainerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchHitsContainerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchHitsContainerCollectionResponse();
}
