import {AccessPackageAssignmentRequestRequirements} from './accessPackageAssignmentRequestRequirements';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {EntitlementManagementScheduleImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequestRequirementsImpl implements AccessPackageAssignmentRequestRequirements, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether the requestor is allowed to set a custom schedule. */
    public allowCustomAssignmentSchedule?: boolean | undefined;
    /** Indicates whether a request to add must be approved by an approver. */
    public isApprovalRequiredForAdd?: boolean | undefined;
    /** Indicates whether a request to update must be approved by an approver. */
    public isApprovalRequiredForUpdate?: boolean | undefined;
    /** The description of the policy that the user is trying to request access using. */
    public policyDescription?: string | undefined;
    /** The display name of the policy that the user is trying to request access using. */
    public policyDisplayName?: string | undefined;
    /** The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request. */
    public policyId?: string | undefined;
    /** Schedule restrictions enforced, if any. */
    public schedule?: EntitlementManagementSchedule | undefined;
    /**
     * Instantiates a new accessPackageAssignmentRequestRequirements and sets the default values.
     * @param accessPackageAssignmentRequestRequirementsParameterValue 
     */
    public constructor(accessPackageAssignmentRequestRequirementsParameterValue?: AccessPackageAssignmentRequestRequirements | undefined) {
        this.additionalData = accessPackageAssignmentRequestRequirementsParameterValue?.additionalData ? accessPackageAssignmentRequestRequirementsParameterValue?.additionalData! : {}
        this.allowCustomAssignmentSchedule = accessPackageAssignmentRequestRequirementsParameterValue?.allowCustomAssignmentSchedule ;
        this.isApprovalRequiredForAdd = accessPackageAssignmentRequestRequirementsParameterValue?.isApprovalRequiredForAdd ;
        this.isApprovalRequiredForUpdate = accessPackageAssignmentRequestRequirementsParameterValue?.isApprovalRequiredForUpdate ;
        this.policyDescription = accessPackageAssignmentRequestRequirementsParameterValue?.policyDescription ;
        this.policyDisplayName = accessPackageAssignmentRequestRequirementsParameterValue?.policyDisplayName ;
        this.policyId = accessPackageAssignmentRequestRequirementsParameterValue?.policyId ;
        this.schedule = accessPackageAssignmentRequestRequirementsParameterValue?.schedule ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCustomAssignmentSchedule": n => { this.allowCustomAssignmentSchedule = n.getBooleanValue(); },
            "isApprovalRequiredForAdd": n => { this.isApprovalRequiredForAdd = n.getBooleanValue(); },
            "isApprovalRequiredForUpdate": n => { this.isApprovalRequiredForUpdate = n.getBooleanValue(); },
            "policyDescription": n => { this.policyDescription = n.getStringValue(); },
            "policyDisplayName": n => { this.policyDisplayName = n.getStringValue(); },
            "policyId": n => { this.policyId = n.getStringValue(); },
            "schedule": n => { this.schedule = n.getObjectValue<EntitlementManagementScheduleImpl>(createEntitlementManagementScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowCustomAssignmentSchedule){
        writer.writeBooleanValue("allowCustomAssignmentSchedule", this.allowCustomAssignmentSchedule);
        }
        if(this.isApprovalRequiredForAdd){
        writer.writeBooleanValue("isApprovalRequiredForAdd", this.isApprovalRequiredForAdd);
        }
        if(this.isApprovalRequiredForUpdate){
        writer.writeBooleanValue("isApprovalRequiredForUpdate", this.isApprovalRequiredForUpdate);
        }
        if(this.policyDescription){
        writer.writeStringValue("policyDescription", this.policyDescription);
        }
        if(this.policyDisplayName){
        writer.writeStringValue("policyDisplayName", this.policyDisplayName);
        }
        if(this.policyId){
        writer.writeStringValue("policyId", this.policyId);
        }
        if(this.schedule){
        writer.writeObjectValue<EntitlementManagementScheduleImpl>("schedule", new EntitlementManagementScheduleImpl(this.schedule));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
