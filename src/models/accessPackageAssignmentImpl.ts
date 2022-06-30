import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentState} from './accessPackageAssignmentState';
import {AccessPackageSubject} from './accessPackageSubject';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createAccessPackageSubjectFromDiscriminatorValue} from './createAccessPackageSubjectFromDiscriminatorValue';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {AccessPackageAssignmentPolicyImpl, AccessPackageImpl, AccessPackageSubjectImpl, EntitlementManagementScheduleImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageAssignmentImpl extends EntityImpl implements AccessPackageAssignment {
    /** Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters. */
    private _accessPackage?: AccessPackage | undefined;
    /** Read-only. Supports $filter (eq) on the id property and $expand query parameters. */
    private _assignmentPolicy?: AccessPackageAssignmentPolicy | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _expiredDateTime?: Date | undefined;
    /** When the access assignment is to be in place. Read-only. */
    private _schedule?: EntitlementManagementSchedule | undefined;
    /** The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq). */
    private _state?: AccessPackageAssignmentState | undefined;
    /** More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only. */
    private _status?: string | undefined;
    /** The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId. */
    private _target?: AccessPackageSubject | undefined;
    /**
     * Gets the accessPackage property value. Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
     * @returns a AccessPackageInterface
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Sets the accessPackage property value. Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | undefined) {
        if(value) {
            this._accessPackage = value instanceof AccessPackageImpl? value : new AccessPackageImpl(value);
        }
    };
    /**
     * Gets the assignmentPolicy property value. Read-only. Supports $filter (eq) on the id property and $expand query parameters.
     * @returns a AccessPackageAssignmentPolicyInterface
     */
    public get assignmentPolicy() {
        return this._assignmentPolicy;
    };
    /**
     * Sets the assignmentPolicy property value. Read-only. Supports $filter (eq) on the id property and $expand query parameters.
     * @param value Value to set for the assignmentPolicy property.
     */
    public set assignmentPolicy(value: AccessPackageAssignmentPolicy | undefined) {
        if(value) {
            this._assignmentPolicy = value instanceof AccessPackageAssignmentPolicyImpl? value : new AccessPackageAssignmentPolicyImpl(value);
        }
    };
    /**
     * Instantiates a new accessPackageAssignment and sets the default values.
     * @param accessPackageAssignmentParameterValue 
     */
    public constructor(accessPackageAssignmentParameterValue?: AccessPackageAssignment | undefined) {
        super(accessPackageAssignmentParameterValue);
        this._accessPackage = accessPackageAssignmentParameterValue?.accessPackage;
        this._assignmentPolicy = accessPackageAssignmentParameterValue?.assignmentPolicy;
        this._expiredDateTime = accessPackageAssignmentParameterValue?.expiredDateTime;
        this._schedule = accessPackageAssignmentParameterValue?.schedule;
        this._state = accessPackageAssignmentParameterValue?.state;
        this._status = accessPackageAssignmentParameterValue?.status;
        this._target = accessPackageAssignmentParameterValue?.target;
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
        if(value) {
            this._expiredDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackage": n => { this.accessPackage = n.getObjectValue<AccessPackageImpl>(createAccessPackageFromDiscriminatorValue); },
            "assignmentPolicy": n => { this.assignmentPolicy = n.getObjectValue<AccessPackageAssignmentPolicyImpl>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
            "expiredDateTime": n => { this.expiredDateTime = n.getDateValue(); },
            "schedule": n => { this.schedule = n.getObjectValue<EntitlementManagementScheduleImpl>(createEntitlementManagementScheduleFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<AccessPackageAssignmentState>(AccessPackageAssignmentState); },
            "status": n => { this.status = n.getStringValue(); },
            "target": n => { this.target = n.getObjectValue<AccessPackageSubjectImpl>(createAccessPackageSubjectFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the schedule property value. When the access assignment is to be in place. Read-only.
     * @returns a EntitlementManagementScheduleInterface
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. When the access assignment is to be in place. Read-only.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: EntitlementManagementSchedule | undefined) {
        if(value) {
            this._schedule = value instanceof EntitlementManagementScheduleImpl? value : new EntitlementManagementScheduleImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackage){
            writer.writeObjectValue<AccessPackageImpl>("accessPackage", (!this.accessPackage || this.accessPackage instanceof AccessPackageImpl? this.accessPackage : new AccessPackageImpl(this.accessPackage)));
        }
        if(this.assignmentPolicy){
            writer.writeObjectValue<AccessPackageAssignmentPolicyImpl>("assignmentPolicy", (!this.assignmentPolicy || this.assignmentPolicy instanceof AccessPackageAssignmentPolicyImpl? this.assignmentPolicy : new AccessPackageAssignmentPolicyImpl(this.assignmentPolicy)));
        }
        if(this.expiredDateTime){
            writer.writeDateValue("expiredDateTime", this.expiredDateTime);
        }
        if(this.schedule){
            writer.writeObjectValue<EntitlementManagementScheduleImpl>("schedule", (!this.schedule || this.schedule instanceof EntitlementManagementScheduleImpl? this.schedule : new EntitlementManagementScheduleImpl(this.schedule)));
        }
        if(this.state){
            writer.writeEnumValue<AccessPackageAssignmentState>("state", this.state);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
        if(this.target){
            writer.writeObjectValue<AccessPackageSubjectImpl>("target", (!this.target || this.target instanceof AccessPackageSubjectImpl? this.target : new AccessPackageSubjectImpl(this.target)));
        }
    };
    /**
     * Gets the state property value. The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).
     * @returns a accessPackageAssignmentState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).
     * @param value Value to set for the state property.
     */
    public set state(value: AccessPackageAssignmentState | undefined) {
        if(value) {
            this._state = value;
        }
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
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the target property value. The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
     * @returns a AccessPackageSubjectInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
     * @param value Value to set for the target property.
     */
    public set target(value: AccessPackageSubject | undefined) {
        if(value) {
            this._target = value instanceof AccessPackageSubjectImpl? value : new AccessPackageSubjectImpl(value);
        }
    };
}
