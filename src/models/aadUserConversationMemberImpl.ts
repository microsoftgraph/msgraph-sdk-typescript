import {AadUserConversationMember} from './aadUserConversationMember';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {ConversationMemberImpl, UserImpl} from './index';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AadUserConversationMemberImpl extends ConversationMemberImpl implements AadUserConversationMember {
    /** The email address of the user. */
    private _email?: string | undefined;
    /** TenantId which the Azure AD user belongs to. */
    private _tenantId?: string | undefined;
    /** The user property */
    private _user?: User | undefined;
    /** The GUID of the user. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new AadUserConversationMember and sets the default values.
     * @param aadUserConversationMemberParameterValue 
     */
    public constructor(aadUserConversationMemberParameterValue?: AadUserConversationMember | undefined) {
        super(aadUserConversationMemberParameterValue);
        this._email = aadUserConversationMemberParameterValue?.email;
        this._tenantId = aadUserConversationMemberParameterValue?.tenantId;
        this._user = aadUserConversationMemberParameterValue?.user;
        this._userId = aadUserConversationMemberParameterValue?.userId;
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
        if(value) {
            this._email = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "email": n => { this.email = n.getStringValue(); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<UserImpl>(createUserFromDiscriminatorValue); },
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
        if(this.email){
            writer.writeStringValue("email", this.email);
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
        if(this.user){
            writer.writeObjectValue<UserImpl>("user", (!this.user || this.user instanceof UserImpl? this.user : new UserImpl(this.user)));
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
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
        if(value) {
            this._tenantId = value;
        }
    };
    /**
     * Gets the user property value. The user property
     * @returns a UserInterface
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. The user property
     * @param value Value to set for the user property.
     */
    public set user(value: User | undefined) {
        if(value) {
            this._user = value instanceof UserImpl? value : new UserImpl(value);
        }
    };
    /**
     * Gets the userId property value. The GUID of the user.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The GUID of the user.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
}
