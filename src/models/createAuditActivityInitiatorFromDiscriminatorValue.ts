import { deserializeIntoAuditActivityInitiator } from './deserializeIntoAuditActivityInitiator';
import { type AuditActivityInitiator } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuditActivityInitiatorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditActivityInitiator;
}
