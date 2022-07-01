import {AuthenticationFlowsPolicy} from './authenticationFlowsPolicy';
import {createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue} from './createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue';
import {EntityImpl, SelfServiceSignUpAuthenticationFlowConfigurationImpl} from './index';
import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class AuthenticationFlowsPolicyImpl extends EntityImpl implements AuthenticationFlowsPolicy {
    /** Inherited property. A description of the policy. This property is not a key. Optional. Read-only. */
    private _description?: string | undefined;
    /** Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only. */
    private _displayName?: string | undefined;
    /** Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. This property is not a key. Optional. Read-only. */
    private _selfServiceSignUp?: SelfServiceSignUpAuthenticationFlowConfiguration | undefined;
    /**
     * Instantiates a new authenticationFlowsPolicy and sets the default values.
     * @param authenticationFlowsPolicyParameterValue 
     */
    public constructor(authenticationFlowsPolicyParameterValue?: AuthenticationFlowsPolicy | undefined) {
        super(authenticationFlowsPolicyParameterValue);
        this._description = authenticationFlowsPolicyParameterValue?.description;
        this._displayName = authenticationFlowsPolicyParameterValue?.displayName;
        this._selfServiceSignUp = authenticationFlowsPolicyParameterValue?.selfServiceSignUp;
    };
    /**
     * Gets the description property value. Inherited property. A description of the policy. This property is not a key. Optional. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Inherited property. A description of the policy. This property is not a key. Optional. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the selfServiceSignUp property value. Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. This property is not a key. Optional. Read-only.
     * @returns a SelfServiceSignUpAuthenticationFlowConfigurationInterface
     */
    public get selfServiceSignUp() {
        return this._selfServiceSignUp;
    };
    /**
     * Sets the selfServiceSignUp property value. Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. This property is not a key. Optional. Read-only.
     * @param value Value to set for the selfServiceSignUp property.
     */
    public set selfServiceSignUp(value: SelfServiceSignUpAuthenticationFlowConfiguration | undefined) {
        if(value) {
            this._selfServiceSignUp = value instanceof SelfServiceSignUpAuthenticationFlowConfigurationImpl? value as SelfServiceSignUpAuthenticationFlowConfigurationImpl: new SelfServiceSignUpAuthenticationFlowConfigurationImpl(value);
        }
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
            writer.writeObjectValue<SelfServiceSignUpAuthenticationFlowConfigurationImpl>("selfServiceSignUp", (this.selfServiceSignUp instanceof SelfServiceSignUpAuthenticationFlowConfigurationImpl? this.selfServiceSignUp as SelfServiceSignUpAuthenticationFlowConfigurationImpl: new SelfServiceSignUpAuthenticationFlowConfigurationImpl(this.selfServiceSignUp)));
        }
    };
}
