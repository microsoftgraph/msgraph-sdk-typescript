import {EventMessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageCollectionResponse();
}
