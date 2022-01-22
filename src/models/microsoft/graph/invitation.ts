import {Entity} from './entity';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Invitation extends Entity implements Parsable {
    /** The user created as part of the invitation creation. Read-Only  */
    private _invitedUser?: User | undefined;
    /** The display name of the user being invited.  */
    private _invitedUserDisplayName?: string | undefined;
    /** The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (`  */
    private _invitedUserEmailAddress?: string | undefined;
    /** Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.  */
    private _invitedUserMessageInfo?: InvitedUserMessageInfo | undefined;
    /** The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company administrator. The default is false.  */
    private _invitedUserType?: string | undefined;
    /** The URL the user can use to redeem their invitation. Read-only.  */
    private _inviteRedeemUrl?: string | undefined;
    /** The URL user should be redirected to once the invitation is redeemed. Required.  */
    private _inviteRedirectUrl?: string | undefined;
    /** Indicates whether an email should be sent to the user being invited. The default is false.  */
    private _sendInvitationMessage?: boolean | undefined;
    /** The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error  */
    private _status?: string | undefined;
    /**
     * Instantiates a new invitation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the invitedUser property value. The user created as part of the invitation creation. Read-Only
     * @returns a user
     */
    public get invitedUser() {
        return this._invitedUser;
    };
    /**
     * Gets the invitedUserDisplayName property value. The display name of the user being invited.
     * @returns a string
     */
    public get invitedUserDisplayName() {
        return this._invitedUserDisplayName;
    };
    /**
     * Gets the invitedUserEmailAddress property value. The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (`
     * @returns a string
     */
    public get invitedUserEmailAddress() {
        return this._invitedUserEmailAddress;
    };
    /**
     * Gets the invitedUserMessageInfo property value. Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.
     * @returns a invitedUserMessageInfo
     */
    public get invitedUserMessageInfo() {
        return this._invitedUserMessageInfo;
    };
    /**
     * Gets the invitedUserType property value. The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company administrator. The default is false.
     * @returns a string
     */
    public get invitedUserType() {
        return this._invitedUserType;
    };
    /**
     * Gets the inviteRedeemUrl property value. The URL the user can use to redeem their invitation. Read-only.
     * @returns a string
     */
    public get inviteRedeemUrl() {
        return this._inviteRedeemUrl;
    };
    /**
     * Gets the inviteRedirectUrl property value. The URL user should be redirected to once the invitation is redeemed. Required.
     * @returns a string
     */
    public get inviteRedirectUrl() {
        return this._inviteRedirectUrl;
    };
    /**
     * Gets the sendInvitationMessage property value. Indicates whether an email should be sent to the user being invited. The default is false.
     * @returns a boolean
     */
    public get sendInvitationMessage() {
        return this._sendInvitationMessage;
    };
    /**
     * Gets the status property value. The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["invitedUser", (o, n) => { (o as unknown as Invitation).invitedUser = n.getObjectValue<User>(User); }],
            ["invitedUserDisplayName", (o, n) => { (o as unknown as Invitation).invitedUserDisplayName = n.getStringValue(); }],
            ["invitedUserEmailAddress", (o, n) => { (o as unknown as Invitation).invitedUserEmailAddress = n.getStringValue(); }],
            ["invitedUserMessageInfo", (o, n) => { (o as unknown as Invitation).invitedUserMessageInfo = n.getObjectValue<InvitedUserMessageInfo>(InvitedUserMessageInfo); }],
            ["invitedUserType", (o, n) => { (o as unknown as Invitation).invitedUserType = n.getStringValue(); }],
            ["inviteRedeemUrl", (o, n) => { (o as unknown as Invitation).inviteRedeemUrl = n.getStringValue(); }],
            ["inviteRedirectUrl", (o, n) => { (o as unknown as Invitation).inviteRedirectUrl = n.getStringValue(); }],
            ["sendInvitationMessage", (o, n) => { (o as unknown as Invitation).sendInvitationMessage = n.getBooleanValue(); }],
            ["status", (o, n) => { (o as unknown as Invitation).status = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<User>("invitedUser", this.invitedUser);
        writer.writeStringValue("invitedUserDisplayName", this.invitedUserDisplayName);
        writer.writeStringValue("invitedUserEmailAddress", this.invitedUserEmailAddress);
        writer.writeObjectValue<InvitedUserMessageInfo>("invitedUserMessageInfo", this.invitedUserMessageInfo);
        writer.writeStringValue("invitedUserType", this.invitedUserType);
        writer.writeStringValue("inviteRedeemUrl", this.inviteRedeemUrl);
        writer.writeStringValue("inviteRedirectUrl", this.inviteRedirectUrl);
        writer.writeBooleanValue("sendInvitationMessage", this.sendInvitationMessage);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Sets the invitedUser property value. The user created as part of the invitation creation. Read-Only
     * @param value Value to set for the invitedUser property.
     */
    public set invitedUser(value: User | undefined) {
        this._invitedUser = value;
    };
    /**
     * Sets the invitedUserDisplayName property value. The display name of the user being invited.
     * @param value Value to set for the invitedUserDisplayName property.
     */
    public set invitedUserDisplayName(value: string | undefined) {
        this._invitedUserDisplayName = value;
    };
    /**
     * Sets the invitedUserEmailAddress property value. The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (`
     * @param value Value to set for the invitedUserEmailAddress property.
     */
    public set invitedUserEmailAddress(value: string | undefined) {
        this._invitedUserEmailAddress = value;
    };
    /**
     * Sets the invitedUserMessageInfo property value. Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.
     * @param value Value to set for the invitedUserMessageInfo property.
     */
    public set invitedUserMessageInfo(value: InvitedUserMessageInfo | undefined) {
        this._invitedUserMessageInfo = value;
    };
    /**
     * Sets the invitedUserType property value. The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company administrator. The default is false.
     * @param value Value to set for the invitedUserType property.
     */
    public set invitedUserType(value: string | undefined) {
        this._invitedUserType = value;
    };
    /**
     * Sets the inviteRedeemUrl property value. The URL the user can use to redeem their invitation. Read-only.
     * @param value Value to set for the inviteRedeemUrl property.
     */
    public set inviteRedeemUrl(value: string | undefined) {
        this._inviteRedeemUrl = value;
    };
    /**
     * Sets the inviteRedirectUrl property value. The URL user should be redirected to once the invitation is redeemed. Required.
     * @param value Value to set for the inviteRedirectUrl property.
     */
    public set inviteRedirectUrl(value: string | undefined) {
        this._inviteRedirectUrl = value;
    };
    /**
     * Sets the sendInvitationMessage property value. Indicates whether an email should be sent to the user being invited. The default is false.
     * @param value Value to set for the sendInvitationMessage property.
     */
    public set sendInvitationMessage(value: boolean | undefined) {
        this._sendInvitationMessage = value;
    };
    /**
     * Sets the status property value. The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
