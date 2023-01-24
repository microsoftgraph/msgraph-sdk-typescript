import {DriveRecipient} from '../../../../../models/';
import {createDriveRecipientFromDiscriminatorValue} from '../../../../../models/createDriveRecipientFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The expirationDateTime property */
    private _expirationDateTime?: string | undefined;
    /** The message property */
    private _message?: string | undefined;
    /** The password property */
    private _password?: string | undefined;
    /** The recipients property */
    private _recipients?: DriveRecipient[] | undefined;
    /** The requireSignIn property */
    private _requireSignIn?: boolean | undefined;
    /** The retainInheritedPermissions property */
    private _retainInheritedPermissions?: boolean | undefined;
    /** The roles property */
    private _roles?: string[] | undefined;
    /** The sendInvitation property */
    private _sendInvitation?: boolean | undefined;
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
     * Instantiates a new invitePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expirationDateTime property value. The expirationDateTime property
     * @returns a string
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expirationDateTime property
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: string | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expirationDateTime": n => { this.expirationDateTime = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "password": n => { this.password = n.getStringValue(); },
            "recipients": n => { this.recipients = n.getCollectionOfObjectValues<DriveRecipient>(createDriveRecipientFromDiscriminatorValue); },
            "requireSignIn": n => { this.requireSignIn = n.getBooleanValue(); },
            "retainInheritedPermissions": n => { this.retainInheritedPermissions = n.getBooleanValue(); },
            "roles": n => { this.roles = n.getCollectionOfPrimitiveValues<string>(); },
            "sendInvitation": n => { this.sendInvitation = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the message property value. The message property
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Gets the password property value. The password property
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. The password property
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Gets the recipients property value. The recipients property
     * @returns a driveRecipient
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Sets the recipients property value. The recipients property
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: DriveRecipient[] | undefined) {
        this._recipients = value;
    };
    /**
     * Gets the requireSignIn property value. The requireSignIn property
     * @returns a boolean
     */
    public get requireSignIn() {
        return this._requireSignIn;
    };
    /**
     * Sets the requireSignIn property value. The requireSignIn property
     * @param value Value to set for the requireSignIn property.
     */
    public set requireSignIn(value: boolean | undefined) {
        this._requireSignIn = value;
    };
    /**
     * Gets the retainInheritedPermissions property value. The retainInheritedPermissions property
     * @returns a boolean
     */
    public get retainInheritedPermissions() {
        return this._retainInheritedPermissions;
    };
    /**
     * Sets the retainInheritedPermissions property value. The retainInheritedPermissions property
     * @param value Value to set for the retainInheritedPermissions property.
     */
    public set retainInheritedPermissions(value: boolean | undefined) {
        this._retainInheritedPermissions = value;
    };
    /**
     * Gets the roles property value. The roles property
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Sets the roles property value. The roles property
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        this._roles = value;
    };
    /**
     * Gets the sendInvitation property value. The sendInvitation property
     * @returns a boolean
     */
    public get sendInvitation() {
        return this._sendInvitation;
    };
    /**
     * Sets the sendInvitation property value. The sendInvitation property
     * @param value Value to set for the sendInvitation property.
     */
    public set sendInvitation(value: boolean | undefined) {
        this._sendInvitation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("password", this.password);
        writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", this.recipients);
        writer.writeBooleanValue("requireSignIn", this.requireSignIn);
        writer.writeBooleanValue("retainInheritedPermissions", this.retainInheritedPermissions);
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        writer.writeBooleanValue("sendInvitation", this.sendInvitation);
        writer.writeAdditionalData(this.additionalData);
    };
}
