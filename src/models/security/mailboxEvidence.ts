import {createUserAccountFromDiscriminatorValue} from './createUserAccountFromDiscriminatorValue';
import {AlertEvidence, UserAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailboxEvidence extends AlertEvidence implements Parsable {
    /** The name associated with the mailbox. */
    private _displayName?: string | undefined;
    /** The primary email address of the mailbox. */
    private _primaryAddress?: string | undefined;
    /** The user account of the mailbox. */
    private _userAccount?: UserAccount | undefined;
    /**
     * Instantiates a new MailboxEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name associated with the mailbox.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name associated with the mailbox.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "primaryAddress": n => { this.primaryAddress = n.getStringValue(); },
            "userAccount": n => { this.userAccount = n.getObjectValue<UserAccount>(createUserAccountFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the primaryAddress property value. The primary email address of the mailbox.
     * @returns a string
     */
    public get primaryAddress() {
        return this._primaryAddress;
    };
    /**
     * Sets the primaryAddress property value. The primary email address of the mailbox.
     * @param value Value to set for the primaryAddress property.
     */
    public set primaryAddress(value: string | undefined) {
        this._primaryAddress = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("primaryAddress", this.primaryAddress);
        writer.writeObjectValue<UserAccount>("userAccount", this.userAccount);
    };
    /**
     * Gets the userAccount property value. The user account of the mailbox.
     * @returns a userAccount
     */
    public get userAccount() {
        return this._userAccount;
    };
    /**
     * Sets the userAccount property value. The user account of the mailbox.
     * @param value Value to set for the userAccount property.
     */
    public set userAccount(value: UserAccount | undefined) {
        this._userAccount = value;
    };
}
