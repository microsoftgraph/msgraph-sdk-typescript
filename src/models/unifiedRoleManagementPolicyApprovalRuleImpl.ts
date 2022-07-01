import {ApprovalSettings} from './approvalSettings';
import {createApprovalSettingsFromDiscriminatorValue} from './createApprovalSettingsFromDiscriminatorValue';
import {ApprovalSettingsImpl, UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyApprovalRule} from './unifiedRoleManagementPolicyApprovalRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyApprovalRuleImpl extends UnifiedRoleManagementPolicyRuleImpl implements UnifiedRoleManagementPolicyApprovalRule {
    /** The settings for approval of the role assignment. */
    private _setting?: ApprovalSettings | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyApprovalRule and sets the default values.
     * @param unifiedRoleManagementPolicyApprovalRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyApprovalRuleParameterValue?: UnifiedRoleManagementPolicyApprovalRule | undefined) {
        super(unifiedRoleManagementPolicyApprovalRuleParameterValue);
        this._setting = unifiedRoleManagementPolicyApprovalRuleParameterValue?.setting;
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
            writer.writeObjectValue<ApprovalSettingsImpl>("setting", (this.setting instanceof ApprovalSettingsImpl? this.setting as ApprovalSettingsImpl: new ApprovalSettingsImpl(this.setting)));
        }
    };
    /**
     * Gets the setting property value. The settings for approval of the role assignment.
     * @returns a ApprovalSettingsInterface
     */
    public get setting() {
        return this._setting;
    };
    /**
     * Sets the setting property value. The settings for approval of the role assignment.
     * @param value Value to set for the setting property.
     */
    public set setting(value: ApprovalSettings | undefined) {
        if(value) {
            this._setting = value instanceof ApprovalSettingsImpl? value as ApprovalSettingsImpl: new ApprovalSettingsImpl(value);
        }
    };
}
