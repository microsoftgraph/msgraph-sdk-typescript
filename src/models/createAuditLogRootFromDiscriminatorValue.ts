import { deserializeIntoAuditLogRoot } from './deserializeIntoAuditLogRoot';
import { type AuditLogRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuditLogRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditLogRoot;
}
