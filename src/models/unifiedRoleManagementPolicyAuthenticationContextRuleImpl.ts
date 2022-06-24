import {UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyAuthenticationContextRule} from './unifiedRoleManagementPolicyAuthenticationContextRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyAuthenticationContextRuleImpl extends UnifiedRoleManagementPolicyRuleImpl implements UnifiedRoleManagementPolicyAuthenticationContextRule {
    /** The value of the authentication context claim. */
    public claimValue?: string | undefined;
    /** Whether this rule is enabled. */
    public isEnabled?: boolean | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyAuthenticationContextRule and sets the default values.
     * @param unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue?: UnifiedRoleManagementPolicyAuthenticationContextRule | undefined) {
        super(unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue);
        this.claimValue = unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue?.claimValue;
        this.isEnabled = unifiedRoleManagementPolicyAuthenticationContextRuleParameterValue?.isEnabled;
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
