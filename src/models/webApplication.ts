import {createImplicitGrantSettingsFromDiscriminatorValue} from './createImplicitGrantSettingsFromDiscriminatorValue';
import {createRedirectUriSettingsFromDiscriminatorValue} from './createRedirectUriSettingsFromDiscriminatorValue';
import {ImplicitGrantSettings, RedirectUriSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebApplication implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Home page or landing page of the application. */
    private _homePageUrl?: string | undefined;
    /** Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow. */
    private _implicitGrantSettings?: ImplicitGrantSettings | undefined;
    /** Specifies the URL that will be used by Microsoft's authorization service to logout an user using front-channel, back-channel or SAML logout protocols. */
    private _logoutUrl?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. */
    private _redirectUris?: string[] | undefined;
    /** The redirectUriSettings property */
    private _redirectUriSettings?: RedirectUriSettings[] | undefined;
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
     * Instantiates a new webApplication and sets the default values.
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
            "homePageUrl": n => { this.homePageUrl = n.getStringValue(); },
            "implicitGrantSettings": n => { this.implicitGrantSettings = n.getObjectValue<ImplicitGrantSettings>(createImplicitGrantSettingsFromDiscriminatorValue); },
            "logoutUrl": n => { this.logoutUrl = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "redirectUris": n => { this.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
            "redirectUriSettings": n => { this.redirectUriSettings = n.getCollectionOfObjectValues<RedirectUriSettings>(createRedirectUriSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the homePageUrl property value. Home page or landing page of the application.
     * @returns a string
     */
    public get homePageUrl() {
        return this._homePageUrl;
    };
    /**
     * Sets the homePageUrl property value. Home page or landing page of the application.
     * @param value Value to set for the homePageUrl property.
     */
    public set homePageUrl(value: string | undefined) {
        this._homePageUrl = value;
    };
    /**
     * Gets the implicitGrantSettings property value. Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow.
     * @returns a implicitGrantSettings
     */
    public get implicitGrantSettings() {
        return this._implicitGrantSettings;
    };
    /**
     * Sets the implicitGrantSettings property value. Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow.
     * @param value Value to set for the implicitGrantSettings property.
     */
    public set implicitGrantSettings(value: ImplicitGrantSettings | undefined) {
        this._implicitGrantSettings = value;
    };
    /**
     * Gets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using front-channel, back-channel or SAML logout protocols.
     * @returns a string
     */
    public get logoutUrl() {
        return this._logoutUrl;
    };
    /**
     * Sets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using front-channel, back-channel or SAML logout protocols.
     * @param value Value to set for the logoutUrl property.
     */
    public set logoutUrl(value: string | undefined) {
        this._logoutUrl = value;
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
     * Gets the redirectUris property value. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.
     * @returns a string
     */
    public get redirectUris() {
        return this._redirectUris;
    };
    /**
     * Sets the redirectUris property value. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.
     * @param value Value to set for the redirectUris property.
     */
    public set redirectUris(value: string[] | undefined) {
        this._redirectUris = value;
    };
    /**
     * Gets the redirectUriSettings property value. The redirectUriSettings property
     * @returns a redirectUriSettings
     */
    public get redirectUriSettings() {
        return this._redirectUriSettings;
    };
    /**
     * Sets the redirectUriSettings property value. The redirectUriSettings property
     * @param value Value to set for the redirectUriSettings property.
     */
    public set redirectUriSettings(value: RedirectUriSettings[] | undefined) {
        this._redirectUriSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("homePageUrl", this.homePageUrl);
        writer.writeObjectValue<ImplicitGrantSettings>("implicitGrantSettings", this.implicitGrantSettings);
        writer.writeStringValue("logoutUrl", this.logoutUrl);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("redirectUris", this.redirectUris);
        writer.writeCollectionOfObjectValues<RedirectUriSettings>("redirectUriSettings", this.redirectUriSettings);
        writer.writeAdditionalData(this.additionalData);
    };
}
