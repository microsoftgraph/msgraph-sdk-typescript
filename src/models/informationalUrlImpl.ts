import {InformationalUrl} from './informationalUrl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationalUrlImpl implements AdditionalDataHolder, InformationalUrl, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** CDN URL to the application's logo, Read-only. */
    public logoUrl?: string | undefined;
    /** Link to the application's marketing page. For example, https://www.contoso.com/app/marketing */
    public marketingUrl?: string | undefined;
    /** Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy */
    public privacyStatementUrl?: string | undefined;
    /** Link to the application's support page. For example, https://www.contoso.com/app/support */
    public supportUrl?: string | undefined;
    /** Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice */
    public termsOfServiceUrl?: string | undefined;
    /**
     * Instantiates a new informationalUrl and sets the default values.
     * @param informationalUrlParameterValue 
     */
    public constructor(informationalUrlParameterValue?: InformationalUrl | undefined) {
        this.additionalData = informationalUrlParameterValue?.additionalData ? informationalUrlParameterValue?.additionalData! : {}
        this.logoUrl = informationalUrlParameterValue?.logoUrl ;
        this.marketingUrl = informationalUrlParameterValue?.marketingUrl ;
        this.privacyStatementUrl = informationalUrlParameterValue?.privacyStatementUrl ;
        this.supportUrl = informationalUrlParameterValue?.supportUrl ;
        this.termsOfServiceUrl = informationalUrlParameterValue?.termsOfServiceUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "logoUrl": n => { this.logoUrl = n.getStringValue(); },
            "marketingUrl": n => { this.marketingUrl = n.getStringValue(); },
            "privacyStatementUrl": n => { this.privacyStatementUrl = n.getStringValue(); },
            "supportUrl": n => { this.supportUrl = n.getStringValue(); },
            "termsOfServiceUrl": n => { this.termsOfServiceUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.logoUrl){
        writer.writeStringValue("logoUrl", this.logoUrl);
        }
        if(this.marketingUrl){
        writer.writeStringValue("marketingUrl", this.marketingUrl);
        }
        if(this.privacyStatementUrl){
        writer.writeStringValue("privacyStatementUrl", this.privacyStatementUrl);
        }
        if(this.supportUrl){
        writer.writeStringValue("supportUrl", this.supportUrl);
        }
        if(this.termsOfServiceUrl){
        writer.writeStringValue("termsOfServiceUrl", this.termsOfServiceUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
