import {createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue';
import {AuthenticationMethodsRegistrationCampaign} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistrationEnforcement implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Run campaigns to remind users to setup targeted authentication methods. */
    private _authenticationMethodsRegistrationCampaign?: AuthenticationMethodsRegistrationCampaign | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the authenticationMethodsRegistrationCampaign property value. Run campaigns to remind users to setup targeted authentication methods.
     * @returns a authenticationMethodsRegistrationCampaign
     */
    public get authenticationMethodsRegistrationCampaign() {
        return this._authenticationMethodsRegistrationCampaign;
    };
    /**
     * Sets the authenticationMethodsRegistrationCampaign property value. Run campaigns to remind users to setup targeted authentication methods.
     * @param value Value to set for the authenticationMethodsRegistrationCampaign property.
     */
    public set authenticationMethodsRegistrationCampaign(value: AuthenticationMethodsRegistrationCampaign | undefined) {
        this._authenticationMethodsRegistrationCampaign = value;
    };
    /**
     * Instantiates a new registrationEnforcement and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.registrationEnforcement";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "authenticationMethodsRegistrationCampaign": n => { this.authenticationMethodsRegistrationCampaign = n.getObjectValue<AuthenticationMethodsRegistrationCampaign>(createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AuthenticationMethodsRegistrationCampaign>("authenticationMethodsRegistrationCampaign", this.authenticationMethodsRegistrationCampaign);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
