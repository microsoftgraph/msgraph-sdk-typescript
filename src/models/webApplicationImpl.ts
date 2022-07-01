import {createImplicitGrantSettingsFromDiscriminatorValue} from './createImplicitGrantSettingsFromDiscriminatorValue';
import {ImplicitGrantSettings} from './implicitGrantSettings';
import {ImplicitGrantSettingsImpl} from './index';
import {WebApplication} from './webApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebApplicationImpl implements WebApplication {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Home page or landing page of the application. */
    private _homePageUrl?: string | undefined;
    /** Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow. */
    private _implicitGrantSettings?: ImplicitGrantSettings | undefined;
    /** Specifies the URL that will be used by Microsoft's authorization service to logout an user using front-channel, back-channel or SAML logout protocols. */
    private _logoutUrl?: string | undefined;
    /** Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. */
    private _redirectUris?: string[] | undefined;
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
     * Instantiates a new webApplication and sets the default values.
     * @param webApplicationParameterValue 
     */
    public constructor(webApplicationParameterValue?: WebApplication | undefined) {
        this._additionalData = webApplicationParameterValue?.additionalData ? webApplicationParameterValue?.additionalData! : {};
        this._homePageUrl = webApplicationParameterValue?.homePageUrl;
        this._implicitGrantSettings = webApplicationParameterValue?.implicitGrantSettings;
        this._logoutUrl = webApplicationParameterValue?.logoutUrl;
        this._redirectUris = webApplicationParameterValue?.redirectUris;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "homePageUrl": n => { this.homePageUrl = n.getStringValue(); },
            "implicitGrantSettings": n => { this.implicitGrantSettings = n.getObjectValue<ImplicitGrantSettingsImpl>(createImplicitGrantSettingsFromDiscriminatorValue); },
            "logoutUrl": n => { this.logoutUrl = n.getStringValue(); },
            "redirectUris": n => { this.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
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
        if(value) {
            this._homePageUrl = value;
        }
    };
    /**
     * Gets the implicitGrantSettings property value. Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow.
     * @returns a ImplicitGrantSettingsInterface
     */
    public get implicitGrantSettings() {
        return this._implicitGrantSettings;
    };
    /**
     * Sets the implicitGrantSettings property value. Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow.
     * @param value Value to set for the implicitGrantSettings property.
     */
    public set implicitGrantSettings(value: ImplicitGrantSettings | undefined) {
        if(value) {
            this._implicitGrantSettings = value instanceof ImplicitGrantSettingsImpl? value as ImplicitGrantSettingsImpl: new ImplicitGrantSettingsImpl(value);
        }
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
        if(value) {
            this._logoutUrl = value;
        }
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
        if(value) {
            this._redirectUris = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.homePageUrl){
            writer.writeStringValue("homePageUrl", this.homePageUrl);
        }
        if(this.implicitGrantSettings){
            writer.writeObjectValue<ImplicitGrantSettingsImpl>("implicitGrantSettings", (this.implicitGrantSettings instanceof ImplicitGrantSettingsImpl? this.implicitGrantSettings as ImplicitGrantSettingsImpl: new ImplicitGrantSettingsImpl(this.implicitGrantSettings)));
        }
        if(this.logoutUrl){
            writer.writeStringValue("logoutUrl", this.logoutUrl);
        }
        if(this.redirectUris){
            writer.writeCollectionOfPrimitiveValues<string>("redirectUris", this.redirectUris);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
