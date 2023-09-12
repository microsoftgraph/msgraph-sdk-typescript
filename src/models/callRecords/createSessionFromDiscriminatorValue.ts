import { deserializeIntoSession } from './deserializeIntoSession';
import { type Session } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSession;
}
