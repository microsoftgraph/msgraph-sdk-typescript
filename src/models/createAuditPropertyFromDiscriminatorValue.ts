import { deserializeIntoAuditProperty } from './deserializeIntoAuditProperty';
import { type AuditProperty } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuditPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditProperty;
}
