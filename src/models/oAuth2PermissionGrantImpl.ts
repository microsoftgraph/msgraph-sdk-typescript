import {EntityImpl} from './index';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class OAuth2PermissionGrantImpl extends EntityImpl implements OAuth2PermissionGrant {
    /** The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API. Required. Supports $filter (eq only). */
    private _clientId?: string | undefined;
    /** Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only). */
    private _consentType?: string | undefined;
    /** The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If consentType is AllPrincipals this value is null. Required when consentType is Principal. Supports $filter (eq only). */
    private _principalId?: string | undefined;
    /** The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user. Supports $filter (eq only). */
    private _resourceId?: string | undefined;
    /** A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of the resource service principal. */
    private _scope?: string | undefined;
    /**
     * Gets the clientId property value. The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API. Required. Supports $filter (eq only).
     * @returns a string
     */
    public get clientId() {
        return this._clientId;
    };
    /**
     * Sets the clientId property value. The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API. Required. Supports $filter (eq only).
     * @param value Value to set for the clientId property.
     */
    public set clientId(value: string | undefined) {
        if(value) {
            this._clientId = value;
        }
    };
    /**
     * Gets the consentType property value. Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only).
     * @returns a string
     */
    public get consentType() {
        return this._consentType;
    };
    /**
     * Sets the consentType property value. Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only).
     * @param value Value to set for the consentType property.
     */
    public set consentType(value: string | undefined) {
        if(value) {
            this._consentType = value;
        }
    };
    /**
     * Instantiates a new oAuth2PermissionGrant and sets the default values.
     * @param oAuth2PermissionGrantParameterValue 
     */
    public constructor(oAuth2PermissionGrantParameterValue?: OAuth2PermissionGrant | undefined) {
        super(oAuth2PermissionGrantParameterValue);
        this._clientId = oAuth2PermissionGrantParameterValue?.clientId;
        this._consentType = oAuth2PermissionGrantParameterValue?.consentType;
        this._principalId = oAuth2PermissionGrantParameterValue?.principalId;
        this._resourceId = oAuth2PermissionGrantParameterValue?.resourceId;
        this._scope = oAuth2PermissionGrantParameterValue?.scope;
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
     * Gets the principalId property value. The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If consentType is AllPrincipals this value is null. Required when consentType is Principal. Supports $filter (eq only).
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If consentType is AllPrincipals this value is null. Required when consentType is Principal. Supports $filter (eq only).
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        if(value) {
            this._principalId = value;
        }
    };
    /**
     * Gets the resourceId property value. The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user. Supports $filter (eq only).
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user. Supports $filter (eq only).
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        if(value) {
            this._resourceId = value;
        }
    };
    /**
     * Gets the scope property value. A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of the resource service principal.
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of the resource service principal.
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        if(value) {
            this._scope = value;
        }
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
