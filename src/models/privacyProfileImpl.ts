import {PrivacyProfile} from './privacyProfile';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrivacyProfileImpl implements AdditionalDataHolder, Parsable, PrivacyProfile {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A valid smtp email address for the privacy statement contact. Not required. */
    public contactEmail?: string | undefined;
    /** A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required. */
    public statementUrl?: string | undefined;
    /**
     * Instantiates a new privacyProfile and sets the default values.
     * @param privacyProfileParameterValue 
     */
    public constructor(privacyProfileParameterValue?: PrivacyProfile | undefined) {
        this.additionalData = privacyProfileParameterValue?.additionalData ? privacyProfileParameterValue?.additionalData! : {}
        this.contactEmail = privacyProfileParameterValue?.contactEmail ;
        this.statementUrl = privacyProfileParameterValue?.statementUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contactEmail": n => { this.contactEmail = n.getStringValue(); },
            "statementUrl": n => { this.statementUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contactEmail){
        writer.writeStringValue("contactEmail", this.contactEmail);
        }
        if(this.statementUrl){
        writer.writeStringValue("statementUrl", this.statementUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
