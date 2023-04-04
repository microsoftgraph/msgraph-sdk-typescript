import {Entity, IdentitySet} from '../';
import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {createEventPropagationResultFromDiscriminatorValue} from './createEventPropagationResultFromDiscriminatorValue';
import {createEventQueryFromDiscriminatorValue} from './createEventQueryFromDiscriminatorValue';
import {createRetentionEventStatusFromDiscriminatorValue} from './createRetentionEventStatusFromDiscriminatorValue';
import {createRetentionEventTypeFromDiscriminatorValue} from './createRetentionEventTypeFromDiscriminatorValue';
import {EventPropagationResult, EventQuery, RetentionEventStatus, RetentionEventType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RetentionEvent extends Entity implements Parsable {
    /** The user who created the retentionEvent. */
    private _createdBy?: IdentitySet | undefined;
    /** The date time when the retentionEvent was created. */
    private _createdDateTime?: Date | undefined;
    /** Optional information about the event. */
    private _description?: string | undefined;
    /** Name of the event. */
    private _displayName?: string | undefined;
    /** The eventPropagationResults property */
    private _eventPropagationResults?: EventPropagationResult[] | undefined;
    /** Represents the workload (SharePoint Online, OneDrive for Business, Exchange Online) and identification information associated with a retention event. */
    private _eventQueries?: EventQuery[] | undefined;
    /** The eventStatus property */
    private _eventStatus?: RetentionEventStatus | undefined;
    /** Optional time when the event should be triggered. */
    private _eventTriggerDateTime?: Date | undefined;
    /** The user who last modified the retentionEvent. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The latest date time when the retentionEvent was modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Last time the status of the event was updated. */
    private _lastStatusUpdateDateTime?: Date | undefined;
    /** Specifies the event that will start the retention period for labels that use this event type when an event is created. */
    private _retentionEventType?: RetentionEventType | undefined;
    /**
     * Instantiates a new retentionEvent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. The user who created the retentionEvent.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The user who created the retentionEvent.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. The date time when the retentionEvent was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date time when the retentionEvent was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. Optional information about the event.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Optional information about the event.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Name of the event.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the event.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the eventPropagationResults property value. The eventPropagationResults property
     * @returns a eventPropagationResult
     */
    public get eventPropagationResults() {
        return this._eventPropagationResults;
    };
    /**
     * Sets the eventPropagationResults property value. The eventPropagationResults property
     * @param value Value to set for the eventPropagationResults property.
     */
    public set eventPropagationResults(value: EventPropagationResult[] | undefined) {
        this._eventPropagationResults = value;
    };
    /**
     * Gets the eventQueries property value. Represents the workload (SharePoint Online, OneDrive for Business, Exchange Online) and identification information associated with a retention event.
     * @returns a eventQuery
     */
    public get eventQueries() {
        return this._eventQueries;
    };
    /**
     * Sets the eventQueries property value. Represents the workload (SharePoint Online, OneDrive for Business, Exchange Online) and identification information associated with a retention event.
     * @param value Value to set for the eventQueries property.
     */
    public set eventQueries(value: EventQuery[] | undefined) {
        this._eventQueries = value;
    };
    /**
     * Gets the eventStatus property value. The eventStatus property
     * @returns a retentionEventStatus
     */
    public get eventStatus() {
        return this._eventStatus;
    };
    /**
     * Sets the eventStatus property value. The eventStatus property
     * @param value Value to set for the eventStatus property.
     */
    public set eventStatus(value: RetentionEventStatus | undefined) {
        this._eventStatus = value;
    };
    /**
     * Gets the eventTriggerDateTime property value. Optional time when the event should be triggered.
     * @returns a Date
     */
    public get eventTriggerDateTime() {
        return this._eventTriggerDateTime;
    };
    /**
     * Sets the eventTriggerDateTime property value. Optional time when the event should be triggered.
     * @param value Value to set for the eventTriggerDateTime property.
     */
    public set eventTriggerDateTime(value: Date | undefined) {
        this._eventTriggerDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "eventPropagationResults": n => { this.eventPropagationResults = n.getCollectionOfObjectValues<EventPropagationResult>(createEventPropagationResultFromDiscriminatorValue); },
            "eventQueries": n => { this.eventQueries = n.getCollectionOfObjectValues<EventQuery>(createEventQueryFromDiscriminatorValue); },
            "eventStatus": n => { this.eventStatus = n.getObjectValue<RetentionEventStatus>(createRetentionEventStatusFromDiscriminatorValue); },
            "eventTriggerDateTime": n => { this.eventTriggerDateTime = n.getDateValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "lastStatusUpdateDateTime": n => { this.lastStatusUpdateDateTime = n.getDateValue(); },
            "retentionEventType": n => { this.retentionEventType = n.getObjectValue<RetentionEventType>(createRetentionEventTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. The user who last modified the retentionEvent.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The user who last modified the retentionEvent.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The latest date time when the retentionEvent was modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The latest date time when the retentionEvent was modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the lastStatusUpdateDateTime property value. Last time the status of the event was updated.
     * @returns a Date
     */
    public get lastStatusUpdateDateTime() {
        return this._lastStatusUpdateDateTime;
    };
    /**
     * Sets the lastStatusUpdateDateTime property value. Last time the status of the event was updated.
     * @param value Value to set for the lastStatusUpdateDateTime property.
     */
    public set lastStatusUpdateDateTime(value: Date | undefined) {
        this._lastStatusUpdateDateTime = value;
    };
    /**
     * Gets the retentionEventType property value. Specifies the event that will start the retention period for labels that use this event type when an event is created.
     * @returns a retentionEventType
     */
    public get retentionEventType() {
        return this._retentionEventType;
    };
    /**
     * Sets the retentionEventType property value. Specifies the event that will start the retention period for labels that use this event type when an event is created.
     * @param value Value to set for the retentionEventType property.
     */
    public set retentionEventType(value: RetentionEventType | undefined) {
        this._retentionEventType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<EventPropagationResult>("eventPropagationResults", this.eventPropagationResults);
        writer.writeCollectionOfObjectValues<EventQuery>("eventQueries", this.eventQueries);
        writer.writeObjectValue<RetentionEventStatus>("eventStatus", this.eventStatus);
        writer.writeDateValue("eventTriggerDateTime", this.eventTriggerDateTime);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("lastStatusUpdateDateTime", this.lastStatusUpdateDateTime);
        writer.writeObjectValue<RetentionEventType>("retentionEventType", this.retentionEventType);
    };
}
