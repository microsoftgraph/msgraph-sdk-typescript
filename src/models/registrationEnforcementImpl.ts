import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue';
import {AuthenticationMethodsRegistrationCampaignImpl} from './index';
import {RegistrationEnforcement} from './registrationEnforcement';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistrationEnforcementImpl implements AdditionalDataHolder, Parsable, RegistrationEnforcement {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Run campaigns to remind users to setup targeted authentication methods. */
    public authenticationMethodsRegistrationCampaign?: AuthenticationMethodsRegistrationCampaign | undefined;
    /**
     * Instantiates a new registrationEnforcement and sets the default values.
     * @param registrationEnforcementParameterValue 
     */
    public constructor(registrationEnforcementParameterValue?: RegistrationEnforcement | undefined) {
        this.additionalData = registrationEnforcementParameterValue?.additionalData ? registrationEnforcementParameterValue?.additionalData! : {}
        this.authenticationMethodsRegistrationCampaign = registrationEnforcementParameterValue?.authenticationMethodsRegistrationCampaign ;
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
        writer.writeObjectValue<AuthenticationMethodsRegistrationCampaignImpl>("authenticationMethodsRegistrationCampaign", new AuthenticationMethodsRegistrationCampaignImpl(this.authenticationMethodsRegistrationCampaign));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
