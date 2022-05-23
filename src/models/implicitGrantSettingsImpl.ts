import {ImplicitGrantSettings} from './implicitGrantSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImplicitGrantSettingsImpl implements AdditionalDataHolder, ImplicitGrantSettings, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow. */
    public enableAccessTokenIssuance?: boolean | undefined;
    /** Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow. */
    public enableIdTokenIssuance?: boolean | undefined;
    /**
     * Instantiates a new implicitGrantSettings and sets the default values.
     * @param implicitGrantSettingsParameterValue 
     */
    public constructor(implicitGrantSettingsParameterValue?: ImplicitGrantSettings | undefined) {
        this.additionalData = implicitGrantSettingsParameterValue?.additionalData ? implicitGrantSettingsParameterValue?.additionalData! : {}
        this.enableAccessTokenIssuance = implicitGrantSettingsParameterValue?.enableAccessTokenIssuance ;
        this.enableIdTokenIssuance = implicitGrantSettingsParameterValue?.enableIdTokenIssuance ;
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
