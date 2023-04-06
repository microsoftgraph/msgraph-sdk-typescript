import {EventQueryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventQueryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventQueryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventQueryCollectionResponse();
}
