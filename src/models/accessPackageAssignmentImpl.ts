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
export class AccessPackageAssignmentImpl extends EntityImpl implements AccessPackageAssignment, Parsable {
    /** Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters. */
    public accessPackage?: AccessPackage | undefined;
    /** Read-only. Supports $filter (eq) on the id property and $expand query parameters. */
    public assignmentPolicy?: AccessPackageAssignmentPolicy | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public expiredDateTime?: Date | undefined;
    /** When the access assignment is to be in place. Read-only. */
    public schedule?: EntitlementManagementSchedule | undefined;
    /** The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq). */
    public state?: AccessPackageAssignmentState | undefined;
    /** More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only. */
    public status?: string | undefined;
    /** The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId. */
    public target?: AccessPackageSubject | undefined;
    /**
     * Instantiates a new accessPackageAssignment and sets the default values.
     * @param accessPackageAssignmentParameterValue 
     */
    public constructor(accessPackageAssignmentParameterValue?: AccessPackageAssignment | undefined) {
        super();
        this.accessPackage = accessPackageAssignmentParameterValue?.accessPackage ;
        this.assignmentPolicy = accessPackageAssignmentParameterValue?.assignmentPolicy ;
        this.expiredDateTime = accessPackageAssignmentParameterValue?.expiredDateTime ;
        this.schedule = accessPackageAssignmentParameterValue?.schedule ;
        this.state = accessPackageAssignmentParameterValue?.state ;
        this.status = accessPackageAssignmentParameterValue?.status ;
        this.target = accessPackageAssignmentParameterValue?.target ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackage){
        writer.writeObjectValue<AccessPackageImpl>("accessPackage", new AccessPackageImpl(this.accessPackage));
        }
        if(this.assignmentPolicy){
        writer.writeObjectValue<AccessPackageAssignmentPolicyImpl>("assignmentPolicy", new AccessPackageAssignmentPolicyImpl(this.assignmentPolicy));
        }
        if(this.expiredDateTime){
        writer.writeDateValue("expiredDateTime", this.expiredDateTime);
        }
        if(this.schedule){
        writer.writeObjectValue<EntitlementManagementScheduleImpl>("schedule", new EntitlementManagementScheduleImpl(this.schedule));
        }
        if(this.state){
        writer.writeEnumValue<AccessPackageAssignmentState>("state", this.state);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
        if(this.target){
        writer.writeObjectValue<AccessPackageSubjectImpl>("target", new AccessPackageSubjectImpl(this.target));
        }
    };
}
