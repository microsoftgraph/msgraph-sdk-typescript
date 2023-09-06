import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { createEventPropagationResultFromDiscriminatorValue } from './createEventPropagationResultFromDiscriminatorValue';
import { createEventQueryFromDiscriminatorValue } from './createEventQueryFromDiscriminatorValue';
import { createRetentionEventStatusFromDiscriminatorValue } from './createRetentionEventStatusFromDiscriminatorValue';
import { createRetentionEventTypeFromDiscriminatorValue } from './createRetentionEventTypeFromDiscriminatorValue';
import { type EventPropagationResult } from './eventPropagationResult';
import { type EventQuery } from './eventQuery';
import { type RetentionEvent } from './retentionEvent';
import { type RetentionEventStatus } from './retentionEventStatus';
import { type RetentionEventType } from './retentionEventType';
import { serializeEventPropagationResult } from './serializeEventPropagationResult';
import { serializeEventQuery } from './serializeEventQuery';
import { serializeRetentionEventStatus } from './serializeRetentionEventStatus';
import { serializeRetentionEventType } from './serializeRetentionEventType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRetentionEvent(retentionEvent: RetentionEvent | undefined = {} as RetentionEvent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(retentionEvent),
        "createdBy": n => { retentionEvent.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { retentionEvent.createdDateTime = n.getDateValue(); },
        "description": n => { retentionEvent.description = n.getStringValue(); },
        "displayName": n => { retentionEvent.displayName = n.getStringValue(); },
        "eventPropagationResults": n => { retentionEvent.eventPropagationResults = n.getCollectionOfObjectValues<EventPropagationResult>(createEventPropagationResultFromDiscriminatorValue); },
        "eventQueries": n => { retentionEvent.eventQueries = n.getCollectionOfObjectValues<EventQuery>(createEventQueryFromDiscriminatorValue); },
        "eventStatus": n => { retentionEvent.eventStatus = n.getObjectValue<RetentionEventStatus>(createRetentionEventStatusFromDiscriminatorValue); },
        "eventTriggerDateTime": n => { retentionEvent.eventTriggerDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { retentionEvent.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { retentionEvent.lastModifiedDateTime = n.getDateValue(); },
        "lastStatusUpdateDateTime": n => { retentionEvent.lastStatusUpdateDateTime = n.getDateValue(); },
        "retentionEventType": n => { retentionEvent.retentionEventType = n.getObjectValue<RetentionEventType>(createRetentionEventTypeFromDiscriminatorValue); },
    }
}
