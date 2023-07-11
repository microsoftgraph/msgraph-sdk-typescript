import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {EventPropagationResult} from './eventPropagationResult';
import {EventQuery} from './eventQuery';
import {RetentionEventStatus} from './retentionEventStatus';
import {RetentionEventType} from './retentionEventType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RetentionEvent extends Entity, Parsable {
    /**
     * The user who created the retentionEvent.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The date time when the retentionEvent was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Optional information about the event.
     */
    description?: string | undefined;
    /**
     * Name of the event.
     */
    displayName?: string | undefined;
    /**
     * The eventPropagationResults property
     */
    eventPropagationResults?: EventPropagationResult[] | undefined;
    /**
     * Represents the workload (SharePoint Online, OneDrive for Business, Exchange Online) and identification information associated with a retention event.
     */
    eventQueries?: EventQuery[] | undefined;
    /**
     * The eventStatus property
     */
    eventStatus?: RetentionEventStatus | undefined;
    /**
     * Optional time when the event should be triggered.
     */
    eventTriggerDateTime?: Date | undefined;
    /**
     * The user who last modified the retentionEvent.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The latest date time when the retentionEvent was modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Last time the status of the event was updated.
     */
    lastStatusUpdateDateTime?: Date | undefined;
    /**
     * Specifies the event that will start the retention period for labels that use this event type when an event is created.
     */
    retentionEventType?: RetentionEventType | undefined;
}
