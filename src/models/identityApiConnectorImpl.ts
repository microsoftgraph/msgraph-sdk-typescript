import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {createApiAuthenticationConfigurationBaseFromDiscriminatorValue} from './createApiAuthenticationConfigurationBaseFromDiscriminatorValue';
import {IdentityApiConnector} from './identityApiConnector';
import {ApiAuthenticationConfigurationBaseImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class IdentityApiConnectorImpl extends EntityImpl implements IdentityApiConnector, Parsable {
    /** The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported. */
    public authenticationConfiguration?: ApiAuthenticationConfigurationBase | undefined;
    /** The name of the API connector. */
    public displayName?: string | undefined;
    /** The URL of the API endpoint to call. */
    public targetUrl?: string | undefined;
    /**
     * Instantiates a new identityApiConnector and sets the default values.
     * @param identityApiConnectorParameterValue 
     */
    public constructor(identityApiConnectorParameterValue?: IdentityApiConnector | undefined) {
        super();
        this.authenticationConfiguration = identityApiConnectorParameterValue?.authenticationConfiguration ;
        this.displayName = identityApiConnectorParameterValue?.displayName ;
        this.targetUrl = identityApiConnectorParameterValue?.targetUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationConfiguration": n => { this.authenticationConfiguration = n.getObjectValue<ApiAuthenticationConfigurationBaseImpl>(createApiAuthenticationConfigurationBaseFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "targetUrl": n => { this.targetUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.authenticationConfiguration){
        writer.writeObjectValue<ApiAuthenticationConfigurationBaseImpl>("authenticationConfiguration", new ApiAuthenticationConfigurationBaseImpl(this.authenticationConfiguration));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.targetUrl){
        writer.writeStringValue("targetUrl", this.targetUrl);
        }
    };
}
