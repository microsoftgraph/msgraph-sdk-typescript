import {EventMessageRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageRequest();
}
