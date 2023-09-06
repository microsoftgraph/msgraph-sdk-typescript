import { deserializeIntoPresenceStatusMessage } from './deserializeIntoPresenceStatusMessage';
import { type PresenceStatusMessage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPresenceStatusMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPresenceStatusMessage;
}
