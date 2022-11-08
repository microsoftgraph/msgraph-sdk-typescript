import {EventMessageResponseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageResponseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageResponseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageResponseCollectionResponse();
}
