import {InformationalUrl} from './informationalUrl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationalUrlImpl implements InformationalUrl {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** CDN URL to the application's logo, Read-only. */
    private _logoUrl?: string | undefined;
    /** Link to the application's marketing page. For example, https://www.contoso.com/app/marketing */
    private _marketingUrl?: string | undefined;
    /** Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy */
    private _privacyStatementUrl?: string | undefined;
    /** Link to the application's support page. For example, https://www.contoso.com/app/support */
    private _supportUrl?: string | undefined;
    /** Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice */
    private _termsOfServiceUrl?: string | undefined;
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
     * Instantiates a new informationalUrl and sets the default values.
     * @param informationalUrlParameterValue 
     */
    public constructor(informationalUrlParameterValue?: InformationalUrl | undefined) {
        this._additionalData = informationalUrlParameterValue?.additionalData ? informationalUrlParameterValue?.additionalData! : {};
        this._logoUrl = informationalUrlParameterValue?.logoUrl;
        this._marketingUrl = informationalUrlParameterValue?.marketingUrl;
        this._privacyStatementUrl = informationalUrlParameterValue?.privacyStatementUrl;
        this._supportUrl = informationalUrlParameterValue?.supportUrl;
        this._termsOfServiceUrl = informationalUrlParameterValue?.termsOfServiceUrl;
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
     * Gets the logoUrl property value. CDN URL to the application's logo, Read-only.
     * @returns a string
     */
    public get logoUrl() {
        return this._logoUrl;
    };
    /**
     * Sets the logoUrl property value. CDN URL to the application's logo, Read-only.
     * @param value Value to set for the logoUrl property.
     */
    public set logoUrl(value: string | undefined) {
        if(value) {
            this._logoUrl = value;
        }
    };
    /**
     * Gets the marketingUrl property value. Link to the application's marketing page. For example, https://www.contoso.com/app/marketing
     * @returns a string
     */
    public get marketingUrl() {
        return this._marketingUrl;
    };
    /**
     * Sets the marketingUrl property value. Link to the application's marketing page. For example, https://www.contoso.com/app/marketing
     * @param value Value to set for the marketingUrl property.
     */
    public set marketingUrl(value: string | undefined) {
        if(value) {
            this._marketingUrl = value;
        }
    };
    /**
     * Gets the privacyStatementUrl property value. Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy
     * @returns a string
     */
    public get privacyStatementUrl() {
        return this._privacyStatementUrl;
    };
    /**
     * Sets the privacyStatementUrl property value. Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy
     * @param value Value to set for the privacyStatementUrl property.
     */
    public set privacyStatementUrl(value: string | undefined) {
        if(value) {
            this._privacyStatementUrl = value;
        }
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
    /**
     * Gets the supportUrl property value. Link to the application's support page. For example, https://www.contoso.com/app/support
     * @returns a string
     */
    public get supportUrl() {
        return this._supportUrl;
    };
    /**
     * Sets the supportUrl property value. Link to the application's support page. For example, https://www.contoso.com/app/support
     * @param value Value to set for the supportUrl property.
     */
    public set supportUrl(value: string | undefined) {
        if(value) {
            this._supportUrl = value;
        }
    };
    /**
     * Gets the termsOfServiceUrl property value. Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice
     * @returns a string
     */
    public get termsOfServiceUrl() {
        return this._termsOfServiceUrl;
    };
    /**
     * Sets the termsOfServiceUrl property value. Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice
     * @param value Value to set for the termsOfServiceUrl property.
     */
    public set termsOfServiceUrl(value: string | undefined) {
        if(value) {
            this._termsOfServiceUrl = value;
        }
    };
}
