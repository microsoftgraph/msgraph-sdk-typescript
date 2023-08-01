import type {AuditEvent} from './auditEvent';
import type {AuditEventCollectionResponse} from './auditEventCollectionResponse';
import {createAuditEventFromDiscriminatorValue} from './createAuditEventFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAuditEvent} from './serializeAuditEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditEventCollectionResponse(auditEventCollectionResponse: AuditEventCollectionResponse | undefined = {} as AuditEventCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(auditEventCollectionResponse),
        "value": n => { auditEventCollectionResponse.value = n.getCollectionOfObjectValues<AuditEvent>(createAuditEventFromDiscriminatorValue); },
    }
}
