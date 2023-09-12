import { deserializeIntoEventMessageResponse } from './deserializeIntoEventMessageResponse';
import { type EventMessageResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEventMessageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventMessageResponse;
}
