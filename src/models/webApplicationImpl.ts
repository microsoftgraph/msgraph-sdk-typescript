import {createImplicitGrantSettingsFromDiscriminatorValue} from './createImplicitGrantSettingsFromDiscriminatorValue';
import {ImplicitGrantSettings} from './implicitGrantSettings';
import {ImplicitGrantSettingsImpl} from './index';
import {WebApplication} from './webApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebApplicationImpl implements AdditionalDataHolder, Parsable, WebApplication {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Home page or landing page of the application. */
    public homePageUrl?: string | undefined;
    /** Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow. */
    public implicitGrantSettings?: ImplicitGrantSettings | undefined;
    /** Specifies the URL that will be used by Microsoft's authorization service to logout an user using front-channel, back-channel or SAML logout protocols. */
    public logoutUrl?: string | undefined;
    /** Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. */
    public redirectUris?: string[] | undefined;
    /**
     * Instantiates a new webApplication and sets the default values.
     * @param webApplicationParameterValue 
     */
    public constructor(webApplicationParameterValue?: WebApplication | undefined) {
        this.additionalData = webApplicationParameterValue?.additionalData ? webApplicationParameterValue?.additionalData! : {}
        this.homePageUrl = webApplicationParameterValue?.homePageUrl ;
        this.implicitGrantSettings = webApplicationParameterValue?.implicitGrantSettings ;
        this.logoutUrl = webApplicationParameterValue?.logoutUrl ;
        this.redirectUris = webApplicationParameterValue?.redirectUris ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.homePageUrl){
        writer.writeStringValue("homePageUrl", this.homePageUrl);
        }
        if(this.implicitGrantSettings){
        writer.writeObjectValue<ImplicitGrantSettingsImpl>("implicitGrantSettings", new ImplicitGrantSettingsImpl(this.implicitGrantSettings));
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
