import { type AuditActor } from './auditActor';
import { type AuditEvent } from './auditEvent';
import { type AuditResource } from './auditResource';
import { serializeAuditActor } from './serializeAuditActor';
import { serializeAuditResource } from './serializeAuditResource';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeAuditEvent(writer: SerializationWriter, auditEvent: AuditEvent | undefined = {} as AuditEvent) : void {
        serializeEntity(writer, auditEvent)
        writer.writeStringValue("activity", auditEvent.activity);
        writer.writeDateValue("activityDateTime", auditEvent.activityDateTime);
        writer.writeStringValue("activityOperationType", auditEvent.activityOperationType);
        writer.writeStringValue("activityResult", auditEvent.activityResult);
        writer.writeStringValue("activityType", auditEvent.activityType);
        writer.writeObjectValue<AuditActor>("actor", auditEvent.actor, serializeAuditActor);
        writer.writeStringValue("category", auditEvent.category);
        writer.writeStringValue("componentName", auditEvent.componentName);
        writer.writeGuidValue("correlationId", auditEvent.correlationId);
        writer.writeStringValue("displayName", auditEvent.displayName);
        writer.writeCollectionOfObjectValues<AuditResource>("resources", auditEvent.resources, serializeAuditResource);
}
