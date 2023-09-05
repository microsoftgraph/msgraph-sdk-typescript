import { deserializeIntoEventMessageRequest } from './deserializeIntoEventMessageRequest';
import { type EventMessageRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEventMessageRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventMessageRequest;
}
