import {createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue} from './createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue';
import {AuthenticationMethodFeatureConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorFeatureSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Determines whether the user's Authenticator app will show them the client app they are signing into. */
    private _displayAppInformationRequiredState?: AuthenticationMethodFeatureConfiguration | undefined;
    /** Determines whether the user's Authenticator app will show them the geographic location of where the authentication request originated from. */
    private _displayLocationInformationRequiredState?: AuthenticationMethodFeatureConfiguration | undefined;
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
     * Instantiates a new microsoftAuthenticatorFeatureSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.microsoftAuthenticatorFeatureSettings";
    };
    /**
     * Gets the displayAppInformationRequiredState property value. Determines whether the user's Authenticator app will show them the client app they are signing into.
     * @returns a authenticationMethodFeatureConfiguration
     */
    public get displayAppInformationRequiredState() {
        return this._displayAppInformationRequiredState;
    };
    /**
     * Sets the displayAppInformationRequiredState property value. Determines whether the user's Authenticator app will show them the client app they are signing into.
     * @param value Value to set for the displayAppInformationRequiredState property.
     */
    public set displayAppInformationRequiredState(value: AuthenticationMethodFeatureConfiguration | undefined) {
        this._displayAppInformationRequiredState = value;
    };
    /**
     * Gets the displayLocationInformationRequiredState property value. Determines whether the user's Authenticator app will show them the geographic location of where the authentication request originated from.
     * @returns a authenticationMethodFeatureConfiguration
     */
    public get displayLocationInformationRequiredState() {
        return this._displayLocationInformationRequiredState;
    };
    /**
     * Sets the displayLocationInformationRequiredState property value. Determines whether the user's Authenticator app will show them the geographic location of where the authentication request originated from.
     * @param value Value to set for the displayLocationInformationRequiredState property.
     */
    public set displayLocationInformationRequiredState(value: AuthenticationMethodFeatureConfiguration | undefined) {
        this._displayLocationInformationRequiredState = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayAppInformationRequiredState": n => { this.displayAppInformationRequiredState = n.getObjectValue<AuthenticationMethodFeatureConfiguration>(createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue); },
            "displayLocationInformationRequiredState": n => { this.displayLocationInformationRequiredState = n.getObjectValue<AuthenticationMethodFeatureConfiguration>(createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue); },
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
        writer.writeObjectValue<AuthenticationMethodFeatureConfiguration>("displayAppInformationRequiredState", this.displayAppInformationRequiredState);
        writer.writeObjectValue<AuthenticationMethodFeatureConfiguration>("displayLocationInformationRequiredState", this.displayLocationInformationRequiredState);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
