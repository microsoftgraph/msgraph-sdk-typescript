import {AuditEvent} from './auditEvent';
import {AuditEventCollectionResponse} from './auditEventCollectionResponse';
import {serializeAuditEvent} from './serializeAuditEvent';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditEventCollectionResponse(auditEventCollectionResponse: AuditEventCollectionResponse | undefined = {} as AuditEventCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, auditEventCollectionResponse)
        writer.writeCollectionOfObjectValues<AuditEvent>("value", auditEventCollectionResponse.value, serializeAuditEvent);
}
