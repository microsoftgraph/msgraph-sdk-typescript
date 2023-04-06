import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAccount implements AdditionalDataHolder, Parsable {
    /** The user account's displayed name. */
    private _accountName?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The user object identifier in Azure AD. */
    private _azureAdUserId?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The name of the Active Directory domain of which the user is a member. */
    private _domainName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The user principal name of the account in Azure AD. */
    private _userPrincipalName?: string | undefined;
    /** The local security identifier of the user account. */
    private _userSid?: string | undefined;
    /**
     * Gets the accountName property value. The user account's displayed name.
     * @returns a string
     */
    public get accountName() {
        return this._accountName;
    };
    /**
     * Sets the accountName property value. The user account's displayed name.
     * @param value Value to set for the accountName property.
     */
    public set accountName(value: string | undefined) {
        this._accountName = value;
    };
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
     * Gets the azureAdUserId property value. The user object identifier in Azure AD.
     * @returns a string
     */
    public get azureAdUserId() {
        return this._azureAdUserId;
    };
    /**
     * Sets the azureAdUserId property value. The user object identifier in Azure AD.
     * @param value Value to set for the azureAdUserId property.
     */
    public set azureAdUserId(value: string | undefined) {
        this._azureAdUserId = value;
    };
    /**
     * Instantiates a new userAccount and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the domainName property value. The name of the Active Directory domain of which the user is a member.
     * @returns a string
     */
    public get domainName() {
        return this._domainName;
    };
    /**
     * Sets the domainName property value. The name of the Active Directory domain of which the user is a member.
     * @param value Value to set for the domainName property.
     */
    public set domainName(value: string | undefined) {
        this._domainName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accountName": n => { this.accountName = n.getStringValue(); },
            "azureAdUserId": n => { this.azureAdUserId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "domainName": n => { this.domainName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "userSid": n => { this.userSid = n.getStringValue(); },
        };
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("accountName", this.accountName);
        writer.writeStringValue("azureAdUserId", this.azureAdUserId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("domainName", this.domainName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeStringValue("userSid", this.userSid);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userPrincipalName property value. The user principal name of the account in Azure AD.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name of the account in Azure AD.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
    /**
     * Gets the userSid property value. The local security identifier of the user account.
     * @returns a string
     */
    public get userSid() {
        return this._userSid;
    };
    /**
     * Sets the userSid property value. The local security identifier of the user account.
     * @param value Value to set for the userSid property.
     */
    public set userSid(value: string | undefined) {
        this._userSid = value;
    };
}
