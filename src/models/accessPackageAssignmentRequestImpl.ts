import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageSubject} from './accessPackageSubject';
import {createAccessPackageAssignmentFromDiscriminatorValue} from './createAccessPackageAssignmentFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createAccessPackageSubjectFromDiscriminatorValue} from './createAccessPackageSubjectFromDiscriminatorValue';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {AccessPackageAssignmentImpl, AccessPackageImpl, AccessPackageSubjectImpl, EntitlementManagementScheduleImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageAssignmentRequestImpl extends EntityImpl implements AccessPackageAssignmentRequest {
    /** The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable. Supports $expand. */
    private _accessPackage?: AccessPackage | undefined;
    /** For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand. */
    private _assignment?: AccessPackageAssignment | undefined;
    /** The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _completedDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand. */
    private _requestor?: AccessPackageSubject | undefined;
    /** One of UserAdd, UserRemove, AdminAdd, AdminRemove or SystemRemove. A request from the user themselves would have requestType of UserAdd or UserRemove. Read-only. */
    private _requestType?: AccessPackageRequestType | undefined;
    /** The range of dates that access is to be assigned to the requestor. Read-only. */
    private _schedule?: EntitlementManagementSchedule | undefined;
    /** The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only. */
    private _state?: AccessPackageRequestState | undefined;
    /** More information on the request processing status. Read-only. */
    private _status?: string | undefined;
    /**
     * Gets the accessPackage property value. The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable. Supports $expand.
     * @returns a AccessPackageInterface
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Sets the accessPackage property value. The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | undefined) {
        if(value) {
            this._accessPackage = value instanceof AccessPackageImpl? value : new AccessPackageImpl(value);
        }
    };
    /**
     * Gets the assignment property value. For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand.
     * @returns a AccessPackageAssignmentInterface
     */
    public get assignment() {
        return this._assignment;
    };
    /**
     * Sets the assignment property value. For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand.
     * @param value Value to set for the assignment property.
     */
    public set assignment(value: AccessPackageAssignment | undefined) {
        if(value) {
            this._assignment = value instanceof AccessPackageAssignmentImpl? value : new AccessPackageAssignmentImpl(value);
        }
    };
    /**
     * Gets the completedDateTime property value. The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        if(value) {
            this._completedDateTime = value;
        }
    };
    /**
     * Instantiates a new accessPackageAssignmentRequest and sets the default values.
     * @param accessPackageAssignmentRequestParameterValue 
     */
    public constructor(accessPackageAssignmentRequestParameterValue?: AccessPackageAssignmentRequest | undefined) {
        super(accessPackageAssignmentRequestParameterValue);
        this._accessPackage = accessPackageAssignmentRequestParameterValue?.accessPackage;
        this._assignment = accessPackageAssignmentRequestParameterValue?.assignment;
        this._completedDateTime = accessPackageAssignmentRequestParameterValue?.completedDateTime;
        this._createdDateTime = accessPackageAssignmentRequestParameterValue?.createdDateTime;
        this._requestor = accessPackageAssignmentRequestParameterValue?.requestor;
        this._requestType = accessPackageAssignmentRequestParameterValue?.requestType;
        this._schedule = accessPackageAssignmentRequestParameterValue?.schedule;
        this._state = accessPackageAssignmentRequestParameterValue?.state;
        this._status = accessPackageAssignmentRequestParameterValue?.status;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackage": n => { this.accessPackage = n.getObjectValue<AccessPackageImpl>(createAccessPackageFromDiscriminatorValue); },
            "assignment": n => { this.assignment = n.getObjectValue<AccessPackageAssignmentImpl>(createAccessPackageAssignmentFromDiscriminatorValue); },
            "completedDateTime": n => { this.completedDateTime = n.getDateValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "requestor": n => { this.requestor = n.getObjectValue<AccessPackageSubjectImpl>(createAccessPackageSubjectFromDiscriminatorValue); },
            "requestType": n => { this.requestType = n.getEnumValue<AccessPackageRequestType>(AccessPackageRequestType); },
            "schedule": n => { this.schedule = n.getObjectValue<EntitlementManagementScheduleImpl>(createEntitlementManagementScheduleFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<AccessPackageRequestState>(AccessPackageRequestState); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the requestor property value. The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.
     * @returns a AccessPackageSubjectInterface
     */
    public get requestor() {
        return this._requestor;
    };
    /**
     * Sets the requestor property value. The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the requestor property.
     */
    public set requestor(value: AccessPackageSubject | undefined) {
        if(value) {
            this._requestor = value instanceof AccessPackageSubjectImpl? value : new AccessPackageSubjectImpl(value);
        }
    };
    /**
     * Gets the requestType property value. One of UserAdd, UserRemove, AdminAdd, AdminRemove or SystemRemove. A request from the user themselves would have requestType of UserAdd or UserRemove. Read-only.
     * @returns a accessPackageRequestType
     */
    public get requestType() {
        return this._requestType;
    };
    /**
     * Sets the requestType property value. One of UserAdd, UserRemove, AdminAdd, AdminRemove or SystemRemove. A request from the user themselves would have requestType of UserAdd or UserRemove. Read-only.
     * @param value Value to set for the requestType property.
     */
    public set requestType(value: AccessPackageRequestType | undefined) {
        if(value) {
            this._requestType = value;
        }
    };
    /**
     * Gets the schedule property value. The range of dates that access is to be assigned to the requestor. Read-only.
     * @returns a EntitlementManagementScheduleInterface
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. The range of dates that access is to be assigned to the requestor. Read-only.
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
        if(this.assignment){
            writer.writeObjectValue<AccessPackageAssignmentImpl>("assignment", (!this.assignment || this.assignment instanceof AccessPackageAssignmentImpl? this.assignment : new AccessPackageAssignmentImpl(this.assignment)));
        }
        if(this.completedDateTime){
            writer.writeDateValue("completedDateTime", this.completedDateTime);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.requestor){
            writer.writeObjectValue<AccessPackageSubjectImpl>("requestor", (!this.requestor || this.requestor instanceof AccessPackageSubjectImpl? this.requestor : new AccessPackageSubjectImpl(this.requestor)));
        }
        if(this.requestType){
            writer.writeEnumValue<AccessPackageRequestType>("requestType", this.requestType);
        }
        if(this.schedule){
            writer.writeObjectValue<EntitlementManagementScheduleImpl>("schedule", (!this.schedule || this.schedule instanceof EntitlementManagementScheduleImpl? this.schedule : new EntitlementManagementScheduleImpl(this.schedule)));
        }
        if(this.state){
            writer.writeEnumValue<AccessPackageRequestState>("state", this.state);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
    };
    /**
     * Gets the state property value. The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only.
     * @returns a accessPackageRequestState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only.
     * @param value Value to set for the state property.
     */
    public set state(value: AccessPackageRequestState | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the status property value. More information on the request processing status. Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. More information on the request processing status. Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
