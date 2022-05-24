import {EntityImpl} from './index';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class OAuth2PermissionGrantImpl extends EntityImpl implements OAuth2PermissionGrant, Parsable {
    /** The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API. Required. Supports $filter (eq only). */
    public clientId?: string | undefined;
    /** Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only). */
    public consentType?: string | undefined;
    /** The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If consentType is AllPrincipals this value is null. Required when consentType is Principal. */
    public principalId?: string | undefined;
    /** The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user. */
    public resourceId?: string | undefined;
    /** A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of the resource service principal. */
    public scope?: string | undefined;
    /**
     * Instantiates a new oAuth2PermissionGrant and sets the default values.
     * @param oAuth2PermissionGrantParameterValue 
     */
    public constructor(oAuth2PermissionGrantParameterValue?: OAuth2PermissionGrant | undefined) {
        super();
        this.clientId = oAuth2PermissionGrantParameterValue?.clientId ;
        this.consentType = oAuth2PermissionGrantParameterValue?.consentType ;
        this.principalId = oAuth2PermissionGrantParameterValue?.principalId ;
        this.resourceId = oAuth2PermissionGrantParameterValue?.resourceId ;
        this.scope = oAuth2PermissionGrantParameterValue?.scope ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clientId": n => { this.clientId = n.getStringValue(); },
            "consentType": n => { this.consentType = n.getStringValue(); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "scope": n => { this.scope = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.clientId){
        writer.writeStringValue("clientId", this.clientId);
        }
        if(this.consentType){
        writer.writeStringValue("consentType", this.consentType);
        }
        if(this.principalId){
        writer.writeStringValue("principalId", this.principalId);
        }
        if(this.resourceId){
        writer.writeStringValue("resourceId", this.resourceId);
        }
        if(this.scope){
        writer.writeStringValue("scope", this.scope);
        }
    };
}
