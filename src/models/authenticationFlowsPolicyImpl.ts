import {AuthenticationFlowsPolicy} from './authenticationFlowsPolicy';
import {createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue} from './createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue';
import {EntityImpl, SelfServiceSignUpAuthenticationFlowConfigurationImpl} from './index';
import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class AuthenticationFlowsPolicyImpl extends EntityImpl implements AuthenticationFlowsPolicy, Parsable {
    /** Inherited property. A description of the policy. This property is not a key. Optional. Read-only. */
    public description?: string | undefined;
    /** Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only. */
    public displayName?: string | undefined;
    /** Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. This property is not a key. Optional. Read-only. */
    public selfServiceSignUp?: SelfServiceSignUpAuthenticationFlowConfiguration | undefined;
    /**
     * Instantiates a new authenticationFlowsPolicy and sets the default values.
     * @param authenticationFlowsPolicyParameterValue 
     */
    public constructor(authenticationFlowsPolicyParameterValue?: AuthenticationFlowsPolicy | undefined) {
        super();
        this.description = authenticationFlowsPolicyParameterValue?.description ;
        this.displayName = authenticationFlowsPolicyParameterValue?.displayName ;
        this.selfServiceSignUp = authenticationFlowsPolicyParameterValue?.selfServiceSignUp ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "selfServiceSignUp": n => { this.selfServiceSignUp = n.getObjectValue<SelfServiceSignUpAuthenticationFlowConfigurationImpl>(createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.selfServiceSignUp){
        writer.writeObjectValue<SelfServiceSignUpAuthenticationFlowConfigurationImpl>("selfServiceSignUp", new SelfServiceSignUpAuthenticationFlowConfigurationImpl(this.selfServiceSignUp));
        }
    };
}
