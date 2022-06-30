import {UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyAuthenticationContextRule} from './unifiedRoleManagementPolicyAuthenticationContextRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyAuthenticationContextRuleImpl extends UnifiedRoleManagementPolicyRuleImpl implements UnifiedRoleManagementPolicyAuthenticationContextRule {
    /** The value of the authentication context claim. */
    private _claimValue?: string | undefined;
    /** Whether this rule is enabled. */
    private _isEnabled?: boolean | undefined;
    /**
     * Gets the claimValue property value. The value of the authentication context claim.
     * @returns a string
     */
    public get claimValue() {
        return this._claimValue;
    };
    /**
     * Sets the claimValue property value. The value of the authentication context claim.
     * @param value Value to set for the claimValue property.
     */
    public set claimValue(value: string | undefined) {
        if(value) {
            this._claimValue = value;
        }
    };
    /**
     * Instantiates a new UnifiedRoleManagementPolicyAuthenticationContextRule and sets the default values.
     * @param unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue?: UnifiedRoleManagementPolicyAuthenticationContextRule | undefined) {
        super(unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue);
        this._claimValue = unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue?.claimValue;
        this._isEnabled = unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue?.isEnabled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "claimValue": n => { this.claimValue = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. Whether this rule is enabled.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Whether this rule is enabled.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        if(value) {
            this._isEnabled = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.claimValue){
            writer.writeStringValue("claimValue", this.claimValue);
        }
        if(this.isEnabled){
            writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
    };
}
