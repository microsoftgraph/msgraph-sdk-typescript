import {AccessPackageAssignmentState} from './accessPackageAssignmentState';
import {AccessPackage, AccessPackageAssignmentPolicy, AccessPackageSubject, AdminMember1, EntitlementManagementSchedule, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignment extends Entity implements Parsable {
    /** Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters. */
    private _accessPackage?: AccessPackage | AdminMember1 | undefined;
    /** Read-only. Supports $filter (eq) on the id property and $expand query parameters. */
    private _assignmentPolicy?: AccessPackageAssignmentPolicy | AdminMember1 | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _expiredDateTime?: Date | undefined;
    /** When the access assignment is to be in place. Read-only. */
    private _schedule?: EntitlementManagementSchedule | AdminMember1 | undefined;
    /** The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq). */
    private _state?: AccessPackageAssignmentState | AdminMember1 | undefined;
    /** More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only. */
    private _status?: string | undefined;
    /** The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId. */
    private _target?: AccessPackageSubject | AdminMember1 | undefined;
    /**
     * Gets the accessPackage property value. Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
     * @returns a admin
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Sets the accessPackage property value. Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | AdminMember1 | undefined) {
        this._accessPackage = value;
    };
    /**
     * Gets the assignmentPolicy property value. Read-only. Supports $filter (eq) on the id property and $expand query parameters.
     * @returns a admin
     */
    public get assignmentPolicy() {
        return this._assignmentPolicy;
    };
    /**
     * Sets the assignmentPolicy property value. Read-only. Supports $filter (eq) on the id property and $expand query parameters.
     * @param value Value to set for the assignmentPolicy property.
     */
    public set assignmentPolicy(value: AccessPackageAssignmentPolicy | AdminMember1 | undefined) {
        this._assignmentPolicy = value;
    };
    /**
     * Instantiates a new accessPackageAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the expiredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get expiredDateTime() {
        return this._expiredDateTime;
    };
    /**
     * Sets the expiredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the expiredDateTime property.
     */
    public set expiredDateTime(value: Date | undefined) {
        this._expiredDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackage": n => { this.accessPackage = n.getObjectValue<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
            "assignmentPolicy": n => { this.assignmentPolicy = n.getObjectValue<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
            "expiredDateTime": n => { this.expiredDateTime = n.getDateValue(); },
            "schedule": n => { this.schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); },
            "state": n => { this.state = n.getObjectValue<AccessPackageAssignmentState>(createAccessPackageAssignmentStateFromDiscriminatorValue); },
            "status": n => { this.status = n.getStringValue(); },
            "target": n => { this.target = n.getObjectValue<AccessPackageSubject>(createAccessPackageSubjectFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the schedule property value. When the access assignment is to be in place. Read-only.
     * @returns a admin
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. When the access assignment is to be in place. Read-only.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: EntitlementManagementSchedule | AdminMember1 | undefined) {
        this._schedule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AccessPackage>("accessPackage", this.accessPackage);
        writer.writeObjectValue<AccessPackageAssignmentPolicy>("assignmentPolicy", this.assignmentPolicy);
        writer.writeDateValue("expiredDateTime", this.expiredDateTime);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", this.schedule);
        writer.writeObjectValue<AccessPackageAssignmentState>("state", this.state);
        writer.writeStringValue("status", this.status);
        writer.writeObjectValue<AccessPackageSubject>("target", this.target);
    };
    /**
     * Gets the state property value. The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).
     * @returns a admin
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).
     * @param value Value to set for the state property.
     */
    public set state(value: AccessPackageAssignmentState | AdminMember1 | undefined) {
        this._state = value;
    };
    /**
     * Gets the status property value. More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the target property value. The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
     * @returns a admin
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
     * @param value Value to set for the target property.
     */
    public set target(value: AccessPackageSubject | AdminMember1 | undefined) {
        this._target = value;
    };
}
