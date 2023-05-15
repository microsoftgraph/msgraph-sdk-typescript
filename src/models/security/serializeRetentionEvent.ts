import {IdentitySet} from '../identitySet';
import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {EventPropagationResult} from './eventPropagationResult';
import {EventQuery} from './eventQuery';
import {RetentionEvent} from './retentionEvent';
import {RetentionEventStatus} from './retentionEventStatus';
import {RetentionEventType} from './retentionEventType';
import {serializeEventPropagationResult} from './serializeEventPropagationResult';
import {serializeEventQuery} from './serializeEventQuery';
import {serializeRetentionEventStatus} from './serializeRetentionEventStatus';
import {serializeRetentionEventType} from './serializeRetentionEventType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRetentionEvent(writer: SerializationWriter, retentionEvent: RetentionEvent | undefined = {} as RetentionEvent) : void {
        serializeEntity(writer, retentionEvent)
        writer.writeObjectValue<IdentitySet>("createdBy", retentionEvent.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", retentionEvent.createdDateTime);
        writer.writeStringValue("description", retentionEvent.description);
        writer.writeStringValue("displayName", retentionEvent.displayName);
        writer.writeCollectionOfObjectValues<EventPropagationResult>("eventPropagationResults", retentionEvent.eventPropagationResults, serializeEventPropagationResult);
        writer.writeCollectionOfObjectValues<EventQuery>("eventQueries", retentionEvent.eventQueries, serializeEventQuery);
        writer.writeObjectValue<RetentionEventStatus>("eventStatus", retentionEvent.eventStatus, serializeRetentionEventStatus);
        writer.writeDateValue("eventTriggerDateTime", retentionEvent.eventTriggerDateTime);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", retentionEvent.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", retentionEvent.lastModifiedDateTime);
        writer.writeDateValue("lastStatusUpdateDateTime", retentionEvent.lastStatusUpdateDateTime);
        writer.writeObjectValue<RetentionEventType>("retentionEventType", retentionEvent.retentionEventType, serializeRetentionEventType);
}
