import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue';
import {AuthenticationMethodsRegistrationCampaignImpl} from './index';
import {RegistrationEnforcement} from './registrationEnforcement';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistrationEnforcementImpl implements RegistrationEnforcement {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Run campaigns to remind users to setup targeted authentication methods. */
    private _authenticationMethodsRegistrationCampaign?: AuthenticationMethodsRegistrationCampaign | undefined;
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
     * Gets the authenticationMethodsRegistrationCampaign property value. Run campaigns to remind users to setup targeted authentication methods.
     * @returns a AuthenticationMethodsRegistrationCampaignInterface
     */
    public get authenticationMethodsRegistrationCampaign() {
        return this._authenticationMethodsRegistrationCampaign;
    };
    /**
     * Sets the authenticationMethodsRegistrationCampaign property value. Run campaigns to remind users to setup targeted authentication methods.
     * @param value Value to set for the authenticationMethodsRegistrationCampaign property.
     */
    public set authenticationMethodsRegistrationCampaign(value: AuthenticationMethodsRegistrationCampaign | undefined) {
        if(value) {
            this._authenticationMethodsRegistrationCampaign = value instanceof AuthenticationMethodsRegistrationCampaignImpl? value as AuthenticationMethodsRegistrationCampaignImpl: new AuthenticationMethodsRegistrationCampaignImpl(value);
        }
    };
    /**
     * Instantiates a new registrationEnforcement and sets the default values.
     * @param registrationEnforcementParameterValue 
     */
    public constructor(registrationEnforcementParameterValue?: RegistrationEnforcement | undefined) {
        this._additionalData = registrationEnforcementParameterValue?.additionalData ? registrationEnforcementParameterValue?.additionalData! : {};
        this._authenticationMethodsRegistrationCampaign = registrationEnforcementParameterValue?.authenticationMethodsRegistrationCampaign;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "authenticationMethodsRegistrationCampaign": n => { this.authenticationMethodsRegistrationCampaign = n.getObjectValue<AuthenticationMethodsRegistrationCampaignImpl>(createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.authenticationMethodsRegistrationCampaign){
            writer.writeObjectValue<AuthenticationMethodsRegistrationCampaignImpl>("authenticationMethodsRegistrationCampaign", (this.authenticationMethodsRegistrationCampaign instanceof AuthenticationMethodsRegistrationCampaignImpl? this.authenticationMethodsRegistrationCampaign as AuthenticationMethodsRegistrationCampaignImpl: new AuthenticationMethodsRegistrationCampaignImpl(this.authenticationMethodsRegistrationCampaign)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
