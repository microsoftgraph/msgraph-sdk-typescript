import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationalUrl implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** CDN URL to the application's logo, Read-only. */
    private _logoUrl?: string | undefined;
    /** Link to the application's marketing page. For example, https://www.contoso.com/app/marketing */
    private _marketingUrl?: string | undefined;
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new informationalUrl and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "logoUrl": n => { this.logoUrl = n.getStringValue(); },
            "marketingUrl": n => { this.marketingUrl = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        this._logoUrl = value;
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
        this._marketingUrl = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
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
        this._privacyStatementUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("logoUrl", this.logoUrl);
        writer.writeStringValue("marketingUrl", this.marketingUrl);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("privacyStatementUrl", this.privacyStatementUrl);
        writer.writeStringValue("supportUrl", this.supportUrl);
        writer.writeStringValue("termsOfServiceUrl", this.termsOfServiceUrl);
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
        this._supportUrl = value;
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
        this._termsOfServiceUrl = value;
    };
}
