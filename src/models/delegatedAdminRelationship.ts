import {createDelegatedAdminAccessAssignmentFromDiscriminatorValue} from './createDelegatedAdminAccessAssignmentFromDiscriminatorValue';
import {createDelegatedAdminAccessDetailsFromDiscriminatorValue} from './createDelegatedAdminAccessDetailsFromDiscriminatorValue';
import {createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue} from './createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue';
import {createDelegatedAdminRelationshipOperationFromDiscriminatorValue} from './createDelegatedAdminRelationshipOperationFromDiscriminatorValue';
import {createDelegatedAdminRelationshipRequestFromDiscriminatorValue} from './createDelegatedAdminRelationshipRequestFromDiscriminatorValue';
import {DelegatedAdminRelationshipStatus} from './delegatedAdminRelationshipStatus';
import {DelegatedAdminAccessAssignment, DelegatedAdminAccessDetails, DelegatedAdminRelationshipCustomerParticipant, DelegatedAdminRelationshipOperation, DelegatedAdminRelationshipRequest, Entity} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminRelationship extends Entity implements Parsable {
    /** The access assignments associated with the delegated admin relationship. */
    private _accessAssignments?: DelegatedAdminAccessAssignment[] | undefined;
    /** The accessDetails property */
    private _accessDetails?: DelegatedAdminAccessDetails | undefined;
    /** The date and time in ISO 8601 format and in UTC time when the relationship became active. Read-only. */
    private _activatedDateTime?: Date | undefined;
    /** The date and time in ISO 8601 format and in UTC time when the relationship was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The display name and unique identifier of the customer of the relationship. This is configured either by the partner at the time the relationship is created or by the system after the customer approves the relationship. Cannot be changed by the customer. */
    private _customer?: DelegatedAdminRelationshipCustomerParticipant | undefined;
    /** The display name of the relationship used for ease of identification. Must be unique across all delegated admin relationships of the partner. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer. */
    private _displayName?: string | undefined;
    /** The duration of the relationship in ISO 8601 format. Must be a value between P1D and P2Y inclusive. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer. */
    private _duration?: Duration | undefined;
    /** The date and time in ISO 8601 format and in UTC time when the status of relationship changes to either terminated or expired. Calculated as endDateTime = activatedDateTime + duration. Read-only. */
    private _endDateTime?: Date | undefined;
    /** The date and time in ISO 8601 format and in UTC time when the relationship was last modified. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The long running operations associated with the delegated admin relationship. */
    private _operations?: DelegatedAdminRelationshipOperation[] | undefined;
    /** The requests associated with the delegated admin relationship. */
    private _requests?: DelegatedAdminRelationshipRequest[] | undefined;
    /** The status of the relationship. Read Only. The possible values are: activating, active, approvalPending, approved, created, expired, expiring, terminated, terminating, terminationRequested, unknownFutureValue. Supports $orderBy. */
    private _status?: DelegatedAdminRelationshipStatus | undefined;
    /**
     * Gets the accessAssignments property value. The access assignments associated with the delegated admin relationship.
     * @returns a delegatedAdminAccessAssignment
     */
    public get accessAssignments() {
        return this._accessAssignments;
    };
    /**
     * Sets the accessAssignments property value. The access assignments associated with the delegated admin relationship.
     * @param value Value to set for the accessAssignments property.
     */
    public set accessAssignments(value: DelegatedAdminAccessAssignment[] | undefined) {
        this._accessAssignments = value;
    };
    /**
     * Gets the accessDetails property value. The accessDetails property
     * @returns a delegatedAdminAccessDetails
     */
    public get accessDetails() {
        return this._accessDetails;
    };
    /**
     * Sets the accessDetails property value. The accessDetails property
     * @param value Value to set for the accessDetails property.
     */
    public set accessDetails(value: DelegatedAdminAccessDetails | undefined) {
        this._accessDetails = value;
    };
    /**
     * Gets the activatedDateTime property value. The date and time in ISO 8601 format and in UTC time when the relationship became active. Read-only.
     * @returns a Date
     */
    public get activatedDateTime() {
        return this._activatedDateTime;
    };
    /**
     * Sets the activatedDateTime property value. The date and time in ISO 8601 format and in UTC time when the relationship became active. Read-only.
     * @param value Value to set for the activatedDateTime property.
     */
    public set activatedDateTime(value: Date | undefined) {
        this._activatedDateTime = value;
    };
    /**
     * Instantiates a new DelegatedAdminRelationship and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time in ISO 8601 format and in UTC time when the relationship was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time in ISO 8601 format and in UTC time when the relationship was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the customer property value. The display name and unique identifier of the customer of the relationship. This is configured either by the partner at the time the relationship is created or by the system after the customer approves the relationship. Cannot be changed by the customer.
     * @returns a delegatedAdminRelationshipCustomerParticipant
     */
    public get customer() {
        return this._customer;
    };
    /**
     * Sets the customer property value. The display name and unique identifier of the customer of the relationship. This is configured either by the partner at the time the relationship is created or by the system after the customer approves the relationship. Cannot be changed by the customer.
     * @param value Value to set for the customer property.
     */
    public set customer(value: DelegatedAdminRelationshipCustomerParticipant | undefined) {
        this._customer = value;
    };
    /**
     * Gets the displayName property value. The display name of the relationship used for ease of identification. Must be unique across all delegated admin relationships of the partner. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the relationship used for ease of identification. Must be unique across all delegated admin relationships of the partner. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the duration property value. The duration of the relationship in ISO 8601 format. Must be a value between P1D and P2Y inclusive. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer.
     * @returns a Duration
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. The duration of the relationship in ISO 8601 format. Must be a value between P1D and P2Y inclusive. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer.
     * @param value Value to set for the duration property.
     */
    public set duration(value: Duration | undefined) {
        this._duration = value;
    };
    /**
     * Gets the endDateTime property value. The date and time in ISO 8601 format and in UTC time when the status of relationship changes to either terminated or expired. Calculated as endDateTime = activatedDateTime + duration. Read-only.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The date and time in ISO 8601 format and in UTC time when the status of relationship changes to either terminated or expired. Calculated as endDateTime = activatedDateTime + duration. Read-only.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessAssignments": n => { this.accessAssignments = n.getCollectionOfObjectValues<DelegatedAdminAccessAssignment>(createDelegatedAdminAccessAssignmentFromDiscriminatorValue); },
            "accessDetails": n => { this.accessDetails = n.getObjectValue<DelegatedAdminAccessDetails>(createDelegatedAdminAccessDetailsFromDiscriminatorValue); },
            "activatedDateTime": n => { this.activatedDateTime = n.getDateValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "customer": n => { this.customer = n.getObjectValue<DelegatedAdminRelationshipCustomerParticipant>(createDelegatedAdminRelationshipCustomerParticipantFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "duration": n => { this.duration = n.getDurationValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<DelegatedAdminRelationshipOperation>(createDelegatedAdminRelationshipOperationFromDiscriminatorValue); },
            "requests": n => { this.requests = n.getCollectionOfObjectValues<DelegatedAdminRelationshipRequest>(createDelegatedAdminRelationshipRequestFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<DelegatedAdminRelationshipStatus>(DelegatedAdminRelationshipStatus); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time in ISO 8601 format and in UTC time when the relationship was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time in ISO 8601 format and in UTC time when the relationship was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the operations property value. The long running operations associated with the delegated admin relationship.
     * @returns a delegatedAdminRelationshipOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The long running operations associated with the delegated admin relationship.
     * @param value Value to set for the operations property.
     */
    public set operations(value: DelegatedAdminRelationshipOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the requests property value. The requests associated with the delegated admin relationship.
     * @returns a delegatedAdminRelationshipRequest
     */
    public get requests() {
        return this._requests;
    };
    /**
     * Sets the requests property value. The requests associated with the delegated admin relationship.
     * @param value Value to set for the requests property.
     */
    public set requests(value: DelegatedAdminRelationshipRequest[] | undefined) {
        this._requests = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DelegatedAdminAccessAssignment>("accessAssignments", this.accessAssignments);
        writer.writeObjectValue<DelegatedAdminAccessDetails>("accessDetails", this.accessDetails);
        writer.writeDateValue("activatedDateTime", this.activatedDateTime);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DelegatedAdminRelationshipCustomerParticipant>("customer", this.customer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDurationValue("duration", this.duration);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationshipRequest>("requests", this.requests);
        writer.writeEnumValue<DelegatedAdminRelationshipStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status of the relationship. Read Only. The possible values are: activating, active, approvalPending, approved, created, expired, expiring, terminated, terminating, terminationRequested, unknownFutureValue. Supports $orderBy.
     * @returns a delegatedAdminRelationshipStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the relationship. Read Only. The possible values are: activating, active, approvalPending, approved, created, expired, expiring, terminated, terminating, terminationRequested, unknownFutureValue. Supports $orderBy.
     * @param value Value to set for the status property.
     */
    public set status(value: DelegatedAdminRelationshipStatus | undefined) {
        this._status = value;
    };
}
