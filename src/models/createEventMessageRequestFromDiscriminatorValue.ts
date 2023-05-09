import {deserializeIntoEventMessageRequest} from './deserializeIntoEventMessageRequest';
import {EventMessageRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventMessageRequest;
}
