import { deserializeIntoAuditEvent } from './deserializeIntoAuditEvent';
import { type AuditEvent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuditEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditEvent;
}
