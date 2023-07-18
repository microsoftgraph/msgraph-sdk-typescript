import {AuditActor} from './auditActor';
import {AuditEvent} from './auditEvent';
import {AuditResource} from './auditResource';
import {createAuditActorFromDiscriminatorValue} from './createAuditActorFromDiscriminatorValue';
import {createAuditResourceFromDiscriminatorValue} from './createAuditResourceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAuditActor} from './serializeAuditActor';
import {serializeAuditResource} from './serializeAuditResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoAuditEvent(auditEvent: AuditEvent | undefined = {} as AuditEvent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(auditEvent),
        "activity": n => { auditEvent.activity = n.getStringValue(); },
        "activityDateTime": n => { auditEvent.activityDateTime = n.getDateValue(); },
        "activityOperationType": n => { auditEvent.activityOperationType = n.getStringValue(); },
        "activityResult": n => { auditEvent.activityResult = n.getStringValue(); },
        "activityType": n => { auditEvent.activityType = n.getStringValue(); },
        "actor": n => { auditEvent.actor = n.getObjectValue<AuditActor>(createAuditActorFromDiscriminatorValue); },
        "category": n => { auditEvent.category = n.getStringValue(); },
        "componentName": n => { auditEvent.componentName = n.getStringValue(); },
        "correlationId": n => { auditEvent.correlationId = n.getGuidValue(); },
        "displayName": n => { auditEvent.displayName = n.getStringValue(); },
        "resources": n => { auditEvent.resources = n.getCollectionOfObjectValues<AuditResource>(createAuditResourceFromDiscriminatorValue); },
    }
}
