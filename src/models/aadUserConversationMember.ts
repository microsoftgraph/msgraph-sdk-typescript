import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {ConversationMember, User} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AadUserConversationMember extends ConversationMember implements Parsable {
    /** The email address of the user. */
    private _email?: string | undefined;
    /** TenantId which the Azure AD user belongs to. */
    private _tenantId?: string | undefined;
    private _user?: User | undefined;
    /** The guid of the user. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new AadUserConversationMember and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.aadUserConversationMember";
    };
    /**
     * Gets the email property value. The email address of the user.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email address of the user.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "email": n => { this.email = n.getStringValue(); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeObjectValue<User>("user", this.user);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the tenantId property value. TenantId which the Azure AD user belongs to.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. TenantId which the Azure AD user belongs to.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the user property value. 
     * @returns a user
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. 
     * @param value Value to set for the user property.
     */
    public set user(value: User | undefined) {
        this._user = value;
    };
    /**
     * Gets the userId property value. The guid of the user.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The guid of the user.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
