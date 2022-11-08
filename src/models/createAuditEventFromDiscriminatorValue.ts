import {AuditEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditEvent();
}
