import { deserializeIntoAuditEventCollectionResponse } from './deserializeIntoAuditEventCollectionResponse';
import { type AuditEventCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuditEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditEventCollectionResponse;
}
