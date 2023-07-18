import {AuditActor} from './auditActor';
import {AuditEvent} from './auditEvent';
import {AuditResource} from './auditResource';
import {serializeAuditActor} from './serializeAuditActor';
import {serializeAuditResource} from './serializeAuditResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

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
