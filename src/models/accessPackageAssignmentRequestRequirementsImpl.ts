import {AccessPackageAssignmentRequestRequirements} from './accessPackageAssignmentRequestRequirements';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {EntitlementManagementScheduleImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequestRequirementsImpl implements AccessPackageAssignmentRequestRequirements {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Indicates whether the requestor is allowed to set a custom schedule. */
    private _allowCustomAssignmentSchedule?: boolean | undefined;
    /** Indicates whether a request to add must be approved by an approver. */
    private _isApprovalRequiredForAdd?: boolean | undefined;
    /** Indicates whether a request to update must be approved by an approver. */
    private _isApprovalRequiredForUpdate?: boolean | undefined;
    /** The description of the policy that the user is trying to request access using. */
    private _policyDescription?: string | undefined;
    /** The display name of the policy that the user is trying to request access using. */
    private _policyDisplayName?: string | undefined;
    /** The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request. */
    private _policyId?: string | undefined;
    /** Schedule restrictions enforced, if any. */
    private _schedule?: EntitlementManagementSchedule | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the allowCustomAssignmentSchedule property value. Indicates whether the requestor is allowed to set a custom schedule.
     * @returns a boolean
     */
    public get allowCustomAssignmentSchedule() {
        return this._allowCustomAssignmentSchedule;
    };
    /**
     * Sets the allowCustomAssignmentSchedule property value. Indicates whether the requestor is allowed to set a custom schedule.
     * @param value Value to set for the allowCustomAssignmentSchedule property.
     */
    public set allowCustomAssignmentSchedule(value: boolean | undefined) {
        if(value) {
            this._allowCustomAssignmentSchedule = value;
        }
    };
    /**
     * Instantiates a new accessPackageAssignmentRequestRequirements and sets the default values.
     * @param accessPackageAssignmentRequestRequirementsParameterValue 
     */
    public constructor(accessPackageAssignmentRequestRequirementsParameterValue?: AccessPackageAssignmentRequestRequirements | undefined) {
        this._additionalData = accessPackageAssignmentRequestRequirementsParameterValue?.additionalData ? accessPackageAssignmentRequestRequirementsParameterValue?.additionalData! : {};
        this._allowCustomAssignmentSchedule = accessPackageAssignmentRequestRequirementsParameterValue?.allowCustomAssignmentSchedule;
        this._isApprovalRequiredForAdd = accessPackageAssignmentRequestRequirementsParameterValue?.isApprovalRequiredForAdd;
        this._isApprovalRequiredForUpdate = accessPackageAssignmentRequestRequirementsParameterValue?.isApprovalRequiredForUpdate;
        this._policyDescription = accessPackageAssignmentRequestRequirementsParameterValue?.policyDescription;
        this._policyDisplayName = accessPackageAssignmentRequestRequirementsParameterValue?.policyDisplayName;
        this._policyId = accessPackageAssignmentRequestRequirementsParameterValue?.policyId;
        this._schedule = accessPackageAssignmentRequestRequirementsParameterValue?.schedule;
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
     * Gets the isApprovalRequiredForAdd property value. Indicates whether a request to add must be approved by an approver.
     * @returns a boolean
     */
    public get isApprovalRequiredForAdd() {
        return this._isApprovalRequiredForAdd;
    };
    /**
     * Sets the isApprovalRequiredForAdd property value. Indicates whether a request to add must be approved by an approver.
     * @param value Value to set for the isApprovalRequiredForAdd property.
     */
    public set isApprovalRequiredForAdd(value: boolean | undefined) {
        if(value) {
            this._isApprovalRequiredForAdd = value;
        }
    };
    /**
     * Gets the isApprovalRequiredForUpdate property value. Indicates whether a request to update must be approved by an approver.
     * @returns a boolean
     */
    public get isApprovalRequiredForUpdate() {
        return this._isApprovalRequiredForUpdate;
    };
    /**
     * Sets the isApprovalRequiredForUpdate property value. Indicates whether a request to update must be approved by an approver.
     * @param value Value to set for the isApprovalRequiredForUpdate property.
     */
    public set isApprovalRequiredForUpdate(value: boolean | undefined) {
        if(value) {
            this._isApprovalRequiredForUpdate = value;
        }
    };
    /**
     * Gets the policyDescription property value. The description of the policy that the user is trying to request access using.
     * @returns a string
     */
    public get policyDescription() {
        return this._policyDescription;
    };
    /**
     * Sets the policyDescription property value. The description of the policy that the user is trying to request access using.
     * @param value Value to set for the policyDescription property.
     */
    public set policyDescription(value: string | undefined) {
        if(value) {
            this._policyDescription = value;
        }
    };
    /**
     * Gets the policyDisplayName property value. The display name of the policy that the user is trying to request access using.
     * @returns a string
     */
    public get policyDisplayName() {
        return this._policyDisplayName;
    };
    /**
     * Sets the policyDisplayName property value. The display name of the policy that the user is trying to request access using.
     * @param value Value to set for the policyDisplayName property.
     */
    public set policyDisplayName(value: string | undefined) {
        if(value) {
            this._policyDisplayName = value;
        }
    };
    /**
     * Gets the policyId property value. The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request.
     * @returns a string
     */
    public get policyId() {
        return this._policyId;
    };
    /**
     * Sets the policyId property value. The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request.
     * @param value Value to set for the policyId property.
     */
    public set policyId(value: string | undefined) {
        if(value) {
            this._policyId = value;
        }
    };
    /**
     * Gets the schedule property value. Schedule restrictions enforced, if any.
     * @returns a EntitlementManagementScheduleInterface
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. Schedule restrictions enforced, if any.
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
            writer.writeObjectValue<EntitlementManagementScheduleImpl>("schedule", (!this.schedule || this.schedule instanceof EntitlementManagementScheduleImpl? this.schedule : new EntitlementManagementScheduleImpl(this.schedule)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
