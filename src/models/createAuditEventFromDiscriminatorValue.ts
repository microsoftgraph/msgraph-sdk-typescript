import {deserializeIntoAuditEvent} from './deserializeIntoAuditEvent';
import {AuditEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditEvent;
}
