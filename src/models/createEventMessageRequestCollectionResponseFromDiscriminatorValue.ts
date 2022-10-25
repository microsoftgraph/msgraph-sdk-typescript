import {EventMessageRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageRequestCollectionResponse();
}
