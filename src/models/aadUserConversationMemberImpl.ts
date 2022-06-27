import {AadUserConversationMember} from './aadUserConversationMember';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {ConversationMemberImpl, UserImpl} from './index';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AadUserConversationMemberImpl extends ConversationMemberImpl implements AadUserConversationMember {
    /** The email address of the user. */
    public email?: string | undefined;
    /** TenantId which the Azure AD user belongs to. */
    public tenantId?: string | undefined;
    /** The user property */
    public user?: User | undefined;
    /** The GUID of the user. */
    public userId?: string | undefined;
    /**
     * Instantiates a new AadUserConversationMember and sets the default values.
     * @param aadUserConversationMemberParameterValue 
     */
    public constructor(aadUserConversationMemberParameterValue?: AadUserConversationMember | undefined) {
        super(aadUserConversationMemberParameterValue);
        this.email = aadUserConversationMemberParameterValue?.email;
        this.tenantId = aadUserConversationMemberParameterValue?.tenantId;
        this.user = aadUserConversationMemberParameterValue?.user instanceof UserImpl? aadUserConversationMemberParameterValue?.user:new UserImpl(aadUserConversationMemberParameterValue?.user);
        this.userId = aadUserConversationMemberParameterValue?.userId;
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
            writer.writeObjectValue<UserImpl>("user", new UserImpl(this.user));
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
    };
}
