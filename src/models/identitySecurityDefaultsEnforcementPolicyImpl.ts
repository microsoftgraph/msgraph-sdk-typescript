import {IdentitySecurityDefaultsEnforcementPolicy} from './identitySecurityDefaultsEnforcementPolicy';
import {PolicyBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentitySecurityDefaultsEnforcementPolicyImpl extends PolicyBaseImpl implements IdentitySecurityDefaultsEnforcementPolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If set to true, Azure Active Directory security defaults is enabled for the tenant. */
    public isEnabled?: boolean | undefined;
    /**
     * Instantiates a new IdentitySecurityDefaultsEnforcementPolicy and sets the default values.
     * @param identitySecurityDefaultsEnforcementPolicyParameterValue 
     */
    public constructor(identitySecurityDefaultsEnforcementPolicyParameterValue?: IdentitySecurityDefaultsEnforcementPolicy | undefined) {
        super(identitySecurityDefaultsEnforcementPolicyParameterValue);
        this.additionalData = identitySecurityDefaultsEnforcementPolicyParameterValue?.additionalData ? identitySecurityDefaultsEnforcementPolicyParameterValue?.additionalData! : {};
        this.isEnabled = identitySecurityDefaultsEnforcementPolicyParameterValue?.isEnabled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.isEnabled){
            writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
