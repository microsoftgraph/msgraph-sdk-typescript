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
export class AccessPackageAssignmentRequestImpl extends EntityImpl implements AccessPackageAssignmentRequest, Parsable {
    /** The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable. Supports $expand. */
    public accessPackage?: AccessPackage | undefined;
    /** For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand. */
    public assignment?: AccessPackageAssignment | undefined;
    /** The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public completedDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand. */
    public requestor?: AccessPackageSubject | undefined;
    /** One of UserAdd, UserRemove, AdminAdd, AdminRemove or SystemRemove. A request from the user themselves would have requestType of UserAdd or UserRemove. Read-only. */
    public requestType?: AccessPackageRequestType | undefined;
    /** The range of dates that access is to be assigned to the requestor. Read-only. */
    public schedule?: EntitlementManagementSchedule | undefined;
    /** The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only. */
    public state?: AccessPackageRequestState | undefined;
    /** More information on the request processing status. Read-only. */
    public status?: string | undefined;
    /**
     * Instantiates a new accessPackageAssignmentRequest and sets the default values.
     * @param accessPackageAssignmentRequestParameterValue 
     */
    public constructor(accessPackageAssignmentRequestParameterValue?: AccessPackageAssignmentRequest | undefined) {
        super();
        this.accessPackage = accessPackageAssignmentRequestParameterValue?.accessPackage ;
        this.assignment = accessPackageAssignmentRequestParameterValue?.assignment ;
        this.completedDateTime = accessPackageAssignmentRequestParameterValue?.completedDateTime ;
        this.createdDateTime = accessPackageAssignmentRequestParameterValue?.createdDateTime ;
        this.requestor = accessPackageAssignmentRequestParameterValue?.requestor ;
        this.requestType = accessPackageAssignmentRequestParameterValue?.requestType ;
        this.schedule = accessPackageAssignmentRequestParameterValue?.schedule ;
        this.state = accessPackageAssignmentRequestParameterValue?.state ;
        this.status = accessPackageAssignmentRequestParameterValue?.status ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackage){
        writer.writeObjectValue<AccessPackageImpl>("accessPackage", new AccessPackageImpl(this.accessPackage));
        }
        if(this.assignment){
        writer.writeObjectValue<AccessPackageAssignmentImpl>("assignment", new AccessPackageAssignmentImpl(this.assignment));
        }
        if(this.completedDateTime){
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.requestor){
        writer.writeObjectValue<AccessPackageSubjectImpl>("requestor", new AccessPackageSubjectImpl(this.requestor));
        }
        if(this.requestType){
        writer.writeEnumValue<AccessPackageRequestType>("requestType", this.requestType);
        }
        if(this.schedule){
        writer.writeObjectValue<EntitlementManagementScheduleImpl>("schedule", new EntitlementManagementScheduleImpl(this.schedule));
        }
        if(this.state){
        writer.writeEnumValue<AccessPackageRequestState>("state", this.state);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
    };
}
