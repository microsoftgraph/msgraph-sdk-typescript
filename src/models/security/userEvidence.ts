import {createUserAccountFromDiscriminatorValue} from './createUserAccountFromDiscriminatorValue';
import {AlertEvidence, UserAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserEvidence extends AlertEvidence implements Parsable {
    /** The user account details. */
    private _userAccount?: UserAccount | undefined;
    /**
     * Instantiates a new UserEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userAccount": n => { this.userAccount = n.getObjectValue<UserAccount>(createUserAccountFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UserAccount>("userAccount", this.userAccount);
    };
    /**
     * Gets the userAccount property value. The user account details.
     * @returns a userAccount
     */
    public get userAccount() {
        return this._userAccount;
    };
    /**
     * Sets the userAccount property value. The user account details.
     * @param value Value to set for the userAccount property.
     */
    public set userAccount(value: UserAccount | undefined) {
        this._userAccount = value;
    };
}
