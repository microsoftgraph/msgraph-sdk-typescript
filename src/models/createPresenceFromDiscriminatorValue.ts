import { deserializeIntoPresence } from './deserializeIntoPresence';
import { type Presence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPresenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPresence;
}
