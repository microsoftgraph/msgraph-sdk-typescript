import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class FederatedIdentityCredential extends Entity implements Parsable {
    /** Lists the audiences that can appear in the external token. This field is mandatory, and defaults to 'api://AzureADTokenExchange'. It says what Microsoft identity platform should accept in the aud claim in the incoming token. This value represents Azure AD in your external identity provider and has no fixed value across identity providers - you may need to create a new application registration in your identity provider to serve as the audience of this token. Required. */
    private _audiences?: string[] | undefined;
    /** The un-validated, user-provided description of the federated identity credential. Optional. */
    private _description?: string | undefined;
    /** The URL of the external identity provider and must match the issuer claim of the external token being exchanged. The combination of the values of issuer and subject must be unique on the app. Required. */
    private _issuer?: string | undefined;
    /** is the unique identifier for the federated identity credential, which has a character limit of 120 characters and must be URL friendly. It is immutable once created. Required. Not nullable. Supports $filter (eq). */
    private _name?: string | undefined;
    /** Required. The identifier of the external software workload within the external identity provider. Like the audience value, it has no fixed format, as each identity provider uses their own - sometimes a GUID, sometimes a colon delimited identifier, sometimes arbitrary strings. The value here must match the sub claim within the token presented to Azure AD. The combination of issuer and subject must be unique on the app. Supports $filter (eq). */
    private _subject?: string | undefined;
    /**
     * Gets the audiences property value. Lists the audiences that can appear in the external token. This field is mandatory, and defaults to 'api://AzureADTokenExchange'. It says what Microsoft identity platform should accept in the aud claim in the incoming token. This value represents Azure AD in your external identity provider and has no fixed value across identity providers - you may need to create a new application registration in your identity provider to serve as the audience of this token. Required.
     * @returns a string
     */
    public get audiences() {
        return this._audiences;
    };
    /**
     * Sets the audiences property value. Lists the audiences that can appear in the external token. This field is mandatory, and defaults to 'api://AzureADTokenExchange'. It says what Microsoft identity platform should accept in the aud claim in the incoming token. This value represents Azure AD in your external identity provider and has no fixed value across identity providers - you may need to create a new application registration in your identity provider to serve as the audience of this token. Required.
     * @param value Value to set for the audiences property.
     */
    public set audiences(value: string[] | undefined) {
        this._audiences = value;
    };
    /**
     * Instantiates a new federatedIdentityCredential and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The un-validated, user-provided description of the federated identity credential. Optional.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The un-validated, user-provided description of the federated identity credential. Optional.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "audiences": n => { this.audiences = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "issuer": n => { this.issuer = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Gets the issuer property value. The URL of the external identity provider and must match the issuer claim of the external token being exchanged. The combination of the values of issuer and subject must be unique on the app. Required.
     * @returns a string
     */
    public get issuer() {
        return this._issuer;
    };
    /**
     * Sets the issuer property value. The URL of the external identity provider and must match the issuer claim of the external token being exchanged. The combination of the values of issuer and subject must be unique on the app. Required.
     * @param value Value to set for the issuer property.
     */
    public set issuer(value: string | undefined) {
        this._issuer = value;
    };
    /**
     * Gets the name property value. is the unique identifier for the federated identity credential, which has a character limit of 120 characters and must be URL friendly. It is immutable once created. Required. Not nullable. Supports $filter (eq).
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. is the unique identifier for the federated identity credential, which has a character limit of 120 characters and must be URL friendly. It is immutable once created. Required. Not nullable. Supports $filter (eq).
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("audiences", this.audiences);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("issuer", this.issuer);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("subject", this.subject);
    };
    /**
     * Gets the subject property value. Required. The identifier of the external software workload within the external identity provider. Like the audience value, it has no fixed format, as each identity provider uses their own - sometimes a GUID, sometimes a colon delimited identifier, sometimes arbitrary strings. The value here must match the sub claim within the token presented to Azure AD. The combination of issuer and subject must be unique on the app. Supports $filter (eq).
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. Required. The identifier of the external software workload within the external identity provider. Like the audience value, it has no fixed format, as each identity provider uses their own - sometimes a GUID, sometimes a colon delimited identifier, sometimes arbitrary strings. The value here must match the sub claim within the token presented to Azure AD. The combination of issuer and subject must be unique on the app. Supports $filter (eq).
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
