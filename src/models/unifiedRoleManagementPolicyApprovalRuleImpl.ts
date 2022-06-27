import {ApprovalSettings} from './approvalSettings';
import {createApprovalSettingsFromDiscriminatorValue} from './createApprovalSettingsFromDiscriminatorValue';
import {ApprovalSettingsImpl, UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyApprovalRule} from './unifiedRoleManagementPolicyApprovalRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyApprovalRuleImpl extends UnifiedRoleManagementPolicyRuleImpl implements UnifiedRoleManagementPolicyApprovalRule {
    /** The settings for approval of the role assignment. */
    public setting?: ApprovalSettings | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyApprovalRule and sets the default values.
     * @param unifiedRoleManagementPolicyApprovalRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyApprovalRuleParameterValue?: UnifiedRoleManagementPolicyApprovalRule | undefined) {
        super(unifiedRoleManagementPolicyApprovalRuleParameterValue);
        this.setting = unifiedRoleManagementPolicyApprovalRuleParameterValue?.setting instanceof ApprovalSettingsImpl? unifiedRoleManagementPolicyApprovalRuleParameterValue?.setting:new ApprovalSettingsImpl(unifiedRoleManagementPolicyApprovalRuleParameterValue?.setting);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "setting": n => { this.setting = n.getObjectValue<ApprovalSettingsImpl>(createApprovalSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.setting){
            writer.writeObjectValue<ApprovalSettingsImpl>("setting", new ApprovalSettingsImpl(this.setting));
        }
    };
}
