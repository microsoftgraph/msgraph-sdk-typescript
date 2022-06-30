import {ImplicitGrantSettings} from './implicitGrantSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImplicitGrantSettingsImpl implements ImplicitGrantSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow. */
    private _enableAccessTokenIssuance?: boolean | undefined;
    /** Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow. */
    private _enableIdTokenIssuance?: boolean | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new implicitGrantSettings and sets the default values.
     * @param implicitGrantSettingsParameterValue 
     */
    public constructor(implicitGrantSettingsParameterValue?: ImplicitGrantSettings | undefined) {
        this._additionalData = implicitGrantSettingsParameterValue?.additionalData ? implicitGrantSettingsParameterValue?.additionalData! : {};
        this._enableAccessTokenIssuance = implicitGrantSettingsParameterValue?.enableAccessTokenIssuance;
        this._enableIdTokenIssuance = implicitGrantSettingsParameterValue?.enableIdTokenIssuance;
    };
    /**
     * Gets the enableAccessTokenIssuance property value. Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.
     * @returns a boolean
     */
    public get enableAccessTokenIssuance() {
        return this._enableAccessTokenIssuance;
    };
    /**
     * Sets the enableAccessTokenIssuance property value. Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.
     * @param value Value to set for the enableAccessTokenIssuance property.
     */
    public set enableAccessTokenIssuance(value: boolean | undefined) {
        if(value) {
            this._enableAccessTokenIssuance = value;
        }
    };
    /**
     * Gets the enableIdTokenIssuance property value. Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.
     * @returns a boolean
     */
    public get enableIdTokenIssuance() {
        return this._enableIdTokenIssuance;
    };
    /**
     * Sets the enableIdTokenIssuance property value. Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.
     * @param value Value to set for the enableIdTokenIssuance property.
     */
    public set enableIdTokenIssuance(value: boolean | undefined) {
        if(value) {
            this._enableIdTokenIssuance = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enableAccessTokenIssuance": n => { this.enableAccessTokenIssuance = n.getBooleanValue(); },
            "enableIdTokenIssuance": n => { this.enableIdTokenIssuance = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.enableAccessTokenIssuance){
            writer.writeBooleanValue("enableAccessTokenIssuance", this.enableAccessTokenIssuance);
        }
        if(this.enableIdTokenIssuance){
            writer.writeBooleanValue("enableIdTokenIssuance", this.enableIdTokenIssuance);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
